/* 烘豆师介绍站 · 客户端脚本
   仅做 3 件事：复制微信号 / 平滑滚动兜底 / 二维码弹层。 */

(function () {
  'use strict';

  // ---------- 复制微信号 ----------
  function setupCopy() {
    document.querySelectorAll('[data-copy]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var text = btn.getAttribute('data-copy');
        var ok = function () {
          var orig = btn.textContent;
          btn.textContent = '已复制';
          btn.classList.add('ok');
          setTimeout(function () { btn.textContent = orig; btn.classList.remove('ok'); }, 1600);
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

  // ---------- 当前版本号注入 ----------
  function setupVersion() {
    var el = document.querySelectorAll('[data-version]');
    el.forEach(function (n) { n.textContent = n.getAttribute('data-version'); });
    var year = document.querySelectorAll('[data-year]');
    year.forEach(function (n) { n.textContent = new Date().getFullYear(); });
  }

  // ---------- init ----------
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      setupCopy(); setupSmoothScroll(); setupVersion();
    });
  } else {
    setupCopy(); setupSmoothScroll(); setupVersion();
  }
})();
