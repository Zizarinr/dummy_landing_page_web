import './Hero.css';

export default function renderHero(data) {
  const card = data.floatingCard;
  const floating = card ? `
    <div class="hero-floating-card glass-card" data-reveal style="--i: 3">
      <div class="card-icon" aria-hidden="true">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"></rect>
          <path d="M8 21h8"></path>
          <path d="M12 17v4"></path>
        </svg>
      </div>
      <div class="card-text">
        <strong>${card.value}</strong>
        <span>${card.label}</span>
      </div>
    </div>
  ` : '';

  return `
    <section class="hero section" id="beranda">
      <div class="hero-bg-shapes" aria-hidden="true">
        <div class="shape shape-1"></div>
        <div class="shape shape-2"></div>
      </div>

      <div class="container hero-container">
        <div class="hero-content">
          <p class="hero-eyebrow" data-reveal>${data.eyebrow}</p>
          <h1 class="hero-title" data-reveal style="--i: 1">${data.title}</h1>
          <p class="hero-description" data-reveal style="--i: 2">${data.description}</p>

          <div class="hero-actions" data-reveal style="--i: 3">
            <a href="#tentang" class="btn btn-primary">${data.primaryCta}</a>
            <a href="#" class="btn btn-secondary">${data.secondaryCta}</a>
          </div>
        </div>

        <div class="hero-visual" data-reveal>
          <div class="hero-image-wrapper image-organic">
            <img
              src="${data.image}"
              alt="${data.imageAlt}"
              class="hero-img"
              width="800"
              height="600"
              fetchpriority="high"
              decoding="async"
            />
          </div>
          ${floating}
        </div>
      </div>
    </section>
  `;
}
