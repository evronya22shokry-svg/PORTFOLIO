/**
 * Evronya Shokry  - Main Application Controller
 * Handles project card rendering, filtering, scroll spy, animations, mobile menu, and contact form.
 */

let activeCategory = 'all';

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initPortfolio();
  initProjectModal();
  initContactForm();
  initScrollSpy();
  initScrollReveal();
  initScrollTop();
});

/* --------------------------------------------------------------------------
   1. Navbar & Header Scroll Behavior
   -------------------------------------------------------------------------- */
function initNavbar() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Menu
   -------------------------------------------------------------------------- */
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const overlay = document.getElementById('mobile-nav-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !overlay) return;

  const toggleMenu = () => {
    const isOpen = hamburger.classList.toggle('open');
    overlay.classList.toggle('open');
    document.body.style.overflow = isOpen ? 'hidden' : '';
  };

  hamburger.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* --------------------------------------------------------------------------
   3. Portfolio Filtering & Card Rendering
   -------------------------------------------------------------------------- */
function initPortfolio() {
  renderFilterCounts();
  renderProjectCards('all');

  const filterButtons = document.querySelectorAll('.filter-btn');
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      if (filter === activeCategory) return;

      activeCategory = filter;
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      renderProjectCards(filter);
    });
  });
}

function renderFilterCounts() {
  const allCount = getAllProjects().length;
  const featuredCount = getFeaturedProjects().length;
  const postersCount = getProjectsByCategory('posters').length;
  const packagingCount = getProjectsByCategory('packaging').length;
  const conceptCount = getProjectsByCategory('concept-art').length;
  const commercialCount = getProjectsByCategory('commercial-ads').length;

  setCountText('count-all', allCount);
  setCountText('count-featured', featuredCount);
  setCountText('count-posters', postersCount);
  setCountText('count-packaging', packagingCount);
  setCountText('count-concept-art', conceptCount);
  setCountText('count-commercial-ads', commercialCount);
}

function setCountText(elementId, count) {
  const el = document.getElementById(elementId);
  if (el) el.textContent = count;
}

function renderProjectCards(categorySlug) {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const projects = getProjectsByCategory(categorySlug);

  if (projects.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 4rem; color: var(--text-secondary);">
        <p>No projects found in this category.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = projects.map(p => `
    <article class="project-card reveal active" data-id="${p.id}" onclick="openProjectModal(${p.id})">
      <div class="project-media-wrapper">
        <span class="cat-badge badge-${p.categorySlug} project-media-badge">${p.category}</span>
        ${p.featured ? '<span class="project-featured-flag"><i class="fas fa-star"></i> Featured</span>' : ''}
        <img class="project-card-img" src="${p.mainImage}" alt="${p.title}" loading="lazy" />
        <div class="project-media-overlay">
          <span class="btn-link" style="color: #ffffff; font-size: 0.85rem;">Explore Full Project <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
      <div class="project-card-content">
        <h3 class="project-card-title">${p.title}</h3>
        <p class="project-card-desc">${p.shortDesc}</p>
        <div class="project-card-footer">
          <div class="project-card-tags">
            ${p.focus.slice(0, 2).map(f => `<span class="tag-pill">${f}</span>`).join('')}
          </div>
          <span class="project-card-action">View Project <i class="fas fa-arrow-right"></i></span>
        </div>
      </div>
    </article>
  `).join('');
}

/* --------------------------------------------------------------------------
   4. Scroll Spy for Active Navigation Indicator
   -------------------------------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');

        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });

        mobileLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-20% 0px -60% 0px'
  });

  sections.forEach(section => observer.observe(section));
}

/* --------------------------------------------------------------------------
   5. Scroll Reveal Observer
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. Contact Form Submission & Toast Alert
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const messageInput = document.getElementById('contact-message');
    const submitBtn = form.querySelector('button[type="submit"]');

    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    if (!name || !email || !message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }

    // Disable button during simulated dispatch
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending Message...';
    }

    setTimeout(() => {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
      }
      form.reset();
      showToast(`Thank you, ${name}! Your message has been prepared for Evronya.`, 'success');
    }, 900);
  });
}

function showToast(message, type = 'success') {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'success'
    ? '<i class="fas fa-check-circle toast-icon-success"></i>'
    : '<i class="fas fa-exclamation-circle" style="color: #ef4444;"></i>';

  toast.innerHTML = `
    ${icon}
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Trigger animation
  requestAnimationFrame(() => {
    toast.classList.add('active');
  });

  setTimeout(() => {
    toast.classList.remove('active');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

/* --------------------------------------------------------------------------
   7. Scroll To Top Utility
   -------------------------------------------------------------------------- */
function initScrollTop() {
  const scrollTopBtn = document.getElementById('scroll-top-btn');
  if (!scrollTopBtn) return;

  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
