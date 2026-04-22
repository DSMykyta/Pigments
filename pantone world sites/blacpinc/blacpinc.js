/* -------------------------------------------------------
   BLAC PINC · site-wide JS
   Each module guards itself by checking for DOM.
------------------------------------------------------- */

(function(){
'use strict';

/* Shell-level normalisation:
   - lore page is hidden (body.lore stripped of shared chrome)
   - any stray lore link in the footer is turned back into a dot
*/
(function refineOfficialShell(){
  const isLore = document.body.classList.contains('lore');
  if(isLore){
    document.querySelector('nav.main')?.remove();
    document.querySelector('.crawl')?.remove();
    document.querySelector('footer')?.remove();
    return;
  }

  const footer = document.querySelector('footer');
  if(footer){
    footer.querySelectorAll('a[href="blacpinc-lore.html"]').forEach(link => {
      link.replaceWith(document.createTextNode('·'));
    });
  }
})();

/* Generic audio player
   Works with:
     <audio id="X-audio">
     <div id="X-tracks"> .pa-tr[data-src] </div>
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

      rows.forEach(item => {
        const button = item.querySelector('.play');
        if(button) button.textContent = '▶';
        item.classList.remove('playing');
      });

      if(audio.src !== new URL(src, location.href).href){
        audio.src = src;
      }
      audio.play().catch(() => {});
      current = row;
      if(playBtn) playBtn.textContent = '❚❚';
      row.classList.add('playing');
    });
  });

  audio.addEventListener('ended', () => {
    rows.forEach(item => {
      const button = item.querySelector('.play');
      if(button) button.textContent = '▶';
      item.classList.remove('playing');
    });
    current = null;
  });
}

hookTracks('az-tracks', 'az-player', '.tr');
hookTracks('pv-tracks', 'pv-player');
hookTracks('album-tracks', 'album-audio');

/* S.O.S countdown */
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

    const d = Math.floor(diff / 86400000);
    const h = Math.floor(diff % 86400000 / 3600000);
    const m = Math.floor(diff % 3600000 / 60000);
    const s = Math.floor(diff % 60000 / 1000);
    box.innerHTML = `
      <div class="cell"><div class="num">${String(d).padStart(2,'0')}</div><div class="lbl">Days</div></div>
      <div class="cell"><div class="num">${String(h).padStart(2,'0')}</div><div class="lbl">Hours</div></div>
      <div class="cell"><div class="num">${String(m).padStart(2,'0')}</div><div class="lbl">Minutes</div></div>
      <div class="cell"><div class="num">${String(s).padStart(2,'0')}</div><div class="lbl">Seconds</div></div>`;
  }

  render();
  setInterval(render, 1000);
})();

/* Shop category filter */
(function(){
  const buttons = document.querySelectorAll('.catbar a[data-cat]');
  const products = document.querySelectorAll('.prod');
  const empty = document.querySelector('.shop-empty');
  if(!buttons.length || !products.length) return;

  function filter(cat){
    let shown = 0;
    products.forEach(product => {
      const cats = (product.dataset.cat || '').split(/\s+/);
      const show = cat === 'all' || cats.includes(cat);
      product.hidden = !show;
      if(show) shown += 1;
    });
    if(empty) empty.hidden = shown > 0;
  }

  buttons.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      buttons.forEach(item => item.classList.remove('on'));
      btn.classList.add('on');
      filter(btn.dataset.cat);
    });
  });
})();

/* Gallery filter */
(function(){
  const chips = document.querySelectorAll('.gal-filter .chip');
  const photos = document.querySelectorAll('.gphoto');
  if(!chips.length || !photos.length) return;

  let activeEra = 'all';
  let activeCat = 'all';

  function apply(){
    photos.forEach(photo => {
      const eraMatch = activeEra === 'all' || photo.dataset.era === activeEra;
      const catMatch = activeCat === 'all' || photo.dataset.cat === activeCat;
      photo.style.display = (eraMatch && catMatch) ? '' : 'none';
    });
  }

  chips.forEach(chip => {
    chip.addEventListener('click', event => {
      event.preventDefault();
      const type = chip.dataset.era ? 'era' : 'cat';
      document.querySelectorAll(`.gal-filter .chip[data-${type}]`).forEach(item => item.classList.remove('on'));
      chip.classList.add('on');
      if(type === 'era') activeEra = chip.dataset.era;
      else activeCat = chip.dataset.cat;
      apply();
    });
  });
})();

/* Schedule filter */
(function(){
  const chips = document.querySelectorAll('.cal-filter .chip');
  const events = document.querySelectorAll('.evt');
  if(!chips.length || !events.length) return;

  chips.forEach(chip => {
    chip.addEventListener('click', event => {
      event.preventDefault();
      chips.forEach(item => item.classList.remove('on'));
      chip.classList.add('on');
      const type = chip.dataset.type;
      events.forEach(ev => {
        ev.style.display = (type === 'all' || ev.dataset.type === type) ? '' : 'none';
      });
    });
  });
})();

})();
