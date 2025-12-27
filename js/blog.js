/**
 * Blog Page Functionality
 * Filtering, search, and interactions
 */

class BlogPage {
    constructor() {
        this.filterBtns = document.querySelectorAll('.filter-btn');
        this.blogCards = document.querySelectorAll('.blog-card');
        this.searchInput = document.getElementById('searchBlog');
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupFilterButtons();
        this.setupSearch();
        this.setupCardClicks();
    }

    setupFilterButtons() {
        this.filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                this.currentFilter = btn.dataset.category;
                this.filterArticles();
            });
        });
    }

    filterArticles() {
        this.blogCards.forEach(card => {
            const category = card.dataset.category;
            if (this.currentFilter === 'all' || category === this.currentFilter) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease';
            } else {
                card.style.display = 'none';
            }
        });
    }

    setupSearch() {
        if (!this.searchInput) return;

        this.searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            this.blogCards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
                
                if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                    card.style.display = 'flex';
                    card.style.animation = 'fadeIn 0.3s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    setupCardClicks() {
        this.blogCards.forEach(card => {
            const readMore = card.querySelector('.read-more');
            if (readMore) {
                readMore.addEventListener('click', () => {
                    const title = card.querySelector('h3')?.textContent;
                    console.log(`Navigating to article: ${title}`);
                    // Could redirect to individual article page
                });
            }
        });
    }
}

// Newsletter Form
class NewsletterForm {
    constructor() {
        this.form = document.querySelector('.newsletter-form');
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const email = this.form.querySelector('input[type="email"]').value;
        
        if (email) {
            // Show success message
            const btn = this.form.querySelector('button');
            const originalText = btn.textContent;
            btn.textContent = 'Subscribed! ✓';
            btn.style.background = '#10b981';
            
            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                this.form.reset();
            }, 3000);

            console.log(`Newsletter signup: ${email}`);
        }
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new BlogPage();
    new NewsletterForm();

    // Add fade-in animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});
