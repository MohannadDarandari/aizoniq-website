# Component Usage Guide

## Chatbot Widget

### Initialization
The chatbot auto-initializes when the page loads if the container exists:

```html
<div id="chatbot-widget"></div>
```

### Features
- Auto-save chat history to localStorage
- Smart response matching (services, pricing, portfolio, etc.)
- Quick reply buttons
- Typing indicator animation
- Session-based conversations

### API
```javascript
import { ChatbotWidget } from '../../components/chatbot/chatbot.js';

// Manual initialization
const chatbot = new ChatbotWidget('#chatbot-widget');

// Methods
chatbot.sendMessage();        // Send a message
chatbot.toggleChat();         // Open/close chat
chatbot.clearHistory();       // Clear saved messages
```

### Customization
Edit response messages in `src/config/constants.js`:
```javascript
MESSAGES: {
  GREETING: '...',
  SERVICES: '...',
  PRICING: '...',
  // ... etc
}
```

---

## Contact Form

### HTML Structure
```html
<form id="contactForm">
  <input type="text" name="name" required>
  <input type="email" name="email" required>
  <input type="tel" name="phone">
  <textarea name="message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

### Auto-initialization
```javascript
import { ContactForm } from '../../components/forms/forms.js';

// Auto-initializes on page load
new ContactForm('#contactForm');
```

### Features
- Client-side validation
- Email/phone format checking
- Loading state during submission
- Success/error notifications
- Form reset on success

### API Endpoint
`POST /api/contact`
```javascript
{
  name: string,
  email: string,
  phone: string,
  message: string
}
```

---

## Newsletter Form

### HTML Structure
```html
<form class="newsletter-form">
  <input type="email" placeholder="Your email" required>
  <button type="submit">Subscribe</button>
</form>
```

### Auto-initialization
Multiple newsletter forms on different pages auto-initialize when the page loads.

### Features
- Email validation
- Duplicate subscription prevention
- Subscribe notifications
- Works on all pages

### API Endpoint
`POST /api/newsletter`
```javascript
{
  email: string
}
```

---

## Payment Form

### HTML Structure
```html
<form id="paymentForm">
  <select name="service" required>
    <option value="">Select Service</option>
    <option value="web-design">Web Design - $5000</option>
    <option value="branding">Branding - $3000</option>
  </select>
  <input type="number" name="amount" min="100" required>
  <button type="submit">Pay Now</button>
</form>
```

### Auto-initialization
```javascript
import { PaymentForm } from '../../components/forms/forms.js';

// Auto-initializes on page load
new PaymentForm('#paymentForm');
```

### Features
- Service/amount validation
- Stripe integration (if configured)
- Payment processing UI

### API Endpoint
`POST /api/create-payment-intent`
```javascript
{
  amount: number,
  service: string
}
```

---

## Portfolio Feature

### HTML Setup
```html
<div class="portfolio-filters">
  <button data-portfolio-filter="all" class="active">All</button>
  <button data-portfolio-filter="web">Web Design</button>
  <button data-portfolio-filter="branding">Branding</button>
</div>

<div data-portfolio-container></div>
```

### Auto-initialization
```javascript
import { PortfolioFeature } from '../../features/portfolio/portfolio.js';

// Auto-initializes on page load
new PortfolioFeature();
```

### Features
- Category filtering
- Modal/lightbox view
- Lazy image loading
- Responsive grid

### API Endpoint
`GET /api/portfolio`

Returns array of portfolio items with: `id`, `title`, `category`, `description`, `image`, `link`

---

## Blog Feature

### HTML Setup
```html
<input type="text" data-blog-search placeholder="Search articles...">

<div class="blog-categories">
  <button data-blog-category="all" class="active">All</button>
  <button data-blog-category="design">Design</button>
  <button data-blog-category="development">Development</button>
</div>

<div data-blog-container></div>

<div data-blog-pagination></div>
```

### Auto-initialization
```javascript
import { BlogFeature } from '../../features/blog/blog.js';

// Auto-initializes on page load
new BlogFeature();
```

### Features
- Full-text search (title, excerpt, author)
- Category filtering
- Pagination (10 items per page)
- Date formatting
- Excerpt truncation

### API Endpoint
`GET /api/blog`

Returns array of articles with: `id`, `title`, `excerpt`, `content`, `category`, `date`, `author`, `image`

---

## Analytics Tracker

### Auto-initialization
```javascript
import { AnalyticsTracker } from '../../features/analytics/tracker.js';

// Auto-initializes on page load
const tracker = new AnalyticsTracker();
```

### Built-in Tracking
- Page views
- Button clicks
- External link clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page

### Custom Events
```javascript
tracker.trackEvent('event_name', {
  custom_property: 'value'
});

// Specific events
tracker.trackFormSubmission('contact_form');
tracker.trackDownload('file.pdf');
tracker.trackExternalLink('https://example.com');
```

### Configuration
Enable/disable in `.env`:
```
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
```

---

## Form Validation

### Available Validators
```javascript
import { 
  validateEmail, 
  validatePhone, 
  validateMessage,
  validateCreditCard,
  validateRequired,
  validateMinLength,
  validateMaxLength 
} from '../../utils/validators.js';

// Usage
if (validateEmail(email)) {
  // Valid email
}

if (validatePhone(phone)) {
  // Valid phone
}
```

### Validation Patterns
Defined in `src/config/constants.js`:
```javascript
VALIDATION: {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[\d\s\-\+\(\)]{10,}$/,
  // ... more patterns
}
```

---

## Helper Functions

### Available Helpers
```javascript
import {
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
  truncate,
  capitalize
} from '../../utils/helpers.js';

// Usage
const formatted = formatDate(new Date()); // "Jan 15, 2024"
const id = generateUUID(); // "550e8400-e29b-41d4-a716-446655440000"

debounce(() => {
  // This runs after user stops typing
}, 300);

showNotification('Success!', 'success');
```

---

## Storage Manager

### Usage
```javascript
import { StorageManager } from '../../utils/storage.js';
import { storage } from '../../utils/storage.js'; // Singleton

// Store data
storage.set('user_preferences', { theme: 'dark' });

// Retrieve data
const prefs = storage.get('user_preferences');

// Check if exists
if (storage.has('user_id')) {
  // ...
}

// Remove data
storage.remove('user_id');

// Clear all
storage.clear();
```

### Storage Keys
Defined in `src/config/constants.js`:
```javascript
STORAGE_KEYS: {
  CHAT_HISTORY: 'aizoniq_chat_history',
  USER_PREFERENCES: 'aizoniq_preferences',
  // ... more keys
}
```

---

## Notifications

### Showing Notifications
```javascript
import { showNotification } from '../../utils/helpers.js';

showNotification('Message here', 'success');  // Green
showNotification('Error message', 'error');   // Red
showNotification('Info message', 'info');     // Blue
```

---

## Error Handling

All components have try/catch blocks and display user-friendly errors. Common error scenarios:

- **API unavailable**: Shows fallback content
- **Network error**: Shows error notification
- **Validation error**: Shows field-level errors
- **Form submission**: Shows error toast

---

## Best Practices

1. **Always check if container exists** before initializing components
2. **Use data attributes** for DOM queries: `[data-*]`
3. **Escape user input** to prevent XSS attacks
4. **Handle async operations** with try/catch
5. **Provide fallback content** when APIs fail
6. **Test on mobile** - components are responsive
7. **Clear event listeners** when removing components

---

For architecture overview, see [ARCHITECTURE.md](./ARCHITECTURE.md)
For API reference, see [API.md](./API.md)
