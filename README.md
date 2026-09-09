# LinguaTube English Platform

Local YouTube English learning platform with bilingual subtitles, SRT import/export, saved videos, draggable player captions, fullscreen captions, and theater mode.

## Requirements

- Python 3.11+
- uv

## Setup

```bash
uv sync
```

## Run

```bash
uv run video-learning-platform
```

Then open:

```text
http://127.0.0.1:8789/
```

Do not open `english_video_platform/index.html` directly. The YouTube player and subtitle tools need the local app URL.

## Shortcuts

- `Space`: tap to play / pause, hold to play at 2x
- `F`: fullscreen video with subtitles
- `T`: theater mode
- `+` / `-`: subtitle size
- `[` / `]`: subtitle box width
- `Left` / `Right`: previous / next subtitle
- `Up` / `Down`: volume

## GitHub Notes

This folder is the clean GitHub project. Personal subtitle files, downloads, cache folders, virtual environments, and zip packages are ignored by `.gitignore`.
