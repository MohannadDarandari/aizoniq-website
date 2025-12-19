/**
 * Blog Feature
 * Handle blog/article functionality
 */

import { blogData } from '../../api/services/index.js';
import { formatDate, truncate, debounce } from '../../utils/helpers.js';

export class BlogFeature {
  constructor() {
    this.articles = [];
    this.filteredArticles = [];
    this.currentSearch = '';
    this.currentCategory = 'all';
    this.itemsPerPage = 10;
    this.currentPage = 1;
    this.init();
  }

  /**
   * Initialize blog feature
   */
  async init() {
    const blogContainer = document.querySelector('[data-blog-container]');
    
    if (!blogContainer) return;

    try {
      this.articles = await blogData.getAll();
      this.filteredArticles = this.articles;
      
      this.attachSearchEvent();
      this.attachFilterEvents();
      this.attachPaginationEvents();
      this.render();
    } catch (error) {
      console.error('Blog load error:', error);
      this.renderFallback();
    }
  }

  /**
   * Attach search event
   */
  attachSearchEvent() {
    const searchInput = document.querySelector('[data-blog-search]');
    
    if (searchInput) {
      searchInput.addEventListener('input', debounce((e) => {
        this.currentSearch = e.target.value.toLowerCase();
        this.currentPage = 1;
        this.applyFilters();
        this.render();
      }, 300));
    }
  }

  /**
   * Attach category filter events
   */
  attachFilterEvents() {
    const filterButtons = document.querySelectorAll('[data-blog-category]');
    
    filterButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentCategory = e.target.dataset.blogCategory;
        this.currentPage = 1;
        
        // Update active button
        filterButtons.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        this.applyFilters();
        this.render();
      });
    });
  }

  /**
   * Apply filters and search
   */
  applyFilters() {
    this.filteredArticles = this.articles.filter(article => {
      const matchesSearch = article.title.toLowerCase().includes(this.currentSearch) ||
                           article.excerpt.toLowerCase().includes(this.currentSearch) ||
                           (article.author && article.author.toLowerCase().includes(this.currentSearch));
      
      const matchesCategory = this.currentCategory === 'all' || article.category === this.currentCategory;
      
      return matchesSearch && matchesCategory;
    });
  }

  /**
   * Render blog articles
   */
  render() {
    const container = document.querySelector('[data-blog-container]');
    if (!container) return;

    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    const paginated = this.filteredArticles.slice(start, end);

    const html = paginated.map(article => `
      <article class="blog-post" data-article-id="${article.id}">
        ${article.image ? `<img src="${article.image}" alt="${article.title}" class="blog-image" loading="lazy">` : ''}
        <div class="blog-meta">
          <span class="blog-date">${formatDate(article.date)}</span>
          <span class="blog-category">${article.category}</span>
          ${article.author ? `<span class="blog-author">By ${article.author}</span>` : ''}
        </div>
        <h3><a href="#article-${article.id}">${article.title}</a></h3>
        <p class="blog-excerpt">${truncate(article.excerpt, 200)}</p>
        <a href="#article-${article.id}" class="read-more">Read More →</a>
      </article>
    `).join('');

    container.innerHTML = html || '<p class="no-results">No articles found.</p>';

    this.renderPagination();
  }

  /**
   * Render pagination
   */
  renderPagination() {
    const paginationContainer = document.querySelector('[data-blog-pagination]');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(this.filteredArticles.length / this.itemsPerPage);

    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    const html = Array.from({ length: totalPages }, (_, i) => i + 1)
      .map(page => `
        <button 
          class="pagination-btn ${page === this.currentPage ? 'active' : ''}"
          data-page="${page}"
        >
          ${page}
        </button>
      `).join('');

    paginationContainer.innerHTML = html;
    this.attachPaginationEvents();
  }

  /**
   * Attach pagination button events
   */
  attachPaginationEvents() {
    const buttons = document.querySelectorAll('[data-page]');
    buttons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        this.currentPage = parseInt(e.target.dataset.page);
        this.render();
        
        // Scroll to blog section
        const blogSection = document.querySelector('[data-blog-container]');
        if (blogSection) {
          blogSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  /**
   * Render fallback content
   */
  renderFallback() {
    const container = document.querySelector('[data-blog-container]');
    if (!container) return;

    container.innerHTML = `
      <div class="error-message">
        <p>Unable to load articles. Please try again later.</p>
      </div>
    `;
  }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const blogContainer = document.querySelector('[data-blog-container]');
  if (blogContainer) {
    new BlogFeature();
  }
});
