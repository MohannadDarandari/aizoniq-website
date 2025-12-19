# Aizoniq Website - Complete Guide

## 📋 Table of Contents
1. [Project Overview](#project-overview)
2. [Folder Structure](#folder-structure)
3. [Quick Start](#quick-start)
4. [Architecture](#architecture)
5. [Components](#components)
6. [Features](#features)
7. [API Reference](#api-reference)
8. [Development](#development)
9. [Deployment](#deployment)

---

## 🎯 Project Overview

**Aizoniq** is a modern, modular website for an AI services company built with:
- **Frontend**: Vanilla JavaScript (ES6+) with modular architecture
- **Backend**: Express.js with REST APIs
- **Integrations**: Stripe (payments), Nodemailer (emails), Google Analytics
- **Hosting**: Cloudflare Pages (automatic deployments)
- **Database**: None (stateless, API-driven with fallbacks)

### Key Features
✅ AI Chatbot widget with smart responses  
✅ Contact & newsletter forms with email notifications  
✅ Portfolio/case studies section with filtering  
✅ Blog platform with search and categories  
✅ Stripe payment integration (test mode)  
✅ Google Analytics 4 integration  
✅ Fully responsive design  
✅ SEO optimized  

---

## 📁 Folder Structure

```
src/
├── config/              # Configuration
│   ├── config.js       # App configuration
│   └── constants.js    # Shared constants
├── api/                # API layer
│   ├── client.js       # HTTP client
│   └── services/       # Service functions
├── components/         # Reusable components
│   ├── chatbot/        # Chatbot widget
│   └── forms/          # Form handlers
├── features/           # Page features
│   ├── analytics/      # Analytics
│   ├── portfolio/      # Portfolio logic
│   └── blog/           # Blog logic
├── utils/              # Utility functions
│   ├── helpers.js      # General helpers
│   ├── validators.js   # Validation functions
│   └── storage.js      # Storage wrapper
├── main.js             # Application entry point
└── styles/             # (organized CSS)
```

**Full structure documentation**: See [STRUCTURE.md](./STRUCTURE.md)

---

## 🚀 Quick Start

### 1. Installation

```bash
# Clone repository
git clone https://github.com/username/aizoniq-website.git
cd aizoniq-website

# Install dependencies
npm install
```

### 2. Environment Setup

Create `.env` file in root:
```env
VITE_API_URL=http://localhost:5000
VITE_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX
VITE_STRIPE_KEY=pk_test_XXXXXXXX
VITE_ADMIN_EMAIL=admin@aizoniq.com

# Backend only
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
STRIPE_SECRET_KEY=sk_test_XXXXXXXX
```

### 3. Start Development

```bash
# Start backend server (in one terminal)
node server.js

# Start local web server (in another terminal)
# Using Python 3
python -m http.server 8000

# OR using Node
npx http-server

# Visit http://localhost:8000
```

### 4. Test Features

- **Homepage**: http://localhost:8000
- **Chatbot**: Click 💬 icon (bottom right)
- **Contact**: Fill and submit contact form
- **Blog**: Search and filter articles
- **Portfolio**: View projects and filter by category

---

## 🏗️ Architecture

### Data Flow

```
User Interaction
    ↓
Component (forms.js, chatbot.js)
    ↓
Service Function (services/index.js)
    ↓
API Client (client.js) - HTTP
    ↓
Backend Server (server.js)
    ↓
External Service / Database
    ↓
Response (JSON)
    ↓
UI Update
```

### Module Dependencies

```
main.js (Entry Point)
├── components/
│   ├── chatbot.js
│   └── forms.js
├── features/
│   ├── analytics/tracker.js
│   ├── portfolio/portfolio.js
│   └── blog/blog.js
├── api/
│   ├── client.js
│   └── services/index.js
└── utils/
    ├── helpers.js
    ├── validators.js
    └── storage.js
```

---

## 🧩 Components

### Chatbot Widget
**Purpose**: AI assistant for user interactions  
**Location**: `src/components/chatbot/chatbot.js`  
**Auto-initializes**: Yes (if `#chatbot-widget` exists)  

**Smart Responses For**:
- Services inquiry
- Pricing questions
- Portfolio view
- Contact information
- About company
- Blog/articles
- General fallback

**Features**:
- Chat history persistence
- Quick reply buttons
- Typing indicator
- Message timestamps
- Session management

**Usage**:
```javascript
import { ChatbotWidget } from './components/chatbot/chatbot.js';
const chatbot = new ChatbotWidget('#chatbot-widget');
```

---

### Contact Form
**Purpose**: Collect inquiries with email notifications  
**Location**: `src/components/forms/forms.js`  

**Fields**:
- Name (required)
- Email (required, validated)
- Phone (optional, validated)
- Message (required, 10+ chars)

**Validation**:
- Email format check
- Phone format check
- Message length requirement
- XSS prevention

**API Endpoint**: `POST /api/contact`

---

### Newsletter Form
**Purpose**: Email subscription collection  
**Location**: `src/components/forms/forms.js`  

**Features**:
- Works on all pages
- Email validation
- Duplicate check
- Success notifications
- One-click unsubscribe support

**API Endpoint**: `POST /api/newsletter`

---

### Portfolio Feature
**Purpose**: Showcase projects and case studies  
**Location**: `src/features/portfolio/portfolio.js`  

**Features**:
- Category filtering
- Modal/lightbox view
- Responsive grid
- Image lazy loading
- Links to live projects

**HTML Setup**:
```html
<div class="portfolio-filters">
  <button data-portfolio-filter="all">All</button>
  <button data-portfolio-filter="web">Web</button>
</div>
<div data-portfolio-container></div>
```

---

### Blog Feature
**Purpose**: Article publishing platform  
**Location**: `src/features/blog/blog.js`  

**Features**:
- Full-text search
- Category filtering
- Pagination (10 items/page)
- Author display
- Date formatting
- Excerpt truncation

**HTML Setup**:
```html
<input type="text" data-blog-search placeholder="Search...">
<div class="blog-categories">
  <button data-blog-category="all" class="active">All</button>
  <button data-blog-category="design">Design</button>
</div>
<div data-blog-container></div>
<div data-blog-pagination></div>
```

---

### Analytics Tracker
**Purpose**: User behavior tracking  
**Location**: `src/features/analytics/tracker.js`  

**Tracks**:
- Page views
- Button clicks
- External link clicks
- Scroll depth (25%, 50%, 75%, 100%)
- Time on page
- Custom events

**Usage**:
```javascript
import { tracker } from './features/analytics/tracker.js';
tracker.trackEvent('custom_event', { property: 'value' });
```

---

## 🔌 API Reference

### Base URL
```
Development: http://localhost:5000
Production: https://api.aizoniq.com
```

### Endpoints

#### Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "string",
  "email": "string",
  "phone": "string (optional)",
  "message": "string"
}

Response:
{
  "success": true,
  "message": "Message sent successfully",
  "id": "unique-id"
}
```

#### Newsletter Subscription
```
POST /api/newsletter
Content-Type: application/json

{
  "email": "string"
}

Response:
{
  "success": true,
  "message": "Subscribed successfully",
  "email": "string"
}
```

#### Payment Intent (Stripe)
```
POST /api/create-payment-intent
Content-Type: application/json

{
  "amount": number,
  "service": "string"
}

Response:
{
  "clientSecret": "pi_test_XXXXX",
  "amount": number
}
```

#### Get Services
```
GET /api/services

Response:
{
  "services": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "price": number,
      "features": ["string"]
    }
  ]
}
```

#### Get Portfolio
```
GET /api/portfolio

Response:
{
  "items": [
    {
      "id": "string",
      "title": "string",
      "category": "string",
      "description": "string",
      "image": "url",
      "link": "url"
    }
  ]
}
```

#### Get Blog Posts
```
GET /api/blog

Response:
{
  "posts": [
    {
      "id": "string",
      "title": "string",
      "excerpt": "string",
      "content": "string",
      "category": "string",
      "date": "ISO string",
      "author": "string",
      "image": "url"
    }
  ]
}
```

#### Chatbot Conversation (optional)
```
POST /api/chatbot-conversation
Content-Type: application/json

{
  "messages": [
    {
      "text": "string",
      "sender": "user|bot",
      "timestamp": "ISO string"
    }
  ]
}

Response:
{
  "success": true,
  "conversationId": "string"
}
```

---

## 💻 Development

### Code Style
- ES6+ syntax (const/let, arrow functions)
- JSDoc comments for all functions
- Data attributes for DOM queries
- Async/await for async operations
- Try/catch for error handling

### Adding New Features

#### 1. Add Service Function
```javascript
// In src/api/services/index.js
export const myService = {
  doSomething: (data) => 
    apiClient.post('/api/my-endpoint', data)
};
```

#### 2. Create Component or Feature
```javascript
// In src/components/mycomponent/mycomponent.js
export class MyComponent {
  constructor(selector) {
    this.element = document.querySelector(selector);
    this.init();
  }

  init() {
    // Initialize
  }
}
```

#### 3. Register in main.js
```javascript
import { MyComponent } from './components/mycomponent/mycomponent.js';

setupComponents() {
  this.components.myComponent = new MyComponent('#my-selector');
}
```

### Validation

Use validators from `src/utils/validators.js`:
```javascript
import { validateEmail, validatePhone } from '../utils/validators.js';

if (!validateEmail(email)) {
  // Invalid email
}
```

### Notifications
```javascript
import { showNotification } from '../utils/helpers.js';

showNotification('Success!', 'success');
showNotification('Error!', 'error');
showNotification('Info', 'info');
```

### Storage
```javascript
import { storage } from '../utils/storage.js';

storage.set('key', { data: true });
const data = storage.get('key');
storage.remove('key');
```

---

## 🌐 Deployment

### Cloudflare Pages (Automatic)

1. Connect GitHub repository
2. Build Command: (leave empty - static files)
3. Publish Directory: `/` (root)
4. Set environment variables in dashboard
5. Auto-deploys on push to main branch

### Vercel / Netlify

1. Connect GitHub repository
2. Build Command: (leave empty)
3. Publish Directory: `/`
4. Deploy!

### Manual Deployment

```bash
# Build (if using bundler)
npm run build

# Deploy static files to your hosting
# Files: *.html, css/, js/, assets/
```

### Environment Variables on Hosting
Set these on your hosting platform:
- `VITE_API_URL` - Backend API URL
- `VITE_GOOGLE_ANALYTICS_ID` - GA ID
- `VITE_STRIPE_KEY` - Stripe public key
- `VITE_ADMIN_EMAIL` - Admin email

---

## 📚 Additional Documentation

- **[STRUCTURE.md](./STRUCTURE.md)** - Complete folder organization
- **[COMPONENTS.md](./COMPONENTS.md)** - Component usage guide
- **[SETUP.md](./SETUP.md)** - Detailed setup instructions

---

## 🐛 Troubleshooting

### Chatbot not appearing
- Check if `#chatbot-widget` div exists in HTML
- Check browser console for errors
- Verify JS file is loaded

### Forms not submitting
- Check backend server is running
- Check API URL in config
- Check browser Network tab for errors
- Verify form field names match API

### Analytics not tracking
- Check if GA ID is set in `.env`
- Check if Analytics is enabled in config
- Check GA dashboard for events

### Styles not loading
- Check CSS file paths
- Clear browser cache (Ctrl+Shift+Delete)
- Check for CSS errors in DevTools

---

## 📞 Support

- **Documentation**: See [STRUCTURE.md](./STRUCTURE.md)
- **Issues**: Check browser console
- **Contact**: support@aizoniq.com

---

## 📄 License

[Your License Here]

---

**Last Updated**: January 2024  
**Version**: 1.0.0
