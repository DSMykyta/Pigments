/* -------------------------------------------------------
   BLAC PINC · site-wide JS
   Each module guards itself by checking for DOM.
------------------------------------------------------- */

(function(){
'use strict';

/* Shell-level normalisation:
   - lore page is hidden (body.lore stripped of shared chrome)
   - shop lives as a separate CHROMA SELECT property
   - lore remains available from a small footer link
*/
(function refineOfficialShell(){
  const isLore = document.body.classList.contains('lore');
  if(isLore){
    document.querySelector('nav.main')?.remove();
    document.querySelector('.crawl')?.remove();
    document.querySelector('footer')?.remove();
    return;
  }

  const inStore = location.pathname.includes('/chroma-select/');
  const storeHref = inStore ? 'index.html' : 'chroma-select/index.html';
  document.querySelectorAll('a[href="blacpinc-shop.html"]').forEach(link => {
    link.href = storeHref;
  });

  const footer = document.querySelector('footer');
  if(footer){
    const base = footer.querySelector('.base, .sf-base');
    const loreHref = inStore ? '../blacpinc-lore.html' : 'blacpinc-lore.html';
    if(base && !base.querySelector('[data-lore-link]')){
      const holder = base.lastElementChild || base;
      holder.insertAdjacentHTML('beforeend', ` <span class="footer-sep">·</span> <a class="lore-link" data-lore-link href="${loreHref}">Lore</a>`);
    }
  }
})();

/* Language shell: Korean is the public default. */
(function languageShell(){
  if(document.body.classList.contains('lore')) return;

  const dict = {
    ko: {
      html: 'ko',
      nav: ['홈','멤버','음악','투어','미디어','뉴스','스토어'],
      follow: '팔로우',
      footerHeads: ['음악','라이브','미디어','커뮤니티'],
      footerTag: 'CHROMA HOUSE Entertainment. 서울 · 글로벌. 컬러로 만든 공식 사이트.',
      lore: 'Lore',
      storeNav: ['BLAC PINC','Tour Exclusive','Archive','Shipping · KR / WW'],
      cart: 'Cart · 0'
    },
    uk: {
      html: 'uk',
      nav: ['Головна','Учасниці','Музика','Тур','Медіа','Новини','Крамниця'],
      follow: 'Стежити',
      footerHeads: ['Музика','Наживо','Медіа','Спільнота'],
      footerTag: 'CHROMA HOUSE Entertainment. Сеул · світ. Офіційний сайт BLAC PINC.',
      lore: 'Лор',
      storeNav: ['BLAC PINC','Тур-ексклюзив','Архів','Доставка · KR / WW'],
      cart: 'Кошик · 0'
    },
    en: {
      html: 'en',
      nav: ['Home','Members','Music','Tour','Media','News','Store'],
      follow: 'Follow',
      footerHeads: ['Music','Live','Media','Community'],
      footerTag: 'CHROMA HOUSE Entertainment. Seoul · Global. Official BLAC PINC website.',
      lore: 'Lore',
      storeNav: ['BLAC PINC','Tour Exclusive','Archive','Shipping · KR / WW'],
      cart: 'Cart · 0'
    }
  };

  const targetNav = document.querySelector('nav.main, .store-nav');
  if(!targetNav) return;

  if(!targetNav.querySelector('.lang-switcher')){
    targetNav.insertAdjacentHTML('beforeend', `
      <div class="lang-switcher" aria-label="Language">
        <button type="button" data-lang="ko">KO</button>
        <button type="button" data-lang="uk">UK</button>
        <button type="button" data-lang="en">EN</button>
      </div>`);
  }

  function apply(next){
    const lang = dict[next] ? next : 'ko';
    localStorage.setItem('blacpinc-lang', lang);
    document.documentElement.lang = dict[lang].html;

    document.querySelectorAll('nav.main ul a').forEach((a, i) => {
      if(dict[lang].nav[i]) a.textContent = dict[lang].nav[i];
    });
    document.querySelectorAll('.store-nav ul a').forEach((a, i) => {
      if(dict[lang].storeNav[i]) a.textContent = dict[lang].storeNav[i];
    });

    const follow = document.querySelector('.social-bar .lbl');
    if(follow) follow.textContent = dict[lang].follow;

    document.querySelectorAll('footer:not(.store-footer) .fin > div:not(:first-child) b').forEach((b, i) => {
      if(dict[lang].footerHeads[i]) b.textContent = dict[lang].footerHeads[i];
    });

    const tag = document.querySelector('footer .f-tag');
    if(tag) tag.textContent = dict[lang].footerTag;

    const cart = document.querySelector('.store-nav .cart');
    if(cart) cart.textContent = dict[lang].cart;

    const lore = document.querySelector('[data-lore-link]');
    if(lore) lore.textContent = dict[lang].lore;

    document.querySelectorAll('.lang-switcher button').forEach(btn => {
      btn.classList.toggle('on', btn.dataset.lang === lang);
    });
  }

  document.querySelectorAll('.lang-switcher button').forEach(btn => {
    btn.addEventListener('click', () => apply(btn.dataset.lang));
  });

  apply(localStorage.getItem('blacpinc-lang') || 'ko');
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

