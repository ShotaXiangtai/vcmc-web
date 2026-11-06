/* ==========================================================================
   VoiceMC 共通スクリプト（全ページで defer 読み込み）
   各要素の存在チェックを行うため、ページに要素がなくても安全に動作する。
   ========================================================================== */
window.__vcmcReady = true;

(function () {
  const root = document.documentElement;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const T = (s, v) => (window.vcmcT ? window.vcmcT(s, v) : s); // 翻訳（i18n.js）

  // ── テーマ切り替え（ボタンを押したときだけ保存。未保存ならOSの設定に追従） ──
  (function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    const apply = (theme, persist) => {
      root.setAttribute('data-theme', theme);
      if (persist) {
        try { localStorage.setItem('theme', theme); } catch (e) { /* 保存できない環境では無視 */ }
      }
    };
    if (toggle) {
      toggle.addEventListener('click', () => {
        apply(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
      });
    }
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const onSystemChange = e => {
      let saved = null;
      try { saved = localStorage.getItem('theme'); } catch (err) { /* noop */ }
      if (!saved) apply(e.matches ? 'dark' : 'light', false);
    };
    if (mq.addEventListener) mq.addEventListener('change', onSystemChange);
  })();

  // ── フッターの年号 ──
  const year = document.getElementById('y');
  if (year) year.textContent = new Date().getFullYear();

  // ── ヘッダー（スクロールで背景をつける）／ページトップへ戻るボタン ──
  const header = document.querySelector('.site-header');
  const backToTop = document.getElementById('back-to-top');
  function onScroll() {
    const y = window.scrollY;
    if (header) header.classList.toggle('is-scrolled', y > 8);
    if (backToTop) backToTop.classList.toggle('visible', y > 600);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
    });
  }

  // ── モバイルナビゲーション ──
  (function initMenu() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');
    if (!hamburger || !navLinks) return;

    const setOpen = open => {
      navLinks.classList.toggle('is-open', open);
      if (header) header.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
      hamburger.setAttribute('aria-label', open ? T('メニューを閉じる') : T('メニューを開く'));
    };

    hamburger.addEventListener('click', () => setOpen(!navLinks.classList.contains('is-open')));
    navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
    document.addEventListener('click', e => {
      if (!e.target.closest('.site-header')) setOpen(false);
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && navLinks.classList.contains('is-open')) {
        setOpen(false);
        hamburger.focus();
      }
    });
    const wide = window.matchMedia('(min-width: 1181px)');
    const onWide = e => { if (e.matches) setOpen(false); };
    if (wide.addEventListener) wide.addEventListener('change', onWide);
  })();

  // ── スクロールフェードイン（.reveal：要素自体／.reveal-stagger：子要素を順番に） ──
  (function initReveal() {
    const targets = document.querySelectorAll('.reveal, .reveal-stagger');
    if (!targets.length) return;
    if (!('IntersectionObserver' in window)) {
      targets.forEach(el => el.classList.add('visible'));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -8% 0px' });
    targets.forEach(el => observer.observe(el));
  })();

  // ── トースト通知（Minecraft の実績風） ──
  let toastEl = null;
  let toastTimer = null;
  function showToast(title, text) {
    if (!toastEl) {
      toastEl = document.createElement('div');
      toastEl.className = 'toast';
      toastEl.setAttribute('role', 'status');
      toastEl.setAttribute('aria-live', 'polite');
      toastEl.innerHTML = '<span class="toast-icon" aria-hidden="true"><i class="fa-solid fa-check"></i></span>' +
        '<span class="toast-body"><span class="toast-title"></span><br><span class="toast-text"></span></span>';
      document.body.appendChild(toastEl);
    }
    toastEl.querySelector('.toast-title').textContent = title;
    toastEl.querySelector('.toast-text').textContent = text;
    // 再表示時にもアニメーションさせる
    toastEl.classList.remove('is-visible');
    void toastEl.offsetWidth;
    toastEl.classList.add('is-visible');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove('is-visible'), 2400);
  }
  window.vcmcToast = showToast;

  // ── クリップボードにコピー（[data-copy] またはコマンドのボタン） ──
  async function copyText(text) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch (err) { ok = false; }
      ta.remove();
      return ok;
    }
  }

  document.addEventListener('click', async e => {
    const el = e.target.closest('[data-copy], .cmd-code');
    if (!el) return;
    const code = el.querySelector('code');
    const text = (el.dataset.copy || (code ? code.textContent : el.textContent)).trim();
    if (!text) return;

    const ok = await copyText(text);
    if (!ok) {
      window.prompt(T('手動でコピーしてください'), text);
      return;
    }
    const label = el.querySelector('[data-copy-label]');
    if (label && !label.dataset.orig) label.dataset.orig = label.textContent;
    if (label) label.textContent = T('コピーしました');
    el.classList.add('is-copied');
    clearTimeout(el._copyTimer);
    el._copyTimer = setTimeout(() => {
      el.classList.remove('is-copied');
      if (label) label.textContent = label.dataset.orig;
    }, 2000);
    showToast(T('コピーしました'), text);
  });

  // ── タブ（commands.html など） ──
  document.querySelectorAll('[data-tabs]').forEach(wrap => {
    const tabs = Array.from(wrap.querySelectorAll('[role="tab"]'));
    if (!tabs.length) return;

    const activate = (tab, focus) => {
      tabs.forEach(t => {
        const on = t === tab;
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(t.getAttribute('aria-controls'));
        if (panel) panel.hidden = !on;
      });
      if (focus) tab.focus();
    };

    tabs.forEach((tab, i) => {
      tab.addEventListener('click', () => {
        activate(tab);
        if (tab.dataset.tab && history.replaceState) history.replaceState(null, '', '#' + tab.dataset.tab);
      });
      tab.addEventListener('keydown', e => {
        let next = null;
        if (e.key === 'ArrowRight') next = (i + 1) % tabs.length;
        if (e.key === 'ArrowLeft') next = (i - 1 + tabs.length) % tabs.length;
        if (e.key === 'Home') next = 0;
        if (e.key === 'End') next = tabs.length - 1;
        if (next !== null) {
          e.preventDefault();
          activate(tabs[next], true);
        }
      });
    });

    // URL の #bolt などで初期タブを選べるようにする
    const fromHash = tabs.find(t => location.hash && '#' + t.dataset.tab === location.hash);
    activate(fromHash || tabs.find(t => t.getAttribute('aria-selected') === 'true') || tabs[0]);
  });
})();
