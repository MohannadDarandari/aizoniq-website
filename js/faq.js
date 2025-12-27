/**
 * FAQ Page JavaScript
 * Handles category filtering, search, and expand/collapse functionality
 */

class FAQSystem {
    constructor() {
        this.initElements();
        this.setupEventListeners();
        this.setupSearch();
    }

    initElements() {
        // Search elements
        this.searchInput = document.getElementById('faq-search');
        this.searchBtn = document.getElementById('search-btn');

        // Category elements
        this.tabBtns = document.querySelectorAll('.tab-btn');
        this.faqCategories = document.querySelectorAll('.faq-category');

        // FAQ items
        this.faqItems = document.querySelectorAll('.faq-item');
    }

    setupEventListeners() {
        // Category tab switching
        this.tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => this.switchCategory(e));
        });

        // FAQ item expand/collapse
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', (e) => this.toggleItem(e));
        });

        // Search button
        if (this.searchBtn) {
            this.searchBtn.addEventListener('click', () => this.performSearch());
        }

        // Enter key in search
        if (this.searchInput) {
            this.searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.performSearch();
            });
        }
    }

    switchCategory(e) {
        const selectedCategory = e.target.dataset.category;

        // Update active tab
        this.tabBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        // Update active category
        this.faqCategories.forEach(cat => {
            if (cat.dataset.category === selectedCategory) {
                cat.classList.add('active');
            } else {
                cat.classList.remove('active');
            }
        });

        // Close all items in other categories
        this.faqItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    toggleItem(e) {
        const faqItem = e.currentTarget.closest('.faq-item');
        
        // Close other items in the same category
        const category = faqItem.closest('.faq-category');
        category.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });

        // Toggle current item
        faqItem.classList.toggle('active');
    }

    performSearch() {
        const searchTerm = this.searchInput.value.toLowerCase().trim();

        if (!searchTerm) {
            // If search is empty, show the first category
            this.showCategory('general');
            return;
        }

        // Show all categories
        this.faqCategories.forEach(cat => cat.classList.add('active'));

        // Search through all items
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question').textContent.toLowerCase();
            const answer = item.querySelector('.faq-answer').textContent.toLowerCase();

            if (question.includes(searchTerm) || answer.includes(searchTerm)) {
                item.style.display = 'block';
                // Highlight matching items
                item.classList.add('search-match');
            } else {
                item.style.display = 'none';
                item.classList.remove('search-match');
            }
        });

        // Show notification if no results
        this.showSearchResults();
    }

    showSearchResults() {
        const visibleItems = Array.from(this.faqItems).filter(
            item => item.style.display !== 'none'
        );

        if (visibleItems.length === 0) {
            alert(i18n.get('faq.noResults'));
        }
    }

    showCategory(categoryName) {
        // Reset search
        this.searchInput.value = '';

        // Update tabs
        this.tabBtns.forEach(btn => {
            if (btn.dataset.category === categoryName) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update categories
        this.faqCategories.forEach(cat => {
            if (cat.dataset.category === categoryName) {
                cat.classList.add('active');
            } else {
                cat.classList.remove('active');
            }
        });

        // Show all items in selected category
        this.faqItems.forEach(item => {
            if (item.closest('.faq-category').dataset.category === categoryName) {
                item.style.display = 'block';
            }
        });

        // Close all expanded items
        this.faqItems.forEach(item => {
            item.classList.remove('active');
        });
    }

    // Keyboard navigation
    setupKeyboardNav() {
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                this.navigateItems(e.key === 'ArrowDown');
            }
        });
    }

    navigateItems(isDown) {
        const activeItem = document.querySelector('.faq-item.active');
        const items = Array.from(this.faqItems);

        if (!activeItem) {
            if (items.length > 0) items[0].classList.add('active');
            return;
        }

        const currentIndex = items.indexOf(activeItem);
        let nextIndex = isDown ? currentIndex + 1 : currentIndex - 1;

        if (nextIndex >= items.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = items.length - 1;

        activeItem.classList.remove('active');
        items[nextIndex].classList.add('active');
        items[nextIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const faqSystem = new FAQSystem();
    faqSystem.setupKeyboardNav();
});
