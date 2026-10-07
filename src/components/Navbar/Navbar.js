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
