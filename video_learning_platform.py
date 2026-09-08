#!/usr/bin/env python3
"""Local English video learning platform with YouTube caption import."""

from __future__ import annotations

import argparse
import html
import json
import mimetypes
import os
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from typing import Any


APP_DIR = Path(__file__).resolve().parent / "english_video_platform"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36"
)
ENGLISH_CAPTION_CODES = ("en", "en-US", "en-GB", "en-orig")
CHINESE_CAPTION_CODES = ("zh-Hant", "zh-TW", "zh-Hans", "zh-CN", "zh")
DEFAULT_CAPTION_EXTENSIONS = ("json3", "vtt", "srt", "srv3", "ttml")
CHINESE_CAPTION_EXTENSIONS = ("srt", "json3", "vtt", "srv3", "ttml")
CAPTION_SCHEMA_VERSION = 2
DEFAULT_GEMINI_TRANSLATION_MODEL = "gemini-3.6-flash"
DEFAULT_GEMINI_TRANSLATION_FALLBACK_MODELS = (
    "gemini-3.7-flash",
    "gemini-3.5-flash",
    "gemini-3.5-flash-lite",
    "gemini-3.1-flash-lite",
)
DEFAULT_OLLAMA_TRANSLATION_MODEL = "qwen3:8b"
DEFAULT_OLLAMA_BASE_URL = "http://127.0.0.1:11434/v1"
DEFAULT_OLLAMA_API_KEY = "ollama"
GEMINI_GENERATE_CONTENT_URL_TEMPLATE = "https://generativelanguage.googleapis.com/v1beta/{model_path}:generateContent"
MAX_TRANSLATION_ITEMS = 420
TRANSLATION_BATCH_SIZE = 60
RETRYABLE_API_STATUS_CODES = {
    HTTPStatus.TOO_MANY_REQUESTS,
    HTTPStatus.BAD_GATEWAY,
    HTTPStatus.SERVICE_UNAVAILABLE,
    HTTPStatus.GATEWAY_TIMEOUT,
}


class VideoPlatformError(RuntimeError):
    """Raised when a YouTube video or caption track cannot be loaded."""


class AITranslationError(RuntimeError):
    """Raised when AI subtitle translation cannot be completed."""


class RetryableAITranslationError(AITranslationError):
    """Raised when a temporary AI provider error may succeed with another model."""


def ensure_http_url(raw_url: str) -> str:
    parsed = urllib.parse.urlparse(raw_url)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise VideoPlatformError("Please enter a full YouTube URL.")
    return urllib.parse.urlunparse(parsed)


def clean_text(value: str) -> str:
    value = html.unescape(value)
    value = re.sub(r"<[^>]+>", " ", value)
    value = re.sub(r"\s+", " ", value)
    return value.strip()


def extract_youtube_info(raw_url: str) -> dict[str, Any]:
    try:
        import yt_dlp
    except ImportError as exc:
        raise VideoPlatformError("yt-dlp is not installed. Run this app with `uv run video-learning-platform`.") from exc

    options = {
        "quiet": True,
        "no_warnings": True,
        "skip_download": True,
        "noplaylist": True,
        "http_headers": {"User-Agent": USER_AGENT},
    }

    try:
        with yt_dlp.YoutubeDL(options) as ydl:
            info = ydl.extract_info(ensure_http_url(raw_url), download=False)
    except Exception as exc:  # yt-dlp exposes several extractor exception types.
        raise VideoPlatformError(f"Could not read that YouTube video: {exc}") from exc

    if not isinstance(info, dict) or not info.get("id"):
        raise VideoPlatformError("Could not read that YouTube video.")
    return info


def youtube_lesson_metadata(info: dict[str, Any]) -> dict[str, Any]:
    try:
        duration = int(float(info.get("duration") or 0))
    except (TypeError, ValueError):
        duration = 0

    return {
        "videoId": str(info["id"]),
        "title": clean_text(str(info.get("title") or f"YouTube lesson {info['id']}")),
        "host": clean_text(str(info.get("channel") or info.get("uploader") or "YouTube")),
        "duration": max(1, duration or 120),
    }


def metadata_only_lesson(info: dict[str, Any], message: str) -> dict[str, Any]:
    return {
        **youtube_lesson_metadata(info),
        "subtitleSource": "No YouTube captions",
        "captionError": message,
        "captionVersion": CAPTION_SCHEMA_VERSION,
        "cues": [],
    }


def load_youtube_lesson(raw_url: str) -> dict[str, Any]:
    info = extract_youtube_info(raw_url)
    subtitles = info.get("subtitles") if isinstance(info.get("subtitles"), dict) else {}
    automatic = info.get("automatic_captions") if isinstance(info.get("automatic_captions"), dict) else {}

    caption_format, caption_source = pick_caption_format(subtitles, ENGLISH_CAPTION_CODES, "YouTube subtitles")
    if not caption_format:
        caption_format, caption_source = pick_caption_format(automatic, ENGLISH_CAPTION_CODES, "YouTube auto captions")
    if not caption_format:
        return metadata_only_lesson(info, "No English captions were found for this video.")

    try:
        english_cues = merge_sentence_cues(normalize_cues(parse_caption_payload(fetch_caption(caption_format), caption_format)))
    except VideoPlatformError as exc:
        return metadata_only_lesson(info, str(exc))

    if not english_cues:
        return metadata_only_lesson(info, "The English caption file did not contain readable timed lines.")

    zh_format, _ = pick_caption_format(
        subtitles,
        CHINESE_CAPTION_CODES,
        "YouTube Chinese subtitles",
        preferred_extensions=CHINESE_CAPTION_EXTENSIONS,
    )
    if not zh_format:
        zh_format, _ = pick_caption_format(
            automatic,
            CHINESE_CAPTION_CODES,
            "YouTube Chinese auto captions",
            preferred_extensions=CHINESE_CAPTION_EXTENSIONS,
        )
    zh_cues = load_chinese_cues(caption_format, zh_format)

    cues = merge_translations(english_cues, zh_cues)

    metadata = youtube_lesson_metadata(info)
    subtitle_source = f"{caption_source} + Chinese translation" if zh_cues else caption_source
    return {
        **metadata,
        "duration": max(metadata["duration"], int(cues[-1]["end"])),
        "subtitleSource": subtitle_source,
        "captionVersion": CAPTION_SCHEMA_VERSION,
        "cues": cues,
    }


def pick_caption_format(
    caption_groups: dict[str, Any],
    language_codes: tuple[str, ...],
    source_label: str,
    preferred_extensions: tuple[str, ...] = DEFAULT_CAPTION_EXTENSIONS,
) -> tuple[dict[str, Any] | None, str]:
    for language_code in language_codes:
        if language_code in caption_groups:
            selected = choose_caption_format(caption_groups[language_code], preferred_extensions)
            if selected:
                return selected, source_label

    lower_targets = tuple(code.lower() for code in language_codes)
    for language_code, formats in caption_groups.items():
        lowered = language_code.lower()
        if lowered.startswith(lower_targets):
            selected = choose_caption_format(formats, preferred_extensions)
            if selected:
                return selected, source_label

    return None, source_label


def choose_caption_format(formats: Any, preferred_extensions: tuple[str, ...]) -> dict[str, Any] | None:
    if not isinstance(formats, list):
        return None

    for extension in preferred_extensions:
        for item in formats:
            if isinstance(item, dict) and item.get("url") and str(item.get("ext", "")).lower() == extension:
                return item

    for item in formats:
        if isinstance(item, dict) and item.get("url"):
            return item
    return None


def load_chinese_cues(
    english_format: dict[str, Any],
    selected_zh_format: dict[str, Any] | None,
) -> list[dict[str, Any]]:
    candidates: list[dict[str, Any]] = []
    if selected_zh_format:
        candidates.append(selected_zh_format)

    for language_code in CHINESE_CAPTION_CODES:
        candidates.append(translated_caption_format(english_format, language_code))

    seen_urls: set[str] = set()
    for caption_format in candidates:
        url = str(caption_format.get("url") or "")
        if not url or url in seen_urls:
            continue
        seen_urls.add(url)

        try:
            cues = merge_sentence_cues(normalize_cues(parse_caption_payload(fetch_caption(caption_format), caption_format)))
        except VideoPlatformError:
            continue

        if cues:
            return cues

    return []


def translated_caption_format(caption_format: dict[str, Any], language_code: str) -> dict[str, Any]:
    url = str(caption_format.get("url") or "")
    parsed = urllib.parse.urlparse(url)
    params = urllib.parse.parse_qsl(parsed.query, keep_blank_values=True)
    filtered = [(key, value) for key, value in params if key.lower() != "tlang"]
    filtered.append(("tlang", language_code))
    translated_url = urllib.parse.urlunparse(parsed._replace(query=urllib.parse.urlencode(filtered)))
    return {
        **caption_format,
        "url": translated_url,
    }


def fetch_caption(caption_format: dict[str, Any]) -> str:
    url = str(caption_format.get("url") or "")
    if not url:
        raise VideoPlatformError("Caption URL is missing.")

    last_error: Exception | None = None
    for attempt in range(3):
        request = urllib.request.Request(
            url,
            headers={
                "User-Agent": USER_AGENT,
                "Accept": "application/json,text/vtt,text/plain,*/*;q=0.8",
            },
        )
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                raw = response.read()
                charset = response.headers.get_content_charset() or "utf-8"
                return raw.decode(charset, errors="replace")
        except urllib.error.HTTPError as exc:
            last_error = exc
            if exc.code == HTTPStatus.TOO_MANY_REQUESTS and attempt < 2:
                time.sleep(0.9 * (attempt + 1))
                continue
            break
        except urllib.error.URLError as exc:
            last_error = exc
            break

    raise VideoPlatformError(f"Could not fetch captions: {last_error}") from last_error



def parse_caption_payload(payload: str, caption_format: dict[str, Any]) -> list[dict[str, Any]]:
    extension = str(caption_format.get("ext") or "").lower()
    if extension == "json3" or payload.lstrip().startswith("{"):
        return parse_json3_captions(payload)
    return parse_vtt_captions(payload)


def parse_json3_captions(payload: str) -> list[dict[str, Any]]:
    try:
        data = json.loads(payload)
    except json.JSONDecodeError:
        return []

    cues: list[dict[str, Any]] = []
    for event in data.get("events", []):
        if not isinstance(event, dict) or not isinstance(event.get("segs"), list):
            continue

        text = clean_text("".join(str(seg.get("utf8", "")) for seg in event["segs"] if isinstance(seg, dict)))
        if not text:
            continue

        start = float(event.get("tStartMs") or 0) / 1000
        duration = float(event.get("dDurationMs") or 0) / 1000
        cues.append(
            {
                "start": start,
                "end": start + max(duration, estimate_caption_duration(text)),
                "text": text,
            }
        )

    return cues


def parse_vtt_captions(payload: str) -> list[dict[str, Any]]:
    cues: list[dict[str, Any]] = []
    lines = payload.replace("\r", "").split("\n")
    index = 0
    time_pattern = re.compile(
        r"(?P<start>(?:\d+:)?\d{2}:\d{2}[.,]\d+)\s+-->\s+"
        r"(?P<end>(?:\d+:)?\d{2}:\d{2}[.,]\d+)"
    )

    while index < len(lines):
        match = time_pattern.search(lines[index])
        if not match:
            index += 1
            continue

        start = parse_timecode(match.group("start"))
        end = parse_timecode(match.group("end"))
        index += 1
        text_lines: list[str] = []
        while index < len(lines) and lines[index].strip():
            text_lines.append(lines[index])
            index += 1

        text = clean_text(" ".join(text_lines))
        if text:
            cues.append({"start": start, "end": max(start + 0.5, end), "text": text})
    return cues


def parse_timecode(value: str) -> float:
    pieces = [float(part) for part in value.replace(",", ".").split(":")]
    if len(pieces) == 3:
        return pieces[0] * 3600 + pieces[1] * 60 + pieces[2]
    return pieces[0] * 60 + pieces[1]


def estimate_caption_duration(value: str) -> float:
    words = re.findall(r"[A-Za-z0-9]+", value)
    return max(1.4, min(7.0, len(words) * 0.48))


def normalize_cues(cues: list[dict[str, Any]]) -> list[dict[str, Any]]:
    normalized: list[dict[str, Any]] = []
    for cue in sorted(cues, key=lambda item: float(item.get("start") or 0)):
        text = clean_text(str(cue.get("text") or cue.get("en") or ""))
        start = float(cue.get("start") or 0)
        end = float(cue.get("end") or 0)
        if not text or end <= start:
            continue
        if normalized and abs(normalized[-1]["start"] - start) < 0.05 and normalized[-1]["text"] == text:
            continue
        normalized.append({"start": round(start, 2), "end": round(end, 2), "text": text})

    for index, cue in enumerate(normalized[:-1]):
        next_start = normalized[index + 1]["start"]
        if cue["end"] > next_start:
            cue["end"] = max(cue["start"] + 0.5, next_start)
    return normalized


def merge_sentence_cues(cues: list[dict[str, Any]]) -> list[dict[str, Any]]:
    units: list[dict[str, Any]] = []
    for cue in cues:
        units.extend(split_cue_at_sentence_boundaries(cue))

    merged: list[dict[str, Any]] = []
    current: dict[str, Any] | None = None

    for cue in units:
        if current and cue["start"] - current["end"] > 1.4:
            merged.append(current)
            current = None

        if current is None:
            current = dict(cue)
        else:
            current["text"] = join_caption_text(current["text"], cue["text"])
            current["end"] = cue["end"]

        if is_sentence_complete(current["text"]) or should_force_caption_break(current):
            merged.append(current)
            current = None

    if current:
        merged.append(current)

    return [
        {
            "start": round(cue["start"], 2),
            "end": round(max(cue["start"] + 0.5, cue["end"]), 2),
            "text": clean_text(cue["text"]),
        }
        for cue in merged
        if clean_text(cue["text"])
    ]


def split_cue_at_sentence_boundaries(cue: dict[str, Any]) -> list[dict[str, Any]]:
    text = clean_text(str(cue.get("text") or ""))
    pieces = split_text_sentences(text)
    if len(pieces) <= 1:
        return [cue]

    start = float(cue["start"])
    end = float(cue["end"])
    duration = max(0.5, end - start)
    total_weight = sum(max(1, len(piece)) for piece in pieces)
    cursor = start
    result: list[dict[str, Any]] = []

    for index, piece in enumerate(pieces):
        if index == len(pieces) - 1:
            piece_end = end
        else:
            piece_end = start + duration * (sum(max(1, len(part)) for part in pieces[: index + 1]) / total_weight)
        result.append({"start": round(cursor, 2), "end": round(max(cursor + 0.35, piece_end), 2), "text": piece})
        cursor = piece_end

    return result


def split_text_sentences(text: str) -> list[str]:
    if not text:
        return []

    pieces: list[str] = []
    start = 0
    for match in re.finditer(r"[.!?。！？]+[\"'”’)\]]*", text):
        end = match.end()
        next_index = end
        while next_index < len(text) and text[next_index].isspace():
            next_index += 1
        if next_index >= len(text) or should_split_before(text[next_index]):
            piece = text[start:end].strip()
            if piece and not is_common_abbreviation(piece):
                pieces.append(piece)
                start = next_index

    tail = text[start:].strip()
    if tail:
        pieces.append(tail)
    return pieces or [text]


def should_split_before(character: str) -> bool:
    return bool(re.match(r"[A-Z0-9\"'“‘(\[]|[\u3400-\u9fff]", character))


def is_common_abbreviation(value: str) -> bool:
    lowered = value.lower().rstrip(".")
    return lowered.endswith(
        (
            "mr",
            "mrs",
            "ms",
            "dr",
            "prof",
            "sr",
            "jr",
            "st",
            "vs",
            "e.g",
            "i.e",
        )
    )


def join_caption_text(left: str, right: str) -> str:
    if not left:
        return clean_text(right)
    if not right:
        return clean_text(left)
    if re.search(r"[\u3400-\u9fff]$", left) or re.match(r"^[\u3400-\u9fff]", right):
        return clean_text(f"{left}{right}")
    return clean_text(f"{left} {right}")


def is_sentence_complete(text: str) -> bool:
    return bool(re.search(r"[.!?。！？][\"'”’)\]]*$", text.strip()))


def should_force_caption_break(cue: dict[str, Any]) -> bool:
    text = str(cue.get("text") or "")
    duration = float(cue.get("end") or 0) - float(cue.get("start") or 0)
    word_count = len(re.findall(r"[A-Za-z0-9]+", text))
    cjk_count = len(re.findall(r"[\u3400-\u9fff]", text))
    return duration >= 22 or word_count >= 58 or cjk_count >= 42


def merge_translations(english_cues: list[dict[str, Any]], zh_cues: list[dict[str, Any]]) -> list[dict[str, Any]]:
    return [
        {
            "start": cue["start"],
            "end": cue["end"],
            "en": cue["text"],
            "zh": best_translation(cue, zh_cues),
        }
        for cue in english_cues
    ]


def best_translation(cue: dict[str, Any], zh_cues: list[dict[str, Any]]) -> str:
    cue_duration = max(0.1, float(cue["end"]) - float(cue["start"]))
    scored: list[tuple[float, float, dict[str, Any]]] = []
    matches: list[dict[str, Any]] = []

    for candidate in zh_cues:
        overlap = max(0.0, min(cue["end"], candidate["end"]) - max(cue["start"], candidate["start"]))
        if overlap <= 0:
            continue

        candidate_duration = max(0.1, float(candidate["end"]) - float(candidate["start"]))
        coverage = overlap / min(cue_duration, candidate_duration)
        scored.append((coverage, overlap, candidate))
        if coverage >= 0.45 or (cue_duration >= 11 and overlap >= 1.2):
            matches.append(candidate)

    if not matches and scored:
        _, overlap, best_match = max(scored, key=lambda item: (item[0], item[1]))
        if overlap > 0.15:
            matches.append(best_match)

    text = ""
    for match in sorted(matches, key=lambda item: item["start"]):
        text = join_caption_text(text, match["text"])
    return text


def translation_providers() -> list[dict[str, str]]:
    providers: list[dict[str, str]] = []
    if os.environ.get("GEMINI_API_KEY"):
        providers.append(
            {
                "id": "gemini",
                "label": "Google Gemini",
                "model": os.environ.get("GEMINI_TRANSLATION_MODEL", DEFAULT_GEMINI_TRANSLATION_MODEL),
            }
        )
    if ollama_translation_enabled():
        providers.append(
            {
                "id": "ollama",
                "label": "Ollama local",
                "model": ollama_translation_model(),
            }
        )
    return providers


def default_translation_provider() -> dict[str, str] | None:
    providers = translation_providers()
    if not providers:
        return None

    preferred = clean_text(os.environ.get("AI_TRANSLATION_PROVIDER", "")).lower()
    if preferred == "google":
        preferred = "gemini"
    if preferred == "local":
        preferred = "ollama"
    if preferred:
        for provider in providers:
            if provider["id"] == preferred:
                return provider

    return providers[0]


def select_translation_provider(raw_provider: Any) -> dict[str, str]:
    providers = translation_providers()
    provider_ids = {provider["id"] for provider in providers}
    requested = clean_text(str(raw_provider or "")).lower()
    if requested == "auto":
        requested = ""
    if requested == "google":
        requested = "gemini"
    if requested == "local":
        requested = "ollama"

    if requested:
        if requested not in {"gemini", "ollama"}:
            raise AITranslationError("This AI translation service is not supported.")
        if requested not in provider_ids:
            raise AITranslationError(provider_setup_message(requested))
        return next(provider for provider in providers if provider["id"] == requested)

    provider = default_translation_provider()
    if not provider:
        raise AITranslationError(
            "AI translation needs GEMINI_API_KEY or OLLAMA_MODEL. Restart the local app after setting one."
        )
    return provider


def provider_setup_message(provider_id: str) -> str:
    if provider_id == "gemini":
        return "Google Gemini is not enabled. Set GEMINI_API_KEY, then restart the local app."
    return "Ollama local is not enabled. Set OLLAMA_MODEL, then restart the local app."


def ollama_translation_enabled() -> bool:
    raw_enabled = clean_text(os.environ.get("OLLAMA_TRANSLATION_ENABLED", "")).lower()
    if raw_enabled in {"0", "false", "no", "off"}:
        return False
    if raw_enabled in {"1", "true", "yes", "on"}:
        return True

    preferred = clean_text(os.environ.get("AI_TRANSLATION_PROVIDER", "")).lower()
    return bool(
        preferred in {"ollama", "local"}
        or os.environ.get("OLLAMA_MODEL")
        or os.environ.get("OLLAMA_TRANSLATION_MODEL")
        or os.environ.get("OLLAMA_BASE_URL")
    )


def ollama_translation_model() -> str:
    return (
        clean_text(os.environ.get("OLLAMA_TRANSLATION_MODEL", ""))
        or clean_text(os.environ.get("OLLAMA_MODEL", ""))
        or DEFAULT_OLLAMA_TRANSLATION_MODEL
    )


def ollama_base_url() -> str:
    return clean_text(os.environ.get("OLLAMA_BASE_URL", "")) or DEFAULT_OLLAMA_BASE_URL


def translate_subtitles_with_ai(payload: dict[str, Any]) -> dict[str, Any]:
    title = clean_text(str(payload.get("title") or "English video"))
    video_id = clean_text(str(payload.get("videoId") or ""))
    raw_cues = payload.get("cues") if isinstance(payload.get("cues"), list) else []
    items = sanitize_translation_items(raw_cues)
    if not items:
        raise AITranslationError("There are no English subtitles to translate.")
    if len(items) > MAX_TRANSLATION_ITEMS:
        raise AITranslationError(f"You can translate up to {MAX_TRANSLATION_ITEMS} lines at once.")

    provider = select_translation_provider(payload.get("provider"))
    if provider["id"] == "gemini":
        return translate_subtitles_with_gemini(provider, title, video_id, items)
    if provider["id"] == "ollama":
        return translate_subtitles_with_ollama(provider, title, video_id, items)
    raise AITranslationError("This AI translation service is not supported.")


def translate_subtitles_with_ollama(
    provider: dict[str, str],
    title: str,
    video_id: str,
    items: list[dict[str, Any]],
) -> dict[str, Any]:
    model = provider["model"]
    api_key = os.environ.get("OLLAMA_API_KEY", DEFAULT_OLLAMA_API_KEY)
    url = openai_compatible_chat_completions_url(ollama_base_url())
    translations: dict[str, str] = {}
    for batch in chunked(items, TRANSLATION_BATCH_SIZE):
        translations.update(
            request_openai_compatible_translation_batch(
                api_key,
                model,
                title,
                video_id,
                batch,
                url,
                provider["label"],
            )
        )

    return {
        "provider": provider["id"],
        "provider_label": provider["label"],
        "model": model,
        "translations": translations,
    }


def translate_subtitles_with_gemini(
    provider: dict[str, str],
    title: str,
    video_id: str,
    items: list[dict[str, Any]],
) -> dict[str, Any]:
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        raise AITranslationError("Google Gemini is not enabled. Set GEMINI_API_KEY, then restart the local app.")

    models = gemini_translation_models(provider["model"])
    used_models: list[str] = []
    translations: dict[str, str] = {}
    for batch in chunked(items, TRANSLATION_BATCH_SIZE):
        batch_translations, used_model = request_gemini_translation_batch_with_fallback(
            api_key,
            models,
            title,
            video_id,
            batch,
        )
        translations.update(batch_translations)
        if used_model not in used_models:
            used_models.append(used_model)

    return {
        "provider": provider["id"],
        "provider_label": provider["label"],
        "model": " + ".join(used_models) if used_models else models[0],
        "translations": translations,
    }


def sanitize_translation_items(raw_cues: list[Any]) -> list[dict[str, Any]]:
    items: list[dict[str, Any]] = []
    for item in raw_cues:
        if not isinstance(item, dict):
            continue
        try:
            index = int(item.get("index"))
        except (TypeError, ValueError):
            continue
        english = clean_text(str(item.get("en") or ""))
        if english:
            items.append({"index": index, "en": english[:900]})
    return items


def chunked(items: list[dict[str, Any]], size: int) -> list[list[dict[str, Any]]]:
    return [items[index : index + size] for index in range(0, len(items), size)]


def gemini_translation_models(primary_model: str) -> list[str]:
    configured_fallbacks = model_list_from_env("GEMINI_TRANSLATION_FALLBACK_MODELS")
    fallback_models = configured_fallbacks or list(DEFAULT_GEMINI_TRANSLATION_FALLBACK_MODELS)
    models: list[str] = []
    for model in [primary_model, *fallback_models]:
        cleaned = clean_text(model)
        if cleaned and cleaned not in models:
            models.append(cleaned)
    return models or [DEFAULT_GEMINI_TRANSLATION_MODEL]


def model_list_from_env(name: str) -> list[str]:
    raw = os.environ.get(name, "")
    return [clean_text(model) for model in raw.split(",") if clean_text(model)]


def request_openai_compatible_translation_batch(
    api_key: str,
    model: str,
    title: str,
    video_id: str,
    items: list[dict[str, Any]],
    url: str,
    provider_label: str,
) -> dict[str, str]:
    request_payload = {
        "model": model,
        "temperature": 0.2,
        "response_format": {"type": "json_object"},
        "messages": [
            {
                "role": "system",
                "content": (
                    "Translate English video subtitle lines into natural Traditional Chinese for learners in Taiwan. "
                    "Keep names, brands, and technical terms accurate. Use concise subtitle style. "
                    "Return only a JSON object shaped like {\"translations\":{\"0\":\"...\"}} using the given indexes."
                ),
            },
            {
                "role": "user",
                "content": json.dumps(
                    {
                        "videoTitle": title[:180],
                        "videoId": video_id[:40],
                        "items": items,
                    },
                    ensure_ascii=False,
                ),
            },
        ],
    }
    encoded = json.dumps(request_payload, ensure_ascii=False).encode("utf-8")

    last_error: Exception | None = None
    for attempt in range(2):
        request = urllib.request.Request(
            url,
            data=encoded,
            method="POST",
            headers={
                "Authorization": f"Bearer {api_key}",
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        )
        try:
            with urllib.request.urlopen(request, timeout=120) as response:
                response_payload = json.loads(response.read().decode("utf-8"))
                return parse_chat_translation_response(response_payload)
        except urllib.error.HTTPError as exc:
            last_error = exc
            if exc.code in RETRYABLE_API_STATUS_CODES and attempt == 0:
                time.sleep(1.2)
                continue
            raise AITranslationError(f"{provider_label} translation failed: {openai_error_message(exc)}") from exc
        except (urllib.error.URLError, json.JSONDecodeError, KeyError, TypeError, ValueError) as exc:
            last_error = exc
            break

    raise AITranslationError(f"{provider_label} translation failed: {openai_compatible_error_message(provider_label, last_error)}") from last_error


def openai_compatible_chat_completions_url(base_url: str) -> str:
    base = clean_text(base_url).rstrip("/")
    if not base:
        base = DEFAULT_OLLAMA_BASE_URL
    parsed = urllib.parse.urlparse(base)
    if parsed.scheme not in {"http", "https"} or not parsed.netloc:
        raise AITranslationError(f"The AI service URL is not valid: {base_url}")
    if parsed.path.rstrip("/").endswith("/chat/completions"):
        return base
    if parsed.path.rstrip("/").endswith("/v1"):
        return f"{base}/chat/completions"
    return f"{base}/v1/chat/completions"


def openai_compatible_error_message(provider_label: str, error: Exception | None) -> str:
    if provider_label == "Ollama local" and isinstance(error, urllib.error.URLError):
        return (
            f"Could not reach Ollama at {ollama_base_url()}. "
            f"Run ollama serve and make sure {ollama_translation_model()} is downloaded."
        )
    return str(error or "Unknown error")


def request_gemini_translation_batch_with_fallback(
    api_key: str,
    models: list[str],
    title: str,
    video_id: str,
    items: list[dict[str, Any]],
) -> tuple[dict[str, str], str]:
    last_error: RetryableAITranslationError | None = None
    for model in models:
        try:
            translations = request_gemini_translation_batch(api_key, model, title, video_id, items)
            return translations, model
        except RetryableAITranslationError as exc:
            last_error = exc

    if last_error:
        raise AITranslationError(
            f"Google Gemini is still busy after trying {len(models)} models. Try again later."
        ) from last_error
    raise AITranslationError("Google Gemini translation failed.")


def request_gemini_translation_batch(
    api_key: str,
    model: str,
    title: str,
    video_id: str,
    items: list[dict[str, Any]],
) -> dict[str, str]:
    prompt = (
        "Translate English video subtitle lines into natural Traditional Chinese for learners in Taiwan. "
        "Keep names, brands, and technical terms accurate. Use concise subtitle style. "
        "Return only a JSON object shaped like {\"translations\":{\"0\":\"...\"}} using the given indexes.\n\n"
        + json.dumps(
            {
                "videoTitle": title[:180],
                "videoId": video_id[:40],
                "items": items,
            },
            ensure_ascii=False,
        )
    )
    request_payload = {
        "contents": [
            {
                "role": "user",
                "parts": [{"text": prompt}],
            }
        ],
        "generationConfig": {
            "temperature": 0.2,
            "maxOutputTokens": 8192,
            "responseMimeType": "application/json",
        },
    }
    encoded = json.dumps(request_payload, ensure_ascii=False).encode("utf-8")
    url = gemini_generate_content_url(model)

    last_error: Exception | None = None
    for attempt in range(2):
        request = urllib.request.Request(
            url,
            data=encoded,
            method="POST",
            headers={
                "x-goog-api-key": api_key,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        )
        try:
            with urllib.request.urlopen(request, timeout=120) as response:
                response_payload = json.loads(response.read().decode("utf-8"))
                return parse_gemini_translation_response(response_payload)
        except urllib.error.HTTPError as exc:
            last_error = exc
            if exc.code in RETRYABLE_API_STATUS_CODES:
                if attempt == 0:
                    time.sleep(1.2)
                    continue
                raise RetryableAITranslationError(f"{model} is temporarily unavailable: {api_error_message(exc)}") from exc
            raise AITranslationError(f"Google Gemini translation failed: {api_error_message(exc)}") from exc
        except (urllib.error.URLError, json.JSONDecodeError, KeyError, TypeError, ValueError) as exc:
            last_error = exc
            break

    raise AITranslationError(f"Google Gemini translation failed: {last_error}") from last_error


def gemini_generate_content_url(model: str) -> str:
    model_name = clean_text(model) or DEFAULT_GEMINI_TRANSLATION_MODEL
    if model_name.startswith("models/"):
        model_path = model_name
    else:
        model_path = f"models/{model_name}"
    return GEMINI_GENERATE_CONTENT_URL_TEMPLATE.format(model_path=urllib.parse.quote(model_path, safe="/"))


def parse_chat_translation_response(payload: dict[str, Any]) -> dict[str, str]:
    choices = payload.get("choices")
    if not isinstance(choices, list) or not choices:
        raise ValueError("AI response did not include choices.")

    message = choices[0].get("message") if isinstance(choices[0], dict) else {}
    content = message.get("content") if isinstance(message, dict) else ""
    if not isinstance(content, str):
        raise ValueError("AI response did not include text content.")

    return parse_translation_json_content(content)


def parse_gemini_translation_response(payload: dict[str, Any]) -> dict[str, str]:
    candidates = payload.get("candidates")
    if not isinstance(candidates, list) or not candidates:
        raise ValueError("Gemini response did not include candidates.")

    candidate = candidates[0] if isinstance(candidates[0], dict) else {}
    content = candidate.get("content") if isinstance(candidate, dict) else {}
    parts = content.get("parts") if isinstance(content, dict) else []
    if not isinstance(parts, list):
        raise ValueError("Gemini response did not include text content.")

    text = "".join(part.get("text", "") for part in parts if isinstance(part, dict) and isinstance(part.get("text"), str))
    if not text.strip():
        finish_reason = candidate.get("finishReason") if isinstance(candidate, dict) else ""
        raise ValueError(f"Gemini response did not include text content. finishReason={finish_reason}")

    return parse_translation_json_content(text)


def parse_translation_json_content(content: str) -> dict[str, str]:
    parsed = json.loads(strip_json_fence(content))
    raw_translations = parsed.get("translations") if isinstance(parsed, dict) else {}
    translations: dict[str, str] = {}
    if isinstance(raw_translations, list):
        for item in raw_translations:
            if not isinstance(item, dict):
                continue
            add_translation_pair(translations, item.get("index"), item.get("zh"))
        return translations
    if isinstance(raw_translations, dict):
        for index, text in raw_translations.items():
            add_translation_pair(translations, index, text)
        return translations
    return {}


def add_translation_pair(translations: dict[str, str], raw_index: Any, raw_text: Any) -> None:
    try:
        index = str(int(raw_index))
    except (TypeError, ValueError):
        return
    text = clean_text(str(raw_text or ""))
    if text:
        translations[index] = text


def strip_json_fence(value: str) -> str:
    text = value.strip()
    if text.startswith("```"):
        text = re.sub(r"^```(?:json)?\s*", "", text)
        text = re.sub(r"\s*```$", "", text)
    return text.strip()


def openai_error_message(exc: urllib.error.HTTPError) -> str:
    return api_error_message(exc)


def api_error_message(exc: urllib.error.HTTPError) -> str:
    detail = exc.read().decode("utf-8", errors="replace")
    try:
        payload = json.loads(detail)
        message = payload.get("error", {}).get("message")
        if message:
            return str(message)
    except json.JSONDecodeError:
        pass
    return detail or str(exc)


class VideoLearningHandler(BaseHTTPRequestHandler):
    server_version = "VideoLearningPlatform/1.0"

    def log_message(self, format: str, *args: object) -> None:
        print(f"{self.address_string()} - {format % args}", file=sys.stderr)

    def end_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        super().end_headers()

    def do_OPTIONS(self) -> None:
        self.send_response(HTTPStatus.NO_CONTENT)
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/config":
            self.handle_config_api()
            return
        if parsed.path == "/api/youtube":
            self.handle_youtube_api(parsed)
            return
        self.serve_static(parsed.path)

    def do_POST(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/translate":
            self.handle_translate_api()
            return
        self.send_error(HTTPStatus.NOT_FOUND)

    def do_HEAD(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/api/youtube":
            self.send_response(HTTPStatus.METHOD_NOT_ALLOWED)
            self.end_headers()
            return
        self.serve_static(parsed.path, head_only=True)

    def send_json(self, payload: dict[str, Any], status: int = HTTPStatus.OK) -> None:
        encoded = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(encoded)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(encoded)

    def handle_youtube_api(self, parsed: urllib.parse.ParseResult) -> None:
        params = urllib.parse.parse_qs(parsed.query)
        raw_url = params.get("url", [""])[0]
        try:
            self.send_json(load_youtube_lesson(raw_url))
        except VideoPlatformError as exc:
            self.send_json({"error": str(exc)}, status=HTTPStatus.BAD_REQUEST)

    def handle_config_api(self) -> None:
        providers = translation_providers()
        default_provider = default_translation_provider()
        self.send_json(
            {
                "ai_translation_available": bool(providers),
                "translation_provider": default_provider["id"] if default_provider else "",
                "translation_provider_label": default_provider["label"] if default_provider else "",
                "translation_model": default_provider["model"] if default_provider else "",
                "translation_providers": providers,
            }
        )

    def read_json_body(self) -> dict[str, Any]:
        content_length = int(self.headers.get("Content-Length", "0") or 0)
        if content_length <= 0:
            raise ValueError("Missing JSON request body.")
        if content_length > 450_000:
            raise ValueError("Request body is too large.")

        raw_body = self.rfile.read(content_length)
        try:
            payload = json.loads(raw_body.decode("utf-8"))
        except json.JSONDecodeError as exc:
            raise ValueError("Request body must be valid JSON.") from exc

        if not isinstance(payload, dict):
            raise ValueError("Request body must be a JSON object.")
        return payload

    def handle_translate_api(self) -> None:
        try:
            self.send_json(translate_subtitles_with_ai(self.read_json_body()))
        except (AITranslationError, ValueError) as exc:
            self.send_json({"error": str(exc)}, status=HTTPStatus.BAD_REQUEST)

    def serve_static(self, raw_path: str, head_only: bool = False) -> None:
        path = urllib.parse.unquote(raw_path)
        if path in {"", "/"}:
            path = "/index.html"

        target = (APP_DIR / path.lstrip("/")).resolve()
        try:
            target.relative_to(APP_DIR.resolve())
        except ValueError:
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        if not target.is_file():
            self.send_error(HTTPStatus.NOT_FOUND)
            return

        content_type = mimetypes.guess_type(target.name)[0] or "application/octet-stream"
        data = target.read_bytes()
        self.send_response(HTTPStatus.OK)
        self.send_header("Content-Type", content_type)
        self.send_header("Content-Length", str(len(data)))
        self.send_header("Cache-Control", "no-cache")
        self.end_headers()
        if not head_only:
            self.wfile.write(data)


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Run the local English video learning platform.")
    parser.add_argument("--host", default="127.0.0.1", help="Host to bind. Default: 127.0.0.1")
    parser.add_argument("--port", type=int, default=8789, help="Port to bind. Default: 8789")
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(sys.argv[1:] if argv is None else argv)
    server = ThreadingHTTPServer((args.host, args.port), VideoLearningHandler)
    url = f"http://{args.host}:{args.port}/"
    print(f"English video platform is running at {url}")
    print("Press Ctrl+C to stop.")

    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping video platform.")
    finally:
        server.server_close()

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
