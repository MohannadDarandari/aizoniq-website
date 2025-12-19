/**
 * Main Application Entry Point
 * Initializes all components, features, and utilities
 */

// ============================================
// 1. IMPORT i18n & THEME SYSTEMS
// ============================================
import { i18n } from './i18n/i18n.js';
import { themeManager } from './theme/theme.js';
import { ThemeSwitcher } from './components/theme-switcher/theme-switcher.js';

// ============================================
// 2. IMPORT COMPONENTS
// ============================================
import { ChatbotWidget } from './components/chatbot/chatbot.js';
import { ContactForm, NewsletterForm, PaymentForm } from './components/forms/forms.js';

// ============================================
// 3. IMPORT FEATURES
// ============================================
import { AnalyticsTracker } from './features/analytics/tracker.js';
import { PortfolioFeature } from './features/portfolio/portfolio.js';
import { BlogFeature } from './features/blog/blog.js';

// ============================================
// 4. IMPORT UTILITIES
// ============================================
import { scrollToElement, debounce, isInViewport } from './utils/helpers.js';
import CONFIG from './config/config.js';

// ============================================
// 5. APPLICATION STATE
// ============================================
const app = {
  initialized: false,
  components: {},
  features: {},
  
  /**
   * Initialize all components and features
   */
  init() {
    if (this.initialized) return;
    
    console.log('🚀 Initializing Aizoniq Application...');
    
    // Initialize i18n and theme first
    this.setupInternationalization();
    this.setupThemeSystem();
    
    this.setupNavigation();
    this.setupSmoothScroll();
    this.setupIntersectionObserver();
    this.setupComponents();
    this.setupFeatures();
    
    this.initialized = true;
    console.log('✅ Application initialized successfully');
  },

  /**
   * Setup internationalization (i18n)
   */
  setupInternationalization() {
    console.log('🌍 Setting up internationalization...');
    console.log(`📝 Current language: ${i18n.currentLanguage}`);
    
    // Update document language
    document.documentElement.lang = i18n.currentLanguage;
    document.documentElement.dir = i18n.isRTL() ? 'rtl' : 'ltr';
  },

  /**
   * Setup theme system
   */
  setupThemeSystem() {
    console.log('🎨 Setting up theme system...');
    console.log(`🌙 Current theme: ${themeManager.getEffectiveTheme()}`);
    
    // Initialize theme switcher in header
    new ThemeSwitcher('header');
  },

  /**
   * Setup main navigation
   */
  setupNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav ul');
    
    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
      });

      // Close menu on link click
      document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
          navMenu.classList.remove('active');
        });
      });
    }

    // Highlight active nav item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (href === '/' && currentPage === '')) {
        link.parentElement.classList.add('active');
      }
    });
  },

  /**
   * Setup smooth scroll behavior
   */
  setupSmoothScroll() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href !== '#') {
          e.preventDefault();
          scrollToElement(href, 80); // 80px offset for fixed nav
        }
      });
    });

    // Detect scroll position for navigation
    let ticking = false;
    window.addEventListener('scroll', debounce(() => {
      // Add classes based on scroll position
      const scrollPos = window.scrollY;
      const nav = document.querySelector('nav');
      
      if (scrollPos > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    }, 10), { passive: true });
  },

  /**
   * Setup Intersection Observer for animations
   */
  setupIntersectionObserver() {
    const options = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach(el => {
      observer.observe(el);
    });
  },

  /**
   * Setup all components
   */
  setupComponents() {
    console.log('📦 Initializing components...');

    // Chatbot widget
    if (document.querySelector('#chatbot-widget')) {
      this.components.chatbot = new ChatbotWidget('#chatbot-widget');
      console.log('  ✓ Chatbot initialized');
    }

    // Contact form
    if (document.querySelector('#contactForm')) {
      this.components.contactForm = new ContactForm('#contactForm');
      console.log('  ✓ Contact form initialized');
    }

    // Newsletter forms
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    if (newsletterForms.length > 0) {
      this.components.newsletterForm = new NewsletterForm();
      console.log(`  ✓ Newsletter forms initialized (${newsletterForms.length} forms)`);
    }

    // Payment form
    if (document.querySelector('#paymentForm')) {
      this.components.paymentForm = new PaymentForm('#paymentForm');
      console.log('  ✓ Payment form initialized');
    }
  },

  /**
   * Setup all features
   */
  setupFeatures() {
    console.log('🎨 Initializing features...');

    // Analytics
    this.features.analytics = new AnalyticsTracker();
    console.log('  ✓ Analytics initialized');

    // Portfolio
    if (document.querySelector('[data-portfolio-container]')) {
      this.features.portfolio = new PortfolioFeature();
      console.log('  ✓ Portfolio feature initialized');
    }

    // Blog
    if (document.querySelector('[data-blog-container]')) {
      this.features.blog = new BlogFeature();
      console.log('  ✓ Blog feature initialized');
    }
  }
};

// ============================================
// 5. GLOBAL UTILITIES
// ============================================

/**
 * Scroll to top button
 */
function setupScrollToTop() {
  let scrollToTopBtn = document.querySelector('.scroll-to-top');
  
  if (!scrollToTopBtn) {
    scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
    scrollToTopBtn.innerHTML = '↑';
    document.body.appendChild(scrollToTopBtn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });

  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/**
 * Setup keyboard shortcuts
 */
function setupKeyboardShortcuts() {
  document.addEventListener('keydown', (e) => {
    // Ctrl+K or Cmd+K to focus chatbot
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      const chatToggle = document.querySelector('.chatbot-toggle');
      chatToggle?.click();
    }

    // Escape to close modal or chat
    if (e.key === 'Escape') {
      const modal = document.querySelector('.portfolio-modal');
      if (modal) {
        modal.remove();
      }
    }
  });
}

/**
 * Setup cursor effect (if enabled)
 */
function setupCursorEffect() {
  if (!CONFIG.FEATURES.CURSOR_EFFECT) return;

  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', debounce((e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  }, 5));
}

// ============================================
// 6. PAGE LOAD INITIALIZATION
// ============================================

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}

function initialize() {
  // Main app initialization
  app.init();

  // Additional utilities
  setupScrollToTop();
  setupKeyboardShortcuts();
  setupCursorEffect();

  // Dispatch custom event
  window.dispatchEvent(new Event('aizoniq:ready'));
  console.log('💡 Listen for "aizoniq:ready" event to run custom code');
}

// ============================================
// 7. EXPORT FOR EXTERNAL USE
// ============================================

export { app };

// Make app available globally (for debugging)
if (CONFIG.DEBUG) {
  window.__AIZONIQ__ = {
    app,
    version: '1.0.0',
    config: CONFIG
  };
  console.log('🐛 Debug mode enabled. Access via window.__AIZONIQ__');
}
