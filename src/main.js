import { siteContent } from './data/content.js';

import renderNavbar from './components/Navbar/Navbar.js';
import renderHero from './components/Hero/Hero.js';
import renderStats from './components/Stats/Stats.js';
import renderFeatures from './components/Features/Features.js';
import renderPrograms from './components/Programs/Programs.js';
import renderProjects from './components/Projects/Projects.js';
import renderStudentLife from './components/StudentLife/StudentLife.js';
import renderAchievements from './components/Achievements/Achievements.js';
import renderTestimonial from './components/Testimonial/Testimonial.js';
import renderCTA from './components/CTA/CTA.js';
import renderFooter from './components/Footer/Footer.js';

function init() {
  const app = document.getElementById('app');

  const container = document.createElement('div');
  container.className = 'app-container';

  container.innerHTML = `
    ${renderNavbar(siteContent.navbar)}
    <main id="konten-utama">
      ${renderHero(siteContent.hero)}
      ${renderStats(siteContent.stats, siteContent.statsTitle)}
      ${renderFeatures(siteContent.whyInformatics)}
      ${renderPrograms(siteContent.programs)}
      ${renderProjects(siteContent.studentProjects)}
      ${renderStudentLife(siteContent.studentLife)}
      ${renderAchievements(siteContent.achievements)}
      ${renderTestimonial(siteContent.testimonial)}
      ${renderCTA(siteContent.cta)}
    </main>
    ${renderFooter(siteContent.footer)}
  `;

  app.appendChild(container);

  initNavbar();
  initSmoothAnchors();
  initReveal();
}

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.hamburger-menu');
  const mobileMenu = document.getElementById('mobile-menu');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  if (!toggle || !mobileMenu) return;

  const setOpen = (open) => {
    navbar.classList.toggle('menu-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    if (open) {
      mobileMenu.removeAttribute('hidden');
    } else {
      mobileMenu.setAttribute('hidden', '');
    }
  };

  toggle.addEventListener('click', () => {
    setOpen(!navbar.classList.contains('menu-open'));
  });

  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navbar.classList.contains('menu-open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && navbar.classList.contains('menu-open')) {
      setOpen(false);
    }
  });
}

function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (event) => {
      const id = link.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      target.setAttribute('tabindex', '-1');
      target.focus({ preventScroll: true });
    });
  });
}

function initReveal() {
  const targets = document.querySelectorAll('[data-reveal]');
  if (!targets.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion || !('IntersectionObserver' in window)) return;

  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const el = entry.target;
      observer.unobserve(el);
      el.classList.add('is-visible');

      // Lepas class setelah animasi selesai agar hover transition komponen
      // kembali memakai definisinya sendiri.
      const step = parseInt(el.style.getPropertyValue('--i'), 10) || 0;
      window.setTimeout(() => {
        el.classList.remove('reveal', 'is-visible');
      }, 550 + step * 80);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', init);
