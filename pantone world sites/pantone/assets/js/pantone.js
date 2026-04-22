/* ============================================
   PANTONE — shared interactions
   ============================================ */
(() => {
  'use strict';

  /* ---------- NAV: mobile burger + scroll state ---------- */
  const nav = document.querySelector('.nav');
  const burger = document.querySelector('.nav-burger');
  if (burger && nav) {
    burger.addEventListener('click', () => nav.classList.toggle('open'));
    document.querySelectorAll('.nav-links a').forEach(a =>
      a.addEventListener('click', () => nav.classList.remove('open'))
    );
  }

  /* ---------- REVEAL on scroll ---------- */
  const revealables = document.querySelectorAll('.reveal');
  if (revealables.length && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealables.forEach((el) => io.observe(el));
  }

  /* ---------- HSV PICKER ---------- */
  // Matches real Pantone lore — each HSV point maps to a Pantone name + domain hint.
  // Table is a sparse grid; nearest-neighbor lookup.
  const HSV_TABLE = [
    { h:   0, s: 60, v: 85, num: '18-1550', name: 'Aurora Red',     dom: 'Strike · прицільна кінетика' },
    { h:  18, s: 38, v: 82, num: '16-1325', name: 'Coral Dust',     dom: 'Mend · осідає і кам’яніє' },
    { h:  30, s: 55, v: 88, num: '15-1340', name: 'Flesh Copper',   dom: 'Mend · регенерація м’яких тканин' },
    { h:  48, s: 82, v: 92, num: '13-0858', name: 'Solar Amber',    dom: 'Pulse · теплова емісія' },
    { h:  60, s: 70, v: 90, num: '12-0752', name: 'Pollen Gold',    dom: 'Pulse · електромагнітна модуляція' },
    { h:  90, s: 48, v: 72, num: '16-0430', name: 'Moss Vector',    dom: 'Read · структурне зчитування' },
    { h: 120, s: 55, v: 68, num: '17-6229', name: 'Juniper Signal', dom: 'Read · каналізація інформації' },
    { h: 160, s: 40, v: 70, num: '15-5718', name: 'Sea Glass',      dom: 'Read · тиха частота' },
    { h: 195, s: 65, v: 78, num: '16-4535', name: 'Horizon Cobalt', dom: 'Rush · прискорений рух' },
    { h: 220, s: 78, v: 60, num: '19-3952', name: 'Deep Meridian',  dom: 'Rush · інерція маси' },
    { h: 250, s: 68, v: 55, num: '18-3838', name: 'Ultraviolet',    dom: 'Shift · зсув стану' },
    { h: 280, s: 72, v: 48, num: '19-3536', name: 'Obsidian Iris',  dom: 'Shift · дислокація' },
    { h: 320, s: 68, v: 72, num: '17-2520', name: 'Magenta Wire',   dom: 'Shift · перестрій форми' },
    { h: 350, s: 30, v: 88, num: '13-1708', name: 'Powder Hush',    dom: 'Hold · стабілізація' },
    { h:   0, s:  5, v: 95, num: '11-0601', name: 'Snow Linen',     dom: 'Hold · нейтралізатор' },
    { h:   0, s: 10, v: 25, num: '19-0303', name: 'Jet Core',       dom: 'KAISER · екстраполяція' }
  ];

  function hsvToRgb(h, s, v) {
    s /= 100; v /= 100;
    const c = v * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - c;
    let r=0,g=0,b=0;
    if (h < 60){r=c;g=x;}
    else if (h < 120){r=x;g=c;}
    else if (h < 180){g=c;b=x;}
    else if (h < 240){g=x;b=c;}
    else if (h < 300){r=x;b=c;}
    else {r=c;b=x;}
    return [Math.round((r+m)*255), Math.round((g+m)*255), Math.round((b+m)*255)];
  }

  function hsvLookup(h, s, v) {
    let best = HSV_TABLE[0], bestD = Infinity;
    for (const p of HSV_TABLE) {
      const dh = Math.min(Math.abs(h - p.h), 360 - Math.abs(h - p.h));
      const ds = s - p.s, dv = v - p.v;
      const d = dh*dh*0.6 + ds*ds + dv*dv;
      if (d < bestD) { bestD = d; best = p; }
    }
    return best;
  }

  document.querySelectorAll('.hsv-card').forEach((card) => {
    const h = card.querySelector('[data-hsv="h"]');
    const s = card.querySelector('[data-hsv="s"]');
    const v = card.querySelector('[data-hsv="v"]');
    const hVal = card.querySelector('[data-hsv-val="h"]');
    const sVal = card.querySelector('[data-hsv-val="s"]');
    const vVal = card.querySelector('[data-hsv-val="v"]');
    const preview = card.querySelector('.hsv-preview');
    const numOut  = card.querySelector('[data-out="num"]');
    const nameOut = card.querySelector('[data-out="name"]');
    const descOut = card.querySelector('[data-out="desc"]');
    if (!h || !s || !v || !preview) return;

    const update = () => {
      const hv = +h.value, sv = +s.value, vv = +v.value;
      if (hVal) hVal.textContent = hv;
      if (sVal) sVal.textContent = sv;
      if (vVal) vVal.textContent = vv;
      const [r, g, b] = hsvToRgb(hv, sv, vv);
      preview.style.background = `linear-gradient(135deg, rgb(${r},${g},${b}) 0%, rgb(${Math.max(r-40,0)},${Math.max(g-40,0)},${Math.max(b-40,0)}) 100%)`;
      const match = hsvLookup(hv, sv, vv);
      if (numOut)  numOut.textContent  = 'PANTONE ' + match.num;
      if (nameOut) nameOut.textContent = match.name;
      if (descOut) descOut.textContent = match.dom;
    };
    h.addEventListener('input', update);
    s.addEventListener('input', update);
    v.addEventListener('input', update);
    update();
  });

  /* ---------- VERTICAL TABS (Professional page) ---------- */
  document.querySelectorAll('.verticals').forEach((wrap) => {
    const tabs = wrap.querySelectorAll('.verticals-tabs button');
    const panels = wrap.querySelectorAll('.vertical-panel');
    tabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        const key = btn.dataset.tab;
        tabs.forEach((b) => b.classList.toggle('active', b === btn));
        panels.forEach((p) => p.classList.toggle('active', p.dataset.panel === key));
      });
    });
  });

  /* ---------- SMOOTH PRODUCT FLOAT on scroll ---------- */
  // Gentle parallax/float for hero devices. Runs only if motion is OK.
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduce) {
    const floaters = document.querySelectorAll('[data-float]');
    if (floaters.length) {
      let ticking = false;
      const onScroll = () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(() => {
          const y = window.scrollY;
          floaters.forEach((el) => {
            const rect = el.getBoundingClientRect();
            const center = rect.top + rect.height / 2 - window.innerHeight / 2;
            const t = Math.max(-1, Math.min(1, center / window.innerHeight));
            el.style.transform = `translateY(${t * -12}px)`;
          });
          ticking = false;
        });
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }
  }

  /* ---------- ACTIVE NAV LINK by filename ---------- */
  const path = location.pathname.split('/').pop() || 'pantone.html';
  document.querySelectorAll('.nav-links a').forEach((a) => {
    const href = a.getAttribute('href') || '';
    if (href === path) a.classList.add('active');
  });

  /* ---------- COPY-TO-CLIPBOARD on PMS numbers ---------- */
  document.querySelectorAll('[data-copy]').forEach((el) => {
    el.style.cursor = 'copy';
    el.title = 'Click to copy';
    el.addEventListener('click', async () => {
      const text = el.dataset.copy || el.textContent.trim();
      try {
        await navigator.clipboard.writeText(text);
        const orig = el.textContent;
        el.textContent = 'Copied ✓';
        setTimeout(() => { el.textContent = orig; }, 1100);
      } catch (_) { /* silent */ }
    });
  });

})();
