const CUSTOM_LESSONS_KEY = "linguatube.customLessons";
const LOCAL_PREVIEW_URL = "http://127.0.0.1:8789/";
const LOCAL_PREVIEW_FALLBACK_URLS = [LOCAL_PREVIEW_URL, "http://127.0.0.1:8788/"];
const PREFERRED_PREVIEW_PORT = "8789";
const LEGACY_PREVIEW_PORT = "8788";
const TIMECODE_SOURCE = "\\d{1,2}:\\d{2}(?::\\d{2})?(?:[.,]\\d+)?";
const CAPTION_SCHEMA_VERSION = 2;
const DEFAULT_CAPTION_WIDTH = 76;
const DEFAULT_CAPTION_SCALE = 1;
const MIN_CAPTION_SCALE = 0.5;
const MAX_CAPTION_SCALE = 1.6;
const CAPTION_EN_PERCENT = 118;
const CAPTION_ZH_PERCENT = 85;
const CAPTION_EDGE_PADDING_PX = 10;
const CAPTION_EDGE_RESIZE_PX = 18;
const CAPTION_WIDTH_KEYBOARD_STEP = 5;
const DEFAULT_WATCH_SPLIT_RATIO = 33;
const MIN_WATCH_SPLIT_RATIO = 22;
const MAX_WATCH_SPLIT_RATIO = 52;
const WATCH_SPLIT_KEYBOARD_STEP = 2;
const DEFAULT_PLAYBACK_RATE = 1;
const DEFAULT_VOLUME = 80;
const VOLUME_KEYBOARD_STEP = 5;
const SUBTITLE_MODE_SHORTCUTS = ["both", "en", "zh", "none"];
const SPACE_HOLD_FAST_RATE = 2;
const SPACE_HOLD_DELAY_MS = 260;
const AI_TRANSLATION_CACHE_VERSION = 2;
const AI_PROVIDER_LABELS = {
  auto: "Auto",
  gemini: "Google Gemini",
  ollama: "Ollama local",
};
const SIMPLIFIED_TO_TRADITIONAL_PHRASES = [
  ["我们", "我們"],
  ["你们", "你們"],
  ["他们", "他們"],
  ["她们", "她們"],
  ["这里", "這裡"],
  ["那里", "那裡"],
  ["哪里", "哪裡"],
  ["这个", "這個"],
  ["那个", "那個"],
  ["这些", "這些"],
  ["那些", "那些"],
  ["为什么", "為什麼"],
  ["因为", "因為"],
  ["以后", "以後"],
  ["之前", "之前"],
  ["之后", "之後"],
  ["里面", "裡面"],
  ["外面", "外面"],
  ["上周", "上週"],
  ["下周", "下週"],
  ["周日", "週日"],
  ["周一", "週一"],
  ["周二", "週二"],
  ["周三", "週三"],
  ["周四", "週四"],
  ["周五", "週五"],
  ["周六", "週六"],
  ["听听", "聽聽"],
  ["听力", "聽力"],
  ["高层", "高層"],
  ["官员", "官員"],
  ["经济", "經濟"],
  ["协议", "協議"],
  ["发出", "發出"],
  ["发起", "發起"],
  ["发展", "發展"],
  ["发送", "發送"],
  ["信号", "信號"],
  ["视频", "影片"],
  ["学习", "學習"],
  ["英语", "英語"],
  ["字幕", "字幕"],
  ["问题", "問題"],
  ["现在", "現在"],
  ["这样", "這樣"],
  ["已经", "已經"],
  ["还是", "還是"],
  ["说明", "說明"],
  ["认为", "認為"],
  ["应该", "應該"],
  ["能够", "能夠"],
  ["无法", "無法"],
  ["对于", "對於"],
  ["关于", "關於"],
  ["通过", "透過"],
  ["网络", "網路"],
  ["质量", "品質"],
  ["软件", "軟體"],
  ["默认", "預設"],
  ["加载", "載入"],
  ["下载", "下載"],
  ["上传", "上傳"],
  ["导入", "匯入"],
  ["导出", "匯出"],
  ["翻译", "翻譯"],
  ["复制", "複製"],
  ["复习", "複習"],
  ["练习", "練習"],
  ["同步", "同步"],
  ["保存", "儲存"],
  ["调整", "調整"],
  ["显示", "顯示"],
  ["选择", "選擇"],
  ["创建", "建立"],
  ["编辑", "編輯"],
  ["继续", "繼續"],
  ["启动", "啟動"],
  ["关闭", "關閉"],
  ["开启", "開啟"],
  ["状态", "狀態"],
  ["确认", "確認"],
  ["错误", "錯誤"],
  ["后台", "後台"],
  ["数据库", "資料庫"],
  ["文件", "檔案"],
  ["单词", "單字"],
  ["词汇", "詞彙"],
  ["发音", "發音"],
  ["语法", "文法"],
  ["语境", "語境"],
  ["阅读", "閱讀"],
  ["说话", "說話"],
  ["时间", "時間"],
  ["画面", "畫面"],
  ["开口", "開口"],
];
const SIMPLIFIED_TO_TRADITIONAL_CHARS = {
  万: "萬",
  与: "與",
  专: "專",
  业: "業",
  东: "東",
  丝: "絲",
  丢: "丟",
  两: "兩",
  严: "嚴",
  个: "個",
  临: "臨",
  为: "為",
  举: "舉",
  么: "麼",
  义: "義",
  乌: "烏",
  乐: "樂",
  习: "習",
  乡: "鄉",
  书: "書",
  买: "買",
  乱: "亂",
  争: "爭",
  于: "於",
  云: "雲",
  亏: "虧",
  亚: "亞",
  产: "產",
  亲: "親",
  仅: "僅",
  从: "從",
  仑: "侖",
  仓: "倉",
  仪: "儀",
  们: "們",
  优: "優",
  会: "會",
  传: "傳",
  伤: "傷",
  体: "體",
  余: "餘",
  佣: "傭",
  侧: "側",
  侨: "僑",
  侠: "俠",
  侣: "侶",
  侥: "僥",
  侦: "偵",
  侨: "僑",
  侩: "儈",
  侪: "儕",
  侬: "儂",
  俣: "俁",
  俦: "儔",
  俨: "儼",
  俩: "倆",
  俪: "儷",
  俭: "儉",
  债: "債",
  倾: "傾",
  假: "假",
  偾: "僨",
  偿: "償",
  傥: "儻",
  傧: "儐",
  储: "儲",
  儿: "兒",
  克: "克",
  兑: "兌",
  党: "黨",
  兰: "蘭",
  关: "關",
  兴: "興",
  养: "養",
  兽: "獸",
  内: "內",
  冈: "岡",
  册: "冊",
  写: "寫",
  军: "軍",
  农: "農",
  冲: "衝",
  决: "決",
  况: "況",
  冻: "凍",
  净: "淨",
  凉: "涼",
  减: "減",
  凑: "湊",
  凛: "凜",
  几: "幾",
  凤: "鳳",
  凭: "憑",
  凯: "凱",
  击: "擊",
  凿: "鑿",
  划: "劃",
  刘: "劉",
  则: "則",
  刚: "剛",
  创: "創",
  删: "刪",
  别: "別",
  刬: "剗",
  刭: "剄",
  刹: "剎",
  刽: "劊",
  刿: "劌",
  剀: "剴",
  剂: "劑",
  剐: "剮",
  剑: "劍",
  剧: "劇",
  劝: "勸",
  办: "辦",
  务: "務",
  动: "動",
  励: "勵",
  劲: "勁",
  劳: "勞",
  势: "勢",
  勋: "勳",
  勐: "猛",
  勚: "勩",
  匀: "勻",
  区: "區",
  医: "醫",
  华: "華",
  协: "協",
  单: "單",
  卖: "賣",
  卢: "盧",
  卫: "衛",
  却: "卻",
  厂: "廠",
  厅: "廳",
  历: "歷",
  厉: "厲",
  压: "壓",
  厌: "厭",
  厕: "廁",
  厢: "廂",
  县: "縣",
  参: "參",
  双: "雙",
  发: "發",
  变: "變",
  叙: "敘",
  叶: "葉",
  号: "號",
  叹: "嘆",
  后: "後",
  吓: "嚇",
  吗: "嗎",
  启: "啟",
  吴: "吳",
  听: "聽",
  员: "員",
  呗: "唄",
  呙: "咼",
  呛: "嗆",
  呐: "吶",
  咏: "詠",
  咙: "嚨",
  咛: "嚀",
  咝: "噝",
  咤: "吒",
  咨: "諮",
  咸: "鹹",
  响: "響",
  哑: "啞",
  哒: "噠",
  哓: "嘵",
  哔: "嗶",
  哕: "噦",
  哗: "嘩",
  哙: "噲",
  哜: "嚌",
  哝: "噥",
  哟: "喲",
  唤: "喚",
  啧: "嘖",
  啬: "嗇",
  啭: "囀",
  啮: "嚙",
  啰: "囉",
  啴: "嘽",
  啸: "嘯",
  喷: "噴",
  喽: "嘍",
  嗫: "囁",
  嗳: "噯",
  嘘: "噓",
  嘤: "嚶",
  嘱: "囑",
  噜: "嚕",
  团: "團",
  园: "園",
  围: "圍",
  国: "國",
  图: "圖",
  圆: "圓",
  圣: "聖",
  场: "場",
  坏: "壞",
  块: "塊",
  坚: "堅",
  坛: "壇",
  坝: "壩",
  坞: "塢",
  坟: "墳",
  坠: "墜",
  垄: "壟",
  垅: "壠",
  垆: "壚",
  垒: "壘",
  垦: "墾",
  垧: "坰",
  垩: "堊",
  垫: "墊",
  垭: "埡",
  垲: "塏",
  垴: "堖",
  埘: "塒",
  埙: "塤",
  埚: "堝",
  埯: "垵",
  堑: "塹",
  堕: "墮",
  墙: "牆",
  壮: "壯",
  声: "聲",
  壳: "殼",
  壶: "壺",
  处: "處",
  备: "備",
  复: "複",
  够: "夠",
  头: "頭",
  夹: "夾",
  夺: "奪",
  奋: "奮",
  奖: "獎",
  奥: "奧",
  奸: "姦",
  妆: "妝",
  妇: "婦",
  妈: "媽",
  妩: "嫵",
  妪: "嫗",
  妫: "媯",
  姗: "姍",
  姜: "薑",
  娄: "婁",
  娅: "婭",
  娆: "嬈",
  娇: "嬌",
  娈: "孌",
  娱: "娛",
  娲: "媧",
  娴: "嫻",
  婴: "嬰",
  婵: "嬋",
  婶: "嬸",
  媪: "媼",
  嫒: "嬡",
  嫔: "嬪",
  嫱: "嬙",
  孙: "孫",
  学: "學",
  孪: "孿",
  宁: "寧",
  宝: "寶",
  实: "實",
  宠: "寵",
  审: "審",
  宪: "憲",
  宫: "宮",
  宽: "寬",
  宾: "賓",
  寝: "寢",
  对: "對",
  寻: "尋",
  导: "導",
  寿: "壽",
  将: "將",
  尔: "爾",
  尘: "塵",
  尝: "嘗",
  尧: "堯",
  尴: "尷",
  尸: "屍",
  尽: "盡",
  层: "層",
  屉: "屜",
  属: "屬",
  屡: "屢",
  岁: "歲",
  岂: "豈",
  岖: "嶇",
  岗: "崗",
  岘: "峴",
  岚: "嵐",
  岛: "島",
  岭: "嶺",
  岿: "巋",
  峄: "嶧",
  峡: "峽",
  峣: "嶢",
  峤: "嶠",
  峥: "崢",
  峦: "巒",
  崂: "嶗",
  崃: "崍",
  崄: "嶮",
  崭: "嶄",
  嵘: "嶸",
  巅: "巔",
  巩: "鞏",
  巯: "巰",
  币: "幣",
  帅: "帥",
  师: "師",
  帐: "帳",
  带: "帶",
  帧: "幀",
  帮: "幫",
  帱: "幬",
  帻: "幘",
  帼: "幗",
  幂: "冪",
  并: "並",
  广: "廣",
  庆: "慶",
  庐: "廬",
  庑: "廡",
  库: "庫",
  应: "應",
  庙: "廟",
  庞: "龐",
  废: "廢",
  廪: "廩",
  开: "開",
  异: "異",
  弃: "棄",
  弑: "弒",
  张: "張",
  弥: "彌",
  弦: "弦",
  弯: "彎",
  弹: "彈",
  强: "強",
  归: "歸",
  当: "當",
  录: "錄",
  彦: "彥",
  彻: "徹",
  径: "徑",
  徕: "徠",
  御: "禦",
  忆: "憶",
  忏: "懺",
  忧: "憂",
  忾: "愾",
  怀: "懷",
  态: "態",
  怂: "慫",
  怃: "憮",
  怄: "慪",
  怅: "悵",
  怆: "愴",
  怜: "憐",
  总: "總",
  怼: "懟",
  恋: "戀",
  恒: "恆",
  恳: "懇",
  恶: "惡",
  恸: "慟",
  恹: "懨",
  恺: "愷",
  恻: "惻",
  恼: "惱",
  恽: "惲",
  悦: "悅",
  悫: "愨",
  悬: "懸",
  悭: "慳",
  悮: "悞",
  悯: "憫",
  惊: "驚",
  惧: "懼",
  惨: "慘",
  惩: "懲",
  惫: "憊",
  惬: "愜",
  惭: "慚",
  惮: "憚",
  惯: "慣",
  愠: "慍",
  愤: "憤",
  愦: "憒",
  愿: "願",
  慑: "懾",
  懑: "懣",
  戆: "戇",
  戋: "戔",
  戏: "戲",
  户: "戶",
  扑: "撲",
  执: "執",
  扩: "擴",
  扪: "捫",
  扫: "掃",
  扬: "揚",
  扰: "擾",
  抚: "撫",
  抛: "拋",
  抟: "摶",
  抠: "摳",
  抡: "掄",
  抢: "搶",
  护: "護",
  报: "報",
  担: "擔",
  拟: "擬",
  拢: "攏",
  拣: "揀",
  拥: "擁",
  拦: "攔",
  拧: "擰",
  拨: "撥",
  择: "擇",
  挂: "掛",
  挚: "摯",
  挛: "攣",
  挜: "掗",
  挝: "撾",
  挞: "撻",
  挟: "挾",
  挠: "撓",
  挡: "擋",
  挢: "撟",
  挣: "掙",
  挤: "擠",
  挥: "揮",
  挦: "撏",
  挽: "輓",
  捝: "挩",
  捞: "撈",
  损: "損",
  捡: "撿",
  换: "換",
  捣: "搗",
  据: "據",
  掳: "擄",
  掴: "摑",
  掷: "擲",
  掸: "撣",
  掺: "摻",
  掼: "摜",
  揽: "攬",
  揿: "撳",
  搀: "攙",
  搁: "擱",
  搂: "摟",
  搅: "攪",
  携: "攜",
  摄: "攝",
  摅: "攄",
  摆: "擺",
  摇: "搖",
  摈: "擯",
  摊: "攤",
  撄: "攖",
  撑: "撐",
  撵: "攆",
  撷: "擷",
 撸: "擼",
  撺: "攛",
  擞: "擻",
  攒: "攢",
  敌: "敵",
  敛: "斂",
  数: "數",
  斋: "齋",
  斓: "斕",
  斗: "鬥",
  斩: "斬",
  断: "斷",
  无: "無",
  旧: "舊",
  时: "時",
  旷: "曠",
  昙: "曇",
  昼: "晝",
  显: "顯",
  晋: "晉",
  晒: "曬",
  晓: "曉",
  晔: "曄",
  晕: "暈",
  晖: "暉",
  暂: "暫",
  暧: "曖",
  术: "術",
  机: "機",
  杀: "殺",
  杂: "雜",
  权: "權",
  杆: "桿",
  条: "條",
  来: "來",
  杨: "楊",
  杩: "榪",
  杰: "傑",
  极: "極",
  构: "構",
  枞: "樅",
  枢: "樞",
  枣: "棗",
  枥: "櫪",
  枧: "梘",
  枨: "棖",
  枪: "槍",
  枫: "楓",
  枭: "梟",
  柜: "櫃",
  柠: "檸",
  查: "查",
  栅: "柵",
  标: "標",
  栈: "棧",
  栉: "櫛",
  栊: "櫳",
  栋: "棟",
  栌: "櫨",
  栎: "櫟",
  栏: "欄",
  树: "樹",
  栖: "棲",
  样: "樣",
  栾: "欒",
  桠: "椏",
  桡: "橈",
  桢: "楨",
  档: "檔",
  桤: "榿",
  桥: "橋",
  桦: "樺",
  桧: "檜",
  桨: "槳",
  桩: "樁",
  梦: "夢",
  梼: "檮",
  梾: "棶",
  梿: "槤",
  检: "檢",
  棂: "欞",
  椁: "槨",
  椟: "櫝",
  椠: "槧",
  椤: "欏",
  椭: "橢",
  楼: "樓",
  榄: "欖",
  榅: "榲",
  榇: "櫬",
  榈: "櫚",
  榉: "櫸",
  槚: "檟",
  槛: "檻",
  槟: "檳",
  槠: "櫧",
  横: "橫",
  樯: "檣",
  樱: "櫻",
  橥: "櫫",
  橱: "櫥",
  橹: "櫓",
  橼: "櫞",
  檩: "檁",
  欢: "歡",
  欤: "歟",
  欧: "歐",
  歼: "殲",
  殁: "歿",
  殇: "殤",
  残: "殘",
  殒: "殞",
  殓: "殮",
  殚: "殫",
  殡: "殯",
  殴: "毆",
  毁: "毀",
  毂: "轂",
  毕: "畢",
  毙: "斃",
  毡: "氈",
  毵: "毿",
  气: "氣",
  氢: "氫",
  氩: "氬",
  氲: "氳",
  汇: "匯",
  汉: "漢",
  污: "汙",
  汤: "湯",
  汹: "洶",
  沟: "溝",
  没: "沒",
  沣: "灃",
  沤: "漚",
  沥: "瀝",
  沦: "淪",
  沧: "滄",
  沩: "溈",
  沪: "滬",
  沵: "濔",
  泞: "濘",
  泪: "淚",
  泶: "澩",
  泷: "瀧",
  泸: "瀘",
  泺: "濼",
  泻: "瀉",
  泼: "潑",
  泽: "澤",
  泾: "涇",
  洁: "潔",
  洒: "灑",
  洼: "窪",
  浃: "浹",
  浅: "淺",
  浆: "漿",
  浇: "澆",
  浈: "湞",
  浊: "濁",
  测: "測",
  浍: "澮",
  济: "濟",
  浏: "瀏",
  浐: "滻",
  浑: "渾",
  浒: "滸",
  浓: "濃",
  浔: "潯",
  浕: "濜",
  涛: "濤",
  涝: "澇",
  涞: "淶",
  涟: "漣",
  涠: "潿",
  涡: "渦",
  涣: "渙",
  涤: "滌",
  润: "潤",
  涧: "澗",
  涨: "漲",
  涩: "澀",
  淀: "澱",
  渊: "淵",
  渌: "淥",
  渍: "漬",
  渎: "瀆",
  渐: "漸",
  渑: "澠",
  渔: "漁",
  渖: "瀋",
  渗: "滲",
  温: "溫",
  游: "遊",
  湾: "灣",
  湿: "濕",
  溃: "潰",
  溅: "濺",
  溆: "漵",
  溇: "漊",
  滗: "潷",
  滚: "滾",
  滞: "滯",
  滟: "灧",
  滠: "灄",
  满: "滿",
  滢: "瀅",
  滤: "濾",
  滥: "濫",
  滦: "灤",
  滨: "濱",
  滩: "灘",
  滪: "澦",
  漤: "灠",
  潆: "瀠",
  潇: "瀟",
  潋: "瀲",
  潍: "濰",
  潜: "潛",
  潴: "瀦",
  澜: "瀾",
  濑: "瀨",
  灏: "灝",
  灭: "滅",
  灯: "燈",
  灵: "靈",
  灾: "災",
  灿: "燦",
  炀: "煬",
  炉: "爐",
  炖: "燉",
  炜: "煒",
  炝: "熗",
  点: "點",
  炼: "煉",
  炽: "熾",
  烁: "爍",
  烂: "爛",
  烃: "烴",
  烛: "燭",
  烟: "煙",
  烦: "煩",
  烧: "燒",
  烨: "燁",
  烩: "燴",
  烫: "燙",
  烬: "燼",
  热: "熱",
  焕: "煥",
  焖: "燜",
  煴: "熅",
  爱: "愛",
  爷: "爺",
  牍: "牘",
  牵: "牽",
  牺: "犧",
  犊: "犢",
  状: "狀",
  犷: "獷",
  犸: "獁",
  犹: "猶",
  狈: "狽",
  狞: "獰",
  独: "獨",
  狭: "狹",
  狮: "獅",
  狯: "獪",
  狰: "猙",
  狱: "獄",
  狲: "猻",
  猃: "獫",
  猎: "獵",
  猕: "獼",
  猡: "玀",
  猪: "豬",
  猫: "貓",
  献: "獻",
  猱: "獶",
  玑: "璣",
  玙: "璵",
  玛: "瑪",
  玮: "瑋",
  环: "環",
  现: "現",
  玱: "瑲",
  玺: "璽",
  珐: "琺",
  珑: "瓏",
  珰: "璫",
  珲: "琿",
  琏: "璉",
  琐: "瑣",
  琼: "瓊",
  瑶: "瑤",
  瑷: "璦",
  璎: "瓔",
  瓒: "瓚",
  瓮: "甕",
  瓯: "甌",
  电: "電",
  画: "畫",
  畅: "暢",
  畴: "疇",
  疖: "癤",
  疗: "療",
  疟: "瘧",
  疠: "癘",
  疡: "瘍",
  疬: "癧",
  疮: "瘡",
  疯: "瘋",
  疱: "皰",
  疴: "痾",
  痈: "癰",
  痉: "痙",
  痒: "癢",
  痖: "瘂",
  痨: "癆",
  痪: "瘓",
  痫: "癇",
  痴: "癡",
  瘅: "癉",
  瘗: "瘞",
  瘘: "瘻",
  瘪: "癟",
  瘫: "癱",
  瘾: "癮",
  瘿: "癭",
  癞: "癩",
  癣: "癬",
  皱: "皺",
  皲: "皸",
  盏: "盞",
  盐: "鹽",
  监: "監",
  盖: "蓋",
  盗: "盜",
  盘: "盤",
  着: "著",
  睁: "睜",
  睐: "睞",
  睑: "瞼",
  瞒: "瞞",
  瞩: "矚",
  矫: "矯",
  矶: "磯",
  矾: "礬",
  矿: "礦",
  砀: "碭",
  码: "碼",
  砖: "磚",
  砗: "硨",
  砚: "硯",
  砜: "碸",
  砺: "礪",
  砻: "礱",
  砾: "礫",
  础: "礎",
  硁: "硜",
  硕: "碩",
  硖: "硤",
  硗: "磽",
  硙: "磑",
  硚: "礄",
  确: "確",
  碍: "礙",
  碛: "磧",
  碜: "磣",
  礼: "禮",
  祎: "禕",
  祢: "禰",
  祷: "禱",
  祸: "禍",
  禀: "稟",
  禄: "祿",
  禅: "禪",
  离: "離",
  秃: "禿",
  秆: "稈",
  种: "種",
  积: "積",
  称: "稱",
  秽: "穢",
  税: "稅",
  稣: "穌",
  稳: "穩",
  穑: "穡",
  穷: "窮",
  窃: "竊",
  窍: "竅",
  窎: "窵",
  窑: "窯",
  窜: "竄",
  窝: "窩",
  窥: "窺",
  窦: "竇",
  竞: "競",
  笃: "篤",
  笋: "筍",
  笔: "筆",
  笕: "筧",
  笺: "箋",
  笼: "籠",
  笾: "籩",
  筚: "篳",
  筛: "篩",
  筜: "簹",
  筝: "箏",
  筹: "籌",
  签: "簽",
  简: "簡",
  箓: "籙",
  箦: "簀",
  箧: "篋",
  箨: "籜",
  箩: "籮",
  箪: "簞",
  箫: "簫",
  篑: "簣",
  篓: "簍",
  篮: "籃",
  篱: "籬",
  簖: "籪",
  籁: "籟",
  籴: "糴",
  类: "類",
  籼: "秈",
  粜: "糶",
  粝: "糲",
  粤: "粵",
  粪: "糞",
  粮: "糧",
  糁: "糝",
  糇: "餱",
  紧: "緊",
  絷: "縶",
  纟: "糸",
  纠: "糾",
  纡: "紆",
  红: "紅",
  纣: "紂",
  纤: "纖",
  纥: "紇",
  约: "約",
  级: "級",
  纨: "紈",
  纩: "纊",
  纪: "紀",
  纫: "紉",
  纬: "緯",
  纭: "紜",
  纯: "純",
  纰: "紕",
  纱: "紗",
  纲: "綱",
  纳: "納",
  纵: "縱",
  纶: "綸",
  纷: "紛",
  纸: "紙",
  纹: "紋",
  纺: "紡",
  纽: "紐",
  纾: "紓",
  线: "線",
  绀: "紺",
  绁: "紲",
  绂: "紱",
  练: "練",
  组: "組",
  绅: "紳",
  细: "細",
  织: "織",
  终: "終",
  绉: "縐",
  绊: "絆",
  绋: "紼",
  绌: "絀",
  绍: "紹",
  绎: "繹",
  经: "經",
  绐: "紿",
  绑: "綁",
  绒: "絨",
  结: "結",
  绔: "絝",
  绕: "繞",
  绗: "絎",
  绘: "繪",
  给: "給",
  绚: "絢",
  绛: "絳",
  络: "絡",
  绝: "絕",
  绞: "絞",
  统: "統",
  绠: "綆",
  绡: "綃",
  绢: "絹",
  绣: "繡",
  绥: "綏",
  绦: "絛",
  继: "繼",
  绨: "綈",
  绩: "績",
  绪: "緒",
  绫: "綾",
  续: "續",
  绮: "綺",
  绯: "緋",
  绰: "綽",
  绱: "緔",
  绲: "緄",
  绳: "繩",
  维: "維",
  绵: "綿",
  绶: "綬",
  绷: "繃",
  绸: "綢",
  绹: "綯",
  绺: "綹",
  绻: "綣",
  综: "綜",
  绽: "綻",
  绾: "綰",
  绿: "綠",
  缀: "綴",
  缁: "緇",
  缂: "緙",
  缃: "緗",
  缄: "緘",
  缅: "緬",
  缆: "纜",
  缇: "緹",
  缈: "緲",
  缉: "緝",
  缊: "縕",
  缋: "繢",
  缌: "緦",
  缍: "綞",
  缎: "緞",
  缏: "緶",
  缑: "緱",
  缒: "縋",
  缓: "緩",
  缔: "締",
  缕: "縷",
  编: "編",
  缗: "緡",
  缘: "緣",
  缙: "縉",
  缚: "縛",
  缛: "縟",
  缜: "縝",
  缝: "縫",
  缟: "縞",
  缠: "纏",
  缡: "縭",
  缢: "縊",
  缣: "縑",
  缤: "繽",
  缥: "縹",
  缦: "縵",
  缧: "縲",
  缨: "纓",
  缩: "縮",
  缪: "繆",
  缫: "繅",
  缬: "纈",
  缭: "繚",
  缮: "繕",
  缯: "繒",
  缰: "韁",
  缱: "繾",
  缲: "繰",
  缳: "繯",
  缴: "繳",
  缵: "纘",
  罂: "罌",
  网: "網",
  罗: "羅",
  罚: "罰",
  罢: "罷",
  罴: "羆",
  羁: "羈",
  羡: "羨",
  翘: "翹",
  耧: "耬",
  耸: "聳",
  耻: "恥",
  聂: "聶",
  聋: "聾",
  职: "職",
  聍: "聹",
  联: "聯",
  聩: "聵",
  聪: "聰",
  肃: "肅",
  肠: "腸",
  肤: "膚",
  肮: "骯",
  肴: "餚",
  肾: "腎",
  肿: "腫",
  胀: "脹",
  胁: "脅",
  胆: "膽",
  胜: "勝",
  胧: "朧",
  胨: "腖",
  胪: "臚",
  胫: "脛",
  胶: "膠",
  脉: "脈",
  脍: "膾",
  脏: "髒",
  脐: "臍",
  脑: "腦",
  脓: "膿",
  脔: "臠",
  脚: "腳",
  脱: "脫",
  脶: "腡",
  脸: "臉",
  腊: "臘",
  腌: "醃",
  腘: "膕",
  腭: "齶",
  腻: "膩",
  腼: "靦",
  腽: "膃",
  腾: "騰",
  膑: "臏",
  臜: "臢",
  舆: "輿",
  舰: "艦",
  舱: "艙",
  艰: "艱",
  艺: "藝",
  节: "節",
  芈: "羋",
  芗: "薌",
  芜: "蕪",
  芦: "蘆",
  苁: "蓯",
  苇: "葦",
  苈: "藶",
  苋: "莧",
  苌: "萇",
  苍: "蒼",
  苎: "苧",
  苏: "蘇",
  苹: "蘋",
  茎: "莖",
  茏: "蘢",
  茑: "蔦",
  茔: "塋",
  茕: "煢",
  茧: "繭",
  荆: "荊",
  荐: "薦",
  荙: "薘",
  荚: "莢",
  荛: "蕘",
  荜: "蓽",
  荞: "蕎",
  荟: "薈",
  荠: "薺",
  荡: "蕩",
  荣: "榮",
  荤: "葷",
  荥: "滎",
  荦: "犖",
  荧: "熒",
  荨: "蕁",
  荩: "藎",
  荪: "蓀",
  荫: "蔭",
  荬: "蕒",
  荭: "葒",
  荮: "葤",
  药: "藥",
  莅: "蒞",
  莱: "萊",
  莲: "蓮",
  莳: "蒔",
  莴: "萵",
  莶: "薟",
  获: "獲",
  莹: "瑩",
  莺: "鶯",
  莼: "蓴",
  萚: "蘀",
  萝: "蘿",
  萤: "螢",
  营: "營",
  萦: "縈",
  萧: "蕭",
  萨: "薩",
  葱: "蔥",
  蒇: "蕆",
  蒉: "蕢",
  蒋: "蔣",
  蒌: "蔞",
  蓝: "藍",
  蓟: "薊",
  蓠: "蘺",
  蓣: "蕷",
  蓥: "鎣",
  蓦: "驀",
  蔷: "薔",
  蔹: "蘞",
  蔺: "藺",
  蕲: "蘄",
  蕴: "蘊",
  薮: "藪",
  藓: "蘚",
  虏: "虜",
  虑: "慮",
  虚: "虛",
  虫: "蟲",
  虬: "虯",
  虮: "蟣",
  虱: "蝨",
  虽: "雖",
  虾: "蝦",
  虿: "蠆",
  蚀: "蝕",
  蚁: "蟻",
  蚂: "螞",
  蚕: "蠶",
  蚝: "蠔",
  蚬: "蜆",
  蛊: "蠱",
  蛎: "蠣",
  蛏: "蟶",
  蛮: "蠻",
  蛰: "蟄",
  蛱: "蛺",
  蛲: "蟯",
  蛳: "螄",
  蛴: "蠐",
  蜕: "蛻",
  蜗: "蝸",
  蝇: "蠅",
  蝈: "蟈",
  蝉: "蟬",
  蝼: "螻",
  蝾: "蠑",
  螀: "螿",
  螨: "蟎",
  蟏: "蠨",
  衅: "釁",
  衔: "銜",
  补: "補",
  表: "表",
  袄: "襖",
  袅: "裊",
  袜: "襪",
  袭: "襲",
  袯: "襏",
  装: "裝",
  裆: "襠",
  裈: "褌",
  裢: "褳",
  裣: "襝",
  裤: "褲",
  裥: "襇",
  褛: "褸",
  褴: "襤",
  见: "見",
  观: "觀",
  规: "規",
  觅: "覓",
  视: "視",
  览: "覽",
  觉: "覺",
  觊: "覬",
  觋: "覡",
  觌: "覿",
  觎: "覦",
  觏: "覯",
  觐: "覲",
  觑: "覷",
  觞: "觴",
  触: "觸",
  言: "言",
  订: "訂",
  讣: "訃",
  计: "計",
  讯: "訊",
  讨: "討",
  让: "讓",
  讪: "訕",
  讫: "訖",
  训: "訓",
  议: "議",
  讯: "訊",
  记: "記",
  讲: "講",
  讳: "諱",
  讴: "謳",
  讵: "詎",
  讶: "訝",
  讷: "訥",
  许: "許",
  讹: "訛",
  论: "論",
  讼: "訟",
  讽: "諷",
  设: "設",
  访: "訪",
  诀: "訣",
  证: "證",
  诂: "詁",
  诃: "訶",
  评: "評",
  诅: "詛",
  识: "識",
  诈: "詐",
  诉: "訴",
  诊: "診",
  诋: "詆",
  诌: "謅",
  词: "詞",
  诎: "詘",
  诏: "詔",
  译: "譯",
  诒: "詒",
  诓: "誆",
  诔: "誄",
  试: "試",
  诖: "詿",
  诗: "詩",
  诘: "詰",
  诙: "詼",
  诚: "誠",
  诛: "誅",
  诜: "詵",
  话: "話",
  诞: "誕",
  诟: "詬",
  诠: "詮",
  诡: "詭",
  询: "詢",
  诣: "詣",
  诤: "諍",
  该: "該",
  详: "詳",
  诧: "詫",
  诨: "諢",
  诩: "詡",
  诫: "誡",
  诬: "誣",
  语: "語",
  诮: "誚",
  误: "誤",
  诰: "誥",
  诱: "誘",
  诲: "誨",
  诳: "誑",
  说: "說",
  诵: "誦",
  诶: "誒",
  请: "請",
  诸: "諸",
  诹: "諏",
  诺: "諾",
  读: "讀",
  诼: "諑",
  诽: "誹",
  课: "課",
  诿: "諉",
  谀: "諛",
  谁: "誰",
  谂: "諗",
  调: "調",
  谄: "諂",
  谅: "諒",
  谆: "諄",
  谇: "誶",
  谈: "談",
  谊: "誼",
  谋: "謀",
  谌: "諶",
  谍: "諜",
  谎: "謊",
  谏: "諫",
  谐: "諧",
  谑: "謔",
  谒: "謁",
  谓: "謂",
  谔: "諤",
  谕: "諭",
  谖: "諼",
  谗: "讒",
  谘: "諮",
  谙: "諳",
  谚: "諺",
  谛: "諦",
  谜: "謎",
  谝: "諞",
  谞: "諝",
  谟: "謨",
  谠: "讜",
  谡: "謖",
  谢: "謝",
  谣: "謠",
  谤: "謗",
  谥: "諡",
  谦: "謙",
  谧: "謐",
  谨: "謹",
  谩: "謾",
  谪: "謫",
  谫: "譾",
  谬: "謬",
  谭: "譚",
  谮: "譖",
  谯: "譙",
  谰: "讕",
  谱: "譜",
  谲: "譎",
  谳: "讞",
  谴: "譴",
  谵: "譫",
  谶: "讖",
  豁: "豁",
  贝: "貝",
  贞: "貞",
  负: "負",
  贡: "貢",
  财: "財",
  责: "責",
  贤: "賢",
  败: "敗",
  账: "帳",
  货: "貨",
  质: "質",
  贩: "販",
  贪: "貪",
  贫: "貧",
  贬: "貶",
  购: "購",
  贮: "貯",
  贯: "貫",
  贰: "貳",
  贱: "賤",
  贲: "賁",
  贳: "貰",
  贴: "貼",
  贵: "貴",
  贶: "貺",
  贷: "貸",
  贸: "貿",
  费: "費",
  贺: "賀",
  贻: "貽",
  贼: "賊",
  贽: "贄",
  贾: "賈",
  贿: "賄",
  赀: "貲",
  赁: "賃",
  赂: "賂",
  赃: "贓",
  资: "資",
  赅: "賅",
  赆: "贐",
  赇: "賕",
  赈: "賑",
  赉: "賚",
  赊: "賒",
  赋: "賦",
  赌: "賭",
  赍: "齎",
  赎: "贖",
  赏: "賞",
  赐: "賜",
  赑: "贔",
  赒: "賙",
  赓: "賡",
  赔: "賠",
  赕: "賧",
  赖: "賴",
  赗: "賵",
  赘: "贅",
  赙: "賻",
  赚: "賺",
  赛: "賽",
  赜: "賾",
  赝: "贗",
  赞: "讚",
  赠: "贈",
  赡: "贍",
  赢: "贏",
  赣: "贛",
  赵: "趙",
  赶: "趕",
  趋: "趨",
  趱: "趲",
  跃: "躍",
  跄: "蹌",
  跞: "躒",
  践: "踐",
  跷: "蹺",
  踊: "踴",
  踌: "躊",
  踪: "蹤",
  踬: "躓",
  踯: "躑",
  蹑: "躡",
  蹒: "蹣",
  蹰: "躕",
  躏: "躪",
  车: "車",
  轧: "軋",
  轨: "軌",
  轩: "軒",
  轫: "軔",
  转: "轉",
  轭: "軛",
  轮: "輪",
  软: "軟",
  轰: "轟",
  轱: "軲",
  轲: "軻",
  轳: "轤",
  轴: "軸",
  轵: "軹",
  轶: "軼",
  轷: "軤",
  轸: "軫",
  轹: "轢",
  轺: "軺",
  轻: "輕",
  轼: "軾",
  载: "載",
  轾: "輊",
  轿: "轎",
  辂: "輅",
  较: "較",
  辄: "輒",
  辅: "輔",
  辆: "輛",
  辈: "輩",
  辉: "輝",
  辊: "輥",
  辋: "輞",
  辌: "輬",
  辍: "輟",
  辎: "輜",
  辏: "輳",
  辐: "輻",
  辑: "輯",
  输: "輸",
  辔: "轡",
  辕: "轅",
  辖: "轄",
  辗: "輾",
  辘: "轆",
  辙: "轍",
  辚: "轔",
  辞: "辭",
  辩: "辯",
  辫: "辮",
  边: "邊",
  辽: "遼",
  达: "達",
  迁: "遷",
  过: "過",
  迈: "邁",
  运: "運",
  还: "還",
  这: "這",
  进: "進",
  远: "遠",
  违: "違",
  连: "連",
  迟: "遲",
  迩: "邇",
  迹: "跡",
  适: "適",
  选: "選",
  逊: "遜",
  递: "遞",
  逦: "邐",
  逻: "邏",
  遗: "遺",
  遥: "遙",
  邓: "鄧",
  邝: "鄺",
  邬: "鄔",
  邮: "郵",
  邹: "鄒",
  邺: "鄴",
  邻: "鄰",
  郁: "鬱",
  郏: "郟",
  郐: "鄶",
  郑: "鄭",
  郓: "鄆",
  郦: "酈",
  郧: "鄖",
  郸: "鄲",
  酝: "醞",
  酦: "醱",
  酱: "醬",
  酽: "釅",
  酾: "釃",
  酿: "釀",
  释: "釋",
  鉴: "鑒",
  针: "針",
  钉: "釘",
  钊: "釗",
  钋: "釙",
  钌: "釕",
  钍: "釷",
  钎: "釺",
  钏: "釧",
  钐: "釤",
  钓: "釣",
  钔: "鍆",
  钕: "釹",
  钗: "釵",
  钙: "鈣",
  钚: "鈈",
  钛: "鈦",
  钜: "鉅",
  钝: "鈍",
  钞: "鈔",
  钟: "鐘",
  钠: "鈉",
  钡: "鋇",
  钢: "鋼",
  钣: "鈑",
  钤: "鈐",
  钥: "鑰",
  钦: "欽",
  钧: "鈞",
  钨: "鎢",
  钩: "鉤",
  钪: "鈧",
  钫: "鈁",
  钬: "鈥",
  钭: "鈄",
  钮: "鈕",
  钯: "鈀",
  钰: "鈺",
  钱: "錢",
  钲: "鉦",
  钳: "鉗",
  钴: "鈷",
  钵: "缽",
  钶: "鈳",
  钷: "鉕",
  钸: "鈽",
  钹: "鈸",
  钺: "鉞",
  钻: "鑽",
  钼: "鉬",
  钽: "鉭",
  钾: "鉀",
  钿: "鈿",
  铀: "鈾",
  铁: "鐵",
  铂: "鉑",
  铃: "鈴",
  铄: "鑠",
  铅: "鉛",
  铆: "鉚",
  铈: "鈰",
  铉: "鉉",
  铊: "鉈",
  铋: "鉍",
  铌: "鈮",
  铍: "鈹",
  铎: "鐸",
  铐: "銬",
  铑: "銠",
  铒: "鉺",
  铕: "銪",
  铗: "鋏",
  铘: "鋣",
  铙: "鐃",
  铚: "銍",
  铛: "鐺",
  铜: "銅",
  铝: "鋁",
  铞: "銱",
  铟: "銦",
  铠: "鎧",
  铡: "鍘",
  铢: "銖",
  铣: "銑",
  铤: "鋌",
  铥: "銩",
  铧: "鏵",
  铨: "銓",
  铩: "鎩",
  铪: "鉿",
  铫: "銚",
  铬: "鉻",
  铭: "銘",
  铮: "錚",
  铯: "銫",
  铰: "鉸",
  铱: "銥",
  铲: "鏟",
  铳: "銃",
  铴: "鐋",
  铵: "銨",
  银: "銀",
  铷: "銣",
  铸: "鑄",
  铹: "鐒",
  铺: "鋪",
  铻: "鋙",
  铼: "錸",
  铽: "鋱",
  链: "鏈",
  铿: "鏗",
  销: "銷",
  锁: "鎖",
  锂: "鋰",
  锃: "鋥",
  锄: "鋤",
  锅: "鍋",
  锆: "鋯",
  锇: "鋨",
  锈: "鏽",
  锉: "銼",
  锊: "鋝",
  锋: "鋒",
  锌: "鋅",
  锍: "鋶",
  锎: "鐦",
  锏: "鐧",
  锐: "銳",
  锑: "銻",
  锒: "鋃",
  锓: "鋟",
  锔: "鋦",
  锕: "錒",
  锖: "錆",
  锗: "鍺",
  锘: "鍩",
  错: "錯",
  锚: "錨",
  锛: "錛",
  锜: "錡",
  锝: "鍀",
  锞: "錁",
  锟: "錕",
  锠: "錩",
  锡: "錫",
  锢: "錮",
  锣: "鑼",
  锤: "錘",
  锥: "錐",
  锦: "錦",
  锧: "鑕",
  锨: "鍁",
  锩: "錈",
  锪: "鍃",
  锫: "錇",
  锬: "錟",
  锭: "錠",
  键: "鍵",
  锯: "鋸",
  锰: "錳",
  锱: "錙",
  锲: "鍥",
  锳: "鍈",
  锴: "鍇",
  锵: "鏘",
  锶: "鍶",
  锷: "鍔",
  锸: "鍤",
  锹: "鍬",
  锺: "鍾",
  锻: "鍛",
  锼: "鎪",
  锽: "鍠",
  锾: "鍰",
  锿: "鎄",
  镀: "鍍",
  镁: "鎂",
  镂: "鏤",
  镃: "鎡",
  镄: "鐨",
  镅: "鎇",
  镆: "鏌",
  镇: "鎮",
  镈: "鎛",
  镉: "鎘",
  镊: "鑷",
  镋: "钂",
  镌: "鐫",
  镍: "鎳",
  镎: "鎿",
  镏: "鎦",
  镐: "鎬",
  镑: "鎊",
  镒: "鎰",
  镓: "鎵",
  镔: "鑌",
  镕: "鎔",
  镖: "鏢",
  镗: "鏜",
  镘: "鏝",
  镙: "鏍",
  镚: "鏰",
  镛: "鏞",
  镜: "鏡",
  镝: "鏑",
  镞: "鏃",
  镟: "鏇",
  镠: "鏐",
  镡: "鐔",
  镢: "钁",
  镣: "鐐",
  镤: "鏷",
  镥: "鑥",
  镦: "鐓",
  镧: "鑭",
  镨: "鐠",
  镩: "鑹",
  镪: "鏹",
  镫: "鐙",
  镬: "鑊",
  镭: "鐳",
  镮: "鐶",
  镯: "鐲",
  镰: "鐮",
  镱: "鐿",
  镲: "鑔",
  镳: "鑣",
  镴: "鑞",
  镶: "鑲",
  长: "長",
  门: "門",
  闩: "閂",
  闪: "閃",
  闫: "閆",
  闭: "閉",
  问: "問",
  闯: "闖",
  闰: "閏",
  闱: "闈",
  闲: "閒",
  闳: "閎",
  间: "間",
  闵: "閔",
  闶: "閌",
  闷: "悶",
  闸: "閘",
  闹: "鬧",
  闺: "閨",
  闻: "聞",
  闼: "闥",
  闽: "閩",
  闾: "閭",
  阀: "閥",
  阁: "閣",
  阂: "閡",
  阃: "閫",
  阄: "鬮",
  阅: "閱",
  阆: "閬",
  阇: "闍",
  阈: "閾",
  阉: "閹",
  阊: "閶",
  阋: "鬩",
  阌: "閿",
  阍: "閽",
  阎: "閻",
  阏: "閼",
  阐: "闡",
  阑: "闌",
  阒: "闃",
  阔: "闊",
  阕: "闋",
  阖: "闔",
  阗: "闐",
  阘: "闒",
  阙: "闕",
  阚: "闞",
  队: "隊",
  阳: "陽",
  阴: "陰",
  阵: "陣",
  阶: "階",
  际: "際",
  陆: "陸",
  陇: "隴",
  陈: "陳",
  陉: "陘",
  陕: "陝",
  陧: "隉",
  陨: "隕",
  险: "險",
  随: "隨",
  隐: "隱",
  隶: "隸",
  难: "難",
  雏: "雛",
  雠: "讎",
  雳: "靂",
  雾: "霧",
  霁: "霽",
  霉: "黴",
  靓: "靚",
  静: "靜",
  面: "面",
  韦: "韋",
  韧: "韌",
  韩: "韓",
  韪: "韙",
  韫: "韞",
  韬: "韜",
  页: "頁",
  顶: "頂",
  顷: "頃",
  项: "項",
  顺: "順",
  须: "須",
  顽: "頑",
  顾: "顧",
  顿: "頓",
  颀: "頎",
  颁: "頒",
  颂: "頌",
  颃: "頏",
  预: "預",
  颅: "顱",
  领: "領",
  颇: "頗",
  颈: "頸",
  颉: "頡",
  颊: "頰",
  颌: "頜",
  颍: "潁",
  颏: "頦",
  颐: "頤",
  频: "頻",
  颓: "頹",
  颔: "頷",
  颖: "穎",
  颗: "顆",
  题: "題",
  颚: "顎",
  颛: "顓",
  颜: "顏",
  额: "額",
  颞: "顳",
  颟: "顢",
  颠: "顛",
  颡: "顙",
  颢: "顥",
  颤: "顫",
  风: "風",
  飏: "颺",
  飐: "颭",
  飑: "颮",
  飒: "颯",
  飓: "颶",
  飔: "颸",
  飕: "颼",
  飘: "飄",
  飙: "飆",
  飞: "飛",
  饣: "食",
  饥: "飢",
  饧: "餳",
  饨: "飩",
  饩: "餼",
  饪: "飪",
  饫: "飫",
  饬: "飭",
  饭: "飯",
  饮: "飲",
  饯: "餞",
  饰: "飾",
  饱: "飽",
  饲: "飼",
  饴: "飴",
  饵: "餌",
  饶: "饒",
  饷: "餉",
  饸: "餄",
  饺: "餃",
  饼: "餅",
  饽: "餑",
  饿: "餓",
  馀: "餘",
  馁: "餒",
  馂: "餕",
  馄: "餛",
  馅: "餡",
  馆: "館",
  馇: "餷",
  馈: "饋",
  馉: "餶",
  馊: "餿",
  馋: "饞",
  馍: "饃",
  馎: "餺",
  馏: "餾",
  馐: "饈",
  馑: "饉",
  馒: "饅",
  馓: "饊",
  馔: "饌",
  馕: "饢",
  马: "馬",
  驭: "馭",
  驮: "馱",
  驯: "馴",
  驰: "馳",
  驱: "驅",
  驳: "駁",
  驴: "驢",
  驵: "駔",
  驶: "駛",
  驷: "駟",
  驸: "駙",
  驹: "駒",
  驺: "騶",
  驻: "駐",
  驼: "駝",
  驽: "駑",
  驾: "駕",
  驿: "驛",
  骀: "駘",
  骁: "驍",
  骂: "罵",
  骄: "驕",
  骅: "驊",
  骆: "駱",
  骇: "駭",
  骈: "駢",
  骊: "驪",
  骋: "騁",
  验: "驗",
  骎: "駸",
  骏: "駿",
  骐: "騏",
  骑: "騎",
  骒: "騍",
  骓: "騅",
  骖: "驂",
  骗: "騙",
  骘: "騭",
  骛: "騖",
  骜: "驁",
  骝: "騮",
  骞: "騫",
  骟: "騸",
  骠: "驃",
  骡: "騾",
  骢: "驄",
  骣: "驏",
  骤: "驟",
  骥: "驥",
  骧: "驤",
  髅: "髏",
  髋: "髖",
  髌: "髕",
  鬓: "鬢",
  魇: "魘",
  鱼: "魚",
  鲁: "魯",
  鲂: "魴",
  鲃: "䰾",
  鲅: "鮁",
  鲆: "鮃",
  鲇: "鯰",
  鲈: "鱸",
  鲉: "鮋",
  鲊: "鮓",
  鲋: "鮒",
  鲍: "鮑",
  鲎: "鱟",
  鲐: "鮐",
  鲑: "鮭",
  鲒: "鮚",
  鲔: "鮪",
  鲕: "鮞",
  鲚: "鱭",
  鲛: "鮫",
  鲜: "鮮",
  鲟: "鱘",
  鲠: "鯁",
  鲡: "鱺",
  鲢: "鰱",
  鲣: "鰹",
  鲤: "鯉",
  鲥: "鰣",
  鲦: "鰷",
  鲧: "鯀",
  鲨: "鯊",
  鲩: "鯇",
  鲫: "鯽",
  鲭: "鯖",
  鲮: "鯪",
  鲰: "鯫",
  鲱: "鯡",
  鲲: "鯤",
  鲳: "鯧",
  鲴: "鯝",
  鲵: "鯢",
  鲶: "鯰",
  鲷: "鯛",
  鲸: "鯨",
  鲺: "鯴",
  鲻: "鯔",
  鲼: "鱝",
  鲽: "鰈",
  鲿: "鱨",
  鳀: "鯷",
  鳁: "鰮",
  鳂: "鰃",
  鳃: "鰓",
  鳄: "鱷",
  鳅: "鰍",
  鳆: "鰒",
  鳇: "鰉",
  鳌: "鰲",
  鳍: "鰭",
  鳎: "鰨",
  鳏: "鰥",
  鳐: "鰩",
  鳓: "鰳",
  鳔: "鰾",
  鳕: "鱈",
  鳖: "鱉",
  鳗: "鰻",
  鳘: "鰵",
  鳙: "鱅",
  鳜: "鱖",
  鳝: "鱔",
  鳞: "鱗",
  鸟: "鳥",
  鸠: "鳩",
  鸡: "雞",
  鸢: "鳶",
  鸣: "鳴",
  鸥: "鷗",
  鸦: "鴉",
  鸨: "鴇",
  鸩: "鴆",
  鸪: "鴣",
  鸫: "鶇",
  鸬: "鸕",
  鸭: "鴨",
  鸯: "鴦",
  鸰: "鴒",
  鸱: "鴟",
  鸲: "鴝",
  鸳: "鴛",
  鸵: "鴕",
  鸶: "鷥",
  鸷: "鷙",
  鸸: "鴯",
  鸹: "鴰",
  鸺: "鵂",
  鸽: "鴿",
  鸾: "鸞",
  鸿: "鴻",
  鹁: "鵓",
  鹂: "鸝",
  鹃: "鵑",
  鹄: "鵠",
  鹅: "鵝",
  鹆: "鵒",
  鹇: "鷳",
  鹈: "鵜",
  鹉: "鵡",
  鹊: "鵲",
  鹋: "鶓",
  鹌: "鵪",
  鹎: "鵯",
  鹏: "鵬",
  鹐: "鵮",
  鹑: "鶉",
  鹒: "鶊",
  鹓: "鵷",
  鹔: "鷫",
  鹕: "鶘",
  鹖: "鶡",
  鹗: "鶚",
  鹘: "鶻",
  鹚: "鶿",
  鹜: "鶩",
  鹞: "鷂",
  鹟: "鶲",
  鹠: "鶹",
  鹡: "鶺",
  鹢: "鷁",
  鹣: "鶼",
  鹤: "鶴",
  鹦: "鸚",
  鹧: "鷓",
  鹨: "鷚",
  鹩: "鷯",
  鹪: "鷦",
  鹫: "鷲",
  鹬: "鷸",
  鹭: "鷺",
  鹰: "鷹",
  鹱: "鸌",
  鹳: "鸛",
  鹾: "鹺",
  麦: "麥",
  黄: "黃",
  黉: "黌",
  黩: "黷",
  黪: "黲",
  黾: "黽",
  鼋: "黿",
  鼍: "鼉",
  鼹: "鼴",
  齐: "齊",
  齑: "齏",
  齿: "齒",
  龀: "齔",
  龃: "齟",
  龄: "齡",
  龅: "齙",
  龆: "齠",
  龇: "齜",
  龈: "齦",
  龉: "齬",
  龊: "齪",
  龋: "齲",
  龌: "齷",
  龙: "龍",
  龚: "龔",
  龛: "龕",
};

const defaultLessons = [
  {
    id: "real-context",
    title: "Use Real Context Before Memorizing Words",
    host: "LinguaTube Studio",
    level: "B1",
    duration: 96,
    skill: "Listening · Context",
    videoId: "5MgBikgcWnY",
    summary: "Build useful phrases through short, useful scenes.",
    cues: [
      {
        start: 0,
        end: 7,
        en: "Before you memorize a new word, watch how it appears in a real sentence.",
        zh: "在背新單字之前，先看它如何出現在真實句子裡。",
      },
      {
        start: 7,
        end: 15,
        en: "Context tells you the situation, the feeling, and the kind of response people expect.",
        zh: "語境會告訴你情境、語氣，以及別人預期的回應方式。",
      },
      {
        start: 15,
        end: 24,
        en: "If a speaker says I am running late, they are not exercising; they are behind schedule.",
        zh: "如果對方說 I am running late，不是在跑步，而是快遲到了。",
      },
      {
        start: 24,
        end: 33,
        en: "Pause after each sentence and repeat the rhythm, not just the individual sounds.",
        zh: "每句後暫停並跟讀整體節奏，不只是單一發音。",
      },
      {
        start: 33,
        end: 43,
        en: "Your goal is to borrow the speaker's timing until the phrase feels natural.",
        zh: "目標是借用說話者的節奏，直到片語聽起來自然。",
      },
      {
        start: 43,
        end: 54,
        en: "When you meet the word again tomorrow, the scene will help you remember it faster.",
        zh: "明天再遇到這個字時，畫面會幫你更快想起意思。",
      },
      {
        start: 54,
        end: 66,
        en: "Save only the words you can imagine using in your own conversation.",
        zh: "只收藏那些你想像得到自己會用上的單字。",
      },
      {
        start: 66,
        end: 79,
        en: "A smaller notebook with useful examples is better than a long list you never open.",
        zh: "一本有實用例句的小單字本，勝過一長串不會再打開的清單。",
      },
      {
        start: 79,
        end: 96,
        en: "Watch once for meaning, watch again for sound, then speak with the echo.",
        zh: "第一遍看意思，第二遍聽聲音，最後跟著回音開口說。",
      },
    ],
  },
  {
    id: "speaking-confidence",
    title: "Small Talk That Sounds Confident",
    host: "Workplace English",
    level: "A2",
    duration: 88,
    skill: "Speaking · Conversation",
    videoId: "Ks-_Mh1QhMc",
    summary: "Practice short answers for everyday meetings.",
    cues: [
      {
        start: 0,
        end: 8,
        en: "A confident answer does not need to be long; it needs to be clear.",
        zh: "有自信的回答不必很長，重點是清楚。",
      },
      {
        start: 8,
        end: 17,
        en: "Start with one direct sentence, then add a reason if the listener needs more.",
        zh: "先說一句直接的回答，對方需要更多時再補理由。",
      },
      {
        start: 17,
        end: 27,
        en: "For example, say I can take care of that by Friday.",
        zh: "例如可以說：I can take care of that by Friday.",
      },
      {
        start: 27,
        end: 37,
        en: "Then add, I already have the numbers from the sales report.",
        zh: "接著補一句：I already have the numbers from the sales report.",
      },
      {
        start: 37,
        end: 49,
        en: "Notice how the second sentence gives evidence without making the answer heavy.",
        zh: "注意第二句提供依據，但不會讓回答變得笨重。",
      },
      {
        start: 49,
        end: 61,
        en: "If you are unsure, use I need to check one detail before I confirm.",
        zh: "如果還不確定，可以說：I need to check one detail before I confirm.",
      },
      {
        start: 61,
        end: 74,
        en: "This sounds professional because it names the next step.",
        zh: "這聽起來專業，因為它說明了下一步。",
      },
      {
        start: 74,
        end: 88,
        en: "Short, specific sentences help people trust what you say.",
        zh: "簡短又具體的句子，會讓人更信任你的表達。",
      },
    ],
  },
  {
    id: "listening-detail",
    title: "Catch Details Without Translating Everything",
    host: "Daily Listening",
    level: "B2",
    duration: 104,
    skill: "Listening · Note-taking",
    videoId: "arj7oStGLkU",
    summary: "Train your ear to find names, numbers, and contrast.",
    cues: [
      {
        start: 0,
        end: 9,
        en: "When a video feels too fast, do not chase every word.",
        zh: "影片太快時，不要追每一個字。",
      },
      {
        start: 9,
        end: 20,
        en: "Listen for anchors: names, numbers, dates, places, and repeated phrases.",
        zh: "先聽錨點：人名、數字、日期、地點和重複的片語。",
      },
      {
        start: 20,
        end: 31,
        en: "These anchors tell you where the speaker is going, even when some words disappear.",
        zh: "即使有些字漏掉，這些錨點也會告訴你說話者的方向。",
      },
      {
        start: 31,
        end: 43,
        en: "Contrast words such as but, however, and instead are especially important.",
        zh: "but、however、instead 這類轉折字特別重要。",
      },
      {
        start: 43,
        end: 56,
        en: "They often signal that the speaker is changing the point or correcting an assumption.",
        zh: "它們常表示說話者正在轉換重點，或修正一個假設。",
      },
      {
        start: 56,
        end: 70,
        en: "Write a short summary after each section, then compare it with the subtitles.",
        zh: "每一段後寫一句短摘要，再和字幕比對。",
      },
      {
        start: 70,
        end: 86,
        en: "You are training attention, not proving that you understand every sound.",
        zh: "你是在訓練注意力，不是在證明自己聽懂每個音。",
      },
      {
        start: 86,
        end: 104,
        en: "With practice, your brain starts grouping words into meaningful chunks.",
        zh: "多練幾次後，大腦會開始把單字組成有意義的語塊。",
      },
    ],
  },
];

let lessons = [...defaultLessons.map(normalizeLessonDefinition), ...sanitizeCustomLessons(readStorage(CUSTOM_LESSONS_KEY, []))];

const dictionary = {
  anchor: {
    pronunciation: "/ˈæŋ.kɚ/",
    definition: "a detail that helps you stay oriented while listening",
    example: "Dates and names can work as anchors in a fast lecture.",
  },
  assumption: {
    pronunciation: "/əˈsʌmp.ʃən/",
    definition: "something you believe is true before checking it",
    example: "The phrase corrected my assumption about the speaker's plan.",
  },
  clarity: {
    pronunciation: "/ˈkler.ə.ti/",
    definition: "the quality of being easy to understand",
    example: "Short sentences can give your answer more clarity.",
  },
  confident: {
    pronunciation: "/ˈkɑːn.fə.dənt/",
    definition: "feeling or sounding sure about what you are saying",
    example: "She sounded confident because her answer was specific.",
  },
  context: {
    pronunciation: "/ˈkɑːn.tekst/",
    definition: "the situation around a word or sentence that helps explain its meaning",
    example: "The context showed that running late meant being behind schedule.",
  },
  contrast: {
    pronunciation: "/ˈkɑːn.træst/",
    definition: "a clear difference between two ideas",
    example: "But introduces a contrast with the first idea.",
  },
  evidence: {
    pronunciation: "/ˈev.ə.dəns/",
    definition: "facts or details that support what you say",
    example: "Use evidence to make a short answer stronger.",
  },
  memorize: {
    pronunciation: "/ˈmem.ə.raɪz/",
    definition: "to learn something so you can remember it later",
    example: "It is easier to memorize a word after seeing it in a scene.",
  },
  professional: {
    pronunciation: "/prəˈfeʃ.ən.əl/",
    definition: "showing skill, care, and good judgment at work",
    example: "Naming the next step makes the reply sound professional.",
  },
  rhythm: {
    pronunciation: "/ˈrɪð.əm/",
    definition: "the pattern of sounds and pauses in speech",
    example: "Repeat the rhythm of the sentence, not only the words.",
  },
  shadowing: {
    pronunciation: "/ˈʃæd.oʊ.ɪŋ/",
    definition: "speaking immediately after a speaker to copy rhythm and pronunciation",
    example: "Shadowing helps your mouth learn natural timing.",
  },
  specific: {
    pronunciation: "/spəˈsɪf.ɪk/",
    definition: "clear and exact",
    example: "A specific deadline is easier to trust.",
  },
};

const elements = {
  fileModeNotice: document.querySelector("#fileModeNotice"),
  localPreviewLink: document.querySelector("#localPreviewLink"),
  shell: document.querySelector(".platform-shell"),
  watchLayout: document.querySelector(".watch-layout"),
  splitResizeHandle: document.querySelector("#splitResizeHandle"),
  toggleSidebar: document.querySelector("#toggleSidebar"),
  mobileLibraryToggle: document.querySelector("#mobileLibraryToggle"),
  learningStage: document.querySelector(".learning-stage"),
  lessonSearch: document.querySelector("#lessonSearch"),
  lessonList: document.querySelector("#lessonList"),
  customLesson: document.querySelector(".custom-lesson"),
  customLessonForm: document.querySelector("#customLessonForm"),
  customVideoUrl: document.querySelector("#customVideoUrl"),
  customTitle: document.querySelector("#customTitle"),
  customTranscript: document.querySelector("#customTranscript"),
  customStatus: document.querySelector("#customStatus"),
  levelTabs: [...document.querySelectorAll(".level-tab")],
  lessonMeta: document.querySelector("#lessonMeta"),
  lessonTitle: document.querySelector("#lessonTitle"),
  toggleTheaterMode: document.querySelector("#toggleTheaterMode"),
  savedVideosToggle: document.querySelector("#savedVideosToggle"),
  savedVideosPanel: document.querySelector("#savedVideosPanel"),
  savedVideosList: document.querySelector("#savedVideosList"),
  savedVideosCount: document.querySelector("#savedVideosCount"),
  closeSavedVideos: document.querySelector("#closeSavedVideos"),
  bookmarkLesson: document.querySelector("#bookmarkLesson"),
  videoShell: document.querySelector(".video-shell"),
  playerControlOverlay: document.querySelector(".player-control-overlay"),
  videoFallback: document.querySelector("#videoFallback"),
  exitFullscreenOverlay: document.querySelector("#exitFullscreenOverlay"),
  captionOverlay: document.querySelector("#captionOverlay"),
  captionResizeHandle: document.querySelector("#captionResizeHandle"),
  captionEnglish: document.querySelector("#captionEnglish"),
  captionChinese: document.querySelector("#captionChinese"),
  playPause: document.querySelector("#playPause"),
  backTen: document.querySelector("#backTen"),
  repeatLine: document.querySelector("#repeatLine"),
  loopLine: document.querySelector("#loopLine"),
  toggleFullscreen: document.querySelector("#toggleFullscreen"),
  playbackRate: document.querySelector("#playbackRate"),
  timeline: document.querySelector("#timeline"),
  currentTime: document.querySelector("#currentTime"),
  duration: document.querySelector("#duration"),
  subtitleEarlier: document.querySelector("#subtitleEarlier"),
  subtitleLater: document.querySelector("#subtitleLater"),
  resetSubtitleSync: document.querySelector("#resetSubtitleSync"),
  syncInfo: document.querySelector("#syncInfo"),
  captionSize: document.querySelector("#captionSize"),
  captionSizeDown: document.querySelector("#captionSizeDown"),
  captionSizeUp: document.querySelector("#captionSizeUp"),
  captionSizeValue: document.querySelector("#captionSizeValue"),
  practiceLine: document.querySelector("#practiceLine"),
  copyPracticeLine: document.querySelector("#copyPracticeLine"),
  shadowButton: document.querySelector("#shadowButton"),
  shadowScore: document.querySelector("#shadowScore"),
  lookupWord: document.querySelector("#lookupWord"),
  lookupPronunciation: document.querySelector("#lookupPronunciation"),
  lookupDefinition: document.querySelector("#lookupDefinition"),
  lookupExample: document.querySelector("#lookupExample"),
  saveWord: document.querySelector("#saveWord"),
  savedWords: document.querySelector("#savedWords"),
  subtitleList: document.querySelector("#subtitleList"),
  subtitleSearch: document.querySelector("#subtitleSearch"),
  importSrt: document.querySelector("#importSrt"),
  subtitleFileInput: document.querySelector("#subtitleFileInput"),
  downloadSrt: document.querySelector("#downloadSrt"),
  modeButtons: [...document.querySelectorAll(".mode-button")],
};

const storage = {
  words: "linguatube.savedWords",
  lines: "linguatube.savedLines",
  lessons: "linguatube.savedLessons",
  activeLesson: "linguatube.activeLesson",
  captionPosition: "linguatube.captionPosition",
  captionWidth: "linguatube.captionWidth",
  captionScale: "linguatube.captionScale",
  aiProvider: "linguatube.aiProvider",
  aiTranslations: "linguatube.aiTranslations",
  subtitleOverrides: "linguatube.subtitleOverrides",
  sync: "linguatube.syncSettings",
  sidebarCollapsed: "linguatube.sidebarCollapsed",
  watchSplitRatio: "linguatube.watchSplitRatio",
  theaterMode: "linguatube.theaterMode",
  volume: "linguatube.volume",
};

const state = {
  activeLessonId: initialActiveLessonId(),
  activeCueIndex: 0,
  focusedWord: "context",
  filterLevel: "all",
  subtitleMode: "both",
  player: null,
  playerReady: false,
  playingFallback: false,
  fallbackTime: 0,
  fallbackStartedAt: 0,
  playbackRate: DEFAULT_PLAYBACK_RATE,
  spaceHoldTimer: null,
  spaceHoldActive: false,
  spaceHoldPreviousRate: DEFAULT_PLAYBACK_RATE,
  spaceHoldWasPlaying: false,
  volume: sanitizeVolume(readStorage(storage.volume, null)),
  loopLine: false,
  shadowing: false,
  shadowStartedAt: 0,
  shadowStream: null,
  rafId: null,
  savedWords: new Map(readStorage(storage.words, [])),
  savedLines: new Set(readStorage(storage.lines, [])),
  savedLessons: new Set(readStorage(storage.lessons, [])),
  aiTranslations: sanitizeAITranslations(readStorage(storage.aiTranslations, {})),
  subtitleOverrides: sanitizeSubtitleOverrides(readStorage(storage.subtitleOverrides, {})),
  aiTranslationAvailable: false,
  aiTranslationProviders: [],
  aiTranslationDefaultProvider: "",
  aiTranslationProvider: sanitizeAIProvider(readStorage(storage.aiProvider, "auto")),
  aiTranslationModel: "",
  translatingChinese: false,
  syncSettings: sanitizeSyncSettings(readStorage(storage.sync, {})),
  captionPosition: sanitizeCaptionPosition(readStorage(storage.captionPosition, null)),
  captionWidth: sanitizeCaptionWidth(readStorage(storage.captionWidth, null)),
  captionScale: sanitizeCaptionScale(readStorage(storage.captionScale, null)),
  captionDrag: null,
  captionResize: null,
  watchSplitRatio: sanitizeWatchSplitRatio(readStorage(storage.watchSplitRatio, null)),
  watchSplitResize: null,
  theaterMode: readStorage(storage.theaterMode, false) === true,
  subtitleMergeDragIndex: null,
  savedVideosOpen: false,
  copyStatusTimer: null,
  copyStatusCueIndex: null,
  srtImportStatusTimer: null,
  srtStatusTimer: null,
  sidebarCollapsed: initialSidebarCollapsed(),
};

function readStorage(key, fallback) {
  try {
    const parsed = JSON.parse(window.localStorage.getItem(key) || "null");
    return parsed || fallback;
  } catch {
    return fallback;
  }
}

function isMobileLayout() {
  return window.matchMedia("(max-width: 1180px)").matches;
}

function initialSidebarCollapsed() {
  if (isMobileLayout()) {
    return true;
  }
  return readStorage(storage.sidebarCollapsed, false) === true;
}

function writeStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

function activeLesson() {
  return lessons.find((lesson) => lesson.id === state.activeLessonId) || lessons[0];
}

function activeCue() {
  const lesson = activeLesson();
  return lesson.cues[state.activeCueIndex] || lesson.cues[0] || emptySubtitleCue();
}

function emptySubtitleCue() {
  return {
    start: 0,
    end: 0,
    en: "",
    zh: "",
  };
}

function initialActiveLessonId() {
  const savedLessonId = readStorage(storage.activeLesson, "");
  if (lessons.some((lesson) => lesson.id === savedLessonId)) {
    return savedLessonId;
  }

  return lessons.find((lesson) => lesson.custom)?.id || lessons[0].id;
}

function init() {
  migrateCachedChineseToTraditional();
  applyStoredSubtitleOverrides();
  writeStorage(storage.activeLesson, state.activeLessonId);
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  applyCaptionAppearance();
  applySidebarState();
  applyWatchSplitLayout();
  applyTheaterMode();
  renderLessonList();
  renderLesson();
  renderSavedVideosMenu();
  renderSavedWords();
  bindEvents();
  redirectFromLegacyPreviewPort();
  if (window.location.protocol === "file:") {
    handleFileMode();
  } else {
    loadYouTubeApi();
  }
  startTicker();
  refreshIcons();
}

async function handleFileMode() {
  elements.localPreviewLink.href = LOCAL_PREVIEW_URL;
  showFileModeNotice("Trying to switch to the local app URL...");

  try {
    const previewUrl = await firstAvailableLocalPreviewUrl();
    window.location.replace(previewUrl);
  } catch {
    showFileModeNotice("Start `uv run video-learning-platform` in Terminal, then open the local app URL.");
  }
}

function showFileModeNotice(message) {
  elements.fileModeNotice.hidden = false;
  elements.fileModeNotice.querySelector("span").textContent = message;
  elements.videoFallback.classList.remove("hidden");
}

async function firstAvailableLocalPreviewUrl() {
  for (const previewUrl of LOCAL_PREVIEW_FALLBACK_URLS) {
    try {
      await pingLocalPreview(previewUrl);
      return previewUrl;
    } catch {
      // Try the next local preview port.
    }
  }
  throw new Error("Local preview API is not ready.");
}

function pingLocalPreview(previewUrl = LOCAL_PREVIEW_URL) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 900);

  return fetch(`${previewUrl}api/config`, {
    cache: "no-store",
    signal: controller.signal,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Local preview API is not ready.");
      }
    })
    .finally(() => window.clearTimeout(timer));
}

function bindEvents() {
  elements.toggleSidebar?.addEventListener("click", toggleSidebar);
  elements.mobileLibraryToggle?.addEventListener("click", openMobileLibrary);
  elements.captionOverlay.addEventListener("pointerdown", startCaptionDrag);
  elements.captionOverlay.addEventListener("pointermove", handleCaptionPointerMove);
  elements.captionOverlay.addEventListener("pointerup", stopCaptionPointerAction);
  elements.captionOverlay.addEventListener("pointercancel", stopCaptionPointerAction);
  elements.captionOverlay.addEventListener("pointerleave", resetCaptionResizeCursor);
  elements.captionOverlay.addEventListener("keydown", handleCaptionKeyboardMove);
  elements.captionResizeHandle?.addEventListener("pointerdown", startCaptionResize);
  elements.captionResizeHandle?.addEventListener("pointermove", resizeCaption);
  elements.captionResizeHandle?.addEventListener("pointerup", stopCaptionResize);
  elements.captionResizeHandle?.addEventListener("pointercancel", stopCaptionResize);
  elements.splitResizeHandle?.addEventListener("pointerdown", startWatchSplitResize);
  elements.splitResizeHandle?.addEventListener("pointermove", resizeWatchSplit);
  elements.splitResizeHandle?.addEventListener("pointerup", stopWatchSplitResize);
  elements.splitResizeHandle?.addEventListener("pointercancel", stopWatchSplitResize);
  elements.splitResizeHandle?.addEventListener("keydown", handleWatchSplitKeyboard);
  elements.splitResizeHandle?.addEventListener("dblclick", resetWatchSplitLayout);
  window.addEventListener("resize", () => {
    state.captionWidth = sanitizeCaptionWidth(state.captionWidth);
    state.captionPosition = constrainCaptionPosition(state.captionPosition);
    applyCaptionPosition();
    applyWatchSplitLayout();
    writeStorage(storage.captionWidth, state.captionWidth);
    writeStorage(storage.captionPosition, state.captionPosition);
  });
  elements.lessonSearch?.addEventListener("input", renderLessonList);
  elements.subtitleSearch?.addEventListener("input", renderSubtitles);
  elements.customLessonForm?.addEventListener("submit", handleCustomLessonSubmit);
  elements.levelTabs.forEach((button) => {
    button.addEventListener("click", () => {
      state.filterLevel = button.dataset.level;
      elements.levelTabs.forEach((tab) => tab.classList.toggle("active", tab === button));
      renderLessonList();
    });
  });

  elements.savedVideosToggle?.addEventListener("click", toggleSavedVideosPanel);
  elements.toggleTheaterMode?.addEventListener("click", toggleTheaterMode);
  elements.closeSavedVideos?.addEventListener("click", closeSavedVideosPanel);
  document.addEventListener("click", closeSavedVideosOnOutsideClick);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSavedVideosPanel();
    }
  });

  elements.bookmarkLesson.addEventListener("click", () => {
    const lesson = activeLesson();
    if (state.savedLessons.has(lesson.id)) {
      state.savedLessons.delete(lesson.id);
    } else {
      state.savedLessons.add(lesson.id);
    }
    writeStorage(storage.lessons, [...state.savedLessons]);
    updateLessonBookmark();
    renderLessonList();
    renderSavedVideosMenu();
  });

  elements.playPause?.addEventListener("click", togglePlayback);
  elements.backTen?.addEventListener("click", () => seekTo(Math.max(0, getCurrentTime() - 10)));
  elements.repeatLine?.addEventListener("click", () => {
    seekTo(videoTimeForCueStart(state.activeCueIndex));
    playVideo();
  });
  elements.loopLine?.addEventListener("click", () => {
    state.loopLine = !state.loopLine;
    elements.loopLine.classList.toggle("active", state.loopLine);
    elements.loopLine.setAttribute("aria-pressed", String(state.loopLine));
  });
  elements.toggleFullscreen?.addEventListener("click", toggleVideoFullscreen);
  elements.exitFullscreenOverlay.addEventListener("click", exitVideoFullscreen);
  document.addEventListener("fullscreenchange", updateFullscreenButton);
  document.addEventListener("webkitfullscreenchange", updateFullscreenButton);
  document.addEventListener("keydown", handleGlobalKeyboardShortcuts, { capture: true });
  document.addEventListener("keyup", handleGlobalKeyboardKeyup, { capture: true });
  window.addEventListener("blur", () => {
    finishSpacePlaybackShortcut({ restoreOnly: true });
    restoreKeyboardFocusFromPlayer();
  });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      finishSpacePlaybackShortcut({ restoreOnly: true });
    }
  });

  elements.playbackRate?.addEventListener("change", () => {
    setPlaybackRate(Number(elements.playbackRate.value));
  });

  elements.timeline?.addEventListener("input", () => {
    seekTo(Number(elements.timeline.value));
  });
  elements.subtitleEarlier?.addEventListener("click", () => adjustSubtitleOffset(-0.5));
  elements.subtitleLater?.addEventListener("click", () => adjustSubtitleOffset(0.5));
  elements.resetSubtitleSync?.addEventListener("click", resetSubtitleSync);
  elements.captionSizeDown?.addEventListener("click", () => adjustCaptionScale(-5));
  elements.captionSizeUp?.addEventListener("click", () => adjustCaptionScale(5));
  elements.captionSize?.addEventListener("input", () => {
    setCaptionScalePercent(Number(elements.captionSize.value));
  });

  elements.modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setSubtitleMode(button.dataset.mode);
    });
  });

  elements.copyPracticeLine?.addEventListener("click", copyPracticeLine);
  elements.importSrt.addEventListener("click", () => {
    elements.subtitleFileInput.value = "";
    elements.subtitleFileInput.click();
  });
  elements.subtitleFileInput.addEventListener("change", importSubtitleFile);
  elements.downloadSrt.addEventListener("click", downloadCurrentLessonSrt);
  elements.shadowButton?.addEventListener("click", toggleShadowing);
  elements.saveWord?.addEventListener("click", saveFocusedWord);
}

function toggleSidebar() {
  state.sidebarCollapsed = !state.sidebarCollapsed;
  writeStorage(storage.sidebarCollapsed, state.sidebarCollapsed);
  applySidebarState();
  if (!state.sidebarCollapsed) {
    revealCustomVideoMenu();
  }
}

function openMobileLibrary() {
  state.sidebarCollapsed = false;
  writeStorage(storage.sidebarCollapsed, state.sidebarCollapsed);
  applySidebarState();
  revealCustomVideoMenu();
}

function revealCustomVideoMenu({ focus = false } = {}) {
  if (elements.customLesson && "open" in elements.customLesson) {
    elements.customLesson.open = true;
  }
  if (isMobileLayout()) {
    elements.customLesson?.scrollIntoView({ block: "start", behavior: "smooth" });
  }
  if (focus) {
    window.requestAnimationFrame(() => {
      elements.customVideoUrl?.focus({ preventScroll: true });
    });
  }
}

function applySidebarState() {
  if (!elements.shell) {
    return;
  }
  elements.shell.classList.toggle("sidebar-collapsed", state.sidebarCollapsed);
  if (elements.toggleSidebar) {
    elements.toggleSidebar.setAttribute("aria-expanded", String(!state.sidebarCollapsed));
    elements.toggleSidebar.setAttribute("aria-label", state.sidebarCollapsed ? "Expand video library" : "Collapse video library");
    elements.toggleSidebar.innerHTML = `<i data-lucide="${state.sidebarCollapsed ? "panel-left-open" : "panel-left-close"}" aria-hidden="true"></i>`;
  }
  elements.mobileLibraryToggle?.setAttribute("aria-expanded", String(!state.sidebarCollapsed));
  elements.mobileLibraryToggle?.setAttribute("aria-label", state.sidebarCollapsed ? "Open video library" : "Collapse video library");
  refreshIcons();
}

function closeMobileLibrary() {
  if (!elements.mobileLibraryToggle && !elements.toggleSidebar) {
    return;
  }
  if (!isMobileLayout()) {
    return;
  }
  state.sidebarCollapsed = true;
  writeStorage(storage.sidebarCollapsed, state.sidebarCollapsed);
  applySidebarState();
  elements.learningStage?.scrollIntoView({ block: "start" });
}

async function toggleVideoFullscreen() {
  if (isVideoFullscreen()) {
    await exitVideoFullscreen();
    return;
  }
  await enterVideoFullscreen();
}

async function enterVideoFullscreen() {
  try {
    if (elements.videoShell.requestFullscreen) {
      await elements.videoShell.requestFullscreen();
    } else if (elements.videoShell.webkitRequestFullscreen) {
      elements.videoShell.webkitRequestFullscreen();
    } else {
      enterCinemaFullscreen();
    }
  } catch {
    enterCinemaFullscreen();
  }
  updateFullscreenButton();
}

async function exitVideoFullscreen() {
  try {
    if (document.fullscreenElement && document.exitFullscreen) {
      await document.exitFullscreen();
    } else if (document.webkitFullscreenElement && document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  } catch {
    // Keep the manual fallback below available when the browser rejects fullscreen exit.
  }
  elements.videoShell.classList.remove("cinema-fullscreen");
  document.body.classList.remove("cinema-lock");
  updateFullscreenButton();
}

function enterCinemaFullscreen() {
  elements.videoShell.classList.add("cinema-fullscreen");
  document.body.classList.add("cinema-lock");
}

function isVideoFullscreen() {
  return (
    document.fullscreenElement === elements.videoShell ||
    document.webkitFullscreenElement === elements.videoShell ||
    elements.videoShell.classList.contains("cinema-fullscreen")
  );
}

function updateFullscreenButton() {
  const active = isVideoFullscreen();
  elements.videoShell.classList.toggle("fullscreen-active", active);
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  if (!elements.toggleFullscreen) {
    return;
  }
  elements.toggleFullscreen.classList.toggle("active", active);
  elements.toggleFullscreen.setAttribute("aria-pressed", String(active));
  elements.toggleFullscreen.setAttribute("aria-label", active ? "Exit fullscreen" : "Fullscreen video with subtitles");
  elements.toggleFullscreen.innerHTML = `
    <i data-lucide="${active ? "minimize" : "maximize"}" aria-hidden="true"></i>
    <span>${active ? "Exit" : "Fullscreen"}</span>
  `;
  refreshIcons();
}

function applyCaptionPosition() {
  const position = constrainCaptionPosition(state.captionPosition);
  const width = sanitizeCaptionWidth(state.captionWidth);
  state.captionPosition = position;
  elements.captionOverlay.style.setProperty("--caption-x", `${position.x}%`);
  elements.captionOverlay.style.setProperty("--caption-y", `${position.y}%`);
  elements.captionOverlay.style.setProperty("--caption-width", `${width}%`);
}

function applyCaptionAppearance() {
  const scale = sanitizeCaptionScale(state.captionScale);
  state.captionScale = scale;
  const sizePercent = Math.round(scale * 100);
  elements.captionOverlay.style.setProperty("--caption-en-scale", `${Math.round(CAPTION_EN_PERCENT * scale)}%`);
  elements.captionOverlay.style.setProperty("--caption-zh-scale", `${Math.round(CAPTION_ZH_PERCENT * scale)}%`);
  if (elements.captionSize) {
    elements.captionSize.value = String(sizePercent);
  }
  if (elements.captionSizeValue) {
    elements.captionSizeValue.textContent = `${sizePercent}%`;
  }
  if (elements.captionSizeDown) {
    elements.captionSizeDown.disabled = sizePercent <= Number(elements.captionSize?.min || MIN_CAPTION_SCALE * 100);
  }
  if (elements.captionSizeUp) {
    elements.captionSizeUp.disabled = sizePercent >= Number(elements.captionSize?.max || MAX_CAPTION_SCALE * 100);
  }
}

function setCaptionScalePercent(sizePercent) {
  state.captionScale = sanitizeCaptionScale(Number(sizePercent) / 100);
  applyCaptionAppearance();
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  writeStorage(storage.captionScale, state.captionScale);
  writeStorage(storage.captionPosition, state.captionPosition);
}

function adjustCaptionScale(deltaPercent) {
  const currentPercent = Math.round(sanitizeCaptionScale(state.captionScale) * 100);
  setCaptionScalePercent(currentPercent + deltaPercent);
}

function adjustCaptionWidth(deltaPercent) {
  state.captionWidth = sanitizeCaptionWidth(sanitizeCaptionWidth(state.captionWidth) + deltaPercent);
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  writeStorage(storage.captionWidth, state.captionWidth);
  writeStorage(storage.captionPosition, state.captionPosition);
  setCustomStatus(`Subtitle width ${Math.round(state.captionWidth)}%`);
}

function applyWatchSplitLayout() {
  const ratio = sanitizeWatchSplitRatio(state.watchSplitRatio);
  state.watchSplitRatio = ratio;
  elements.watchLayout?.style.setProperty("--subtitle-pane-width", `${ratio}%`);
  updateWatchSplitHandle();
}

function toggleTheaterMode() {
  state.theaterMode = !state.theaterMode;
  writeStorage(storage.theaterMode, state.theaterMode);
  applyTheaterMode();
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  writeStorage(storage.captionPosition, state.captionPosition);
}

function applyTheaterMode() {
  elements.shell?.classList.toggle("theater-mode", state.theaterMode);
  if (!elements.toggleTheaterMode) {
    return;
  }

  elements.toggleTheaterMode.classList.toggle("active", state.theaterMode);
  elements.toggleTheaterMode.setAttribute("aria-pressed", String(state.theaterMode));
  elements.toggleTheaterMode.setAttribute("aria-label", state.theaterMode ? "Exit theater mode" : "Theater mode");
  elements.toggleTheaterMode.title = state.theaterMode ? "Exit theater mode" : "Theater mode";
  elements.toggleTheaterMode.innerHTML = `
    <i data-lucide="${state.theaterMode ? "minimize-2" : "maximize-2"}" aria-hidden="true"></i>
    <span>${state.theaterMode ? "Default" : "Theater"}</span>
  `;
  refreshIcons();
}

function setWatchSplitRatio(value, options = {}) {
  state.watchSplitRatio = sanitizeWatchSplitRatio(value);
  applyWatchSplitLayout();

  if (options.persist) {
    writeStorage(storage.watchSplitRatio, state.watchSplitRatio);
  }
}

function startWatchSplitResize(event) {
  if (state.theaterMode) {
    return;
  }
  if (event.button !== undefined && event.button !== 0) {
    return;
  }

  const rect = elements.watchLayout?.getBoundingClientRect();
  if (!rect?.width) {
    return;
  }

  state.watchSplitResize = {
    pointerId: event.pointerId,
    left: rect.left,
    right: rect.right,
    width: rect.width,
  };
  elements.watchLayout.classList.add("resizing-split");
  document.body.classList.add("is-resizing-watch");
  elements.splitResizeHandle.focus({ preventScroll: true });

  try {
    elements.splitResizeHandle.setPointerCapture(event.pointerId);
  } catch {
    // Pointer capture is best effort; resizing still works while the pointer is over the handle.
  }

  resizeWatchSplit(event);
  event.preventDefault();
}

function resizeWatchSplit(event) {
  if (!state.watchSplitResize || event.pointerId !== state.watchSplitResize.pointerId) {
    return;
  }

  const rawRatio = ((state.watchSplitResize.right - event.clientX) / state.watchSplitResize.width) * 100;
  setWatchSplitRatio(rawRatio);
  event.preventDefault();
}

function stopWatchSplitResize(event) {
  if (!state.watchSplitResize || event.pointerId !== state.watchSplitResize.pointerId) {
    return;
  }

  state.watchSplitResize = null;
  elements.watchLayout.classList.remove("resizing-split");
  document.body.classList.remove("is-resizing-watch");
  setWatchSplitRatio(state.watchSplitRatio, { persist: true });

  try {
    elements.splitResizeHandle.releasePointerCapture(event.pointerId);
  } catch {
    // The browser may already have released pointer capture.
  }
}

function handleWatchSplitKeyboard(event) {
  if (state.theaterMode) {
    return;
  }

  let delta = 0;
  if (event.key === "ArrowLeft") {
    delta = WATCH_SPLIT_KEYBOARD_STEP;
  } else if (event.key === "ArrowRight") {
    delta = -WATCH_SPLIT_KEYBOARD_STEP;
  } else if (event.key === "Home") {
    setWatchSplitRatio(MAX_WATCH_SPLIT_RATIO, { persist: true });
    event.preventDefault();
    return;
  } else if (event.key === "End") {
    setWatchSplitRatio(MIN_WATCH_SPLIT_RATIO, { persist: true });
    event.preventDefault();
    return;
  } else {
    return;
  }

  setWatchSplitRatio(state.watchSplitRatio + delta, { persist: true });
  event.preventDefault();
}

function resetWatchSplitLayout() {
  setWatchSplitRatio(DEFAULT_WATCH_SPLIT_RATIO, { persist: true });
}

function updateWatchSplitHandle() {
  if (!elements.splitResizeHandle) {
    return;
  }

  const ratio = sanitizeWatchSplitRatio(state.watchSplitRatio);
  elements.splitResizeHandle.setAttribute("aria-valuemin", String(MIN_WATCH_SPLIT_RATIO));
  elements.splitResizeHandle.setAttribute("aria-valuemax", String(MAX_WATCH_SPLIT_RATIO));
  elements.splitResizeHandle.setAttribute("aria-valuenow", String(Math.round(ratio)));
  elements.splitResizeHandle.setAttribute(
    "aria-valuetext",
    `${Math.round(100 - ratio)}% video, ${Math.round(ratio)}% subtitles`,
  );
}

function handleGlobalKeyboardShortcuts(event) {
  if (event.key === "Escape" && elements.videoShell.classList.contains("cinema-fullscreen")) {
    exitVideoFullscreen();
    return;
  }

  if (event.metaKey || event.ctrlKey || event.altKey || event.isComposing) {
    return;
  }

  if (isFullscreenShortcut(event)) {
    if (isEditableShortcutTarget(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    toggleVideoFullscreen();
    return;
  }

  if (isTheaterShortcut(event)) {
    if (isEditableShortcutTarget(event.target)) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    toggleTheaterMode();
    return;
  }

  if (isSpacePlaybackShortcut(event)) {
    handleSpacePlaybackKeydown(event);
    return;
  }

  const cueDelta = cueNavigationShortcutDelta(event);
  if (cueDelta && !shouldPreserveDirectionalTyping(event.target)) {
    event.preventDefault();
    event.stopPropagation();
    jumpToAdjacentCue(cueDelta);
    return;
  }

  const volumeDelta = volumeShortcutDelta(event);
  if (volumeDelta && !shouldPreserveDirectionalTyping(event.target)) {
    adjustVolume(volumeDelta);
    event.preventDefault();
    event.stopPropagation();
    return;
  }

  if (isEditableShortcutTarget(event.target)) {
    return;
  }

  const shortcutMode = subtitleModeFromShortcut(event);
  if (shortcutMode) {
    event.preventDefault();
    event.stopPropagation();
    setSubtitleMode(shortcutMode);
    return;
  }

  const widthDelta = captionWidthShortcutDelta(event);
  if (widthDelta) {
    adjustCaptionWidth(widthDelta);
    event.preventDefault();
    return;
  }

  const delta = captionScaleShortcutDelta(event);
  if (!delta) {
    return;
  }

  adjustCaptionScale(delta);
  event.preventDefault();
}

function handleGlobalKeyboardKeyup(event) {
  if (!isSpacePlaybackShortcut(event)) {
    return;
  }
  if (!state.spaceHoldTimer && !state.spaceHoldActive) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  finishSpacePlaybackShortcut();
}

function handleSpacePlaybackKeydown(event) {
  if (shouldPreserveSpaceTyping(event.target)) {
    return;
  }

  event.preventDefault();
  event.stopPropagation();
  blurPlaybackShortcutTarget(event.target);

  if (event.repeat || state.spaceHoldTimer || state.spaceHoldActive) {
    return;
  }

  state.spaceHoldTimer = window.setTimeout(startSpaceHoldFastPlayback, SPACE_HOLD_DELAY_MS);
}

function startSpaceHoldFastPlayback() {
  state.spaceHoldTimer = null;
  state.spaceHoldActive = true;
  state.spaceHoldPreviousRate = sanitizePlaybackRate(state.playbackRate);
  state.spaceHoldWasPlaying = isPlaying();

  if (!state.spaceHoldWasPlaying) {
    playVideo();
  }
  setPlaybackRate(SPACE_HOLD_FAST_RATE, { syncSelect: false });
}

function finishSpacePlaybackShortcut(options = {}) {
  const restoreOnly = options.restoreOnly === true;

  if (state.spaceHoldTimer) {
    window.clearTimeout(state.spaceHoldTimer);
    state.spaceHoldTimer = null;
    if (!restoreOnly) {
      togglePlayback();
    }
    return;
  }

  if (!state.spaceHoldActive) {
    return;
  }

  const shouldPauseAfterHold = !state.spaceHoldWasPlaying;
  const previousRate = state.spaceHoldPreviousRate;
  state.spaceHoldActive = false;
  state.spaceHoldWasPlaying = false;
  state.spaceHoldPreviousRate = DEFAULT_PLAYBACK_RATE;
  setPlaybackRate(previousRate);

  if (shouldPauseAfterHold) {
    pauseVideo();
  }
}

function cueNavigationShortcutDelta(event) {
  if (event.key === "ArrowLeft") {
    return -1;
  }
  if (event.key === "ArrowRight") {
    return 1;
  }
  return 0;
}

function jumpToAdjacentCue(delta) {
  const lesson = activeLesson();
  const cueIndexes = navigableCueIndexes(lesson);
  if (!cueIndexes.length) {
    return;
  }

  const currentPosition = Math.max(0, cueIndexes.indexOf(state.activeCueIndex));
  const targetPosition = Math.max(0, Math.min(currentPosition + delta, cueIndexes.length - 1));
  const targetCueIndex = cueIndexes[targetPosition];
  setActiveCue(targetCueIndex, { scroll: true, force: true });
  seekTo(videoTimeForCueStart(targetCueIndex));
  playVideo();
}

function navigableCueIndexes(lesson) {
  if (!lesson?.cues?.length) {
    return [];
  }
  return lesson.cues
    .map((cue, index) => ({ cue, index }))
    .filter(({ cue }) => !isPlaceholderCue(cue))
    .map(({ index }) => index);
}

function volumeShortcutDelta(event) {
  if (event.key === "ArrowUp") {
    return VOLUME_KEYBOARD_STEP;
  }
  if (event.key === "ArrowDown") {
    return -VOLUME_KEYBOARD_STEP;
  }
  return 0;
}

function subtitleModeFromShortcut(event) {
  const shortcutNumber = Number(event.key);
  if (
    Number.isInteger(shortcutNumber) &&
    shortcutNumber >= 1 &&
    shortcutNumber <= SUBTITLE_MODE_SHORTCUTS.length
  ) {
    return SUBTITLE_MODE_SHORTCUTS[shortcutNumber - 1];
  }

  const codeMatch = String(event.code || "").match(/^(?:Digit|Numpad)([1-4])$/);
  return codeMatch ? SUBTITLE_MODE_SHORTCUTS[Number(codeMatch[1]) - 1] : "";
}

function setSubtitleMode(mode) {
  if (!SUBTITLE_MODE_SHORTCUTS.includes(mode)) {
    return;
  }
  state.subtitleMode = mode;
  elements.modeButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.mode === mode);
  });
  updateSubtitleMode();
}

function adjustVolume(delta) {
  state.volume = sanitizeVolume(currentPlayerVolume() + delta);
  writeStorage(storage.volume, state.volume);
  applyPlayerVolume();
  setCustomStatus(`Volume ${state.volume}%`);
}

function currentPlayerVolume() {
  if (state.playerReady && typeof state.player?.getVolume === "function") {
    try {
      return sanitizeVolume(state.player.getVolume());
    } catch {
      return sanitizeVolume(state.volume);
    }
  }
  return sanitizeVolume(state.volume);
}

function applyPlayerVolume() {
  if (!state.playerReady || typeof state.player?.setVolume !== "function") {
    return;
  }

  const volume = sanitizeVolume(state.volume);
  state.player.setVolume(volume);
  if (volume <= 0 && typeof state.player.mute === "function") {
    state.player.mute();
  } else if (volume > 0 && typeof state.player.unMute === "function") {
    state.player.unMute();
  }
}

function captionScaleShortcutDelta(event) {
  if (event.key === "+" || event.key === "=" || event.code === "NumpadAdd") {
    return 5;
  }
  if (event.key === "-" || event.key === "_" || event.code === "Minus" || event.code === "NumpadSubtract") {
    return -5;
  }
  return 0;
}

function captionWidthShortcutDelta(event) {
  if (event.key === "[" || event.code === "BracketLeft") {
    return -CAPTION_WIDTH_KEYBOARD_STEP;
  }
  if (event.key === "]" || event.code === "BracketRight") {
    return CAPTION_WIDTH_KEYBOARD_STEP;
  }
  return 0;
}

function isFullscreenShortcut(event) {
  return event.key?.toLowerCase() === "f" && !event.repeat;
}

function isTheaterShortcut(event) {
  return event.key?.toLowerCase() === "t" && !event.repeat;
}

function isSpacePlaybackShortcut(event) {
  return event.code === "Space" || event.key === " " || event.key === "Spacebar";
}

function shouldPreserveSpaceTyping(target) {
  if (!(target instanceof Element)) {
    return false;
  }
  return Boolean(target.closest("textarea, [contenteditable='true'], [contenteditable='']"));
}

function shouldPreserveDirectionalTyping(target) {
  if (!(target instanceof Element)) {
    return false;
  }
  return Boolean(target.closest("textarea, select, [contenteditable='true'], [contenteditable='']"));
}

function blurPlaybackShortcutTarget(target) {
  if (!(target instanceof Element)) {
    return;
  }

  const input = target.closest("input");
  if (input && input.type !== "range") {
    input.blur();
  }
}

function isEditableShortcutTarget(target) {
  if (!(target instanceof Element)) {
    return false;
  }
  if (target.closest("textarea, select, [contenteditable='true'], [contenteditable='']")) {
    return true;
  }
  const input = target.closest("input");
  return Boolean(input && input.type !== "range");
}

function startCaptionDrag(event) {
  if (event.button !== undefined && event.button !== 0) {
    return;
  }
  if (event.target.closest(".caption-resize-handle")) {
    return;
  }

  const resizeEdge = captionResizeEdge(event);
  if (resizeEdge) {
    startCaptionResize(event, resizeEdge);
    return;
  }

  const center = captionCenterPoint();
  if (!center) {
    return;
  }

  state.captionDrag = {
    pointerId: event.pointerId,
    shiftX: event.clientX - center.x,
    shiftY: event.clientY - center.y,
  };
  elements.captionOverlay.classList.add("dragging");
  elements.captionOverlay.focus({ preventScroll: true });

  try {
    elements.captionOverlay.setPointerCapture(event.pointerId);
  } catch {
    // Pointer capture is best effort; dragging still works while the pointer is over the subtitle box.
  }

  event.preventDefault();
}

function handleCaptionPointerMove(event) {
  if (state.captionResize) {
    resizeCaption(event);
    return;
  }
  if (state.captionDrag) {
    dragCaption(event);
    return;
  }
  updateCaptionResizeCursor(event);
}

function stopCaptionPointerAction(event) {
  if (state.captionResize) {
    stopCaptionResize(event);
  }
  if (state.captionDrag) {
    stopCaptionDrag(event);
  }
  resetCaptionResizeCursor();
}

function dragCaption(event) {
  if (!state.captionDrag || event.pointerId !== state.captionDrag.pointerId) {
    return;
  }

  moveCaptionToClientPoint(event.clientX - state.captionDrag.shiftX, event.clientY - state.captionDrag.shiftY);
  event.preventDefault();
}

function stopCaptionDrag(event) {
  if (!state.captionDrag || event.pointerId !== state.captionDrag.pointerId) {
    return;
  }

  state.captionDrag = null;
  elements.captionOverlay.classList.remove("dragging");
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  writeStorage(storage.captionPosition, state.captionPosition);

  try {
    elements.captionOverlay.releasePointerCapture(event.pointerId);
  } catch {
    // It may already be released if the browser canceled the pointer.
  }
}

function startCaptionResize(event, edge = "right") {
  if (event.button !== undefined && event.button !== 0) {
    return;
  }

  const shellRect = elements.videoShell.getBoundingClientRect();
  if (!shellRect.width) {
    return;
  }

  state.captionResize = {
    pointerId: event.pointerId,
    edge,
    startX: event.clientX,
    startWidth: sanitizeCaptionWidth(state.captionWidth),
    shellWidth: shellRect.width,
  };
  elements.captionOverlay.classList.add("resizing");
  elements.captionOverlay.focus({ preventScroll: true });

  try {
    elements.captionOverlay.setPointerCapture(event.pointerId);
  } catch {
    // Pointer capture is best effort; resizing still works while the pointer is over the handle.
  }

  event.preventDefault();
  event.stopPropagation();
}

function resizeCaption(event) {
  if (!state.captionResize || event.pointerId !== state.captionResize.pointerId) {
    return;
  }

  const edgeDirection = state.captionResize.edge === "left" ? -1 : 1;
  const deltaPercent = ((event.clientX - state.captionResize.startX) / state.captionResize.shellWidth) * 200 * edgeDirection;
  state.captionWidth = sanitizeCaptionWidth(state.captionResize.startWidth + deltaPercent);
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  event.preventDefault();
  event.stopPropagation();
}

function stopCaptionResize(event) {
  if (!state.captionResize || event.pointerId !== state.captionResize.pointerId) {
    return;
  }

  state.captionResize = null;
  elements.captionOverlay.classList.remove("resizing");
  state.captionWidth = sanitizeCaptionWidth(state.captionWidth);
  state.captionPosition = constrainCaptionPosition(state.captionPosition);
  applyCaptionPosition();
  writeStorage(storage.captionWidth, state.captionWidth);
  writeStorage(storage.captionPosition, state.captionPosition);

  try {
    elements.captionOverlay.releasePointerCapture(event.pointerId);
  } catch {
    // It may already be released if the browser canceled the pointer.
  }

  event.preventDefault();
  event.stopPropagation();
}

function captionResizeEdge(event) {
  const rect = elements.captionOverlay.getBoundingClientRect();
  if (!rect.width) {
    return "";
  }

  const edgeSize = Math.min(CAPTION_EDGE_RESIZE_PX, rect.width / 4);
  if (event.clientX - rect.left <= edgeSize) {
    return "left";
  }
  if (rect.right - event.clientX <= edgeSize) {
    return "right";
  }
  return "";
}

function updateCaptionResizeCursor(event) {
  elements.captionOverlay.classList.toggle("resize-ready", Boolean(captionResizeEdge(event)));
}

function resetCaptionResizeCursor() {
  elements.captionOverlay.classList.remove("resize-ready");
}

function handleCaptionKeyboardMove(event) {
  const movement = {
    ArrowLeft: [-1, 0],
    ArrowRight: [1, 0],
    ArrowUp: [0, -1],
    ArrowDown: [0, 1],
  }[event.key];

  if (!movement) {
    return;
  }

  const step = event.shiftKey ? 5 : 2;
  state.captionPosition = constrainCaptionPosition({
    x: state.captionPosition.x + movement[0] * step,
    y: state.captionPosition.y + movement[1] * step,
  });
  applyCaptionPosition();
  writeStorage(storage.captionPosition, state.captionPosition);
  event.preventDefault();
}

function moveCaptionToClientPoint(clientX, clientY) {
  const shellRect = elements.videoShell.getBoundingClientRect();
  if (!shellRect.width || !shellRect.height) {
    return;
  }

  state.captionPosition = constrainCaptionPosition({
    x: ((clientX - shellRect.left) / shellRect.width) * 100,
    y: ((clientY - shellRect.top) / shellRect.height) * 100,
  });
  applyCaptionPosition();
}

function captionCenterPoint() {
  const shellRect = elements.videoShell.getBoundingClientRect();
  if (!shellRect.width || !shellRect.height) {
    return null;
  }

  return {
    x: shellRect.left + shellRect.width * (state.captionPosition.x / 100),
    y: shellRect.top + shellRect.height * (state.captionPosition.y / 100),
  };
}

function constrainCaptionPosition(position) {
  const safePosition = sanitizeCaptionPosition(position);
  const shellRect = elements.videoShell.getBoundingClientRect();
  const overlayRect = elements.captionOverlay.getBoundingClientRect();
  if (!shellRect.width || !shellRect.height) {
    return safePosition;
  }

  const padX = Math.min(45, ((overlayRect.width / 2 + CAPTION_EDGE_PADDING_PX) / shellRect.width) * 100);
  const padY = Math.min(45, ((overlayRect.height / 2 + CAPTION_EDGE_PADDING_PX) / shellRect.height) * 100);
  const maxY = Math.max(padY, 100 - padY);
  return {
    x: roundTime(clamp(safePosition.x, padX, 100 - padX)),
    y: roundTime(clamp(safePosition.y, padY, maxY)),
  };
}

function sanitizeCaptionPosition(value) {
  const x = Number(value?.x);
  const y = Number(value?.y);
  return {
    x: Number.isFinite(x) ? clamp(x, 5, 95) : 50,
    y: Number.isFinite(y) ? clamp(y, 4, 96) : 86,
  };
}

function sanitizeCaptionWidth(value) {
  const width = Number(value);
  const shellRect = elements.videoShell?.getBoundingClientRect();
  const shellWidth = shellRect?.width || 900;
  const minWidth = Math.min(58, Math.max(34, (260 / shellWidth) * 100));
  return roundTime(clamp(Number.isFinite(width) ? width : DEFAULT_CAPTION_WIDTH, minWidth, 94));
}

function sanitizeCaptionScale(value) {
  const scale = Number(value);
  return roundTime(clamp(Number.isFinite(scale) ? scale : DEFAULT_CAPTION_SCALE, MIN_CAPTION_SCALE, MAX_CAPTION_SCALE));
}

function sanitizeVolume(value) {
  const volume = Number(value);
  return Math.round(clamp(Number.isFinite(volume) ? volume : DEFAULT_VOLUME, 0, 100));
}

function sanitizeWatchSplitRatio(value) {
  const ratio = Number(value);
  return roundTime(clamp(Number.isFinite(ratio) ? ratio : DEFAULT_WATCH_SPLIT_RATIO, MIN_WATCH_SPLIT_RATIO, MAX_WATCH_SPLIT_RATIO));
}

function sanitizePlaybackRate(value) {
  const rate = Number(value);
  return Number.isFinite(rate) && rate > 0 ? rate : DEFAULT_PLAYBACK_RATE;
}

function setPlaybackRate(value, options = {}) {
  const rate = sanitizePlaybackRate(value);
  if (state.playingFallback) {
    state.fallbackTime = fallbackCurrentTime();
    state.fallbackStartedAt = performance.now();
  }

  state.playbackRate = rate;
  if (elements.playbackRate && options.syncSelect !== false) {
    elements.playbackRate.value = String(rate);
  }
  if (state.playerReady && state.player?.setPlaybackRate) {
    state.player.setPlaybackRate(rate);
  }
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function loadYouTubeApi() {
  window.onYouTubeIframeAPIReady = createPlayer;
  const script = document.createElement("script");
  script.src = "https://www.youtube.com/iframe_api";
  script.async = true;
  document.head.appendChild(script);
}

function createPlayer() {
  const lesson = activeLesson();
  const playerVars = {
    disablekb: 1,
    fs: 0,
    modestbranding: 1,
    playsinline: 1,
    rel: 0,
  };

  if (window.location.origin && window.location.origin !== "null") {
    playerVars.origin = window.location.origin;
  }

  state.player = new window.YT.Player("player", {
    videoId: lesson.videoId,
    playerVars,
    events: {
      onReady: () => {
        state.playerReady = true;
        elements.videoFallback.classList.add("hidden");
        lockYouTubeIframeFullscreen();
        applyPlayerVolume();
        syncDurationFromPlayer();
        updatePlayButton();
      },
      onStateChange: () => {
        syncDurationFromPlayer();
        updatePlayButton();
      },
    },
  });
}

function lockYouTubeIframeFullscreen(attempt = 0) {
  const iframe = elements.videoShell.querySelector("iframe");
  if (!iframe) {
    if (attempt < 20) {
      window.setTimeout(() => lockYouTubeIframeFullscreen(attempt + 1), 80);
    }
    return;
  }

  iframe.tabIndex = -1;
  iframe.removeAttribute("allowfullscreen");
  iframe.removeAttribute("webkitallowfullscreen");
  iframe.removeAttribute("mozallowfullscreen");

  const allow = String(iframe.getAttribute("allow") || "")
    .split(";")
    .map((permission) => permission.trim())
    .filter((permission) => permission && !/^fullscreen\b/i.test(permission))
    .join("; ");

  if (allow) {
    iframe.setAttribute("allow", allow);
  } else {
    iframe.removeAttribute("allow");
  }
}

function restoreKeyboardFocusFromPlayer() {
  window.setTimeout(() => {
    const activeElement = document.activeElement;
    if (activeElement?.tagName !== "IFRAME" || !elements.videoShell.contains(activeElement)) {
      return;
    }

    activeElement.blur();
    elements.videoShell.tabIndex = -1;
    elements.videoShell.focus({ preventScroll: true });
  }, 0);
}

async function handleCustomLessonSubmit(event) {
  event.preventDefault();
  const rawUrl = elements.customVideoUrl?.value.trim() || "";
  const videoId = parseYouTubeId(rawUrl);
  if (!videoId) {
    setCustomStatus("Paste a valid YouTube video link.", true);
    return;
  }

  const manualTranscript = elements.customTranscript?.value.trim() || "";
  const customTitle = elements.customTitle?.value.trim() || "";
  let imported = null;

  if (!manualTranscript && window.location.protocol !== "file:") {
    setCustomStatus("Reading YouTube subtitles...");
    imported = await fetchYouTubeLesson(rawUrl);
  }

  const cues = manualTranscript ? parseCustomTranscript(manualTranscript) : normalizeLessonCues(imported?.cues || []);
  const title = customTitle || imported?.title || `YouTube lesson ${videoId}`;
  const duration = Math.max(cues[cues.length - 1]?.end || 0, imported?.duration || 120);
  const lesson = {
    id: `custom-${videoId}-${Date.now()}`,
    title,
    host: imported?.host || "My YouTube",
    level: "Custom",
    duration,
    skill: imported?.subtitleSource || "Custom video",
    videoId,
    summary: "Saved from a YouTube link.",
    custom: true,
    subtitleSource: imported?.subtitleSource || (manualTranscript ? "Manual subtitles" : "No timed subtitles"),
    captionError: imported?.captionError || "",
    captionVersion: manualTranscript ? CAPTION_SCHEMA_VERSION : Number(imported?.captionVersion) || 0,
    cues,
  };

  const customLessons = sanitizeCustomLessons(readStorage(CUSTOM_LESSONS_KEY, []));
  customLessons.unshift(lesson);
  writeStorage(CUSTOM_LESSONS_KEY, customLessons.slice(0, 20));
  lessons = [...defaultLessons, ...customLessons.slice(0, 20)];

  if (elements.customVideoUrl) {
    elements.customVideoUrl.value = "";
    elements.customVideoUrl.blur();
  }
  if (elements.customTitle) {
    elements.customTitle.value = "";
  }
  if (elements.customTranscript) {
    elements.customTranscript.value = "";
  }
  state.filterLevel = "all";
  elements.levelTabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.level === "all"));
  if (cues.length) {
    setCustomStatus(manualTranscript ? "Added with your transcript." : "Added with YouTube subtitle timing.");
  } else if (imported?.captionError) {
    setCustomStatus("Video loaded, but no English subtitles were available.");
  } else {
    setCustomStatus("Added to your library.");
  }
  selectLesson(lesson.id);
}

async function fetchYouTubeLesson(url, { silent = false } = {}) {
  try {
    const response = await fetch(`/api/youtube?url=${encodeURIComponent(url)}`, {
      headers: {
        Accept: "application/json",
      },
    });
    const contentType = response.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return null;
    }
    const payload = await response.json();
    if (!response.ok) {
      if (!silent) {
        setCustomStatus(payload.error || "Could not read YouTube subtitles. Paste a transcript or sync manually.", true);
      }
      return null;
    }
    return payload;
  } catch {
    return null;
  }
}

async function hydrateLessonCaptions(lesson) {
  if (lesson.importStatus || window.location.protocol === "file:" || !lessonNeedsHydration(lesson)) {
    return;
  }

  lesson.importStatus = "loading";
  const imported = await fetchYouTubeLesson(`https://www.youtube.com/watch?v=${lesson.videoId}`, { silent: true });
  if (!imported) {
    lesson.importStatus = "failed";
    return;
  }

  const importedCues = normalizeLessonCues(imported.cues || []);
  if (!lesson.custom && !importedCues.length) {
    lesson.importStatus = "failed";
    return;
  }

  const wasActive = lesson.id === state.activeLessonId;
  const currentTime = wasActive ? getCurrentTime() : 0;
  const shouldReplaceCues =
    !isManualSubtitleLesson(lesson) &&
    (importedCues.length || !hasUsableCues(lesson) || hasPlaceholderCue(lesson) || hasOldCaptionSchema(lesson) || lacksChineseSubtitles(lesson));
  if (shouldReplaceCues) {
    state.syncSettings[syncSettingKey(lesson)] = { offset: 0, anchors: [] };
    persistSyncSettings();
  }

  Object.assign(lesson, {
    title: imported.title || lesson.title,
    host: imported.host || lesson.host,
    duration: Math.max(imported.duration || 0, importedCues[importedCues.length - 1]?.end || lesson.duration),
    skill: imported.subtitleSource || lesson.skill,
    subtitleSource: imported.subtitleSource || lesson.subtitleSource,
    captionError: imported.captionError || "",
    captionVersion: Number(imported.captionVersion) || CAPTION_SCHEMA_VERSION,
    cues: shouldReplaceCues ? importedCues : lesson.cues,
    importStatus: importedCues.length ? "ready" : "metadata-only",
  });

  if (lesson.custom) {
    persistCustomLessons();
  }

  renderLessonList();
  if (wasActive) {
    applyCachedAITranslations(lesson);
    renderLessonList();
    elements.lessonTitle.textContent = lesson.title;
    if (elements.lessonMeta) {
      elements.lessonMeta.textContent = `${lesson.host} · ${lesson.level} · ${lesson.skill} · ${formatTime(lesson.duration)}`;
    }
    updateTimelineBounds(lesson.duration);
    renderSubtitles();
    setActiveCue(0, { scroll: false, force: true });
    updatePlaybackFromTime(currentTime);
    updateSyncInfo();
    updateAITranslateButton();
    focusWord(firstLookupWord(lesson));
  }
}

function lessonNeedsHydration(lesson) {
  if (!lesson) {
    return false;
  }
  if (isManualSubtitleLesson(lesson)) {
    return false;
  }
  if (!lesson.custom) {
    return true;
  }
  return hasGeneratedYouTubeTitle(lesson) || hasPlaceholderCue(lesson) || hasOldCaptionSchema(lesson) || lacksChineseSubtitles(lesson);
}

function hasGeneratedYouTubeTitle(lesson) {
  return /^YouTube lesson [A-Za-z0-9_-]{11}$/.test(String(lesson.title || "").trim());
}

function isManualSubtitleLesson(lesson) {
  return /manual|imported srt/.test(String(`${lesson?.subtitleSource || ""} ${lesson?.skill || ""}`).toLowerCase());
}

function hasOldCaptionSchema(lesson) {
  return Number(lesson.captionVersion) < CAPTION_SCHEMA_VERSION;
}

function lacksChineseSubtitles(lesson) {
  return hasUsableCues(lesson) && !lesson.cues.some((cue) => String(cue.zh || "").trim());
}

function hasUsableCues(lesson) {
  return stripPlaceholderCues(lesson?.cues || []).length > 0;
}

function hasPlaceholderCue(lesson) {
  return Array.isArray(lesson?.cues) && lesson.cues.some((cue) => isPlaceholderCue(cue));
}

function isPlaceholderCue(cue) {
  return String(cue?.en || "").trim() === "Add a transcript to turn this video into an interactive lesson.";
}

function stripPlaceholderCues(cues) {
  return (Array.isArray(cues) ? cues : []).filter((cue) => cue && !isPlaceholderCue(cue));
}

function normalizeLessonCues(cues) {
  return stripPlaceholderCues(cues)
    .map(sanitizeCue)
    .sort((a, b) => a.start - b.start)
    .filter((cue) => String(cue.en || "").trim() || String(cue.zh || "").trim());
}

function normalizeLessonDefinition(lesson) {
  return {
    ...lesson,
    cues: normalizeLessonCues(lesson.cues),
  };
}

function persistCustomLessons() {
  writeStorage(CUSTOM_LESSONS_KEY, lessons.filter((lesson) => lesson.custom).slice(0, 20));
}

function persistSubtitleOverride(lesson) {
  state.subtitleOverrides[lesson.id] = {
    cues: normalizeLessonCues(lesson.cues),
    subtitleSource: String(lesson.subtitleSource || "Imported SRT"),
    skill: String(lesson.skill || "Imported SRT"),
    captionVersion: Number(lesson.captionVersion) || Date.now(),
    updatedAt: new Date().toISOString(),
  };
  writeStorage(storage.subtitleOverrides, state.subtitleOverrides);
}

function applyStoredSubtitleOverrides() {
  lessons.forEach((lesson) => {
    const override = state.subtitleOverrides[lesson.id];
    if (!override) {
      return;
    }
    const cues = normalizeLessonCues(override.cues);
    if (!cues.length) {
      return;
    }
    Object.assign(lesson, {
      cues,
      subtitleSource: String(override.subtitleSource || "Imported SRT"),
      skill: String(override.skill || "Imported SRT"),
      captionError: "",
      captionVersion: Number(override.captionVersion) || Date.now(),
      importStatus: "ready",
      duration: Math.max(lesson.duration, cues[cues.length - 1]?.end || 0),
    });
  });
}

function sanitizeSubtitleOverrides(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, override]) => override && typeof override === "object")
      .map(([lessonId, override]) => [
        String(lessonId),
        {
          cues: normalizeLessonCues(override.cues),
          subtitleSource: String(override.subtitleSource || "Imported SRT"),
          skill: String(override.skill || "Imported SRT"),
          captionVersion: Number(override.captionVersion) || 0,
          updatedAt: String(override.updatedAt || ""),
        },
      ])
      .filter(([, override]) => override.cues.length),
  );
}

function setCustomStatus(message, isError = false) {
  if (!elements.customStatus) {
    return;
  }
  elements.customStatus.textContent = message;
  elements.customStatus.classList.toggle("error", isError);
}

async function fetchAITranslationConfig() {
  if (window.location.protocol === "file:") {
    setAITranslateStatus("Open the local app URL.");
    updateAITranslateButton();
    return;
  }

  try {
    if (await redirectFromLegacyPreviewPort()) {
      return;
    }
    const response = await fetch("/api/config", {
      headers: { Accept: "application/json" },
    });
    const payload = await response.json();
    state.aiTranslationProviders = sanitizeAIProviders(payload.translation_providers);
    state.aiTranslationDefaultProvider = sanitizeAIProvider(payload.translation_provider || state.aiTranslationProviders[0]?.id || "");
    state.aiTranslationAvailable = Boolean(payload.ai_translation_available || state.aiTranslationProviders.length);
    state.aiTranslationModel = String(payload.translation_model || "");
  } catch {
    state.aiTranslationAvailable = false;
    state.aiTranslationProviders = [];
    state.aiTranslationDefaultProvider = "";
  }

  updateAIProviderOptions();
  applyCachedAITranslations(activeLesson());
  renderSubtitles();
  updateCaption();
  setAITranslateStatus("");
  updateAITranslateButton();
}

async function redirectFromLegacyPreviewPort() {
  if (window.location.port !== LEGACY_PREVIEW_PORT) {
    return false;
  }

  const preferredUrl = new URL(window.location.href);
  preferredUrl.port = PREFERRED_PREVIEW_PORT;
  const configUrl = new URL("/api/config", preferredUrl);
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 700);

  try {
    const response = await fetch(configUrl.href, {
      cache: "no-store",
      headers: { Accept: "application/json" },
      signal: controller.signal,
    });
    if (response.ok) {
      window.location.replace(preferredUrl.href);
      return true;
    }
  } catch {
    // Stay on the current port if the preferred preview is not running.
  } finally {
    window.clearTimeout(timer);
  }

  return false;
}

function updateAITranslateButton() {
  // AI translation controls were removed from the UI; keep this hook harmless for older cached state.
}

function setAITranslateStatus(message, isError = false) {
  if (!elements.aiTranslateStatus) {
    return;
  }
  elements.aiTranslateStatus.textContent = message;
  elements.aiTranslateStatus.classList.toggle("error", isError);
}

function updateAIProviderOptions() {
  if (!elements.aiTranslateProvider) {
    return;
  }

  const availableIds = new Set(state.aiTranslationProviders.map((provider) => provider.id));
  elements.aiTranslateProvider.value = state.aiTranslationProvider;
  [...elements.aiTranslateProvider.options].forEach((option) => {
    option.disabled = option.value !== "auto" && !availableIds.has(option.value);
    if (option.value !== "auto") {
      option.textContent = aiProviderLabel(option.value);
    }
  });

  if (state.aiTranslationProvider !== "auto" && !availableIds.has(state.aiTranslationProvider)) {
    state.aiTranslationProvider = "auto";
    elements.aiTranslateProvider.value = "auto";
    writeStorage(storage.aiProvider, state.aiTranslationProvider);
  }
}

function selectedAIProviderForRequest() {
  const selected = sanitizeAIProvider(elements.aiTranslateProvider?.value || state.aiTranslationProvider);
  if (selected !== "auto") {
    return state.aiTranslationProviders.some((provider) => provider.id === selected) ? selected : "";
  }

  if (state.aiTranslationDefaultProvider && state.aiTranslationProviders.some((provider) => provider.id === state.aiTranslationDefaultProvider)) {
    return state.aiTranslationDefaultProvider;
  }
  return state.aiTranslationProviders[0]?.id || "";
}

function aiProviderLabel(providerId) {
  const provider = state.aiTranslationProviders.find((item) => item.id === providerId);
  return provider?.label || AI_PROVIDER_LABELS[providerId] || "AI";
}

function sanitizeAIProvider(value) {
  const provider = String(value || "auto").trim().toLowerCase();
  return ["auto", "gemini", "ollama"].includes(provider) ? provider : "auto";
}

function sanitizeAIProviders(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .map((provider) => {
      if (!provider || typeof provider !== "object") {
        return null;
      }
      const id = sanitizeAIProvider(provider.id);
      if (id === "auto") {
        return null;
      }
      return {
        id,
        label: String(provider.label || AI_PROVIDER_LABELS[id] || "AI"),
        model: String(provider.model || ""),
      };
    })
    .filter(Boolean);
}

async function translateChineseWithAI({ cueIndex = state.activeCueIndex } = {}) {
  const lesson = activeLesson();
  if (!hasUsableCues(lesson)) {
    setAITranslateStatus("No subtitles to translate.", true);
    return;
  }
  if (window.location.protocol === "file:") {
    setAITranslateStatus("Open the local app at http://127.0.0.1:8789/.", true);
    return;
  }
  if (!state.aiTranslationAvailable) {
    setAITranslateStatus("AI translation is not enabled.", true);
    return;
  }
  const provider = selectedAIProviderForRequest();
  if (!provider) {
    setAITranslateStatus("Choose an available AI model.", true);
    return;
  }

  const scope = elements.aiTranslateScope?.value || "current";
  const cueIndexes = aiTranslationIndexes(lesson, scope, cueIndex);
  if (!cueIndexes.length) {
    setAITranslateStatus("");
    return;
  }

  const cached = cachedAITranslations(lesson);
  const missingIndexes = cueIndexes.filter((index) => !cached.translations[String(index)]);
  if (!missingIndexes.length) {
    applyAITranslations(lesson, cached.translations);
    setAITranslateStatus("");
    return;
  }

  state.translatingChinese = true;
  updateAITranslateButton();
  setAITranslateStatus(`Translating ${missingIndexes.length} line${missingIndexes.length === 1 ? "" : "s"} with ${aiProviderLabel(provider)}...`);

  try {
    const payload = await requestAITranslations(lesson, missingIndexes, provider);
    const translations = normalizeTranslationMap(payload.translations);
    if (!Object.keys(translations).length) {
      throw new Error("No usable translation was returned.");
    }

    cached.translations = { ...cached.translations, ...translations };
    cached.provider = payload.provider || provider;
    cached.model = payload.model || state.aiTranslationModel;
    cached.updatedAt = new Date().toISOString();
    state.aiTranslations[aiTranslationCacheKey(lesson)] = cached;
    persistAITranslations();
    applyAITranslations(lesson, cached.translations);
    setAITranslateStatus("");
  } catch (error) {
    setAITranslateStatus(error.message || "AI translation failed.", true);
  } finally {
    state.translatingChinese = false;
    updateAITranslateButton();
  }
}

function aiTranslationIndexes(lesson, scope, cueIndex = state.activeCueIndex) {
  if (scope === "current") {
    const index = Math.max(0, Math.min(Number(cueIndex) || 0, lesson.cues.length - 1));
    const cue = lesson.cues[index];
    return cue && !isPlaceholderCue(cue) && String(cue.en || "").trim() ? [index] : [];
  }

  return lesson.cues
    .map((cue, index) => ({ cue, index }))
    .filter(({ cue }) => !isPlaceholderCue(cue) && String(cue.en || "").trim())
    .filter(({ cue }) => scope === "all" || !String(cue.zh || "").trim())
    .map(({ index }) => index);
}

async function requestAITranslations(lesson, cueIndexes, provider) {
  const response = await fetch("/api/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      provider,
      videoId: lesson.videoId,
      title: lesson.title,
      cues: cueIndexes.map((index) => ({
        index,
        en: lesson.cues[index]?.en || "",
      })),
    }),
  });

  const payload = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(payload.error || "AI translation failed.");
  }
  return payload;
}

function applyAITranslations(lesson, translations) {
  Object.entries(translations).forEach(([rawIndex, zh]) => {
    const index = Number(rawIndex);
    if (lesson.cues[index] && String(zh || "").trim()) {
      lesson.cues[index].zh = toTraditionalChinese(zh);
    }
  });

  lesson.subtitleSource = aiTranslatedSource(lesson);
  lesson.skill = lesson.subtitleSource;
  if (lesson.custom) {
    persistCustomLessons();
  }

  renderLessonList();
  renderSubtitles();
  updateCaption();
}

function applyCachedAITranslations(lesson) {
  const translations = cachedAITranslations(lesson).translations;
  if (Object.keys(translations).length) {
    lesson.subtitleSource = aiTranslatedSource(lesson);
    lesson.skill = lesson.subtitleSource;
  }
  Object.entries(translations).forEach(([rawIndex, zh]) => {
    const index = Number(rawIndex);
    if (lesson.cues[index] && String(zh || "").trim()) {
      lesson.cues[index].zh = toTraditionalChinese(zh);
    }
  });
}

function aiTranslatedSource(lesson) {
  const source = String(lesson.subtitleSource || lesson.skill || "YouTube captions")
    .replace(/\s*\+\s*AI Chinese translation/g, "")
    .replace(/\s*\+\s*Google Gemini Chinese translation/g, "")
    .trim();
  const provider = selectedAIProviderForRequest();
  return `${source || "YouTube captions"} + ${aiProviderLabel(provider)} Chinese translation`;
}

function cachedAITranslations(lesson) {
  const key = aiTranslationCacheKey(lesson);
  const cached = state.aiTranslations[key];
  if (cached && cached.version === AI_TRANSLATION_CACHE_VERSION) {
    return {
      version: AI_TRANSLATION_CACHE_VERSION,
      translations: normalizeTranslationMap(cached.translations),
      provider: sanitizeAIProvider(cached.provider),
      model: String(cached.model || ""),
      updatedAt: String(cached.updatedAt || ""),
    };
  }

  return {
    version: AI_TRANSLATION_CACHE_VERSION,
    translations: {},
    provider: selectedAIProviderForRequest() || "auto",
    model: "",
    updatedAt: "",
  };
}

function aiTranslationCacheKey(lesson) {
  const provider = selectedAIProviderForRequest() || state.aiTranslationProvider || state.aiTranslationDefaultProvider || "auto";
  const cues = stripPlaceholderCues(lesson?.cues || []);
  const firstCue = cues[0] || emptySubtitleCue();
  const lastCue = cues[cues.length - 1] || emptySubtitleCue();
  return [
    provider,
    lesson?.videoId || lesson?.id || "lesson",
    Number(lesson?.captionVersion) || 0,
    cues.length,
    Math.round(firstCue.start * 10),
    Math.round(lastCue.end * 10),
  ].join(":");
}

function persistAITranslations() {
  const entries = Object.entries(state.aiTranslations).slice(-30);
  state.aiTranslations = Object.fromEntries(entries);
  writeStorage(storage.aiTranslations, state.aiTranslations);
}

function migrateCachedChineseToTraditional() {
  let changed = false;
  state.aiTranslations = Object.fromEntries(
    Object.entries(state.aiTranslations).map(([key, entry]) => {
      const translations = normalizeTranslationMap(entry?.translations);
      if (JSON.stringify(translations) !== JSON.stringify(entry?.translations || {})) {
        changed = true;
      }
      return [
        key,
        {
          ...entry,
          translations,
        },
      ];
    }),
  );
  if (changed) {
    persistAITranslations();
  }
}

function sanitizeAITranslations(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .filter(([, entry]) => entry && typeof entry === "object")
      .map(([key, entry]) => [
        String(key),
        {
          version: Number(entry.version) || 0,
          translations: normalizeTranslationMap(entry.translations),
          provider: sanitizeAIProvider(entry.provider),
          model: String(entry.model || ""),
          updatedAt: String(entry.updatedAt || ""),
        },
      ]),
  );
}

function normalizeTranslationMap(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value)
      .map(([index, text]) => [String(Number(index)), toTraditionalChinese(text)])
      .filter(([index, text]) => index !== "NaN" && text),
  );
}

function renderLessonList() {
  if (!elements.lessonList) {
    return;
  }
  const query = elements.lessonSearch?.value.trim().toLowerCase() || "";
  const filtered = lessons.filter((lesson) => {
    const levelMatch = state.filterLevel === "all" || lesson.level === state.filterLevel;
    const haystack = `${lesson.title} ${lesson.host} ${lesson.level} ${lesson.skill} ${lesson.summary}`.toLowerCase();
    return levelMatch && (!query || haystack.includes(query));
  });

  elements.lessonList.innerHTML = "";
  if (!filtered.length) {
    elements.lessonList.innerHTML = `<div class="empty-result">No matching videos</div>`;
    return;
  }

  filtered.forEach((lesson) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `lesson-card${lesson.id === state.activeLessonId ? " active" : ""}`;
    button.innerHTML = `
      <span class="lesson-thumb">
        <img src="https://img.youtube.com/vi/${lesson.videoId}/hqdefault.jpg" alt="">
        <span class="level-badge">${lesson.level}</span>
      </span>
      <span>
        <span class="lesson-title">${escapeHtml(lesson.title)}</span>
        <span class="lesson-detail">${escapeHtml(lesson.skill)} · ${formatTime(lesson.duration)}</span>
      </span>
    `;
    button.addEventListener("click", () => selectLesson(lesson.id));
    elements.lessonList.appendChild(button);
  });
}

function selectLesson(lessonId) {
  if (lessonId === state.activeLessonId) {
    writeStorage(storage.activeLesson, state.activeLessonId);
    closeMobileLibrary();
    closeSavedVideosPanel();
    return;
  }
  stopShadowing({ silent: true });
  state.activeLessonId = lessonId;
  writeStorage(storage.activeLesson, state.activeLessonId);
  state.activeCueIndex = 0;
  state.fallbackTime = 0;
  renderLessonList();
  renderLesson();
  closeMobileLibrary();
  closeSavedVideosPanel();
  if (state.playerReady) {
    state.player.pauseVideo();
    state.player.cueVideoById(activeLesson().videoId, 0);
    setPlaybackRate(state.playbackRate);
  }
  updatePlayButton();
  updatePlaybackFromTime(0);
}

function renderLesson() {
  const lesson = activeLesson();
  elements.lessonTitle.textContent = lesson.title;
  if (elements.lessonMeta) {
    elements.lessonMeta.textContent = `${lesson.host} · ${lesson.level} · ${lesson.skill} · ${formatTime(lesson.duration)}`;
  }
  updateTimelineBounds(lesson.duration);
  if (elements.subtitleSearch) {
    elements.subtitleSearch.value = "";
  }
  updateLessonBookmark();
  renderSubtitles();
  setActiveCue(0, { scroll: false, force: true });
  focusWord(firstLookupWord(lesson));
  updateSyncInfo();
  updateAITranslateButton();
  hydrateLessonCaptions(lesson);
}

function updateLessonBookmark() {
  const lesson = activeLesson();
  const saved = state.savedLessons.has(lesson.id);
  elements.bookmarkLesson.classList.toggle("active", saved);
  elements.bookmarkLesson.querySelector("span").textContent = saved ? "Saved" : "Save";
  renderSavedVideosMenu();
}

function toggleSavedVideosPanel() {
  setSavedVideosPanelOpen(!state.savedVideosOpen);
}

function closeSavedVideosPanel() {
  setSavedVideosPanelOpen(false);
}

function setSavedVideosPanelOpen(open) {
  if (!elements.savedVideosPanel || !elements.savedVideosToggle) {
    return;
  }

  state.savedVideosOpen = Boolean(open);
  elements.savedVideosPanel.hidden = !state.savedVideosOpen;
  elements.savedVideosToggle.setAttribute("aria-expanded", String(state.savedVideosOpen));
  if (state.savedVideosOpen) {
    renderSavedVideosMenu();
  }
}

function closeSavedVideosOnOutsideClick(event) {
  if (!state.savedVideosOpen || event.target?.closest?.(".saved-videos-menu")) {
    return;
  }
  closeSavedVideosPanel();
}

function renderSavedVideosMenu() {
  const savedLessons = savedVideoLessons();

  if (elements.savedVideosCount) {
    elements.savedVideosCount.textContent = String(savedLessons.length);
  }

  if (!elements.savedVideosList) {
    return;
  }

  elements.savedVideosList.innerHTML = "";
  if (!savedLessons.length) {
    elements.savedVideosList.innerHTML = `<div class="saved-videos-empty">No saved videos yet</div>`;
    return;
  }

  savedLessons.forEach((lesson) => {
    const item = document.createElement("article");
    item.className = `saved-video-card${lesson.id === state.activeLessonId ? " active" : ""}`;
    item.innerHTML = `
      <button class="saved-video-main" type="button" aria-label="Open saved video">
        <span class="saved-video-thumb">
          <img src="https://img.youtube.com/vi/${lesson.videoId}/mqdefault.jpg" alt="">
        </span>
        <span class="saved-video-copy">
          <span class="saved-video-title">${escapeHtml(lesson.title)}</span>
          <span class="saved-video-detail">${escapeHtml(lesson.skill)} · ${formatTime(lesson.duration)}</span>
        </span>
      </button>
      <button class="saved-video-remove" type="button" aria-label="Remove saved video" title="Remove saved video">
        <i data-lucide="trash-2" aria-hidden="true"></i>
      </button>
    `;
    item.querySelector(".saved-video-main").addEventListener("click", () => selectLesson(lesson.id));
    item.querySelector(".saved-video-remove").addEventListener("click", () => removeSavedVideo(lesson.id));
    elements.savedVideosList.appendChild(item);
  });

  refreshIcons();
}

function removeSavedVideo(lessonId) {
  state.savedLessons.delete(lessonId);
  writeStorage(storage.lessons, [...state.savedLessons]);
  updateLessonBookmark();
  renderLessonList();
}

function savedVideoLessons() {
  return [...state.savedLessons]
    .reverse()
    .map((lessonId) => lessons.find((lesson) => lesson.id === lessonId))
    .filter(Boolean);
}

function renderSubtitles() {
  const lesson = activeLesson();
  const query = elements.subtitleSearch?.value.trim().toLowerCase() || "";
  elements.subtitleList.innerHTML = "";

  const subtitleItems = lesson.cues
    .map((cue, index) => ({ cue, index }))
    .filter(({ cue }) => !isPlaceholderCue(cue));

  if (!subtitleItems.length) {
    elements.subtitleList.innerHTML = `
      <div class="empty-result subtitle-empty">
        <strong>${lesson.captionError ? "No English subtitles available" : "No subtitles added"}</strong>
        <span>Add a transcript to turn this video into an interactive lesson.</span>
      </div>
    `;
    updateSubtitleMode();
    updateAITranslateButton();
    resetSrtDownloadButton({ disabled: !hasDownloadableSrtCues(lesson) });
    return;
  }

  const matches = subtitleItems
    .filter(({ cue }) => {
      const haystack = `${cue.en} ${traditionalSubtitleText(cue)}`.toLowerCase();
      return !query || haystack.includes(query);
    });

  if (!matches.length) {
    elements.subtitleList.innerHTML = `<div class="empty-result">No matching subtitles</div>`;
    updateAITranslateButton();
    resetSrtDownloadButton({ disabled: !hasDownloadableSrtCues(lesson) });
    return;
  }

  matches.forEach(({ cue, index }) => {
    const item = document.createElement("article");
    item.className = `cue-card${index === state.activeCueIndex ? " active" : ""}`;
    item.dataset.index = String(index);
    item.draggable = canMergeSubtitleCue(index);
    item.tabIndex = 0;
    item.setAttribute("role", "button");
    item.setAttribute("aria-label", `Jump to ${formatTime(videoTimeForCueStart(index))}`);
    item.setAttribute("title", "Drag onto the subtitle before or after it to merge");
    item.innerHTML = `
      <div class="cue-head">
        <span class="cue-time">${formatTime(videoTimeForCueStart(index))}</span>
        <span class="line-actions">
          <button class="line-sync${isCueSynced(index) ? " synced" : ""}" type="button" aria-label="Sync this line">
            <i data-lucide="timer-reset" aria-hidden="true"></i>
            <span>Sync</span>
          </button>
          <button class="line-merge" type="button" aria-label="Merge this line with the next subtitle" ${canMergeSubtitlePair(index, index + 1) ? "" : "disabled"}>
            <i data-lucide="git-merge" aria-hidden="true"></i>
            <span>Merge</span>
          </button>
          <button class="line-bookmark${state.savedLines.has(lineStorageId(index)) ? " saved" : ""}" type="button" aria-label="Save line">
            <i data-lucide="bookmark" aria-hidden="true"></i>
          </button>
        </span>
      </div>
      <p class="cue-en">${escapeHtml(cue.en)}</p>
      <p class="cue-zh">${escapeHtml(traditionalSubtitleText(cue))}</p>
    `;
    item.addEventListener("click", (event) => handleCueClick(event, index));
    item.addEventListener("pointerdown", (event) => prepareCueTextSelection(event, item, index));
    item.addEventListener("keydown", (event) => {
      if (event.target.closest(".word-token, .line-bookmark, .line-sync, .line-merge")) {
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        seekTo(videoTimeForCueStart(index));
        playVideo();
      }
    });
    item.addEventListener("dragstart", (event) => startSubtitleMergeDrag(event, index));
    item.addEventListener("dragover", (event) => updateSubtitleMergeDropTarget(event, index));
    item.addEventListener("dragleave", (event) => clearSubtitleMergeDropTarget(event));
    item.addEventListener("drop", (event) => dropSubtitleForMerge(event, index));
    item.addEventListener("dragend", cleanupSubtitleMergeDrag);
    elements.subtitleList.appendChild(item);
  });

  updateSubtitleMode();
  updateAITranslateButton();
  resetSrtDownloadButton({ disabled: !hasDownloadableSrtCues(lesson) });
  refreshIcons();
}

function handleCueClick(event, cueIndex) {
  if (hasTextSelectionInside(event.currentTarget)) {
    event.stopPropagation();
    return;
  }

  const syncButton = event.target.closest(".line-sync");
  const mergeButton = event.target.closest(".line-merge");
  const bookmarkButton = event.target.closest(".line-bookmark");
  const wordToken = event.target.closest(".word-token");

  if (syncButton) {
    event.stopPropagation();
    syncCueAtCurrentTime(cueIndex);
    return;
  }

  if (mergeButton) {
    event.stopPropagation();
    mergeSubtitleCues(cueIndex, cueIndex + 1);
    return;
  }

  if (bookmarkButton) {
    event.stopPropagation();
    toggleLineBookmark(cueIndex);
    return;
  }

  if (wordToken) {
    event.stopPropagation();
    focusWord(wordToken.dataset.word);
    return;
  }

  seekTo(videoTimeForCueStart(cueIndex));
  playVideo();
}

function prepareCueTextSelection(event, item, cueIndex) {
  if (!event.target.closest(".cue-en, .cue-zh")) {
    return;
  }

  item.draggable = false;
  const restoreDrag = () => {
    if (item.isConnected) {
      item.draggable = canMergeSubtitleCue(cueIndex);
    }
  };
  window.addEventListener("pointerup", restoreDrag, { once: true });
  window.addEventListener("pointercancel", restoreDrag, { once: true });
}

function hasTextSelectionInside(container) {
  const selection = window.getSelection?.();
  if (!selection || selection.isCollapsed || !selection.toString().trim()) {
    return false;
  }

  return selectionBelongsTo(selection.anchorNode, container) || selectionBelongsTo(selection.focusNode, container);
}

function selectionBelongsTo(node, container) {
  if (!node || !container) {
    return false;
  }

  const element = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  return Boolean(element && container.contains(element));
}

function canMergeSubtitleCue(cueIndex) {
  return canMergeSubtitlePair(cueIndex, cueIndex - 1) || canMergeSubtitlePair(cueIndex, cueIndex + 1);
}

function canMergeSubtitlePair(sourceIndex, targetIndex) {
  const lesson = activeLesson();
  const sourceCue = lesson.cues[sourceIndex];
  const targetCue = lesson.cues[targetIndex];
  return (
    Number.isInteger(sourceIndex) &&
    Number.isInteger(targetIndex) &&
    Math.abs(sourceIndex - targetIndex) === 1 &&
    sourceCue &&
    targetCue &&
    !isPlaceholderCue(sourceCue) &&
    !isPlaceholderCue(targetCue)
  );
}

function startSubtitleMergeDrag(event, cueIndex) {
  if (event.target.closest("button")) {
    event.preventDefault();
    return;
  }
  if (!canMergeSubtitleCue(cueIndex)) {
    event.preventDefault();
    return;
  }

  state.subtitleMergeDragIndex = cueIndex;
  event.currentTarget.classList.add("dragging-cue");
  event.dataTransfer.effectAllowed = "move";
  event.dataTransfer.setData("text/plain", String(cueIndex));
}

function updateSubtitleMergeDropTarget(event, cueIndex) {
  const sourceIndex = subtitleMergeSourceIndex(event);
  if (!canMergeSubtitlePair(sourceIndex, cueIndex)) {
    return;
  }

  event.preventDefault();
  event.dataTransfer.dropEffect = "move";
  event.currentTarget.classList.add("merge-drop-target");
}

function clearSubtitleMergeDropTarget(event) {
  if (event.currentTarget.contains(event.relatedTarget)) {
    return;
  }
  event.currentTarget.classList.remove("merge-drop-target");
}

function dropSubtitleForMerge(event, cueIndex) {
  const sourceIndex = subtitleMergeSourceIndex(event);
  if (!canMergeSubtitlePair(sourceIndex, cueIndex)) {
    return;
  }

  event.preventDefault();
  mergeSubtitleCues(sourceIndex, cueIndex);
}

function subtitleMergeSourceIndex(event) {
  const transferred = Number(event.dataTransfer?.getData("text/plain"));
  if (Number.isInteger(transferred)) {
    return transferred;
  }
  return Number.isInteger(state.subtitleMergeDragIndex) ? state.subtitleMergeDragIndex : null;
}

function cleanupSubtitleMergeDrag() {
  state.subtitleMergeDragIndex = null;
  elements.subtitleList
    .querySelectorAll(".dragging-cue, .merge-drop-target")
    .forEach((card) => card.classList.remove("dragging-cue", "merge-drop-target"));
}

function mergeSubtitleCues(sourceIndex, targetIndex) {
  if (!canMergeSubtitlePair(sourceIndex, targetIndex)) {
    setAITranslateStatus("Only adjacent subtitle lines can be merged.", true);
    return;
  }

  const lesson = activeLesson();
  const firstIndex = Math.min(sourceIndex, targetIndex);
  const secondIndex = Math.max(sourceIndex, targetIndex);
  const firstCue = lesson.cues[firstIndex];
  const secondCue = lesson.cues[secondIndex];
  const mergedCue = {
    start: Math.min(Number(firstCue.start) || 0, Number(secondCue.start) || 0),
    end: Math.max(Number(firstCue.end) || 0, Number(secondCue.end) || 0),
    en: joinSubtitleText(firstCue.en, secondCue.en),
    zh: toTraditionalChinese(joinSubtitleText(firstCue.zh, secondCue.zh)),
  };

  lesson.cues.splice(firstIndex, 2, mergedCue);
  lesson.cues = normalizeLessonCues(lesson.cues);
  lesson.duration = Math.max(lesson.duration, lesson.cues[lesson.cues.length - 1]?.end || mergedCue.end);
  lesson.captionVersion = Date.now();
  lesson.subtitleSource = markEditedSubtitleSource(lesson.subtitleSource);
  lesson.skill = markEditedSubtitleSource(lesson.skill);
  state.activeCueIndex = Math.min(firstIndex, lesson.cues.length - 1);
  state.syncSettings[syncSettingKey(lesson)] = { offset: 0, anchors: [] };
  persistSyncSettings();
  clearSavedLinesForLesson(lesson.id);

  if (lesson.custom) {
    persistCustomLessons();
  } else {
    persistSubtitleOverride(lesson);
  }

  cleanupSubtitleMergeDrag();
  renderLessonList();
  renderSubtitles();
  setActiveCue(state.activeCueIndex, { scroll: true, force: true });
  updatePlaybackFromTime(getCurrentTime());
  updateSyncInfo();
  updateAITranslateButton();
  setAITranslateStatus("Subtitle lines merged.");
}

function joinSubtitleText(...parts) {
  return parts
    .map((part) => String(part || "").trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+([,.;:!?，。；：！？])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function markEditedSubtitleSource(value) {
  const source = String(value || "Edited subtitles").replace(/\s*\+\s*edited/g, "").trim();
  return `${source || "Edited subtitles"} + edited`;
}

function clearSavedLinesForLesson(lessonId) {
  const prefix = `${lessonId}:`;
  const nextSavedLines = [...state.savedLines].filter((id) => !String(id).startsWith(prefix));
  if (nextSavedLines.length === state.savedLines.size) {
    return;
  }
  state.savedLines = new Set(nextSavedLines);
  writeStorage(storage.lines, nextSavedLines);
}

function tokenizeWords(value) {
  return escapeHtml(value).replace(/[A-Za-z][A-Za-z'-]*/g, (word) => {
    const clean = normalizeWord(word);
    return `<span class="word-token" tabindex="0" role="button" data-word="${clean}">${word}</span>`;
  });
}

function toggleLineBookmark(cueIndex) {
  const id = lineStorageId(cueIndex);
  if (state.savedLines.has(id)) {
    state.savedLines.delete(id);
  } else {
    state.savedLines.add(id);
  }
  writeStorage(storage.lines, [...state.savedLines]);
  renderSubtitles();
}

function lineStorageId(cueIndex) {
  return `${state.activeLessonId}:${cueIndex}`;
}

function setActiveCue(index, options = {}) {
  const lesson = activeLesson();
  const nextIndex = Math.max(0, Math.min(index, lesson.cues.length - 1));
  if (nextIndex === state.activeCueIndex && options.force !== true) {
    updateCaption();
    return;
  }

  state.activeCueIndex = nextIndex;
  updateCaption();
  updateActiveCueCards(options);
}

function updateActiveCueCards({ scroll = true } = {}) {
  const cards = [...elements.subtitleList.querySelectorAll(".cue-card")];
  let activeCard = null;

  cards.forEach((card) => {
    const active = Number(card.dataset.index) === state.activeCueIndex;
    card.classList.toggle("active", active);
    if (active) {
      activeCard = card;
    }
  });

  if (scroll && activeCard) {
    scrollCueCardToTop(activeCard);
  }
}

function scrollCueCardToTop(card) {
  const list = elements.subtitleList;
  const listRect = list.getBoundingClientRect();
  const cardRect = card.getBoundingClientRect();
  const targetTop = list.scrollTop + cardRect.top - listRect.top - 1;
  list.scrollTo({ top: Math.max(0, targetTop), behavior: "smooth" });
}

function updateCaption() {
  if (!hasUsableCues(activeLesson())) {
    elements.captionOverlay.classList.add("empty");
    elements.captionEnglish.textContent = "";
    elements.captionChinese.textContent = "";
    elements.practiceLine.textContent = "No subtitles loaded";
    resetCopyPracticeButton({ disabled: true });
    return;
  }

  const cue = activeCue();
  elements.captionOverlay.classList.remove("empty");
  elements.captionEnglish.textContent = cue.en;
  elements.captionChinese.textContent = traditionalSubtitleText(cue);
  elements.practiceLine.textContent = cue.en;
  applyCaptionPosition();
  if (!state.copyStatusTimer || state.copyStatusCueIndex !== state.activeCueIndex) {
    resetCopyPracticeButton();
  }
}

function traditionalSubtitleText(cue) {
  return toTraditionalChinese(cue?.zh || "");
}

function updateSubtitleMode() {
  elements.shell.classList.toggle("hide-en", state.subtitleMode === "zh");
  elements.shell.classList.toggle("hide-zh", state.subtitleMode === "en");
  elements.shell.classList.toggle("hide-captions", state.subtitleMode === "none");
}

function startTicker() {
  cancelAnimationFrame(state.rafId);

  const tick = () => {
    syncDurationFromPlayer();
    updatePlaybackFromTime(getCurrentTime());
    state.rafId = requestAnimationFrame(tick);
  };

  state.rafId = requestAnimationFrame(tick);
}

function updateTimelineBounds(duration) {
  if (elements.timeline) {
    elements.timeline.max = String(duration);
  }
  if (elements.duration) {
    elements.duration.textContent = formatTime(duration);
  }
}

function updateTimelinePosition(time, duration) {
  if (elements.timeline) {
    elements.timeline.value = String(time);
  }
  if (elements.currentTime) {
    elements.currentTime.textContent = formatTime(time);
  }
  if (elements.duration) {
    elements.duration.textContent = formatTime(duration);
  }
}

function updatePlaybackFromTime(currentTime) {
  const lesson = activeLesson();
  const time = Math.max(0, Math.min(currentTime, lesson.duration));

  if (hasUsableCues(lesson)) {
    const captionTime = captionTimeFromVideoTime(time);
    const cueIndex = lesson.cues.findIndex((cue, index) => {
      const nextCue = lesson.cues[index + 1];
      return !isPlaceholderCue(cue) && captionTime >= cue.start && captionTime < (nextCue ? nextCue.start : cue.end);
    });

    if (cueIndex >= 0) {
      setActiveCue(cueIndex);
    }

    if (state.loopLine && time > videoTimeForCueEnd(state.activeCueIndex)) {
      seekTo(videoTimeForCueStart(state.activeCueIndex));
      playVideo();
      return;
    }
  }

  updateTimelinePosition(time, lesson.duration);
}

function captionTimeFromVideoTime(videoTime) {
  const setting = currentSyncSetting();
  const offset = Number(setting.offset) || 0;
  const points = syncMappingPoints();
  if (!points.length) {
    return videoTime + offset;
  }
  if (points.length === 1) {
    return videoTime + (points[0].captionTime - points[0].videoTime) + offset;
  }
  return interpolateMapping(videoTime, points, "videoTime", "captionTime") + offset;
}

function videoTimeFromCaptionTime(captionTime) {
  const setting = currentSyncSetting();
  const offset = Number(setting.offset) || 0;
  const targetCaptionTime = captionTime - offset;
  const points = syncMappingPoints();
  if (!points.length) {
    return targetCaptionTime;
  }
  if (points.length === 1) {
    return targetCaptionTime - (points[0].captionTime - points[0].videoTime);
  }
  return interpolateMapping(targetCaptionTime, points, "captionTime", "videoTime");
}

function videoTimeForCueStart(cueIndex) {
  const lesson = activeLesson();
  const cue = lesson.cues[cueIndex] || lesson.cues[0] || emptySubtitleCue();
  return clamp(videoTimeFromCaptionTime(cue.start), 0, lesson.duration);
}

function videoTimeForCueEnd(cueIndex) {
  const lesson = activeLesson();
  const cue = lesson.cues[cueIndex] || lesson.cues[0] || emptySubtitleCue();
  const nextCue = lesson.cues[cueIndex + 1];
  const captionEnd = nextCue ? nextCue.start : cue.end;
  const start = videoTimeForCueStart(cueIndex);
  return clamp(Math.max(start + 0.5, videoTimeFromCaptionTime(captionEnd)), 0, lesson.duration);
}

function interpolateMapping(value, points, inputKey, outputKey) {
  const sorted = [...points].sort((a, b) => a[inputKey] - b[inputKey]);
  const first = sorted[0];
  const second = sorted[1];
  const last = sorted[sorted.length - 1];
  const beforeLast = sorted[sorted.length - 2];

  if (value <= first[inputKey]) {
    return first[outputKey] + (value - first[inputKey]) * mappingSlope(first, second, inputKey, outputKey);
  }

  for (let index = 0; index < sorted.length - 1; index += 1) {
    const left = sorted[index];
    const right = sorted[index + 1];
    if (value <= right[inputKey]) {
      const span = Math.max(0.001, right[inputKey] - left[inputKey]);
      const ratio = (value - left[inputKey]) / span;
      return left[outputKey] + ratio * (right[outputKey] - left[outputKey]);
    }
  }

  return last[outputKey] + (value - last[inputKey]) * mappingSlope(beforeLast, last, inputKey, outputKey);
}

function mappingSlope(left, right, inputKey, outputKey) {
  const inputSpan = right[inputKey] - left[inputKey];
  const outputSpan = right[outputKey] - left[outputKey];
  if (!Number.isFinite(inputSpan) || Math.abs(inputSpan) < 0.001 || !Number.isFinite(outputSpan)) {
    return 1;
  }
  return Math.max(0.1, Math.min(4, outputSpan / inputSpan));
}

function currentSyncSetting() {
  const key = syncSettingKey();
  if (!state.syncSettings[key]) {
    state.syncSettings[key] = { offset: 0, anchors: [] };
  }
  state.syncSettings[key] = sanitizeSyncSetting(state.syncSettings[key]);
  return state.syncSettings[key];
}

function syncSettingKey(lesson = activeLesson()) {
  return lesson.id;
}

function syncMappingPoints() {
  const lesson = activeLesson();
  const setting = currentSyncSetting();
  const rawPoints = (setting.anchors || [])
    .map((anchor) => ({
      cueIndex: Number(anchor.cueIndex),
      videoTime: Number(anchor.videoTime),
      captionTime: Number(anchor.captionTime),
    }))
    .filter((anchor) => {
      return (
        Number.isFinite(anchor.cueIndex) &&
        Number.isFinite(anchor.videoTime) &&
        Number.isFinite(anchor.captionTime) &&
        anchor.cueIndex >= 0 &&
        anchor.cueIndex < lesson.cues.length
      );
    })
    .sort((a, b) => a.videoTime - b.videoTime || a.captionTime - b.captionTime);

  const cleaned = [];
  rawPoints.forEach((point) => {
    const previous = cleaned[cleaned.length - 1];
    if (!previous || (point.videoTime > previous.videoTime + 0.1 && point.captionTime > previous.captionTime + 0.1)) {
      cleaned.push(point);
    }
  });
  return cleaned;
}

function syncCueAtCurrentTime(cueIndex) {
  const lesson = activeLesson();
  const cue = lesson.cues[cueIndex];
  if (!cue) {
    return;
  }

  const videoTime = getCurrentTime();
  const setting = currentSyncSetting();
  const offset = Number(setting.offset) || 0;
  const anchor = {
    cueIndex,
    videoTime: roundTime(videoTime),
    captionTime: roundTime(cue.start - offset),
  };

  setting.anchors = (setting.anchors || [])
    .filter((existing) => Number(existing.cueIndex) !== cueIndex)
    .concat(anchor)
    .sort((a, b) => Number(a.videoTime) - Number(b.videoTime))
    .slice(-14);

  persistSyncSettings();
  updateSyncInfo();
  renderSubtitles();
  updatePlaybackFromTime(videoTime);
  setCustomStatus(`Synced ${formatTime(cue.start)} -> ${formatTime(videoTime)}.`);
}

function adjustSubtitleOffset(delta) {
  const setting = currentSyncSetting();
  setting.offset = roundTime((Number(setting.offset) || 0) + delta);
  persistSyncSettings();
  renderSubtitles();
  updateSyncInfo();
  updatePlaybackFromTime(getCurrentTime());
}

function resetSubtitleSync() {
  state.syncSettings[syncSettingKey()] = { offset: 0, anchors: [] };
  persistSyncSettings();
  renderSubtitles();
  updateSyncInfo();
  updatePlaybackFromTime(getCurrentTime());
  setCustomStatus("Subtitle sync has been reset.");
}

function isCueSynced(cueIndex) {
  return syncMappingPoints().some((point) => Number(point.cueIndex) === cueIndex);
}

function updateSyncInfo() {
  if (!elements.syncInfo) {
    return;
  }

  const setting = currentSyncSetting();
  const offset = Number(setting.offset) || 0;
  const anchors = syncMappingPoints().length;
  const sign = offset > 0 ? "+" : "";
  elements.syncInfo.textContent = `${sign}${offset.toFixed(1)}s · ${anchors} sync`;
}

function persistSyncSettings() {
  writeStorage(storage.sync, state.syncSettings);
}

function sanitizeSyncSettings(value) {
  if (!value || typeof value !== "object" || Array.isArray(value)) {
    return {};
  }

  return Object.fromEntries(
    Object.entries(value).map(([key, setting]) => [key, sanitizeSyncSetting(setting)]),
  );
}

function sanitizeSyncSetting(setting) {
  if (!setting || typeof setting !== "object") {
    return { offset: 0, anchors: [] };
  }

  return {
    offset: roundTime(Number(setting.offset) || 0),
    anchors: Array.isArray(setting.anchors)
      ? setting.anchors
          .map((anchor) => ({
            cueIndex: Number(anchor.cueIndex),
            videoTime: roundTime(Number(anchor.videoTime)),
            captionTime: roundTime(Number(anchor.captionTime)),
          }))
          .filter((anchor) => {
            return Number.isFinite(anchor.cueIndex) && Number.isFinite(anchor.videoTime) && Number.isFinite(anchor.captionTime);
          })
      : [],
  };
}

function roundTime(value) {
  return Math.round((Number(value) || 0) * 100) / 100;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function syncDurationFromPlayer() {
  const lesson = activeLesson();
  if (!state.playerReady || !state.player?.getDuration) {
    return;
  }

  const playerDuration = Math.floor(Number(state.player.getDuration()) || 0);
  if (lesson.custom && playerDuration > 0 && playerDuration !== lesson.duration) {
    lesson.duration = Math.max(playerDuration, lesson.cues[lesson.cues.length - 1]?.end || 0);
    updateTimelineBounds(lesson.duration);
    renderLessonList();
    persistCustomLessons();
  }
}

function getCurrentTime() {
  if (state.playerReady && state.player?.getCurrentTime) {
    try {
      return state.player.getCurrentTime();
    } catch {
      return fallbackCurrentTime();
    }
  }
  return fallbackCurrentTime();
}

function fallbackCurrentTime() {
  if (!state.playingFallback) {
    return state.fallbackTime;
  }
  const elapsed = (performance.now() - state.fallbackStartedAt) / 1000;
  return state.fallbackTime + elapsed * state.playbackRate;
}

function seekTo(seconds) {
  const lesson = activeLesson();
  const target = Math.max(0, Math.min(seconds, lesson.duration));
  state.fallbackTime = target;
  state.fallbackStartedAt = performance.now();

  if (state.playerReady && state.player?.seekTo) {
    state.player.seekTo(target, true);
  }
  updatePlaybackFromTime(target);
}

function togglePlayback() {
  if (isPlaying()) {
    pauseVideo();
  } else {
    playVideo();
  }
}

function playVideo() {
  if (state.playerReady && state.player?.playVideo) {
    state.player.playVideo();
  } else {
    state.playingFallback = true;
    state.fallbackStartedAt = performance.now();
  }
  updatePlayButton();
}

function pauseVideo() {
  if (state.playerReady && state.player?.pauseVideo) {
    state.player.pauseVideo();
  }
  state.fallbackTime = fallbackCurrentTime();
  state.playingFallback = false;
  updatePlayButton();
}

function isPlaying() {
  if (state.playerReady && state.player?.getPlayerState && window.YT) {
    return state.player.getPlayerState() === window.YT.PlayerState.PLAYING;
  }
  return state.playingFallback;
}

function updatePlayButton() {
  if (!elements.playPause) {
    return;
  }
  const playing = isPlaying();
  const iconName = playing ? "pause" : "play";
  elements.playPause.setAttribute("aria-label", playing ? "Pause" : "Play");
  elements.playPause.innerHTML = `<i data-lucide="${iconName}" aria-hidden="true"></i><span>${playing ? "Pause" : "Play"}</span>`;
  refreshIcons();
}

async function copyPracticeLine() {
  const text = currentPracticeCopyText();
  if (!text || text === "No subtitles loaded") {
    setCopyPracticeButtonState("No subtitles", "copy-x", "error");
    return;
  }

  try {
    await writeClipboardText(text);
    setCopyPracticeButtonState("Copied", "check", "copied");
  } catch {
    setCopyPracticeButtonState("Copy failed", "copy-x", "error");
  }
}

function currentPracticeCopyText() {
  const cue = activeCue();
  const english = String(cue.en || "").trim();
  if (english) {
    return english;
  }

  const chinese = traditionalSubtitleText(cue).trim();
  if (chinese) {
    return chinese;
  }

  return elements.practiceLine?.textContent.trim() || "";
}

function downloadCurrentLessonSrt() {
  const lesson = activeLesson();
  const entries = downloadableSrtEntries(lesson);

  if (!entries.length) {
    setSrtDownloadButtonState("No subtitles", "file-x", "error");
    return;
  }

  const srt = entries
    .map(({ index, text }, entryIndex) => {
      const start = videoTimeForCueStart(index);
      const end = Math.max(start + 0.5, videoTimeForCueEnd(index));
      return `${entryIndex + 1}\n${formatSrtTime(start)} --> ${formatSrtTime(end)}\n${text}`;
    })
    .join("\n\n");

  downloadTextFile({
    fileName: `${safeFileName(lesson.title)}.srt`,
    contents: `\ufeff${srt}\n`,
    mimeType: "application/x-subrip;charset=utf-8",
  });
  setSrtDownloadButtonState("Downloaded", "check", "downloaded");
}

function downloadableSrtEntries(lesson) {
  return (Array.isArray(lesson?.cues) ? lesson.cues : [])
    .map((cue, index) => ({ cue, index, text: srtCueText(cue) }))
    .filter(({ cue, text }) => !isPlaceholderCue(cue) && text);
}

function hasDownloadableSrtCues(lesson) {
  return downloadableSrtEntries(lesson).length > 0;
}

function downloadTextFile({ fileName, contents, mimeType }) {
  const blob = new Blob([contents], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = fileName;
  link.rel = "noopener";
  link.style.display = "none";
  document.body.appendChild(link);

  try {
    link.click();
  } finally {
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
}

function srtCueText(cue) {
  return String(cue.en || "").trim();
}

async function importSubtitleFile() {
  const file = elements.subtitleFileInput.files?.[0];
  if (!file) {
    return;
  }

  try {
    const text = await file.text();
    const cues = parseSrtSubtitles(text, activeLesson());
    if (!cues.length) {
      setSrtImportButtonState("No SRT cues", "file-x", "error");
      return;
    }

    replaceActiveLessonSubtitles(cues, file.name);
    setSrtImportButtonState(`Imported ${cues.length}`, "check", "imported");
  } catch {
    setSrtImportButtonState("Import failed", "file-x", "error");
  }
}

function replaceActiveLessonSubtitles(cues, fileName = "subtitles.srt") {
  const lesson = activeLesson();
  const importedCues = normalizeLessonCues(cues);
  if (!importedCues.length) {
    return;
  }

  lesson.cues = importedCues;
  lesson.duration = Math.max(lesson.duration, importedCues[importedCues.length - 1]?.end || 0);
  lesson.subtitleSource = `Imported SRT: ${fileName}`;
  lesson.skill = "Imported SRT";
  lesson.captionError = "";
  lesson.captionVersion = Date.now();
  lesson.importStatus = "ready";
  state.syncSettings[syncSettingKey(lesson)] = { offset: 0, anchors: [] };
  persistSyncSettings();

  if (lesson.custom) {
    persistCustomLessons();
  } else {
    persistSubtitleOverride(lesson);
  }

  renderLessonList();
  updateTimelineBounds(lesson.duration);
  renderSubtitles();
  updatePlaybackFromTime(getCurrentTime());
  updateSyncInfo();
  updateAITranslateButton();
  updateCaption();
}

function setSrtImportButtonState(label, iconName, stateClass) {
  window.clearTimeout(state.srtImportStatusTimer);
  elements.importSrt.disabled = false;
  elements.importSrt.classList.remove("imported", "error");
  elements.importSrt.classList.add(stateClass);
  elements.importSrt.innerHTML = `<i data-lucide="${iconName}" aria-hidden="true"></i><span>${label}</span>`;
  refreshIcons();

  state.srtImportStatusTimer = window.setTimeout(resetSrtImportButton, 1600);
}

function resetSrtImportButton() {
  window.clearTimeout(state.srtImportStatusTimer);
  state.srtImportStatusTimer = null;
  elements.importSrt.disabled = false;
  elements.importSrt.classList.remove("imported", "error");
  elements.importSrt.setAttribute("aria-label", "Import SRT subtitles");
  elements.importSrt.innerHTML = `<i data-lucide="upload" aria-hidden="true"></i><span>Import SRT</span>`;
  refreshIcons();
}

function formatSrtTime(seconds) {
  const totalMs = Math.max(0, Math.round((Number(seconds) || 0) * 1000));
  const hours = Math.floor(totalMs / 3600000);
  const minutes = Math.floor((totalMs % 3600000) / 60000);
  const wholeSeconds = Math.floor((totalMs % 60000) / 1000);
  const ms = totalMs % 1000;

  return [
    String(hours).padStart(2, "0"),
    String(minutes).padStart(2, "0"),
    String(wholeSeconds).padStart(2, "0"),
  ].join(":") + `,${String(ms).padStart(3, "0")}`;
}

function safeFileName(value) {
  const cleaned = String(value || "subtitles")
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "")
    .replace(/\s+/g, "-")
    .slice(0, 90);

  return cleaned || "subtitles";
}

function setSrtDownloadButtonState(label, iconName, stateClass) {
  window.clearTimeout(state.srtStatusTimer);
  elements.downloadSrt.disabled = false;
  elements.downloadSrt.classList.remove("downloaded", "error");
  elements.downloadSrt.classList.add(stateClass);
  elements.downloadSrt.innerHTML = `<i data-lucide="${iconName}" aria-hidden="true"></i><span>${label}</span>`;
  refreshIcons();

  state.srtStatusTimer = window.setTimeout(() => {
    resetSrtDownloadButton({ disabled: !hasDownloadableSrtCues(activeLesson()) });
  }, 1300);
}

function resetSrtDownloadButton({ disabled = false } = {}) {
  window.clearTimeout(state.srtStatusTimer);
  state.srtStatusTimer = null;
  elements.downloadSrt.disabled = disabled;
  elements.downloadSrt.classList.remove("downloaded", "error");
  elements.downloadSrt.setAttribute("aria-label", disabled ? "No English subtitles to download" : "Download English subtitles as SRT");
  elements.downloadSrt.innerHTML = `<i data-lucide="download" aria-hidden="true"></i><span>Download EN SRT</span>`;
  refreshIcons();
}

async function writeClipboardText(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {
      // Fall back below for browsers that expose Clipboard API but reject this write.
    }
  }

  if (!fallbackCopyText(text)) {
    throw new Error("Copy command was rejected.");
  }
}

function fallbackCopyText(text) {
  const textarea = document.createElement("textarea");
  const activeElement = document.activeElement;
  const selection = document.getSelection();
  const selectedRanges = [];

  if (selection) {
    for (let index = 0; index < selection.rangeCount; index += 1) {
      selectedRanges.push(selection.getRangeAt(index));
    }
  }

  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.left = "0";
  textarea.style.opacity = "0";
  textarea.style.position = "fixed";
  textarea.style.top = "0";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  try {
    return document.execCommand("copy");
  } catch {
    return false;
  } finally {
    textarea.remove();
    if (selection) {
      selection.removeAllRanges();
      selectedRanges.forEach((range) => selection.addRange(range));
    }
    if (activeElement instanceof HTMLElement) {
      activeElement.focus({ preventScroll: true });
    }
  }
}

function setCopyPracticeButtonState(label, iconName, stateClass) {
  window.clearTimeout(state.copyStatusTimer);
  state.copyStatusCueIndex = state.activeCueIndex;
  if (!elements.copyPracticeLine) {
    return;
  }
  elements.copyPracticeLine.disabled = false;
  elements.copyPracticeLine.classList.remove("copied", "error");
  elements.copyPracticeLine.classList.add(stateClass);
  elements.copyPracticeLine.innerHTML = `<i data-lucide="${iconName}" aria-hidden="true"></i><span>${label}</span>`;
  refreshIcons();

  state.copyStatusTimer = window.setTimeout(() => {
    resetCopyPracticeButton();
  }, 1300);
}

function resetCopyPracticeButton({ disabled = false } = {}) {
  window.clearTimeout(state.copyStatusTimer);
  state.copyStatusTimer = null;
  state.copyStatusCueIndex = null;
  if (!elements.copyPracticeLine) {
    return;
  }
  elements.copyPracticeLine.disabled = disabled;
  elements.copyPracticeLine.classList.remove("copied", "error");
  elements.copyPracticeLine.setAttribute("aria-label", disabled ? "No subtitle to copy" : "Copy current subtitle");
  elements.copyPracticeLine.innerHTML = `<i data-lucide="copy" aria-hidden="true"></i><span>Copy</span>`;
  refreshIcons();
}

async function toggleShadowing() {
  if (!elements.shadowButton || !elements.shadowScore) {
    return;
  }

  if (state.shadowing) {
    stopShadowing();
    return;
  }

  state.shadowing = true;
  state.shadowStartedAt = performance.now();
  elements.shadowButton.classList.add("active");
  elements.shadowButton.querySelector("span").textContent = "Stop";
  elements.shadowScore.textContent = "Listening";

  try {
    if (navigator.mediaDevices?.getUserMedia) {
      state.shadowStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    }
  } catch {
    state.shadowStream = null;
  }
}

function stopShadowing({ silent = false } = {}) {
  if (!state.shadowing) {
    return;
  }

  state.shadowing = false;
  elements.shadowButton?.classList.remove("active");
  elements.shadowButton?.querySelector("span") && (elements.shadowButton.querySelector("span").textContent = "Shadow");

  if (state.shadowStream) {
    state.shadowStream.getTracks().forEach((track) => track.stop());
    state.shadowStream = null;
  }

  if (!silent && elements.shadowScore) {
    const elapsed = Math.max(1, Math.round((performance.now() - state.shadowStartedAt) / 1000));
    const cue = activeCue();
    const targetLength = Math.max(3, Math.round((cue.end - cue.start) * 0.78));
    const closeness = Math.max(0, 1 - Math.abs(elapsed - targetLength) / Math.max(targetLength, 1));
    const score = Math.round(72 + closeness * 21 + Math.random() * 5);
    elements.shadowScore.textContent = `${Math.min(98, score)} pts`;
  }
}

function focusWord(word) {
  if (!elements.lookupWord) {
    return;
  }
  const clean = normalizeWord(word);
  if (!clean) {
    return;
  }

  state.focusedWord = clean;
  const entry = dictionary[clean] || buildFallbackDefinition(clean);
  elements.lookupWord.textContent = clean;
  elements.lookupPronunciation.textContent = entry.pronunciation;
  elements.lookupDefinition.textContent = entry.definition;
  elements.lookupExample.textContent = entry.example;

  [...document.querySelectorAll(".word-token")].forEach((token) => {
    token.classList.toggle("focused", token.dataset.word === clean);
  });
}

function buildFallbackDefinition(word) {
  return {
    pronunciation: "/ tap to review /",
    definition: "a saved word from the current subtitle line",
    example: `Try making your own sentence with "${word}" after watching the clip.`,
  };
}

function firstLookupWord(lesson) {
  const firstWord = lesson.cues
    .map((cue) => cue.en.match(/[A-Za-z][A-Za-z'-]*/)?.[0])
    .find(Boolean);
  return normalizeWord(firstWord || "context");
}

function saveFocusedWord() {
  if (!elements.savedWords) {
    return;
  }
  const word = state.focusedWord;
  if (!word) {
    return;
  }
  const entry = dictionary[word] || buildFallbackDefinition(word);
  state.savedWords.set(word, entry.definition);
  writeStorage(storage.words, [...state.savedWords]);
  renderSavedWords();
}

function renderSavedWords() {
  if (!elements.savedWords) {
    return;
  }
  elements.savedWords.innerHTML = "";
  if (!state.savedWords.size) {
    elements.savedWords.innerHTML = `<span class="word-pill">context</span><span class="word-pill">rhythm</span>`;
    return;
  }

  [...state.savedWords.keys()].forEach((word) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "word-pill";
    button.textContent = word;
    button.addEventListener("click", () => focusWord(word));
    elements.savedWords.appendChild(button);
  });
}

function normalizeWord(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/^[^a-z]+|[^a-z]+$/g, "");
}

function parseYouTubeId(value) {
  const raw = String(value || "").trim();
  if (/^[A-Za-z0-9_-]{11}$/.test(raw)) {
    return raw;
  }

  try {
    const url = new URL(raw);
    const host = url.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      return url.pathname.split("/").filter(Boolean)[0] || "";
    }
    if (host.endsWith("youtube.com")) {
      const direct = url.searchParams.get("v");
      if (direct) {
        return direct;
      }
      const parts = url.pathname.split("/").filter(Boolean);
      const markerIndex = parts.findIndex((part) => ["embed", "shorts", "live"].includes(part));
      if (markerIndex >= 0) {
        return parts[markerIndex + 1] || "";
      }
    }
  } catch {
    return "";
  }

  return "";
}

function parseCustomTranscript(value) {
  const srtCues = parseSrtSubtitles(value, null);
  if (srtCues.length) {
    return srtCues;
  }

  const timedBlocks = parseTimedTranscriptBlocks(value);
  if (timedBlocks.length) {
    return timedBlocks;
  }

  const lines = String(value || "")
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (!lines.length) {
    return [];
  }

  const timeLineBlocks = parseTimeLineTranscript(lines);
  if (timeLineBlocks.length) {
    return timeLineBlocks;
  }

  const timestamped = lines.map(parseTranscriptLine).filter((line) => line.hasTime);
  if (timestamped.length >= Math.max(1, Math.floor(lines.length * 0.6))) {
    return timestamped.map((line, index) => {
      const nextLine = timestamped[index + 1];
      const estimatedEnd = line.start + estimateCueDuration(line.en);
      return {
        start: line.start,
        end: Math.max(line.start + 2, line.end || (nextLine ? nextLine.start : estimatedEnd)),
        en: line.en,
        zh: line.zh,
      };
    });
  }

  return linesToCues(lines);
}

function parseTimedTranscriptBlocks(value) {
  const blocks = String(value || "")
    .replace(/\r/g, "")
    .split(/\n{2,}/)
    .map((block) => block.split("\n").map((line) => line.trim()).filter(Boolean))
    .filter(Boolean);

  const cues = [];
  blocks.forEach((block) => {
    const timeLineIndex = block.findIndex((line) => parseTimeRangeLine(line));
    if (timeLineIndex < 0) {
      return;
    }

    const range = parseTimeRangeLine(block[timeLineIndex]);
    if (!range) {
      return;
    }

    const { en, zh } = parseSubtitleTextLines(block.slice(timeLineIndex + 1));
    if (!en && !zh) {
      return;
    }
    cues.push({
      start: range.start,
      end: Math.max(range.start + 0.5, range.end),
      en: en || "Untitled sentence",
      zh,
    });
  });

  return cues;
}

function parseSrtSubtitles(value, lesson = activeLesson()) {
  const blocks = String(value || "")
    .replace(/^\uFEFF/, "")
    .replace(/\r/g, "")
    .split(/\n{2,}/)
    .map((block) => block.split("\n").map((line) => line.trim()).filter(Boolean))
    .filter((block) => block.length);

  const cues = [];
  blocks.forEach((block, blockIndex) => {
    const timeLineIndex = block.findIndex((line) => parseTimeRangeLine(line));
    if (timeLineIndex < 0) {
      return;
    }

    const range = parseTimeRangeLine(block[timeLineIndex]);
    if (!range) {
      return;
    }

    const fallbackCue = matchingExistingCue(lesson, range.start, blockIndex);
    const { en, zh } = parseSubtitleTextLines(block.slice(timeLineIndex + 1), fallbackCue);
    if (!en && !zh) {
      return;
    }

    cues.push({
      start: range.start,
      end: Math.max(range.start + 0.5, range.end),
      en: en || fallbackCue?.en || "Untitled sentence",
      zh,
    });
  });

  return normalizeLessonCues(cues);
}

function parseSubtitleTextLines(lines, fallbackCue = null) {
  const englishLines = [];
  const chineseLines = [];
  const cleanedLines = lines.map(cleanSubtitleLine).filter(Boolean);

  cleanedLines.forEach((line) => {
    const explicit = splitExplicitBilingualLine(line);
    if (explicit) {
      englishLines.push(explicit.en);
      if (explicit.zh) {
        chineseLines.push(explicit.zh);
      }
      return;
    }

    const mixed = cleanedLines.length === 1 ? splitMixedLanguageLine(line) : null;
    if (mixed) {
      englishLines.push(mixed.en);
      chineseLines.push(mixed.zh);
      return;
    }

    if (hasCjk(line)) {
      chineseLines.push(line);
    } else {
      englishLines.push(line);
    }
  });

  return {
    en: englishLines.join(" ").trim(),
    zh: toTraditionalChinese(chineseLines.join(" ").trim() || fallbackCue?.zh || ""),
  };
}

function splitExplicitBilingualLine(value) {
  const parts = String(value || "").split(/\s*(?:\||=>|／／|\/\/)\s*/);
  if (parts.length < 2) {
    return null;
  }
  return {
    en: parts[0].trim(),
    zh: toTraditionalChinese(parts.slice(1).join(" ").trim()),
  };
}

function splitMixedLanguageLine(value) {
  const text = String(value || "").trim();
  const cjkIndex = text.search(/[\u3400-\u9fff]/);
  const englishPart = text.slice(0, cjkIndex).trim();
  const chinesePart = text.slice(cjkIndex).trim();
  if (cjkIndex <= 0 || !/[A-Za-z]/.test(englishPart) || isLikelyLeadingNameFragment(englishPart)) {
    return null;
  }
  return {
    en: englishPart,
    zh: toTraditionalChinese(chinesePart),
  };
}

function isLikelyLeadingNameFragment(value) {
  const text = String(value || "").trim();
  if (!text || /[.!?。！？]$/.test(text)) {
    return false;
  }

  const words = text.match(/[A-Za-z][A-Za-z'.-]*/g) || [];
  if (!words.length || words.length > 5) {
    return false;
  }

  return words.every((word) => (
    /^[A-Z0-9&]+$/.test(word) ||
    /^[A-Z][a-z]+(?:'[A-Za-z]+)?$/.test(word)
  ));
}

function cleanSubtitleLine(value) {
  return decodeBasicEntities(String(value || ""))
    .replace(/<[^>]+>/g, " ")
    .replace(/\{\\[^}]+\}/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function decodeBasicEntities(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function matchingExistingCue(lesson, start, index) {
  if (!lesson || !Array.isArray(lesson.cues)) {
    return null;
  }

  const byIndex = lesson.cues[index];
  if (byIndex && !isPlaceholderCue(byIndex)) {
    return byIndex;
  }

  return lesson.cues
    .filter((cue) => cue && !isPlaceholderCue(cue))
    .map((cue) => ({ cue, distance: Math.abs(Number(cue.start) - Number(start)) }))
    .filter(({ distance }) => distance <= 1.5)
    .sort((a, b) => a.distance - b.distance)[0]?.cue || null;
}

function parseTimeLineTranscript(lines) {
  const cues = [];
  let index = 0;

  while (index < lines.length) {
    const timeOnly = parseTimeOnlyLine(lines[index]);
    if (timeOnly === null) {
      index += 1;
      continue;
    }

    const textParts = [];
    index += 1;
    while (index < lines.length && parseTimeOnlyLine(lines[index]) === null && !parseTimeRangeLine(lines[index])) {
      textParts.push(lines[index]);
      index += 1;
    }

    const text = textParts.join(" ").trim();
    if (text) {
      const [en, zh] = splitBilingualLine(text);
      cues.push({
        start: timeOnly,
        end: timeOnly + estimateCueDuration(en),
        en,
        zh,
      });
    }
  }

  return cues.map((cue, cueIndex) => {
    const nextCue = cues[cueIndex + 1];
    return {
      ...cue,
      end: Math.max(cue.start + 0.5, nextCue ? nextCue.start : cue.end),
    };
  });
}

function parseTranscriptLine(line) {
  const match = line.match(new RegExp(`^(${TIMECODE_SOURCE})\\s*(?:(?:-->|[-–—>]+)\\s*(${TIMECODE_SOURCE})\\s*)?(.*)$`));
  const rawText = match ? match[3].trim() : line;
  const [en, zh] = splitBilingualLine(rawText);
  return {
    hasTime: Boolean(match),
    start: match ? parseTimecode(match[1]) : 0,
    end: match?.[2] ? parseTimecode(match[2]) : null,
    en,
    zh,
  };
}

function parseTimeRangeLine(line) {
  const match = line.match(new RegExp(`^(${TIMECODE_SOURCE})\\s*-->\\s*(${TIMECODE_SOURCE})`));
  if (!match) {
    return null;
  }
  return {
    start: parseTimecode(match[1]),
    end: parseTimecode(match[2]),
  };
}

function parseTimeOnlyLine(line) {
  const match = line.match(new RegExp(`^(${TIMECODE_SOURCE})$`));
  return match ? parseTimecode(match[1]) : null;
}

function linesToCues(lines) {
  const cues = [];
  let index = 0;

  while (index < lines.length) {
    const current = lines[index];
    const [explicitEn, explicitZh] = splitBilingualLine(current);
    let en = explicitEn;
    let zh = explicitZh;

    if (!zh && lines[index + 1] && hasCjk(lines[index + 1]) && !hasCjk(current)) {
      zh = toTraditionalChinese(lines[index + 1]);
      index += 1;
    }

    const start = cues.length * 8;
    cues.push({
      start,
      end: start + estimateCueDuration(en),
      en,
      zh,
    });
    index += 1;
  }

  return cues.map((cue, cueIndex) => ({
    ...cue,
    end: Math.max(cue.end, cues[cueIndex + 1]?.start || cue.end),
  }));
}

function splitBilingualLine(value) {
  const explicit = splitExplicitBilingualLine(value);
  if (explicit) {
    return [explicit.en || "Untitled sentence", explicit.zh];
  }
  return [value.trim() || "Untitled sentence", ""];
}

function parseTimecode(value) {
  const pieces = String(value).replace(",", ".").split(":").map(Number);
  if (pieces.length === 3) {
    return pieces[0] * 3600 + pieces[1] * 60 + pieces[2];
  }
  return pieces[0] * 60 + pieces[1];
}

function estimateCueDuration(value) {
  const wordCount = (value.match(/[A-Za-z0-9]+/g) || []).length;
  return Math.max(4, Math.min(12, Math.ceil(wordCount * 0.72)));
}

function hasCjk(value) {
  return /[\u3400-\u9fff]/.test(value);
}

function toTraditionalChinese(value) {
  let text = String(value || "").trim();
  if (!text) {
    return "";
  }

  SIMPLIFIED_TO_TRADITIONAL_PHRASES.forEach(([simplified, traditional]) => {
    text = text.replaceAll(simplified, traditional);
  });

  return [...text]
    .map((char) => SIMPLIFIED_TO_TRADITIONAL_CHARS[char] || char)
    .join("");
}

function sanitizeCustomLessons(value) {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter((lesson) => lesson && typeof lesson === "object")
    .map((lesson) => {
      const cues = Array.isArray(lesson.cues) ? stripPlaceholderCues(lesson.cues).map(sanitizeCue) : [];
      return {
        id: String(lesson.id || `custom-${lesson.videoId || Date.now()}`),
        title: String(lesson.title || "YouTube lesson"),
        host: String(lesson.host || "My YouTube"),
        level: "Custom",
        duration: Math.max(1, Number(lesson.duration) || cues[cues.length - 1]?.end || 120),
        skill: String(lesson.skill || lesson.subtitleSource || "Custom video"),
        videoId: String(lesson.videoId || ""),
        summary: "Saved from a YouTube link.",
        custom: true,
        subtitleSource: String(lesson.subtitleSource || lesson.skill || "Custom video"),
        captionError: String(lesson.captionError || ""),
        captionVersion: Number(lesson.captionVersion) || 0,
        cues,
      };
    })
    .filter((lesson) => /^[A-Za-z0-9_-]{11}$/.test(lesson.videoId));
}

function sanitizeCue(cue, index) {
  const start = Math.max(0, Number(cue.start) || index * 8);
  const end = Math.max(start + 2, Number(cue.end) || start + estimateCueDuration(cue.en || ""));
  return {
    start,
    end,
    en: String(cue.en || "Untitled sentence"),
    zh: toTraditionalChinese(cue.zh),
  };
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, Math.floor(Number(seconds) || 0));
  const minutes = Math.floor(safeSeconds / 60);
  const remainder = safeSeconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("click", (event) => {
  const wordToken = event.target.closest(".word-token");
  if (wordToken) {
    focusWord(wordToken.dataset.word);
  }
});

document.addEventListener("keydown", (event) => {
  const wordToken = event.target.closest(".word-token");
  if (!wordToken || (event.key !== "Enter" && event.key !== " ")) {
    return;
  }
  event.preventDefault();
  focusWord(wordToken.dataset.word);
});

init();
