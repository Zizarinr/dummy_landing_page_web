import './StudentLife.css';

export default function renderStudentLife(data) {
  const activitiesHtml = data.activities.map(act => `
    <li class="activity-item">
      <span class="activity-bullet" aria-hidden="true"></span>
      ${act}
    </li>
  `).join('');

  const smallImagesHtml = data.imagesSmall.map((img, idx) => `
    <div class="life-img-small image-organic" data-reveal style="--i: ${idx + 1}">
      <img
        src="${img}"
        alt="${(data.imagesSmallAlt && data.imagesSmallAlt[idx]) || 'Placeholder kegiatan mahasiswa'}"
        width="800"
        height="600"
        loading="lazy"
        decoding="async"
      />
    </div>
  `).join('');

  return `
    <section class="student-life section">
      <div class="container">
        <div class="life-grid">
          <div class="life-content" data-reveal>
            <h2 class="section-title">${data.title}</h2>
            <p class="section-description">${data.description}</p>
            <ul class="activities-list">
              ${activitiesHtml}
            </ul>
          </div>

          <div class="life-gallery">
            <div class="life-img-main image-organic" data-reveal>
              <img
                src="${data.imageMain}"
                alt="${data.imageMainAlt}"
                width="800"
                height="600"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="life-img-small-group">
              ${smallImagesHtml}
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
