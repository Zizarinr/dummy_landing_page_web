import './Projects.css';

export default function renderProjects(data) {
  const linkText = data.linkText || 'Lihat Detail';

  const itemsHtml = data.items.map((item, idx) => `
    <div class="project-card" data-reveal style="--i: ${idx}">
      <div class="project-img-wrapper">
        <img
          src="${item.image}"
          alt="${item.title}"
          class="project-img"
          width="800"
          height="600"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="project-info">
        <span class="project-category">${item.category}</span>
        <h3 class="project-title">${item.title}</h3>
        <p class="project-description">${item.description}</p>
        <a href="#" class="project-link">${linkText} <span class="arrow" aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
  `).join('');

  return `
    <section class="projects section" id="mahasiswa">
      <div class="container">
        <div class="projects-header" data-reveal>
          <h2 class="section-title">${data.title}</h2>
        </div>
        <!-- DUMMY CONTENT — replace with official student projects -->
        <div class="projects-grid">
          ${itemsHtml}
        </div>
      </div>
    </section>
  `;
}