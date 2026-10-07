import './Achievements.css';

export default function renderAchievements(data) {
  const itemsHtml = data.items.map((item, idx) => `
    <div class="achievement-card" data-reveal style="--i: ${idx}">
      <div class="achievement-year">${item.year}</div>
      <h3 class="achievement-title">${item.title}</h3>
      <p class="achievement-award">${item.award}</p>
    </div>
  `).join('');

  return `
    <section class="achievements section" id="prestasi">
      <div class="container">
        <h2 class="section-title text-center" data-reveal style="margin-bottom: 48px;">${data.title}</h2>
        <div class="achievements-list">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}
