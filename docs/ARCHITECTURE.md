# System Architecture

## 🏗️ High-Level Architecture

```
┌─────────────────────────────────────────────┐
│          User's Browser                     │
│  ┌─────────────────────────────────────┐   │
│  │  HTML Pages (index, services, etc) │   │
│  │  - Static content                   │   │
│  │  - Responsive layout                │   │
│  │  - Semantic markup                  │   │
│  └─────────────────────────────────────┘   │
│                    ↓                        │
│  ┌─────────────────────────────────────┐   │
│  │  src/main.js (Entry Point)          │   │
│  │  - Initializes components           │   │
│  │  - Initializes features             │   │
│  │  - Sets up navigation                │   │
│  │  - Sets up observers                │   │
│  └─────────────────────────────────────┘   │
│     ↓          ↓           ↓                │
│  Components Features    Utils               │
│     ↓          ↓           ↓                │
│  ┌──────┐  ┌────────┐  ┌────────┐         │
│  │Forms │  │Analytics   │Helpers │         │
│  │Chatbot   │Portfolio   │Validators      │
│  │      │  │Blog    │  │Storage│         │
│  └──────┘  └────────┘  └────────┘         │
│              ↓                              │
│  ┌─────────────────────────────────────┐   │
│  │  src/api/services/ (Service Layer)  │   │
│  │  - contactService                   │   │
│  │  - newsletterService                │   │
│  │  - paymentService                   │   │
│  │  - blogData, portfolioData          │   │
│  └─────────────────────────────────────┘   │
│              ↓                              │
│  ┌─────────────────────────────────────┐   │
│  │  src/api/client.js (HTTP Client)    │   │
│  │  - fetch() wrapper                  │   │
│  │  - Error handling                   │   │
│  │  - Timeout/retry logic              │   │
│  │  - Response parsing                 │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
           HTTP/HTTPS Connection
           ↓
┌─────────────────────────────────────────────┐
│        Express.js Server (server.js)        │
│        Port: 5000                           │
│  ┌─────────────────────────────────────┐   │
│  │  Middleware Layer                   │   │
│  │  - CORS                             │   │
│  │  - JSON parser                      │   │
│  │  - Error handler                    │   │
│  └─────────────────────────────────────┘   │
│              ↓                              │
│  ┌─────────────────────────────────────┐   │
│  │  Route Handlers                     │   │
│  │  - POST /api/contact                │   │
│  │  - POST /api/newsletter             │   │
│  │  - POST /api/create-payment-intent  │   │
│  │  - GET /api/services                │   │
│  │  - GET /api/portfolio               │   │
│  │  - GET /api/blog                    │   │
│  │  - POST /api/chatbot-conversation   │   │
│  └─────────────────────────────────────┘   │
│     ↓            ↓              ↓           │
│  Nodemailer  Stripe API    In-Memory DB   │
│  (Email)    (Payments)      (Mock Data)    │
└─────────────────────────────────────────────┘
```

---

## 📁 Folder Structure & Responsibilities

### `src/` - Frontend Application

#### `config/`
**Purpose**: Centralized configuration  
**Files**:
- `config.js` - All environment variables and settings
- `constants.js` - Shared constants (routes, messages, validation patterns)

**Responsibilities**:
- Single source of truth for app configuration
- Feature flags
- API endpoints
- Message templates

#### `api/`
**Purpose**: API communication layer  
**Files**:
- `client.js` - Centralized HTTP client with retry logic
- `services/index.js` - High-level service functions

**Responsibilities**:
- Handle all HTTP requests
- Error handling and retries
- Timeout management
- Response parsing
- Service-level functions (contactService, newsletterService, etc.)

**Data Flow**:
```
Component → Service Function → API Client → HTTP Request → Server
```

#### `components/`
**Purpose**: Reusable UI components  
**Files**:
- `chatbot/chatbot.js` - AI assistant widget
- `forms/forms.js` - Contact, newsletter, payment forms

**Responsibilities**:
- User interaction handling
- Form validation
- DOM manipulation
- Component state management
- Event binding

#### `features/`
**Purpose**: Feature-specific functionality  
**Directories**:
- `analytics/tracker.js` - Google Analytics integration
- `portfolio/portfolio.js` - Portfolio filtering/display
- `blog/blog.js` - Blog search/pagination

**Responsibilities**:
- Page-specific logic
- API data processing
- Feature-specific utilities
- DOM element initialization

#### `utils/`
**Purpose**: Helper functions and utilities  
**Files**:
- `helpers.js` - General utilities (format, debounce, etc.)
- `validators.js` - Form validation functions
- `storage.js` - localStorage wrapper

**Responsibilities**:
- Reusable functions
- Validation logic
- Storage management
- Formatting and transformation

#### `main.js`
**Purpose**: Application entry point  
**Responsibilities**:
- Initialize all components
- Initialize all features
- Setup navigation
- Setup keyboard shortcuts
- Setup observers
- Dispatch ready event

---

### `server.js` - Backend Server

**Technology**: Express.js  
**Port**: 5000  
**Purpose**: REST API server

**Sections**:
1. **Dependencies** - npm packages
2. **Configuration** - load .env variables
3. **Middleware** - CORS, JSON parser, error handler
4. **Route Handlers** - 7 main API endpoints
5. **Utilities** - email sender, error handler

**API Routes**:
```
POST   /api/contact              - Contact form
POST   /api/newsletter           - Newsletter signup
POST   /api/create-payment-intent - Stripe payment
GET    /api/services            - Get services
GET    /api/portfolio           - Get projects
GET    /api/blog                - Get articles
POST   /api/chatbot-conversation - Log conversations
```

**Integrations**:
- **Nodemailer** - Send emails (contact, newsletter confirmations)
- **Stripe** - Payment processing
- **dotenv** - Environment variables

---

## 🔄 Data Flow Examples

### Contact Form Submission

```
1. User fills form in browser
   ↓
2. ContactForm.handleSubmit() validates input
   ↓
3. contactService.submit(formData) called
   ↓
4. apiClient.post('/api/contact', formData) makes HTTP request
   ↓
5. Backend receives POST /api/contact
   ↓
6. Express validates data
   ↓
7. Nodemailer sends email via Gmail
   ↓
8. Server responds { success: true, id: '...' }
   ↓
9. Frontend shows success notification
   ↓
10. Form resets
```

### Blog Post Loading

```
1. Page loads (blog.html)
   ↓
2. main.js initializes BlogFeature
   ↓
3. BlogFeature.init() calls blogData.getAll()
   ↓
4. blogData.getAll() → apiClient.get('/api/blog')
   ↓
5. Backend: GET /api/blog returns mock data
   ↓
6. Frontend receives [ { id, title, content, ... }, ... ]
   ↓
7. BlogFeature.render() displays articles in DOM
   ↓
8. User searches/filters (client-side processing)
   ↓
9. DOM updates with filtered results
```

### Chatbot Interaction

```
1. User opens chatbot
   ↓
2. ChatbotWidget.toggleChat() shows chat window
   ↓
3. ChatbotWidget auto-greets with bot message
   ↓
4. User types message and sends
   ↓
5. addMessage(text, 'user') adds to chat
   ↓
6. respond(message) analyzes message
   ↓
7. generateResponse() pattern-matches to provide reply
   ↓
8. addMessage(response, 'bot') displays bot response
   ↓
9. Chat history saved to localStorage
   ↓
10. (Optional) chatbotService.sendConversation() logs to backend
```

---

## 🔐 Security Features

### Input Validation
```javascript
// All forms validated before sending
validateEmail(email) - Checks email format
validatePhone(phone) - Checks phone format
validateMessage(msg) - Checks message length
```

### XSS Prevention
```javascript
// Escape HTML characters
escapeHtml(text) - Converts <, >, &, ", '
// Also uses textContent instead of innerHTML where possible
```

### CORS
```javascript
// Backend only accepts requests from whitelisted origins
// Production: https://www.aizoniq.com
// Development: http://localhost:*
```

### Sensitive Data
```javascript
// API keys stored in .env, not in code
// Stripe key is public key (client-safe)
// Secret keys only on backend
// Email credentials only in backend .env
```

---

## 🎯 Component Interactions

### Navigation
```
main.js
├── setupNavigation()
│   ├── Mobile menu toggle
│   ├── Highlight active page
│   └── Close menu on link click
└── setupSmoothScroll()
    ├── Smooth scroll for anchors
    └── Update nav state on scroll
```

### Contact Flow
```
main.js
├── setupComponents()
│   └── new ContactForm('#contactForm')
│       ├── Attach submit handler
│       ├── Validate on submit
│       ├── Call contactService.submit()
│       └── Show notification
└── Error: Show error toast
```

### Blog Display
```
main.js
├── setupFeatures()
│   └── new BlogFeature()
│       ├── Load from blogData.getAll()
│       ├── Attach search event
│       ├── Attach filter buttons
│       ├── Render articles
│       └── Attach pagination
└── User filters
    └── Client-side filtering (fast)
```

---

## 🚀 Performance Optimizations

### Frontend
- **Lazy Loading**: Images load on scroll
- **Debouncing**: Search/scroll events debounced
- **Caching**: API responses cached (1 hour)
- **Event Delegation**: Single listener for multiple elements
- **CSS Animations**: Use transform/opacity (GPU accelerated)

### Backend
- **In-Memory Data**: No database queries
- **Error Handling**: Graceful fallbacks
- **CORS**: Reduce preflight requests
- **JSON Validation**: Early rejection of bad requests

### Code Splitting
- Components separated by feature
- Utils separated by purpose
- Features can be lazy-loaded if needed

---

## 🔄 State Management

### Component State
```javascript
// ChatbotWidget
this.isOpen          // boolean
this.isTyping        // boolean
this.messages        // array
this.sessionId       // string

// PortfolioFeature
this.items           // array
this.filteredItems   // array
this.currentFilter   // string

// BlogFeature
this.articles        // array
this.filteredArticles // array
this.currentSearch   // string
this.currentCategory // string
this.currentPage     // number
```

### Persistent State
```javascript
// localStorage (via StorageManager)
STORAGE_KEYS.CHAT_HISTORY           // Saved messages
STORAGE_KEYS.USER_PREFERENCES       // User settings
```

### Global State
```javascript
// app object in main.js
app.initialized      // Init flag
app.components       // Component references
app.features         // Feature references
```

---

## 📊 Configuration Hierarchy

```
1. .env file (Environment variables)
   ↓
2. src/config/config.js (Import from .env)
   ↓
3. src/config/constants.js (Shared constants)
   ↓
4. Component/Feature (Use CONFIG)
   ↓
5. Module-specific overrides (If needed)
```

---

## 🔌 Extension Points

### Adding New Feature

1. Create feature file in `src/features/myfeature/`
2. Import services from `src/api/services/`
3. Export class/functions
4. Register in `main.js` setupFeatures()
5. Add HTML element with data attribute

### Adding New Service

1. Add function to `src/api/services/index.js`
2. Use `apiClient` to make requests
3. Add API endpoint to server.js if needed
4. Export from services/index.js
5. Use in components/features

### Adding New Utility

1. Create function in `src/utils/helpers.js` or appropriate file
2. Add JSDoc comments
3. Export function
4. Import in components where needed

---

## 📈 Scalability Considerations

### Current Limitations
- No database (stateless)
- No user authentication
- Chatbot uses pattern matching (not ML)
- Backend stores nothing persistent

### Future Improvements
1. **Add Database**
   - Store contact submissions
   - Store newsletter subscribers
   - Store blog posts in DB instead of mock data

2. **Add Authentication**
   - User accounts
   - Admin dashboard
   - Content management system

3. **Add ML/AI**
   - Real chatbot with NLP
   - Sentiment analysis
   - Recommendation engine

4. **Add Caching Layer**
   - Redis for API response caching
   - Session storage
   - Rate limiting

5. **Add Real Analytics**
   - Custom events database
   - User journey tracking
   - Conversion funnel

---

## 🧪 Testing Strategy

### Unit Testing
```javascript
// Test validators
validateEmail('test@example.com') === true
validatePhone('+1-555-0123') === true

// Test helpers
formatDate(new Date()) === 'Jan 15, 2024'
truncate('Long text...', 10) === 'Long te...'
```

### Integration Testing
```javascript
// Test components
new ContactForm() initializes with form
form.validate() checks all fields

// Test services
contactService.submit(data) returns response
```

### E2E Testing
```javascript
// Test user flows
1. User fills contact form
2. Submits form
3. Receives success notification
4. Form resets
```

### Manual Testing
- Open each HTML page
- Test each component
- Check browser console for errors
- Check Network tab for API calls

---

## 🔧 Debugging

### Enable Debug Mode
```javascript
// In src/config/config.js
DEBUG: true
```

### Access Global State
```javascript
// In browser console
window.__AIZONIQ__.app
window.__AIZONIQ__.config
window.__AIZONIQ__.version
```

### Common Issues
1. **Chatbot not showing**: Check `#chatbot-widget` div exists
2. **Forms not submitting**: Check backend server is running
3. **Styles not loading**: Clear cache (Ctrl+Shift+Delete)
4. **Analytics not tracking**: Check GA ID in .env

---

For detailed guides, see:
- [STRUCTURE.md](./STRUCTURE.md) - Folder organization
- [COMPONENTS.md](./COMPONENTS.md) - Component usage
- [API.md](./API.md) - API endpoints
