import './Navbar.css';

export default function renderNavbar(data) {
  const linksHtml = data.links.map(link => `
    <li><a href="${link.url}">${link.text}</a></li>
  `).join('');

  const mobileLinksHtml = data.links.map(link => `
    <li><a href="${link.url}">${link.text}</a></li>
  `).join('');

  return `
    <nav class="navbar" id="navbar">
      <div class="container navbar-container">
        <a class="navbar-brand" href="#beranda">
          <div class="logo-dummy" aria-hidden="true"></div>
          <div class="brand-text">
            <span class="brand-title">${data.logoText}</span>
            <span class="brand-subtitle">${data.subText}</span>
          </div>
        </a>

        <ul class="navbar-menu desktop-menu">
          ${linksHtml}
        </ul>

        <div class="navbar-actions">
          <button
            class="theme-toggle"
            id="theme-toggle"
            type="button"
            aria-label="Aktifkan mode gelap"
            aria-pressed="false"
          >
            <svg class="icon-moon" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path>
            </svg>
            <svg class="icon-sun" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path>
            </svg>
          </button>
          <a href="#daftar" class="btn btn-primary navbar-cta">${data.ctaText}</a>
          <button
            class="hamburger-menu mobile-only"
            type="button"
            aria-label="Buka menu navigasi"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <div class="mobile-menu" id="mobile-menu" hidden>
        <div class="container mobile-menu-inner">
          <ul class="mobile-menu-list">
            ${mobileLinksHtml}
          </ul>
          <a href="#daftar" class="btn btn-primary mobile-menu-cta">${data.ctaText}</a>
        </div>
      </div>
    </nav>
  `;
}
