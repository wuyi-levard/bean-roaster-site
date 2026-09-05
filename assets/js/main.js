/* 烘豆师介绍站 · 客户端脚本
   职责：主题三档切换 / 语言切换 / 复制微信号 / 平滑滚动兜底 / 反馈表单跳转。 */

(function () {
  'use strict';

  var THEME_KEY = 'hds-theme';
  var THEMES = ['auto', 'light', 'dark'];
  /* 主题按钮无障碍标签的简体原文（切回简体时使用） */
  var THEME_LABEL_DEFAULT = {
    auto: '主题：跟随系统',
    light: '主题：浅色',
    dark: '主题：深色'
  };
  var THEME_ICON = { auto: '🖥️', light: '☀️', dark: '🌙' };

  var curLang = 'zh-CN';

  /* 取当前语言下的文案：非简体时查词典，否则用传入的简体原文 */
  function L(key, fallback) {
    var v = (curLang !== 'zh-CN' && window.HDS) ? window.HDS.t(curLang, key) : null;
    return v === null || v === undefined ? fallback : v;
  }

  // ---------- 主题：跟随系统 / 浅色 / 深色 ----------
  function readTheme() {
    try {
      var t = localStorage.getItem(THEME_KEY);
      if (t && THEMES.indexOf(t) >= 0) return t;
    } catch (e) { /* localStorage 不可用时回退跟随系统 */ }
    return 'auto';
  }

  function saveTheme(t) {
    try { localStorage.setItem(THEME_KEY, t); } catch (e) { /* 忽略 */ }
  }

  function applyTheme(t) {
    if (t === 'auto') document.documentElement.removeAttribute('data-theme');
    else document.documentElement.setAttribute('data-theme', t);
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    var label = (curLang !== 'zh-CN' && window.HDS && window.HDS.t(curLang, 'ctl.theme.' + t)) || THEME_LABEL_DEFAULT[t];
    btn.setAttribute('aria-label', label);
    btn.setAttribute('title', label);
    btn.setAttribute('data-state', t);
    var ico = btn.querySelector('[data-theme-icon]');
    if (ico) ico.textContent = THEME_ICON[t];
  }

  function setupTheme() {
    var btn = document.querySelector('[data-theme-toggle]');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var cur = readTheme();
      var next = THEMES[(THEMES.indexOf(cur) + 1) % THEMES.length];
      saveTheme(next);
      applyTheme(next);
    });
    applyTheme(readTheme());
  }

  // ---------- 语言 ----------
  function setupLang() {
    if (!window.HDS) return;
    curLang = window.HDS.readLang();
    /* 先跑一次以建立简体原文快照（即使当前就是简体） */
    window.HDS.applyLang(curLang);

    var sel = document.querySelector('[data-lang-select]');
    if (sel) {
      sel.value = curLang;
      sel.addEventListener('change', function () {
        curLang = sel.value;
        window.HDS.saveLang(curLang);
        window.HDS.applyLang(curLang);
        /* 语言变化后刷新主题按钮的无障碍标签 */
        applyTheme(readTheme());
        refreshCopyLabels();
      });
    }
  }

  /* 复制按钮文案随语言刷新（按钮文字由 JS 改写，需单独处理） */
  function copyText(lang, key, fallback) {
    var v = (lang !== 'zh-CN' && window.HDS) ? window.HDS.t(lang, key) : null;
    return v === null || v === undefined ? fallback : v;
  }
  function refreshCopyLabels() {
    document.querySelectorAll('[data-copy]').forEach(function (btn) {
      if (btn.dataset.busy === '1') return;
      btn.textContent = copyText(curLang, 'dl.copy', '复制');
    });
  }

  // ---------- 复制微信号 ----------
  function setupCopy() {
    document.querySelectorAll('[data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-copy');
        var ok = function () {
          var orig = btn.textContent;
          btn.dataset.busy = '1';
          btn.textContent = copyText(curLang, 'copy.done', '已复制');
          btn.classList.add('ok');
          setTimeout(function () {
            btn.textContent = copyText(curLang, 'dl.copy', '复制');
            btn.classList.remove('ok');
            btn.dataset.busy = '0';
            void orig;
          }, 1600);
        };
        var fallback = function () { window.prompt('复制下面的微信号：', text); };
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(text).then(ok).catch(fallback);
        } else {
          try {
            var ta = document.createElement('textarea');
            ta.value = text;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            document.body.removeChild(ta);
            ok();
          } catch (e) { fallback(); }
        }
      });
    });
  }

  // ---------- 平滑滚动兜底（旧浏览器） ----------
  function setupSmoothScroll() {
    if ('scrollBehavior' in document.documentElement.style) return;
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener('click', function (e) {
        var id = a.getAttribute('href');
        if (id.length < 2) return;
        var target = document.querySelector(id);
        if (target) { e.preventDefault(); target.scrollIntoView({ block: 'start' }); }
      });
    });
  }

  // ---------- 版本号 / 年份 ----------
  function setupVersion() {
    document.querySelectorAll('[data-version]').forEach(function (n) {
      n.textContent = n.getAttribute('data-version');
    });
    document.querySelectorAll('[data-year]').forEach(function (n) {
      n.textContent = new Date().getFullYear();
    });
  }

  // ---------- 反馈表单 → 跳转预填 GitHub Issue ----------
  function setupFeedbackForm() {
    var form = document.querySelector('[data-feedback-form]');
    if (!form) return;
    var err = form.querySelector('[data-fb-err]');
    var REPO = 'wuyi-levard/bean-roaster-site';

    function showErr(msg) {
      if (!err) return;
      err.textContent = msg;
      err.hidden = false;
    }

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (err) err.hidden = true;

      var get = function (n) { return (form.querySelector('[name="' + n + '"]') || {}).value || ''; };
      /* 类型值是稳定标识符（bug/feature/other），提交文案用本地化标签 */
      var typeId = get('type').trim();
      var TYPE_KEY = { bug: 'fb.type.bug', feature: 'fb.type.feat', other: 'fb.type.other' };
      var TYPE_DEFAULT = { bug: '问题报告 / Bug', feature: '功能建议', other: '其他' };
      var type = L(TYPE_KEY[typeId] || TYPE_KEY.other, TYPE_DEFAULT[typeId] || TYPE_DEFAULT.other);
      var title = get('title').trim();
      var desc = get('desc').trim();
      var steps = get('steps').trim();
      var contact = get('contact').trim();
      var version = get('version').trim();

      if (!title) { showErr(L('fb.err.title', '请填写标题。')); form.querySelector('[name="title"]').focus(); return; }
      if (!desc) { showErr(L('fb.err.desc', '请填写详细描述。')); form.querySelector('[name="desc"]').focus(); return; }

      var unfilled = L('fb.body.unfilled', '未填写');
      var body = L('fb.body.type', '类型：') + type + '\n' +
                 L('fb.body.ver', 'App 版本：') + (version || unfilled) + '\n\n' +
                 desc + '\n\n' +
                 (steps ? L('fb.body.steps', '复现步骤：') + '\n' + steps + '\n\n' : '') +
                 (contact ? L('fb.body.contact', '联系方式：') + contact + '\n\n' : '') +
                 '---\n' + L('fb.body.footer', '由烘豆师产品介绍站反馈表单提交。');

      var url = 'https://github.com/' + REPO + '/issues/new' +
                '?title=' + encodeURIComponent('[' + type + '] ' + title) +
                '&body=' + encodeURIComponent(body) +
                '&labels=' + encodeURIComponent('feedback');

      window.open(url, '_blank', 'noopener');
    });
  }

  // ---------- 当前页高亮（nav-menu / footer 的页面级链接）----------
  function here() {
    return location.pathname.split('/').pop() || 'index.html';
  }

  function setupCurrentPage() {
    var cur = here();
    document.querySelectorAll('.nav-menu a, .nav-links a, footer .links a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (href.charAt(0) === '#') return;              // 纯锚点交给滚动高亮
      if (href.split('/').pop() === cur) a.setAttribute('aria-current', 'page');
    });
  }

  // ---------- 滚动高亮（首页区块锚点）----------
  function setupNavSpy() {
    if (!('IntersectionObserver' in window)) return;

    var map = {};
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href') || '';
      var hash = href.indexOf('#');
      if (hash < 0) return;
      var frag = href.slice(hash + 1);
      var file = href.slice(0, hash).split('/').pop();
      if (file && file !== here()) return;             // 指向别的页面，跳过
      if (!frag || !document.getElementById(frag)) return;
      (map[frag] = map[frag] || []).push(a);
    });

    var ids = Object.keys(map);
    if (!ids.length) return;

    function setCurrent(id) {
      ids.forEach(function (k) {
        (map[k] || []).forEach(function (a) {
          if (k === id) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    }

    /* 取视口中带（上下各裁掉 45%/50%）命中的区块作为当前区块 */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) setCurrent(e.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    ids.forEach(function (id) { io.observe(document.getElementById(id)); });

    /* Hero（#top）进入视口时清空高亮 */
    var top = document.getElementById('top');
    if (top) {
      new IntersectionObserver(function (entries) {
        entries.forEach(function (e) { if (e.isIntersecting) setCurrent(null); });
      }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 }).observe(top);
    }
  }

  // ---------- 「更多」下拉：点击外部 / ESC / 选中项后关闭 ----------
  function setupNavMore() {
    var d = document.querySelector('.nav-more');
    if (!d) return;
    document.addEventListener('click', function (e) {
      if (d.open && !d.contains(e.target)) d.open = false;
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && d.open) {
        d.open = false;
        var s = d.querySelector('summary');
        if (s) s.focus();
      }
    });
    d.querySelectorAll('.nav-menu a').forEach(function (a) {
      a.addEventListener('click', function () { d.open = false; });
    });
  }

  // ---------- init ----------
  function init() {
    setupLang();
    setupTheme();
    setupCopy();
    setupSmoothScroll();
    setupVersion();
    setupFeedbackForm();
    setupCurrentPage();
    setupNavSpy();
    setupNavMore();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
