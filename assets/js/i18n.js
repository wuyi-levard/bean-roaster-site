/* 烘豆师介绍站 · 多语言词典
   简体中文（zh-CN）为 DOM 内原文，加载时快照保存，切回时直接还原；
   繁体中文（zh-TW）与英文（en）由此词典提供。 */

(function () {
  'use strict';

  var DEFAULT_LANG = 'zh-CN';
  var LANGS = ['zh-CN', 'zh-TW', 'en'];
  var STORE_KEY = 'hds-lang';

  var DICT = {

    /* ================= 繁體中文（台灣） ================= */
    'zh-TW': {
      /* 導覽 / 頁尾 / 通用 */
      'nav.features': '功能',
      'nav.screenshots': '介面截圖',
      'nav.privacy': '資料安全',
      'nav.changelog': '更新日誌',
      'nav.platform': '平台',
      'nav.feedback': '意見回饋',
      'ctl.theme.auto': '主題：跟隨系統',
      'ctl.theme.light': '主題：淺色',
      'ctl.theme.dark': '主題：深色',
      'ctl.lang': '語言',
      'foot.home': '回到首頁',
      'foot.changelog': '更新日誌',
      'foot.feedback': '意見回饋',
      'foot.repo': '原始碼倉庫',
      'foot.release': '下載 Release',
      'foot.copy': '烘豆師 · 保留所有權利',
      'foot.nodata': '本 App 不收集任何使用者資料',

      /* 首頁 */
      'idx.title': '烘豆師 · 專為咖啡烘焙從業者打造的本機庫存管理 App',
      'idx.desc': '烘豆師是一款面向咖啡烘焙從業者的本機庫存管理 App，100% 本機儲存、離線 OCR 標籤辨識、雙計量庫存、烘焙轉化與毛利定價、訂單與客戶帳本、AES-256 加密備份。Flutter 跨 Android / iOS。',
      'hero.brandsub': 'HongDouShi · 咖啡烘焙庫存',
      'hero.title': '咖啡烘焙，從這一本帳開始',
      'hero.lead': '面向咖啡烘焙從業者的本機生豆 / 烘焙豆庫存管理 App。業務資料只存本機，離線 OCR 自動辨識生豆袋標籤，袋·kg 雙計量與即期預警，烘焙轉化、配方成本與毛利定價一站完成。',
      'hero.dl': '↓ 查看 Release 下載',
      'hero.note': 'Flutter 跨端建置 · Android 12+ / iOS 16+',

      /* 核心功能 */
      'sec.features.eyebrow': '核心功能',
      'sec.features.title': '把烘焙工坊裝進口袋',
      'sec.features.desc': '六類核心能力，全部圍繞「本機優先 + 業務閉環」設計，不依賴任何雲端服務即可獨立運作。',
      'f1.title': '100% 本機優先',
      'f1.desc': '業務資料全部落在本機 SQLite，社群版本不宣告 INTERNET 權限；備份走應用程式文件目錄，換機匯入即可還原。',
      'f2.title': '雙計量庫存',
      'f2.desc': '生豆按 kg 計量，烘焙豆按「袋 · kg」雙計量並行。呆滯、過期、即期與低庫存多檔預警，盤點草稿可分段儲存後原子提交。',
      'f3.title': '烘焙轉化與毛利',
      'f3.desc': '生豆多行配方投入，自動核算失重比與單位成本；按目標毛利率反推建議售價，給出 ±5% 參考區間。',
      'f4.title': '訂單與客戶帳本',
      'f4.desc': '現貨銷售立即出貨，預售訂單走「凍結→排程→履約分配」；客戶儲值/消費/退款流水可重放校驗，掃碼即銷售。',
      'f5.title': '離線 OCR 標籤辨識',
      'f5.desc': '內建 PaddleOCR 端側推論，圖片不上傳任何伺服器。辨識欄位以候選形式預填，逐欄核對，不靜默覆蓋。',
      'f6.title': '資料可回放',
      'f6.desc': '全庫存以流水為真相源；備份可選 AES-256-GCM 口令加密（PBKDF2 20 萬次迭代），恢復門禁拒絕任何旁路寫入。',

      /* 介面截圖 */
      'sec.shots.eyebrow': '介面預覽',
      'sec.shots.title': '真實介面，不是渲染稿',
      'sec.shots.desc': '以下截圖為模擬器實際執行畫面，展示 App 在日常烘焙場景中的關鍵頁面。',
      'shot1.cap': '首次啟動引導 · 3 頁介紹',
      'shot2.cap': '烘焙豆庫存 · 批次 + 規格雙計量',
      'shot3.cap': '生豆烘焙入庫 · 配方 + 成本核算',
      'shot4.cap': '訂單工作台 · 現貨/預售雙通道',

      /* 資料安全 */
      'sec.priv.eyebrow': '資料安全與隱私',
      'sec.priv.title': '你的咖啡資料，只屬於你',
      'sec.priv.desc': '從設計上就拒絕「雲端」——業務資料全程在裝置本機流轉，可驗證、可匯出、可加密。',
      'p1.title': '✓ 社群版不申請網路權限',
      'p1.desc': 'Android 社群管道建置不宣告 <code>INTERNET</code> 權限，從系統層面禁用資料上傳。',
      'p2.title': '✓ 備份可選口令加密',
      'p2.desc': 'AES-256-GCM（PBKDF2-HMAC-SHA256 · 20 萬次迭代），忘記口令無法找回——這是設計而非缺陷。',
      'p3.title': '✓ 無追蹤、無遙測、無廣告',
      'p3.desc': '沒有第三方 SDK、沒有統計上報、沒有推送。錯誤日誌僅本機保留最近 50 條，可手動匯出。',
      'p4.title': '✓ 帳本可回放校驗',
      'p4.desc': '全庫存以不可變流水為真相源，匯出/還原時往返校驗帳實一致；恢復門禁拒絕一切旁路寫入。',

      /* 平台 */
      'sec.plat.eyebrow': '跨端與平台',
      'sec.plat.title': '一份程式碼，兩個平台',
      'sec.plat.desc': 'Flutter / Dart 一套程式碼同時建置 Android 與 iOS 原生應用；UI 遵循 Material 3，支援淺色 / 深色主題與系統跟隨。',
      'pl1.lbl': '框架', 'pl1.val': 'Flutter 3.44', 'pl1.sub': 'Dart 3.12 · Material 3',
      'pl2.lbl': 'Android', 'pl2.val': '12+', 'pl2.sub': 'API 31 · 離線 OCR 端側推論',
      'pl3.lbl': 'iOS', 'pl3.val': '16.0+', 'pl3.sub': 'App Store / TestFlight 管道',
      'pl4.lbl': '持久化', 'pl4.val': 'SQLite', 'pl4.sub': 'sqflite 交易寫入 + 備份 JSON',
      'pl5.lbl': 'OCR', 'pl5.val': 'PaddleOCR', 'pl5.sub': 'ONNX Runtime + OpenCV（端側）',
      'pl6.lbl': '加密', 'pl6.val': 'AES-256-GCM', 'pl6.sub': 'PBKDF2 · 20 萬次迭代',

      /* 專業版權益 */
      'sec.pro.eyebrow': '版本與權益',
      'sec.pro.title': '專業版解鎖這五項能力',
      'sec.pro.desc': '社群版免費可用全部基礎庫存與資料安全能力；以下五項 Pro 能力需透過「專業版權益」授權後解鎖，未授權時不影響免費能力使用。',
      'pro.free.tag': '社群版 · 免費',
      'pro.free.title': '基礎庫存與資料安全',
      'pro.free.1': '生豆 / 烘焙豆手動登錄與本機庫存管理',
      'pro.free.2': '備份與還原（可選口令加密）',
      'pro.free.3': '歷史流水檢視與匯出',
      'pro.free.4': '既有訂單履約',
      'pro.free.5': '本機資料安全（無網路 / 無追蹤 / 無廣告）',
      'pro.paid.tag': '專業版權益',
      'pro.paid.title': '授權後解鎖',
      'pro.paid.1': '離線 OCR 生豆袋標籤辨識',
      'pro.paid.2': '客戶管理',
      'pro.paid.3': '主動餘額操作',
      'pro.paid.4': '預售 / 排程編輯',
      'pro.paid.5': '袋貼 PDF 匯出',
      'pro.note': '社群 Android 透過「設定 → 專業版權益」匯入開發者簽發的離線授權碼（一機一碼裝置綁定）；Play / iOS 走各自商店流程驗證。',

      /* 最近更新（首頁） */
      'sec.new.eyebrow': '最近更新',
      'sec.new.title': 'v0.2.10 已經發布',
      'sec.new.desc': '本次聚焦離線 OCR 的辨識品質與穩定性，並優化專業版未授權提示。完整版本記錄見更新日誌。',
      'nw.ocr.title': '🔍 離線 OCR 大幅增強',
      'nw.ocr.1': '圖片預處理與品質兜底辨識，髒污/模糊/反光標籤更穩',
      'nw.ocr.2': '預處理品質評分，辨識前提示是否需要重拍',
      'nw.ocr.3': 'Android 幾何預校正可回退，歪斜標籤自動拉正',
      'nw.gate.title': '🔔 專業版門禁體驗',
      'nw.gate.1': '未授權功能改用根層彈窗，點擊跳轉「專業版權益」',
      'nw.gate.2': '對齊社群支付依賴邊界，升級至 0.2.10（建置號 214）',
      'nw.all': '查看完整更新日誌',

      /* 下載 */
      'sec.dl.eyebrow': '下載與聯繫',
      'sec.dl.title': '把烘豆師帶進你的工坊',
      'dl.meta': '目前版本 v<span data-version="0.2.10">0.2.10</span> · Android / iOS 雙平台',
      'dl.btn': '↓ 前往 Release 頁面下載 APK',
      'dl.repo': '查看原始碼倉庫',
      'dl.wx': '微信：',
      'dl.copy': '複製',
      'copy.done': '已複製',
      'dl.note': '社群版需透過「設定 → 專業版權益」匯入開發者簽發的離線授權碼。',

      /* 更新日誌頁 */
      'cl.title': '更新日誌 · 烘豆師',
      'cl.desc': '烘豆師各版本更新記錄與能力演進',
      'cl.eyebrow': '更新日誌',
      'cl.h2': '烘豆師版本更新記錄',
      'cl.lead': '以下為公開發布版本的能力演進。最新版本 APK 見 <a href="https://github.com/wuyi-levard/bean-roaster-site/releases" target="_blank" rel="noopener">Release 頁面</a>。',
      'cl.tag.new': '最新',
      'cl.tag.published': '公開發布',
      'cl.ocr.title': '🔍 離線 OCR 大幅增強',
      'cl.ocr.1': '接入圖片預處理與品質兜底辨識，髒污、模糊、反光的生豆袋貼也能更穩地辨識',
      'cl.ocr.2': '新增預處理品質評分策略，辨識前先評估圖質並提示是否需要重拍',
      'cl.ocr.3': 'Android 端新增可回退的幾何預校正，歪斜標籤自動拉正',
      'cl.ocr.4': '新增安全圖片預處理變體，處理邊界更收斂、更可控',
      'cl.ocr.5': '新增退化樣本設備回歸與收斂分析告警，辨識品質可量化追蹤',
      'cl.gate.title': '🔔 專業版門禁體驗',
      'cl.gate.1': '未授權功能改用根層彈窗提示，點擊即跳轉到「專業版權益」入口',
      'cl.eng.title': '⚙️ 工程與發布',
      'cl.eng.1': '對齊社群支付依賴邊界與 README 測試基線',
      'cl.eng.2': '升級至 0.2.10（建置號 214）',
      'cl.v029.lede': '首個透過產品介紹站公開發布的版本，隨附社群版 APK（Android 12+）。包含全部基礎庫存與資料安全能力，以及專業版五項能力（離線 OCR、客戶管理、主動餘額操作、預售/排程編輯、袋貼 PDF 匯出）的授權門禁框架。',
      'cl.v029.note': '完整功能總覽見 <a href="index.html#features">首頁 · 核心功能</a> 與 <a href="index.html#pro">專業版權益</a>。',
      'cl.early.title': '早期能力里程碑',
      'cl.early.tag': '內部研發階段',
      'cl.early.note': '下列為產品能力成型過程中的內部研發里程碑（編號對應開發階段，並非公開發布版本號）。公開發布自 v0.2.x 起。',
      'ms1.title': 'M1 · 資料地基',
      'ms1.1': 'SQLite 資料層取代 SharedPreferences，交易寫入 + 首次啟動遷移',
      'ms1.2': 'store 拆分與備份 JSON 格式層，匯出/還原往返校驗',
      'ms2.title': 'M2 · 工程安全',
      'ms2.1': 'CI 閘門（analyze + test）',
      'ms2.2': '備份可選 AES-256-GCM 口令加密',
      'ms2.3': '依賴巡檢與本機錯誤日誌（最近 50 條）',
      'ms3.title': 'M3 · 體驗增強',
      'ms3.1': '淺色 / 深色 / 跟隨系統三檔主題',
      'ms3.2': '首次啟動 3 頁引導，可跳過',
      'ms4.title': 'M4 · 業務增值',
      'ms4.1': '配方模板庫（按總投入自動分配各批次重量）',
      'ms4.2': '毛利 / 定價助手（按目標毛利率反推建議售價）',
      'cl.footnote': '記錄基於公開發布說明與開發階段里程碑整理；如某版本描述有誤，歡迎到 <a href="feedback.html">意見回饋頁</a> 告訴我們。',

      /* 意見回饋頁 */
      'fb.title': '意見回饋 · 烘豆師',
      'fb.desc': '向烘豆師開發團隊提交意見回饋，同步到 GitHub Issues',
      'fb.eyebrow': '意見回饋',
      'fb.h2': '向我們回饋',
      'fb.lead': '問題、報錯或功能建議都可以填在這裡。提交後會跳轉到 GitHub Issues 並自動預填內容，登入 GitHub 後點擊 <strong>Submit new issue</strong> 即建立。',
      'fb.type': '類型',
      'fb.type.bug': '問題回報 / Bug',
      'fb.type.feat': '功能建議',
      'fb.type.other': '其他',
      'fb.titleL': '標題',
      'fb.titlePH': '一句話概括你的問題或建議',
      'fb.descL': '詳細描述',
      'fb.descPH': '發生了什麼？期望怎樣？越具體越利於定位。',
      'fb.stepsL': '重現步驟（選填）',
      'fb.stepsPH': '1. 打開… 2. 點擊… 3. 出現…',
      'fb.contactL': '聯絡方式（選填）',
      'fb.contactPH': '微信 / 信箱，方便我們回覆',
      'fb.verL': 'App 版本（選填）',
      'fb.submit': '提交到 GitHub Issues',
      'fb.goto': '直接前往 Issues 頁',
      'fb.hint': '網站為純靜態頁面、無後端，不會代替你自動發文；最終需在 GitHub 側登入並確認提交。回饋內容對倉庫公開可見，請勿填寫敏感資訊。',
      'fb.err.title': '請填寫標題。',
      'fb.err.desc': '請填寫詳細描述。',
      'fb.body.type': '類型：',
      'fb.body.ver': 'App 版本：',
      'fb.body.steps': '重現步驟：',
      'fb.body.contact': '聯絡方式：',
      'fb.body.footer': '由烘豆師產品介紹站意見回饋表單提交。',
      'fb.body.unfilled': '未填寫',

      /* 404 */
      't404.title': '頁面未找到 · 烘豆師',
      't404.desc': '這杯咖啡好像灑了 —— 你造訪的頁面不存在。',
      't404.home': '回到首頁',
      't404.changelog': '更新日誌',
      't404.feedback': '意見回饋'
    },

    /* ================= English ================= */
    'en': {
      /* Nav / footer / common */
      'nav.features': 'Features',
      'nav.screenshots': 'Screenshots',
      'nav.privacy': 'Data Security',
      'nav.changelog': 'Changelog',
      'nav.platform': 'Platform',
      'nav.feedback': 'Feedback',
      'ctl.theme.auto': 'Theme: follow system',
      'ctl.theme.light': 'Theme: light',
      'ctl.theme.dark': 'Theme: dark',
      'ctl.lang': 'Language',
      'foot.home': 'Home',
      'foot.changelog': 'Changelog',
      'foot.feedback': 'Feedback',
      'foot.repo': 'Source Repo',
      'foot.release': 'Download Release',
      'foot.copy': 'Bean Roaster · All rights reserved',
      'foot.nodata': 'This app collects no user data',

      /* Home */
      'idx.title': 'Bean Roaster · Local Inventory App for Coffee Roasters',
      'idx.desc': 'Bean Roaster is a local inventory app for coffee roasters: 100% on-device storage, offline OCR label scanning, dual bag·kg units, roast conversion and margin pricing, orders and customer ledgers, AES-256 encrypted backups. Flutter for Android and iOS.',
      'hero.brandsub': 'Bean Roaster · Coffee Roasting Inventory',
      'hero.title': 'Coffee Roasting, Starting with This Ledger',
      'hero.lead': 'A local green and roasted bean inventory app for coffee roasters. Business data never leaves your device; offline OCR reads green-bean bag labels; dual bag·kg units with expiry alerts; roast conversion, blend costing and margin pricing in one place.',
      'hero.dl': '↓ Get it from Releases',
      'hero.note': 'Cross-platform Flutter · Android 12+ / iOS 16+',

      /* Features */
      'sec.features.eyebrow': 'Core Features',
      'sec.features.title': 'Your Roastery, in Your Pocket',
      'sec.features.desc': 'Six core capabilities built around "local-first + closed-loop operations" — no cloud service required.',
      'f1.title': '100% Local-First',
      'f1.desc': 'All business data lands in a local SQLite database; the community build declares no INTERNET permission. Backups live in the app documents folder — import on a new device to restore.',
      'f2.title': 'Dual-Unit Inventory',
      'f2.desc': 'Green beans tracked in kg; roasted beans in both bags and kg. Multi-tier alerts for dormant, expired, near-expiry and low stock. Count drafts save in segments, then commit atomically.',
      'f3.title': 'Roast Conversion & Margin',
      'f3.desc': 'Multi-row green bean inputs with automatic weight-loss and unit-cost calculation; set a target margin to get a suggested price with a ±5% reference band.',
      'f4.title': 'Orders & Customer Ledger',
      'f4.desc': 'Spot sales ship immediately; pre-orders flow through freeze → scheduling → fulfilment. Customer top-up, spend and refund entries are replay-verifiable; scan to sell.',
      'f5.title': 'Offline OCR Label Scanning',
      'f5.desc': 'On-device PaddleOCR inference — images never leave the device. Recognized fields prefill as candidates you confirm one by one; nothing is silently overwritten.',
      'f6.title': 'Replayable Ledger',
      'f6.desc': 'Inventory is sourced from immutable transaction logs. Backups can use AES-256-GCM passphrase encryption (PBKDF2, 200k iterations); recovery lockdown blocks any bypass writes.',

      /* Screenshots */
      'sec.shots.eyebrow': 'Interface Preview',
      'sec.shots.title': 'Real Screens, Not Mockups',
      'sec.shots.desc': 'Screenshots below are actual emulator runs showing key screens from daily roasting work.',
      'shot1.cap': 'Onboarding · 3 intro screens',
      'shot2.cap': 'Roasted Inventory · batch + size dual units',
      'shot3.cap': 'Green Bean Roast-In · blend + costing',
      'shot4.cap': 'Order Desk · spot / pre-order',

      /* Data security */
      'sec.priv.eyebrow': 'Data Security & Privacy',
      'sec.priv.title': 'Your Coffee Data Belongs to You',
      'sec.priv.desc': 'Cloud is rejected by design — business data stays on-device: verifiable, exportable, encryptable.',
      'p1.title': '✓ No network permission on community builds',
      'p1.desc': 'The Android community build declares no <code>INTERNET</code> permission, blocking uploads at the OS level.',
      'p2.title': '✓ Optional passphrase-encrypted backups',
      'p2.desc': 'AES-256-GCM (PBKDF2-HMAC-SHA256, 200k iterations). A lost passphrase is unrecoverable — by design, not a defect.',
      'p3.title': '✓ No tracking, no telemetry, no ads',
      'p3.desc': 'No third-party SDKs, no analytics, no push. The error log keeps the last 50 entries locally and exports manually.',
      'p4.title': '✓ Replay-verifiable ledger',
      'p4.desc': 'Inventory is sourced from immutable transactions; export and restore round-trips verify consistency, and recovery lockdown rejects all bypass writes.',

      /* Platform */
      'sec.plat.eyebrow': 'Cross-Platform',
      'sec.plat.title': 'One Codebase, Two Platforms',
      'sec.plat.desc': 'One Flutter/Dart codebase builds native Android and iOS apps; the UI follows Material 3 with light and dark themes plus system following.',
      'pl1.lbl': 'Framework', 'pl1.val': 'Flutter 3.44', 'pl1.sub': 'Dart 3.12 · Material 3',
      'pl2.lbl': 'Android', 'pl2.val': '12+', 'pl2.sub': 'API 31 · on-device OCR',
      'pl3.lbl': 'iOS', 'pl3.val': '16.0+', 'pl3.sub': 'App Store / TestFlight',
      'pl4.lbl': 'Persistence', 'pl4.val': 'SQLite', 'pl4.sub': 'sqflite transactions + backup JSON',
      'pl5.lbl': 'OCR', 'pl5.val': 'PaddleOCR', 'pl5.sub': 'ONNX Runtime + OpenCV (on-device)',
      'pl6.lbl': 'Encryption', 'pl6.val': 'AES-256-GCM', 'pl6.sub': 'PBKDF2 · 200k iterations',

      /* Pro */
      'sec.pro.eyebrow': 'Versions & Entitlements',
      'sec.pro.title': 'Pro Unlocks These Five',
      'sec.pro.desc': 'The community edition includes all core inventory and data-security features for free. The five Pro capabilities below require activation under "Pro Entitlements"; without it, free features are unaffected.',
      'pro.free.tag': 'Community · Free',
      'pro.free.title': 'Core Inventory & Data Security',
      'pro.free.1': 'Manual green and roasted bean entry with local inventory',
      'pro.free.2': 'Backup and restore (optional passphrase encryption)',
      'pro.free.3': 'View and export historical transactions',
      'pro.free.4': 'Fulfil existing orders',
      'pro.free.5': 'Local data safety (no network / no tracking / no ads)',
      'pro.paid.tag': 'Pro Entitlements',
      'pro.paid.title': 'Unlocked After Activation',
      'pro.paid.1': 'Offline OCR for green bean bag labels',
      'pro.paid.2': 'Customer management',
      'pro.paid.3': 'Manual balance operations',
      'pro.paid.4': 'Pre-order / scheduling edits',
      'pro.paid.5': 'Bag label PDF export',
      'pro.note': 'On community Android, import the developer-issued offline license under "Settings → Pro Entitlements" (one code per device). Play and iOS verify through their own store flows.',

      /* Latest update (home) */
      'sec.new.eyebrow': 'Latest Update',
      'sec.new.title': 'v0.2.10 Is Out',
      'sec.new.desc': 'This release focuses on offline OCR quality and stability, plus clearer prompts for unlicensed Pro features. See the changelog for the full history.',
      'nw.ocr.title': '🔍 Major Offline OCR Improvements',
      'nw.ocr.1': 'Image preprocessing with quality fallback — dirty, blurry or reflective labels read reliably',
      'nw.ocr.2': 'Preprocessing quality scoring hints whether you should reshoot first',
      'nw.ocr.3': 'Reversible geometric pre-correction on Android straightens skewed labels',
      'nw.gate.title': '🔔 Pro Gating Experience',
      'nw.gate.1': 'Unlicensed features now show a root-level dialog that jumps to "Pro Entitlements"',
      'nw.gate.2': 'Aligned community payment dependency boundaries; bumped to 0.2.10 (build 214)',
      'nw.all': 'View Full Changelog',

      /* Download */
      'sec.dl.eyebrow': 'Download & Contact',
      'sec.dl.title': 'Bring Bean Roaster to Your Roastery',
      'dl.meta': 'Current version v<span data-version="0.2.10">0.2.10</span> · Android / iOS',
      'dl.btn': '↓ Download APK from Releases',
      'dl.repo': 'View Source Repository',
      'dl.wx': 'WeChat: ',
      'dl.copy': 'Copy',
      'copy.done': 'Copied',
      'dl.note': 'The community edition requires importing a developer-issued offline license under "Settings → Pro Entitlements".',

      /* Changelog */
      'cl.title': 'Changelog · Bean Roaster',
      'cl.desc': 'Release history and capability evolution of Bean Roaster',
      'cl.eyebrow': 'Changelog',
      'cl.h2': 'Bean Roaster Release History',
      'cl.lead': 'Capability evolution across public releases. The latest APK is on the <a href="https://github.com/wuyi-levard/bean-roaster-site/releases" target="_blank" rel="noopener">Releases page</a>.',
      'cl.tag.new': 'Latest',
      'cl.tag.published': 'Public Release',
      'cl.ocr.title': '🔍 Major Offline OCR Improvements',
      'cl.ocr.1': 'Added image preprocessing with quality fallback so dirty, blurry or reflective bag labels read reliably',
      'cl.ocr.2': 'Added preprocessing quality scoring that assesses image quality and hints at reshooting',
      'cl.ocr.3': 'Added reversible geometric pre-correction on Android to straighten skewed labels',
      'cl.ocr.4': 'Added safer preprocessing variants with tighter, more predictable boundaries',
      'cl.ocr.5': 'Added degraded-sample device regression and convergence alerts for measurable OCR quality',
      'cl.gate.title': '🔔 Pro Gating Experience',
      'cl.gate.1': 'Unlicensed features now show a root-level dialog that jumps to "Pro Entitlements"',
      'cl.eng.title': '⚙️ Engineering & Release',
      'cl.eng.1': 'Aligned community payment dependency boundaries and the README test baseline',
      'cl.eng.2': 'Bumped to 0.2.10 (build 214)',
      'cl.v029.lede': 'The first version published through this product site, shipping a community APK (Android 12+). Includes all core inventory and data-security capabilities, plus the entitlement framework for the five Pro features (offline OCR, customer management, manual balance operations, pre-order/scheduling edits, bag label PDF export).',
      'cl.v029.note': 'See the full overview under <a href="index.html#features">Features</a> and <a href="index.html#pro">Pro Entitlements</a>.',
      'cl.early.title': 'Early Capability Milestones',
      'cl.early.tag': 'Internal Development',
      'cl.early.note': 'Internal development milestones (numbers refer to development phases, not public release versions). Public releases start at v0.2.x.',
      'ms1.title': 'M1 · Data Foundation',
      'ms1.1': 'SQLite data layer replacing SharedPreferences, transactional writes and first-launch migration',
      'ms1.2': 'Store split with a backup JSON layer and export/restore round-trip verification',
      'ms2.title': 'M2 · Engineering Safety',
      'ms2.1': 'CI gates (analyze + test)',
      'ms2.2': 'Optional AES-256-GCM passphrase-encrypted backups',
      'ms2.3': 'Dependency audits and a local error log (last 50 entries)',
      'ms3.title': 'M3 · Experience',
      'ms3.1': 'Light / dark / follow-system themes',
      'ms3.2': '3-screen first-launch onboarding, skippable',
      'ms4.title': 'M4 · Business Value',
      'ms4.1': 'Blend template library (auto-allocates batch weights from total input)',
      'ms4.2': 'Margin / pricing assistant (derives a suggested price from target margin)',
      'cl.footnote': 'Compiled from public release notes and development milestones. If any entry is wrong, tell us on the <a href="feedback.html">feedback page</a>.',

      /* Feedback */
      'fb.title': 'Feedback · Bean Roaster',
      'fb.desc': 'Send feedback to the Bean Roaster team — synced to GitHub Issues',
      'fb.eyebrow': 'Feedback',
      'fb.h2': 'Send Us Feedback',
      'fb.lead': 'Report bugs or suggest features here. Submitting opens GitHub Issues with everything prefilled — sign in and click <strong>Submit new issue</strong>.',
      'fb.type': 'Type',
      'fb.type.bug': 'Bug Report',
      'fb.type.feat': 'Feature Request',
      'fb.type.other': 'Other',
      'fb.titleL': 'Title',
      'fb.titlePH': 'Summarize your issue or idea in one line',
      'fb.descL': 'Details',
      'fb.descPH': 'What happened? What did you expect? The more specific, the better.',
      'fb.stepsL': 'Steps to Reproduce (optional)',
      'fb.stepsPH': '1. Open… 2. Tap… 3. Then…',
      'fb.contactL': 'Contact (optional)',
      'fb.contactPH': 'WeChat / email so we can reply',
      'fb.verL': 'App Version (optional)',
      'fb.submit': 'Submit to GitHub Issues',
      'fb.goto': 'Go to Issues Directly',
      'fb.hint': 'This site is fully static with no backend and cannot post on your behalf — you sign in on GitHub to confirm submission. Feedback is publicly visible, so never include sensitive information.',
      'fb.err.title': 'Please enter a title.',
      'fb.err.desc': 'Please enter details.',
      'fb.body.type': 'Type: ',
      'fb.body.ver': 'App version: ',
      'fb.body.steps': 'Steps to reproduce: ',
      'fb.body.contact': 'Contact: ',
      'fb.body.footer': 'Submitted via the Bean Roaster site feedback form.',
      'fb.body.unfilled': 'not provided',

      /* 404 */
      't404.title': 'Page Not Found · Bean Roaster',
      't404.desc': 'Looks like this coffee spilled — the page you visited does not exist.',
      't404.home': 'Back to Home',
      't404.changelog': 'Changelog',
      't404.feedback': 'Feedback'
    }
  };

  /* ---------- 原文快照（用于切回简体时还原） ---------- */
  function snap(el, kind) {
    if (!el._hdsSnap) el._hdsSnap = {};
    if (!(kind in el._hdsSnap)) {
      if (kind === 'text') el._hdsSnap[kind] = el.textContent;
      else if (kind === 'html') el._hdsSnap[kind] = el.innerHTML;
      else el._hdsSnap[kind] = el.getAttribute(kind);
    }
    return el._hdsSnap[kind];
  }

  function val(lang, key) {
    if (lang === DEFAULT_LANG) return null;
    var d = DICT[lang];
    return (d && d[key] !== undefined) ? d[key] : null;
  }

  function fill(lang, key, kind, el) {
    var original = snap(el, kind);
    var v = (lang === DEFAULT_LANG) ? null : val(lang, key);
    return (v === null) ? original : v.replace(/\{y\}/g, String(new Date().getFullYear()));
  }

  function each(sel, fn) {
    Array.prototype.forEach.call(document.querySelectorAll(sel), fn);
  }

  function applyLang(lang) {
    if (LANGS.indexOf(lang) < 0) lang = DEFAULT_LANG;
    document.documentElement.lang = lang;

    each('[data-i18n]', function (el) {
      el.textContent = fill(lang, el.getAttribute('data-i18n'), 'text', el);
    });
    each('[data-i18n-html]', function (el) {
      el.innerHTML = fill(lang, el.getAttribute('data-i18n-html'), 'html', el);
    });
    each('[data-i18n-ph]', function (el) {
      el.setAttribute('placeholder', fill(lang, el.getAttribute('data-i18n-ph'), 'placeholder', el));
    });
    each('[data-i18n-aria]', function (el) {
      el.setAttribute('aria-label', fill(lang, el.getAttribute('data-i18n-aria'), 'aria-label', el));
    });
    each('[data-i18n-content]', function (el) {
      el.setAttribute('content', fill(lang, el.getAttribute('data-i18n-content'), 'content', el));
    });
    var titleEl = document.querySelector('title[data-i18n-title]');
    if (titleEl) {
      document.title = fill(lang, titleEl.getAttribute('data-i18n-title'), 'title', titleEl);
    }
    document.dispatchEvent(new CustomEvent('hds:langchange', { detail: { lang: lang } }));
  }

  function readLang() {
    try {
      var s = localStorage.getItem(STORE_KEY);
      if (s && LANGS.indexOf(s) >= 0) return s;
    } catch (e) { /* localStorage 不可用时回退默认语言 */ }
    return DEFAULT_LANG;
  }

  function saveLang(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) { /* 忽略 */ }
  }

  window.HDS = {
    LANGS: LANGS,
    DEFAULT_LANG: DEFAULT_LANG,
    t: function (lang, key) { return val(lang, key); },
    applyLang: applyLang,
    readLang: readLang,
    saveLang: saveLang
  };
})();
