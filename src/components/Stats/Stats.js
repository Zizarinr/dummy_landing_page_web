import './Stats.css';

export default function renderStats(data, title) {
  const statsHtml = data.map((stat, idx) => `
    <div class="stat-item" data-reveal style="--i: ${idx}">
      <h3 class="stat-value">${stat.value}</h3>
      <p class="stat-label">${stat.label}</p>
    </div>
  `).join('');

  return `
    <section class="stats section">
      <div class="container">
        <div class="stats-card glass">
          ${title ? `<h2 class="stats-heading" data-reveal>${title}</h2>` : ''}
          <div class="stats-grid">
            ${statsHtml}
          </div>
        </div>
      </div>
    </section>
  `;
}
