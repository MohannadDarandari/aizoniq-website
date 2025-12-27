/**
 * Pricing Page Functionality
 * Billing toggle, FAQ, and interactive features
 */

class PricingPage {
    constructor() {
        this.billingToggle = document.getElementById('billingToggle');
        this.faqItems = document.querySelectorAll('.faq-item');
        this.monthlyPrices = {
            starter: 49,
            professional: 149,
            enterprise: null
        };
        this.annualDiscountPercent = 0.2; // 20% discount
        
        this.init();
    }

    init() {
        this.setupBillingToggle();
        this.setupFAQ();
        this.updateLanguageOnChange();
    }

    setupBillingToggle() {
        if (!this.billingToggle) return;

        this.billingToggle.addEventListener('change', () => {
            this.updatePrices();
        });

        // Initialize with current state
        this.updatePrices();
    }

    updatePrices() {
        const isAnnual = this.billingToggle.checked;
        
        // Update Starter
        const starterPrice = document.getElementById('starterPrice');
        if (starterPrice) {
            const price = isAnnual 
                ? Math.round(this.monthlyPrices.starter * 12 * (1 - this.annualDiscountPercent))
                : this.monthlyPrices.starter;
            const period = isAnnual ? '/year' : '/month';
            starterPrice.innerHTML = `
                <span class="currency">$</span>
                <span class="amount">${price}</span>
                <span class="period">${period}</span>
            `;
        }

        // Update Professional
        const professionalPrice = document.getElementById('professionalPrice');
        if (professionalPrice) {
            const price = isAnnual 
                ? Math.round(this.monthlyPrices.professional * 12 * (1 - this.annualDiscountPercent))
                : this.monthlyPrices.professional;
            const period = isAnnual ? '/year' : '/month';
            professionalPrice.innerHTML = `
                <span class="currency">$</span>
                <span class="amount">${price}</span>
                <span class="period">${period}</span>
            `;
        }

        // Show discount badge if annual
        const cards = document.querySelectorAll('.pricing-card:not(.enterprise)');
        cards.forEach(card => {
            const badge = card.querySelector('.discount-badge');
            if (isAnnual) {
                if (!badge) {
                    const newBadge = document.createElement('div');
                    newBadge.className = 'discount-badge';
                    newBadge.innerHTML = `Save 20%`;
                    card.style.position = 'relative';
                    card.appendChild(newBadge);
                }
            } else {
                if (badge) badge.remove();
            }
        });
    }

    setupFAQ() {
        this.faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                this.toggleFAQ(item);
            });
        });
    }

    toggleFAQ(item) {
        // Close other open items
        this.faqItems.forEach(i => {
            if (i !== item && i.classList.contains('active')) {
                i.classList.remove('active');
            }
        });

        // Toggle current item
        item.classList.toggle('active');
    }

    updateLanguageOnChange() {
        // Listen for language changes and update pricing display
        window.addEventListener('languageChanged', () => {
            this.updatePrices();
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PricingPage();

    // Button click handlers
    const getStartedBtns = document.querySelectorAll('.btn');
    getStartedBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const planName = this.closest('.pricing-card')?.querySelector('h3');
            if (planName) {
                const message = `I'm interested in the ${planName.textContent} plan`;
                console.log(message);
                // Could redirect to contact form or sign-up page
            }
        });
    });
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
