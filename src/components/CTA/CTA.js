import './CTA.css';

export default function renderCTA(data) {
  return `
    <section class="cta section" id="daftar">
      <div class="container">
        <div class="cta-card" data-reveal>
          <div class="cta-content">
            <h2 class="cta-title">${data.title}</h2>
            <p class="cta-description">${data.subText}</p>
            <a href="#" class="btn btn-primary cta-btn">${data.buttonText}</a>
          </div>
        </div>
      </div>
    </section>
  `;
}
