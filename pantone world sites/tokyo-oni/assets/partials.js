// Shared header / footer injection for all pages
// Usage: include <script src="assets/partials.js" defer></script> then call renderChrome(activePage)

function renderHeader(active) {
  const items = [
    { id: 'home', label: 'HOME', jp: 'ホーム', href: 'index.html' },
    { id: 'roster', label: 'ROSTER', jp: '選手', href: 'roster.html' },
    { id: 'schedule', label: 'SCHEDULE', jp: '試合', href: 'schedule.html' },
    { id: 'standings', label: 'STANDINGS', jp: '順位', href: 'standings.html' },
    { id: 'news', label: 'NEWS', jp: 'ニュース', href: 'news.html' },
    { id: 'arena', label: 'ARENA', jp: 'アリーナ', href: 'arena.html' },
    { id: 'about', label: 'ABOUT', jp: 'クラブ', href: 'about.html' },
    { id: 'shop', label: 'SHOP', jp: 'ショップ', href: 'shop.html' },
  ];
  return `
  <header class="site-header">
    <div class="top-strip">
      <div>
        <span class="live-dot"></span>
        FISB T1 · SEASON 2026 · 8-4 · #2 IN T1
      </div>
      <div class="lang-switch">
        <button class="active">EN</button>
        <button>日本語</button>
        <button>УКР</button>
      </div>
    </div>
    <div class="nav">
      <a href="index.html" class="brand">
        <img src="assets/logo.png" alt="Tokyo Oni">
        <div class="brand-name">
          <div class="brand-kanji">東京鬼</div>
          <div class="brand-en">TOKYO ONI</div>
        </div>
      </a>
      <ul>
        ${items.map(i => `<li><a href="${i.href}" class="${i.id === active ? 'active' : ''}">${i.label}</a></li>`).join('')}
      </ul>
      <div class="nav-cta">
        <a class="btn btn-ghost" href="tickets.html">TICKETS</a>
        <a class="btn btn-primary" href="schedule.html">NEXT MATCH ›</a>
      </div>
    </div>
  </header>
  `;
}

function renderFooter() {
  return `
  <footer class="site-footer">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="assets/logo.png" alt="Tokyo Oni">
        <div class="motto">一つ鬼、勝つ</div>
        <p>Tokyo Oni Athletic Club · Established August 14, 2022 · FISB T1 Asia-Pacific Division.</p>
      </div>
      <div>
        <h5>CLUB</h5>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="roster.html">Roster</a></li>
          <li><a href="arena.html">Tokyo Arena</a></li>
          <li><a href="news.html">News</a></li>
        </ul>
      </div>
      <div>
        <h5>FANS</h5>
        <ul>
          <li><a href="tickets.html">Tickets</a></li>
          <li><a href="shop.html">Official Shop</a></li>
          <li><a href="schedule.html">Schedule</a></li>
          <li><a href="standings.html">Standings</a></li>
        </ul>
      </div>
      <div>
        <h5>LEAGUE</h5>
        <ul>
          <li><a href="#">FISB.org</a></li>
          <li><a href="#">Rules &amp; Spectrum</a></li>
          <li><a href="#">PMS Certification</a></li>
          <li><a href="#">Broadcast</a></li>
        </ul>
      </div>
      <div>
        <h5>FOLLOW</h5>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">X / Twitter</a></li>
          <li><a href="#">YouTube</a></li>
          <li><a href="#">TikTok</a></li>
        </ul>
      </div>
    </div>
    <div class="sponsors">
      <span class="label">OFFICIAL PARTNERS</span>
      <div class="logos">
        <span class="logo-ph">PANASONIC</span>
        <span class="logo-ph">MIZUNO</span>
        <span class="logo-ph">KIRIN</span>
        <span class="logo-ph">RAKUTEN</span>
        <span class="logo-ph">YAMAHA</span>
        <span class="logo-ph">DAIHATSU</span>
      </div>
    </div>
    <div class="copyright">
      <span>© 2026 TOKYO ONI ATHLETIC CLUB · ALL RIGHTS RESERVED</span>
      <span>TOKYO, JAPAN · 東京</span>
    </div>
  </footer>
  `;
}

function renderChrome(active) {
  document.getElementById('site-header').outerHTML = renderHeader(active);
  document.getElementById('site-footer').outerHTML = renderFooter();
}

// Auto-run if page sets window.__activePage
document.addEventListener('DOMContentLoaded', () => {
  if (window.__activePage) renderChrome(window.__activePage);
});
