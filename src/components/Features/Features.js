import './Features.css';

const ICONS = {
  code: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>`,
  ai: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="4"></rect>
      <path d="M9 9h.01M15 9h.01M9 15h6"></path>
      <path d="M12 1v3M12 20v3M1 12h3M20 12h3"></path>
    </svg>`,
  shield: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <path d="M9 12l2 2 4-4"></path>
    </svg>`,
  data: `
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M3 3v18h18"></path>
      <path d="M7 15l4-5 3 3 5-7"></path>
    </svg>`
};

export default function renderFeatures(data) {
  const featuresHtml = data.features.map((feature, idx) => `
    <div class="feature-card" data-reveal style="--i: ${idx}">
      <div class="feature-icon">${ICONS[feature.icon] || ICONS.code}</div>
      <h3 class="feature-title">${feature.title}</h3>
    </div>
  `).join('');

  return `
    <section class="features section" id="tentang">
      <div class="container">
        <div class="features-grid">
          <div class="features-content" data-reveal>
            <h2 class="section-title">${data.title}</h2>
            <p class="section-description">${data.description}</p>
          </div>
          <div class="features-list">
            ${featuresHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
