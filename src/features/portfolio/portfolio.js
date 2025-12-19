/**
 * Portfolio Feature
 * Handle portfolio/case studies functionality
 */

import { portfolioData } from '../../api/services/index.js';

export class PortfolioFeature {
  constructor() {
    this.items = [];
    this.filteredItems = [];
    this.currentFilter = 'all';
    this.init();
  }

  /**
   * Initialize portfolio feature
   */
  async init() {
    const portfolioContainer = document.querySelector('[data-portfolio-container]');
    
    if (!portfolioContainer) return;

    try {
      this.items = await portfolioData.getAll();
      this.filteredItems = this.items;
      
      this.attachFilterEvents();
      this.render();
    } catch (error) {
      console.error('Portfolio load error:', error);
      this.renderFallback();
    }
  }

  /**
   * Attach filter button events
   */
  attachFilterEvents() {
    const filterButtons = document.querySelectorAll('[data-portfolio-filter]');
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const filter = e.target.dataset.portfolioFilter;
        this.setFilter(filter);
      });
    });
  }

  /**
   * Set active filter
   */
  setFilter(filter) {
    this.currentFilter = filter;
    
    // Update active button
    document.querySelectorAll('[data-portfolio-filter]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.portfolioFilter === filter);
    });

    // Filter items
    if (filter === 'all') {
      this.filteredItems = this.items;
    } else {
      this.filteredItems = this.items.filter(item => 
        item.category === filter
      );
    }

    this.render();
  }

  /**
   * Render portfolio items
   */
  render() {
    const container = document.querySelector('[data-portfolio-container]');
    if (!container) return;

    const html = this.filteredItems.map(item => `
      <div class="portfolio-item" data-category="${item.category}">
        <div class="portfolio-image">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          <div class="portfolio-overlay">
            <button class="portfolio-view" data-portfolio-id="${item.id}">View Project</button>
          </div>
        </div>
        <div class="portfolio-info">
          <h3>${item.title}</h3>
          <p class="portfolio-category">${item.category}</p>
        </div>
      </div>
    `).join('');

    container.innerHTML = html;

    // Attach modal events
    this.attachModalEvents();
  }

  /**
   * Attach modal events
   */
  attachModalEvents() {
    document.querySelectorAll('[data-portfolio-id]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.target.dataset.portfolioId;
        const item = this.items.find(i => i.id === id);
        if (item) {
          this.showModal(item);
        }
      });
    });
  }

  /**
   * Show project modal
   */
  showModal(item) {
    const modal = document.createElement('div');
    modal.className = 'portfolio-modal';
    modal.innerHTML = `
      <div class="modal-content">
        <button class="modal-close">×</button>
        <img src="${item.image}" alt="${item.title}" class="modal-image">
        <div class="modal-info">
          <h2>${item.title}</h2>
          <p class="modal-category">${item.category}</p>
          <p class="modal-description">${item.description}</p>
          ${item.link ? `<a href="${item.link}" class="btn-primary" target="_blank">View Live</a>` : ''}
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Close modal events
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.remove();
    });
  }

  /**
   * Render fallback content
   */
  renderFallback() {
    const container = document.querySelector('[data-portfolio-container]');
    if (!container) return;

    container.innerHTML = `
      <div class="error-message">
        <p>Unable to load portfolio. Please try again later.</p>
      </div>
    `;
  }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const portfolioContainer = document.querySelector('[data-portfolio-container]');
  if (portfolioContainer) {
    new PortfolioFeature();
  }
});
