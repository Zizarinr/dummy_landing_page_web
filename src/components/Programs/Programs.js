import './Programs.css';

export default function renderPrograms(data) {
  const itemsHtml = data.items.map((item, idx) => `
    <div class="program-card" data-reveal style="--i: ${idx}">
      <div class="program-img-wrapper">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="program-img"
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="program-content">
        <h3 class="program-title">${item.title}</h3>
        <p class="program-description">${item.description}</p>
      </div>
    </div>
  `).join('');

  return `
    <section class="programs section" id="akademik">
      <div class="container">
        <div class="programs-header text-center" data-reveal>
          <h2 class="section-title">${data.title}</h2>
        </div>
        <div class="programs-grid">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
