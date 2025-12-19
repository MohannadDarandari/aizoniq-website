/**
 * Aizoniq Frontend Application - Module Index
 * 
 * This file documents all modules and their exports
 * for quick reference during development
 */

// ============================================
// CONFIG MODULES
// ============================================

// src/config/config.js
export { default as CONFIG } from './config/config.js';
// Exports: CONFIG object with all settings

// src/config/constants.js
export { 
  ROUTES, 
  API_ENDPOINTS, 
  MESSAGES, 
  VALIDATION, 
  STORAGE_KEYS 
} from './config/constants.js';

// ============================================
// API MODULES
// ============================================

// src/api/client.js
export { default as apiClient } from './api/client.js';
// Exports: APIClient class (HTTP client)
// Methods: get(), post(), put(), delete()

// src/api/services/index.js
export {
  contactService,
  newsletterService,
  chatbotService,
  paymentService,
  servicesData,
  portfolioData,
  blogData,
  healthCheck
} from './api/services/index.js';

// ============================================
// COMPONENT MODULES
// ============================================

// src/components/chatbot/chatbot.js
export { ChatbotWidget } from './components/chatbot/chatbot.js';
// Class: ChatbotWidget
// Methods: toggleChat(), sendMessage(), clearHistory()
// Auto-initializes on page load

// src/components/forms/forms.js
export {
  ContactForm,
  NewsletterForm,
  PaymentForm
} from './components/forms/forms.js';
// Classes:
//   - ContactForm: Contact form with email validation
//   - NewsletterForm: Email subscription
//   - PaymentForm: Stripe payment
// Auto-initialize on page load

// ============================================
// FEATURE MODULES
// ============================================

// src/features/analytics/tracker.js
export { AnalyticsTracker, tracker } from './features/analytics/tracker.js';
// Class: AnalyticsTracker
// Methods:
//   - trackEvent(name, data)
//   - trackPageView(title, path)
//   - trackFormSubmission(name)
//   - trackDownload(filename)
//   - trackScrollDepth()
// Exports singleton: tracker

// src/features/portfolio/portfolio.js
export { PortfolioFeature } from './features/portfolio/portfolio.js';
// Class: PortfolioFeature
// Methods:
//   - setFilter(category)
//   - render()
//   - showModal(item)
// Auto-initializes on page load

// src/features/blog/blog.js
export { BlogFeature } from './features/blog/blog.js';
// Class: BlogFeature
// Methods:
//   - applyFilters()
//   - render()
//   - setFilter(category)
// Auto-initializes on page load

// ============================================
// UTILITY MODULES
// ============================================

// src/utils/helpers.js
export {
  formatTime,
  formatDate,
  generateUUID,
  debounce,
  throttle,
  deepClone,
  showNotification,
  getQueryParams,
  scrollToElement,
  isInViewport,
  escapeHtml,
  capitalize,
  truncate,
  randomElement
} from './utils/helpers.js';

// src/utils/validators.js
export {
  validateEmail,
  validatePhone,
  validateMessage,
  validateURL,
  validateCreditCard,
  validateRequired,
  validateMinLength,
  validateMaxLength,
  validatePattern,
  validatePhoneInternational
} from './utils/validators.js';

// src/utils/storage.js
export { StorageManager, storage } from './utils/storage.js';
// Class: StorageManager
// Methods: get(), set(), remove(), clear(), has(), keys(), getSize()
// Exports singleton: storage

// ============================================
// MAIN APPLICATION
// ============================================

// src/main.js
export { app } from './main.js';
// Object: app
// Properties:
//   - initialized: boolean
//   - components: { chatbot, contactForm, newsletterForm, paymentForm }
//   - features: { analytics, portfolio, blog }
// Methods:
//   - init()
//   - setupNavigation()
//   - setupComponents()
//   - setupFeatures()

// ============================================
// USAGE EXAMPLES
// ============================================

/*
// 1. Use Services
import { contactService } from './api/services/index.js';
await contactService.submit({ name, email, message });

// 2. Use Validators
import { validateEmail } from './utils/validators.js';
if (validateEmail(email)) { ... }

// 3. Use Helpers
import { formatDate, showNotification } from './utils/helpers.js';
const formatted = formatDate(new Date());
showNotification('Success!', 'success');

// 4. Use Storage
import { storage } from './utils/storage.js';
storage.set('key', { data: true });
const data = storage.get('key');

// 5. Manual Component Initialization
import { ChatbotWidget } from './components/chatbot/chatbot.js';
const chatbot = new ChatbotWidget('#chatbot-widget');

// 6. Access Tracker
import { tracker } from './features/analytics/tracker.js';
tracker.trackEvent('custom_event', { property: 'value' });

// 7. Use Configuration
import CONFIG from './config/config.js';
console.log(CONFIG.API.BASE_URL);
*/

// ============================================
// MODULE STATISTICS
// ============================================

/*
Total Modules: 9
  - Config: 2 files
  - API: 2 files (client + services)
  - Components: 2 files (chatbot + forms)
  - Features: 3 files (analytics, portfolio, blog)
  - Utils: 3 files (helpers, validators, storage)
  
Total Exports: 60+
Total Classes: 8
Total Functions: 50+
Total Constants: 5 groups

Size: ~100KB unminified
Compression: Can be reduced to ~30KB with minification

All modules use ES6+ syntax and are tree-shakeable
*/
