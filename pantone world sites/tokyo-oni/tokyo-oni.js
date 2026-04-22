/* =====================================================
   TOKYO ONI · Unified JS
   Countdown timer + minor interactions.
   ===================================================== */

(function(){
  'use strict';

  // ====== COUNTDOWN TIMER ======
  // Target: next match — Sun 2026.04.27 19:00 JST (UTC+9)
  const matchTarget = new Date('2026-04-27T19:00:00+09:00');

  function updateCountdown(){
    const el = document.querySelector('[data-countdown]');
    if (!el) return;
    const now = new Date();
    const diff = Math.max(0, matchTarget - now);
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff / 3600000) % 24);
    const m = Math.floor((diff / 60000) % 60);
    const s = Math.floor((diff / 1000) % 60);
    const pad = (n) => String(n).padStart(2, '0');
    const targets = el.querySelectorAll('[data-c]');
    if (targets.length >= 4) {
      targets[0].textContent = pad(d);
      targets[1].textContent = pad(h);
      targets[2].textContent = pad(m);
      targets[3].textContent = pad(s);
    }
  }

  // ====== LANGUAGE SWITCHER (cosmetic, doesn't translate) ======
  function initLangSwitch(){
    const buttons = document.querySelectorAll('.lang-switch button');
    buttons.forEach(b => {
      b.addEventListener('click', () => {
        buttons.forEach(x => x.classList.remove('active'));
        b.classList.add('active');
      });
    });
  }

  // ====== SCROLL-SHRINK HEADER ======
  function initScrollShrink(){
    const header = document.querySelector('.site-header');
    if (!header) return;
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
      lastY = y;
    }, { passive: true });
  }

  // ====== ARENA HOTSPOT TOOLTIPS ======
  function initHotspots(){
    document.querySelectorAll('.arena-hotspot').forEach(h => {
      h.addEventListener('click', (e) => {
        e.preventDefault();
        const label = h.getAttribute('data-label');
        if (label) alert(label);
      });
    });
  }

  // ====== INIT ON DOM READY ======
  document.addEventListener('DOMContentLoaded', () => {
    updateCountdown();
    setInterval(updateCountdown, 1000);
    initLangSwitch();
    initScrollShrink();
    initHotspots();
  });
})();
