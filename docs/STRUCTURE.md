# Project Structure Documentation

## 📁 Folder Organization

```
aizoniq-website/
├── src/                          # Frontend source code
│   ├── config/
│   │   ├── config.js            # Centralized configuration
│   │   └── constants.js         # Shared constants and routes
│   │
│   ├── api/
│   │   ├── client.js            # HTTP client wrapper
│   │   └── services/
│   │       └── index.js         # API service functions
│   │
│   ├── components/              # Reusable UI components
│   │   ├── chatbot/
│   │   │   └── chatbot.js       # AI chatbot widget
│   │   └── forms/
│   │       └── forms.js         # Form handlers (contact, newsletter, payment)
│   │
│   ├── features/                # Page-specific features
│   │   ├── analytics/
│   │   │   └── tracker.js       # Google Analytics integration
│   │   ├── portfolio/
│   │   │   └── portfolio.js     # Portfolio/case studies logic
│   │   └── blog/
│   │       └── blog.js          # Blog/articles logic
│   │
│   ├── utils/                   # Utility functions
│   │   ├── helpers.js           # General helper functions
│   │   ├── validators.js        # Form validation functions
│   │   └── storage.js           # localStorage wrapper
│   │
│   └── styles/
│       └── (organized CSS files)
│
├── server/                       # Backend Node.js
│   └── server.js                # Express server (all routes)
│
├── js/                          # Legacy JavaScript (to be refactored)
│   ├── main.js
│   ├── chatbot.js
│   └── analytics.js
│
├── css/                         # Stylesheets
│   ├── style.css
│   ├── chatbot.css
│   ├── services.css
│   └── contact.css
│
├── assets/                      # Static assets
│   ├── images/
│   └── icons/
│
├── public/                      # Public files (static)
│   └── (future: compiled assets)
│
├── docs/                        # Documentation
│   ├── STRUCTURE.md            # This file
│   ├── ARCHITECTURE.md         # System architecture
│   ├── API.md                  # API endpoints reference
│   ├── COMPONENTS.md           # Component usage guide
│   └── SETUP.md                # Setup instructions
│
├── .env                         # Environment variables (NOT in git)
├── .gitignore                  # Git ignore rules
├── package.json                # Node.js dependencies
├── server.js                   # Main server entry point
│
└── HTML Pages
    ├── index.html              # Homepage
    ├── services.html           # Services page
    ├── portfolio.html          # Portfolio/case studies
    ├── blog.html               # Blog articles
    ├── about.html              # About page
    └── contact.html            # Contact form
```

## 🎯 Module Purposes

### `src/config/`
**Purpose**: Centralized configuration management
- `config.js`: All app settings (API URLs, timeouts, feature flags)
- `constants.js`: Shared constants (routes, messages, validation patterns)

### `src/api/`
**Purpose**: API communication layer
- `client.js`: HTTP client with retry logic, timeout handling
- `services/index.js`: Service functions (contact, newsletter, payment, chatbot, etc.)

**Example Usage**:
```javascript
import { contactService } from '../../api/services/index.js';
await contactService.submit(formData);
```

### `src/components/`
**Purpose**: Reusable UI components
- `chatbot/chatbot.js`: AI chatbot widget (auto-initializes on page load)
- `forms/forms.js`: Contact, newsletter, payment form handlers

**Example Usage**:
```javascript
import { ContactForm } from '../../components/forms/forms.js';
const form = new ContactForm('#contactForm');
```

### `src/features/`
**Purpose**: Page-specific functionality
- `analytics/tracker.js`: Google Analytics event tracking
- `portfolio/portfolio.js`: Portfolio filtering and modals
- `blog/blog.js`: Blog search, filtering, pagination

**Example Usage**:
```javascript
import { PortfolioFeature } from '../../features/portfolio/portfolio.js';
const portfolio = new PortfolioFeature();
```

### `src/utils/`
**Purpose**: Helper functions and utilities
- `helpers.js`: General utilities (format, debounce, scroll, etc.)
- `validators.js`: Form validation functions
- `storage.js`: localStorage wrapper with error handling

**Example Usage**:
```javascript
import { validateEmail } from '../../utils/validators.js';
import { formatDate } from '../../utils/helpers.js';
```

## 🔄 Data Flow

```
User Interaction
    ↓
Component (forms.js, chatbot.js)
    ↓
Service Function (services/index.js)
    ↓
API Client (client.js)
    ↓
Backend Server (server.js)
    ↓
Database / External Service
    ↓
Response
    ↓
UI Update
```

## 📦 Dependencies

### Frontend
- Vanilla JavaScript (ES6+ modules)
- No frameworks needed
- Uses native Fetch API

### Backend
- Express.js
- nodemailer (email)
- stripe (payments)
- dotenv (config)
- CORS middleware

## 🚀 Import Patterns

### Importing Services
```javascript
import { contactService, newsletterService } from '../../api/services/index.js';
```

### Importing Components
```javascript
import { ChatbotWidget } from '../../components/chatbot/chatbot.js';
import { ContactForm } from '../../components/forms/forms.js';
```

### Importing Utilities
```javascript
import { validateEmail } from '../../utils/validators.js';
import { formatDate, debounce } from '../../utils/helpers.js';
import { StorageManager } from '../../utils/storage.js';
```

### Importing Features
```javascript
import { AnalyticsTracker } from '../../features/analytics/tracker.js';
import { PortfolioFeature } from '../../features/portfolio/portfolio.js';
import { BlogFeature } from '../../features/blog/blog.js';
```

## 🔧 Configuration

### Environment Variables (.env)
```
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_STRIPE_KEY=pk_test_XXXXXXXX
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
STRIPE_SECRET_KEY=sk_test_XXXXXXXX
```

### Config Object (src/config/config.js)
```javascript
const CONFIG = {
  API: {
    BASE_URL: 'http://localhost:5000',
    TIMEOUT: 10000
  },
  ANALYTICS: {
    ENABLED: true,
    GA_ID: 'G-XXXXXXXXXX'
  },
  // ... more settings
}
```

## 📝 Adding New Features

1. **Add API endpoint**:
   - Create service function in `src/api/services/index.js`
   - Use `apiClient` for HTTP requests

2. **Create component**:
   - Add to `src/components/` subdirectory
   - Use forms.js as a template
   - Import services as needed

3. **Add page feature**:
   - Create in `src/features/` with dedicated folder
   - Import API services
   - Attach to HTML elements with data attributes

4. **Add utility**:
   - Add to appropriate utils file
   - Export named function
   - Document with JSDoc comments

## 🎨 Styling Organization

CSS files are organized by scope:
- `variables.css` - Colors, fonts, spacing
- `base.css` - Reset, typography
- `layout.css` - Grid, flexbox
- `components.css` - Buttons, cards, forms
- `animations.css` - Keyframes
- `responsive.css` - Media queries

## ✅ Code Standards

- Use ES6+ syntax (const/let, arrow functions, destructuring)
- Add JSDoc comments for all functions
- Use data attributes for DOM queries: `data-*`
- Always handle errors with try/catch
- Use async/await for async operations
- Keep functions small and focused
- Extract magic strings to constants

## 🧪 Testing

Components can be tested by:
1. Opening relevant HTML page
2. Opening browser DevTools
3. Checking console for errors
4. Testing form submissions
5. Verifying API calls in Network tab

---

For more details, see:
- [ARCHITECTURE.md](./ARCHITECTURE.md) - System design
- [API.md](./API.md) - API endpoints
- [COMPONENTS.md](./COMPONENTS.md) - Component details
- [SETUP.md](./SETUP.md) - Installation guide
