/**
 * Evronya Shokry Naguib - Cinematic Project Detail Modal
 * Handles full-screen project presentation, previous/next transitions, and keyboard controls.
 */

let currentProjectId = null;
let currentProjectList = [];

function initProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modalBackdrop) return;

  // Close on backdrop click
  modalBackdrop.addEventListener('click', (e) => {
    if (e.target === modalBackdrop) {
      closeProjectModal();
    }
  });

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', closeProjectModal);
  }

  // Keyboard navigation
  window.addEventListener('keydown', (e) => {
    if (!modalBackdrop.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeProjectModal();
    } else if (e.key === 'ArrowRight') {
      navigateProject(1);
    } else if (e.key === 'ArrowLeft') {
      navigateProject(-1);
    }
  });

  // Modal navigation buttons
  const prevBtn = document.getElementById('modal-prev-btn');
  const nextBtn = document.getElementById('modal-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateProject(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateProject(1));
  }

  // Handle URL hash on load
  handleInitialUrlHash();
}

function openProjectModal(projectId, contextList = null) {
  const project = getProjectById(projectId);
  if (!project) return;

  currentProjectId = project.id;
  currentProjectList = contextList && contextList.length > 0 ? contextList : getAllProjects();

  const modalBackdrop = document.getElementById('project-modal');
  if (!modalBackdrop) return;

  // Populate Category Badge
  const catBadge = document.getElementById('modal-cat-badge');
  if (catBadge) {
    catBadge.textContent = project.category;
    catBadge.className = `cat-badge badge-${project.categorySlug}`;
  }

  // Populate Title & Subcategory
  const titleEl = document.getElementById('modal-title');
  if (titleEl) titleEl.textContent = project.fullTitle || project.title;

  const subCatEl = document.getElementById('modal-subhead');
  if (subCatEl) subCatEl.textContent = project.subCategory || project.category;

  // Populate Hero Artwork
  const heroImg = document.getElementById('modal-hero-img');
  if (heroImg) {
    heroImg.src = project.mainImage;
    heroImg.alt = `${project.title} — Artwork Presentation`;
  }

  // Populate Creative Concept Narrative
  const conceptEl = document.getElementById('modal-concept-text');
  if (conceptEl) {
    conceptEl.textContent = project.concept || project.shortDesc;
  }

  // Populate Role & Responsibilities
  const roleEl = document.getElementById('modal-role-text');
  if (roleEl) {
    roleEl.textContent = project.role || "Lead Visual Designer";
  }

  const respContainer = document.getElementById('modal-responsibilities-list');
  if (respContainer) {
    if (project.responsibilities && project.responsibilities.length > 0) {
      respContainer.innerHTML = project.responsibilities.map(item => `
        <div class="modal-resp-item">
          <i class="fas fa-check-circle"></i>
          <span>${item}</span>
        </div>
      `).join('');
      document.getElementById('modal-resp-section').style.display = 'block';
    } else {
      document.getElementById('modal-resp-section').style.display = 'none';
    }
  }

  // Populate Software / Tools
  const toolsContainer = document.getElementById('modal-tools-list');
  if (toolsContainer) {
    toolsContainer.innerHTML = project.tools.map(tool => `
      <span class="tool-pill"><i class="fas fa-wrench"></i> ${tool}</span>
    `).join('');
  }

  // Populate Design Focus Tags
  const focusContainer = document.getElementById('modal-focus-list');
  if (focusContainer) {
    focusContainer.innerHTML = project.focus.map(tag => `
      <span class="tag-pill">${tag}</span>
    `).join('');
  }

  // Populate Additional Gallery Perspectives
  const gallerySection = document.getElementById('modal-gallery-section');
  const galleryGrid = document.getElementById('modal-gallery-grid');
  if (gallerySection && galleryGrid) {
    if (project.galleryImages && project.galleryImages.length > 1) {
      galleryGrid.innerHTML = project.galleryImages.map((imgUrl, idx) => `
        <div class="modal-gallery-item">
          <img src="${imgUrl}" alt="${project.title} - View ${idx + 1}" loading="lazy" />
        </div>
      `).join('');
      gallerySection.style.display = 'block';
    } else {
      gallerySection.style.display = 'none';
    }
  }

  // Update URL hash without jump
  if (history.pushState) {
    history.pushState(null, null, `#project-${project.id}`);
  }

  // Lock body scroll and show modal
  document.body.style.overflow = 'hidden';
  modalBackdrop.classList.add('active');

  // Scroll modal body to top
  const modalBody = document.querySelector('.project-modal-body');
  if (modalBody) modalBody.scrollTop = 0;
}

function closeProjectModal() {
  const modalBackdrop = document.getElementById('project-modal');
  if (!modalBackdrop) return;

  modalBackdrop.classList.remove('active');
  document.body.style.overflow = '';

  // Remove hash
  if (window.location.hash.startsWith('#project-')) {
    history.pushState(null, null, window.location.pathname + window.location.search);
  }
}

function navigateProject(direction) {
  if (!currentProjectId || !currentProjectList || currentProjectList.length === 0) return;

  const currentIndex = currentProjectList.findIndex(p => p.id === currentProjectId);
  if (currentIndex === -1) return;

  let nextIndex = currentIndex + direction;
  if (nextIndex >= currentProjectList.length) {
    nextIndex = 0; // Wrap to start
  } else if (nextIndex < 0) {
    nextIndex = currentProjectList.length - 1; // Wrap to end
  }

  const nextProject = currentProjectList[nextIndex];
  if (nextProject) {
    openProjectModal(nextProject.id, currentProjectList);
  }
}

function handleInitialUrlHash() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#project-')) {
    const projectId = parseInt(hash.replace('#project-', ''), 10);
    if (!isNaN(projectId)) {
      setTimeout(() => {
        openProjectModal(projectId);
      }, 300);
    }
  }
}
