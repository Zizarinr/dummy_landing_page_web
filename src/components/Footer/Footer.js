import './Footer.css';

const SOCIAL_ICONS = {
  instagram: `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5"></rect>
      <circle cx="12" cy="12" r="4"></circle>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"></circle>
    </svg>`,
  youtube: `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="5" width="20" height="14" rx="4"></rect>
      <path d="M10 9l5 3-5 3V9z" fill="currentColor" stroke="none"></path>
    </svg>`,
  linkedin: `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="4"></rect>
      <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4"></path>
    </svg>`,
  github: `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.7A5.2 5.2 0 0 0 19.9 5a4.9 4.9 0 0 0-.1-3.6s-1.1-.3-3.7 1.4a12.7 12.7 0 0 0-6.6 0C6.9 1.1 5.8 1.4 5.8 1.4A4.9 4.9 0 0 0 5.7 5a5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7a3.4 3.4 0 0 0-.9 2.6V22"></path>
    </svg>`
};

export default function renderFooter(data) {
  const linksHtml = data.quickLinks.map(link => `
    <li><a href="${link.url}">${link.text}</a></li>
  `).join('');

  const socialsHtml = (data.socials || []).map(social => `
    <li>
      <a href="${social.url}" class="footer-social" aria-label="${social.name}">
        ${SOCIAL_ICONS[social.icon] || ''}
      </a>
    </li>
  `).join('');

  return `
    <footer class="footer" id="kontak">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand" data-reveal>
            <div class="footer-logo">
              <div class="logo-dummy" aria-hidden="true"></div>
              <div>
                <h2 class="footer-title">${data.title}</h2>
                <span class="footer-univ">${data.university}</span>
              </div>
            </div>
            <p class="footer-tagline">${data.tagline}</p>
            ${socialsHtml ? `<ul class="footer-socials">${socialsHtml}</ul>` : ''}
          </div>

          <div class="footer-links" data-reveal style="--i: 1">
            <h3 class="footer-heading">Quick Links</h3>
            <ul>
              ${linksHtml}
            </ul>
          </div>

          <div class="footer-contact" data-reveal style="--i: 2">
            <h3 class="footer-heading">Kontak</h3>
            <ul>
              <li>${data.email}</li>
              <li>${data.phone}</li>
              <li>${data.address}</li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>${data.copyright}</p>
        </div>
      </div>
    </footer>
  `;
}
