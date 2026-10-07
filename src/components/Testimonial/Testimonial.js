import './Testimonial.css';

export default function renderTestimonial(data) {
  return `
    <section class="testimonial section">
      <div class="container">
        <div class="testimonial-card" data-reveal>
          <div class="quote-icon" aria-hidden="true">
            <svg width="72" height="56" viewBox="0 0 72 56" fill="currentColor" aria-hidden="true">
              <path d="M0 56V32.4C0 14.6 10.4 3.1 28.8 0l3.6 7.9C22.3 11.3 17.3 17.6 16.6 26.4H30V56H0zm40 0V32.4C40 14.6 50.4 3.1 68.8 0l3.2 7.9C62.3 11.3 57.3 17.6 56.6 26.4H70V56H40z"/>
            </svg>
          </div>
          <blockquote class="testimonial-quote">${data.quote}</blockquote>
          <div class="testimonial-author">
            <div class="author-img-wrapper">
              <img
                src="${data.image}"
                alt="Foto placeholder ${data.name}"
                class="author-img"
                width="64"
                height="64"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="author-info">
              <p class="author-name">${data.name}</p>
              <span class="author-role">${data.role}</span>
              <!-- DUMMY CONTENT — placeholder, bukan testimoni nyata -->
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
