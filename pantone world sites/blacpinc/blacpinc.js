/* ───────────────────────────────────────────────
   BLAC PINC · site-wide JS
   Each module guards itself by checking for DOM
   elements — safe to load on any page.
   ─────────────────────────────────────────────── */

(function(){
'use strict';

/* ── AUDIO PLAYER · generic track list ──
   Works with any container that has:
     <audio id="X-audio">                          (or pre-set src)
     <div id="X-tracks"> .pa-tr[data-src] </div>   (or .tr inside)
   Pattern pairs:
     pv-tracks  → pv-player        (home · Previous album)
     az-tracks  → az-player        (home · Absolute Zero white block, .tr rows)
     album-tracks → album-audio    (album page)
*/
function hookTracks(containerId, audioId, rowSelector){
  const audio = document.getElementById(audioId);
  if(!audio) return;
  const rows = document.querySelectorAll('#' + containerId + ' ' + (rowSelector || '.pa-tr'));
  if(!rows.length) return;
  let current = null;
  rows.forEach(row => {
    row.addEventListener('click', () => {
      const src = row.dataset.src;
      if(!src) return;
      const playBtn = row.querySelector('.play');
      if(current === row && !audio.paused){
        audio.pause();
        if(playBtn) playBtn.textContent = '▶';
        return;
      }
      rows.forEach(r => {
        const b = r.querySelector('.play');
        if(b) b.textContent = '▶';
        r.classList.remove('playing');
      });
      if(audio.src !== new URL(src, location.href).href){
        audio.src = src;
      }
      audio.play().catch(()=>{});
      current = row;
      if(playBtn) playBtn.textContent = '❚❚';
      row.classList.add('playing');
    });
  });
  audio.addEventListener('ended', () => {
    rows.forEach(r => {
      const b = r.querySelector('.play');
      if(b) b.textContent = '▶';
      r.classList.remove('playing');
    });
    current = null;
  });
}

// Home page — Absolute Zero tracklist (uses .tr class, one track)
hookTracks('az-tracks', 'az-player', '.tr');
// Home page — Previous Album Pink Venom² tracklist
hookTracks('pv-tracks', 'pv-player');
// Full album page
hookTracks('album-tracks', 'album-audio');


/* ── D-DAY COUNTDOWN · S.O.S (next single, 2026.07.23) ── */
(function(){
  const target = new Date('2026-07-23T18:00:00+09:00').getTime();
  const box = document.getElementById('sos-dday');
  if(!box) return;
  function render(){
    const diff = target - Date.now();
    if(diff <= 0){
      box.classList.add('live');
      box.innerHTML = '<div class="cell" style="grid-column:1/-1"><div class="num" style="font-size:32px">● LIVE · OUT NOW</div><div class="lbl">S.O.S is here</div></div>';
      return;
    }
    const d = Math.floor(diff/86400000);
    const h = Math.floor(diff%86400000/3600000);
    const m = Math.floor(diff%3600000/60000);
    const s = Math.floor(diff%60000/1000);
    box.innerHTML = `
      <div class="cell"><div class="num">${String(d).padStart(2,'0')}</div><div class="lbl">Days</div></div>
      <div class="cell"><div class="num">${String(h).padStart(2,'0')}</div><div class="lbl">Hours</div></div>
      <div class="cell"><div class="num">${String(m).padStart(2,'0')}</div><div class="lbl">Minutes</div></div>
      <div class="cell"><div class="num">${String(s).padStart(2,'0')}</div><div class="lbl">Seconds</div></div>`;
  }
  render();
  setInterval(render, 1000);
})();


/* ── SHOP · category filter ── */
(function(){
  const buttons = document.querySelectorAll('.catbar a[data-cat]');
  const products = document.querySelectorAll('.prod');
  const empty = document.querySelector('.shop-empty');
  if(!buttons.length || !products.length) return;

  function filter(cat){
    let shown = 0;
    products.forEach(p => {
      const cats = (p.dataset.cat || '').split(/\s+/);
      const show = cat === 'all' || cats.includes(cat);
      p.hidden = !show;
      if(show) shown++;
    });
    if(empty) empty.hidden = shown > 0;
  }
  buttons.forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      buttons.forEach(b => b.classList.remove('on'));
      btn.classList.add('on');
      filter(btn.dataset.cat);
    });
  });
})();


/* ── GALLERY · dual filter (era × category) ── */
(function(){
  const chips = document.querySelectorAll('.gal-filter .chip');
  const photos = document.querySelectorAll('.gphoto');
  if(!chips.length || !photos.length) return;
  let activeEra = 'all', activeCat = 'all';
  function apply(){
    photos.forEach(p => {
      const eOK = activeEra === 'all' || p.dataset.era === activeEra;
      const cOK = activeCat === 'all' || p.dataset.cat === activeCat;
      p.style.display = (eOK && cOK) ? '' : 'none';
    });
  }
  chips.forEach(c => {
    c.addEventListener('click', e => {
      e.preventDefault();
      const type = c.dataset.era ? 'era' : 'cat';
      document.querySelectorAll(`.gal-filter .chip[data-${type}]`).forEach(x => x.classList.remove('on'));
      c.classList.add('on');
      if(type === 'era') activeEra = c.dataset.era;
      else activeCat = c.dataset.cat;
      apply();
    });
  });
})();


/* ── SCHEDULE · type filter ── */
(function(){
  const chips = document.querySelectorAll('.cal-filter .chip');
  const events = document.querySelectorAll('.evt');
  if(!chips.length || !events.length) return;
  chips.forEach(c => {
    c.addEventListener('click', e => {
      e.preventDefault();
      chips.forEach(x => x.classList.remove('on'));
      c.classList.add('on');
      const t = c.dataset.type;
      events.forEach(ev => { ev.style.display = (t === 'all' || ev.dataset.type === t) ? '' : 'none'; });
    });
  });
})();

})();
