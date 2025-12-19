/**
 * Application Configuration
 * Centralized settings for the entire application
 */

const CONFIG = {
  // ============================================
  // API Configuration
  // ============================================
  API: {
    BASE_URL: typeof process !== 'undefined' && process.env.VITE_API_URL 
      ? process.env.VITE_API_URL 
      : 'http://localhost:5000',
    TIMEOUT: 10000,
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 1000
  },

  // ============================================
  // Analytics Configuration
  // ============================================
  ANALYTICS: {
    ENABLED: true,
    GA_ID: typeof process !== 'undefined' && process.env.VITE_GOOGLE_ANALYTICS_ID
      ? process.env.VITE_GOOGLE_ANALYTICS_ID
      : 'G-XXXXXXXXXX',
    TRACK_PAGEVIEWS: true,
    TRACK_EVENTS: true,
    TRACK_SCROLL_DEPTH: true,
    TRACK_TIME_ON_PAGE: true
  },

  // ============================================
  // Chatbot Configuration
  // ============================================
  CHATBOT: {
    ENABLED: true,
    SAVE_CONVERSATIONS: true,
    MAX_MESSAGE_LENGTH: 500,
    TYPING_DELAY: 1000,
    AUTO_GREET: true,
    QUICK_REPLIES: true
  },

  // ============================================
  // Payment Configuration
  // ============================================
  PAYMENT: {
    ENABLED: true,
    STRIPE_KEY: typeof process !== 'undefined' && process.env.VITE_STRIPE_KEY
      ? process.env.VITE_STRIPE_KEY
      : '',
    CURRENCY: 'USD',
    TEST_MODE: true
  },

  // ============================================
  // Email Configuration
  // ============================================
  EMAIL: {
    SEND_ENABLED: true,
    ADMIN_EMAIL: typeof process !== 'undefined' && process.env.VITE_ADMIN_EMAIL
      ? process.env.VITE_ADMIN_EMAIL
      : 'admin@aizoniq.com',
    NOTIFICATIONS_ENABLED: true,
    NEWSLETTER_ENABLED: true
  },

  // ============================================
  // Feature Flags
  // ============================================
  FEATURES: {
    PORTFOLIO: true,
    BLOG: true,
    SERVICES: true,
    CONTACT_FORM: true,
    NEWSLETTER: true,
    CHATBOT: true,
    ANALYTICS: true,
    CURSOR_EFFECT: false,
    ANIMATIONS: true,
    LAZY_LOADING: true,
    SERVICE_WORKER: false
  },

  // ============================================
  // UI Configuration
  // ============================================
  UI: {
    THEME: 'light',
    ANIMATIONS_ENABLED: true,
    SCROLL_BEHAVIOR: 'smooth',
    NOTIFICATION_POSITION: 'bottom-right',
    NOTIFICATION_DURATION: 3000
  },

  // ============================================
  // Debug Configuration
  // ============================================
  DEBUG: false,
  LOG_LEVEL: 'info',

  // ============================================
  // Performance Configuration
  // ============================================
  PERFORMANCE: {
    LAZY_LOAD_IMAGES: true,
    DEBOUNCE_DELAY: 300,
    THROTTLE_DELAY: 100,
    CACHE_API_RESPONSES: true,
    CACHE_DURATION: 3600000
  }
};

// Freeze config to prevent mutations
Object.freeze(CONFIG);

export default CONFIG;
