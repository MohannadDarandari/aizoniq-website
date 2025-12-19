# API Reference

## Base Configuration

**Development URL**: `http://localhost:5000`  
**Production URL**: `https://api.aizoniq.com`  
**Default Timeout**: 10000ms (10 seconds)  
**Content-Type**: `application/json`  

---

## Endpoints

### 1. Contact Form

**POST** `/api/contact`

Submit a contact form inquiry.

#### Request
```javascript
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-555-0123",
  "message": "I'm interested in your services..."
}
```

#### Response (Success)
```javascript
{
  "success": true,
  "message": "Message sent successfully",
  "id": "msg_1234567890"
}
```

#### Response (Error)
```javascript
{
  "success": false,
  "error": "Invalid email format"
}
```

#### Validation Rules
- **name**: Required, min 2 characters
- **email**: Required, valid email format
- **phone**: Optional, valid phone format if provided
- **message**: Required, min 10 characters, max 5000

#### Error Codes
- `400` - Validation error
- `500` - Server error / Email not sent
- `503` - Service unavailable

#### Example Usage
```javascript
import { contactService } from './api/services/index.js';

try {
  const response = await contactService.submit({
    name: 'John',
    email: 'john@example.com',
    phone: '+1-555-0123',
    message: 'Hello!'
  });
  console.log('Message sent:', response.id);
} catch (error) {
  console.error('Failed to send:', error);
}
```

---

### 2. Newsletter Subscription

**POST** `/api/newsletter`

Subscribe an email to the newsletter.

#### Request
```javascript
{
  "email": "subscriber@example.com"
}
```

#### Response (Success)
```javascript
{
  "success": true,
  "message": "Successfully subscribed",
  "email": "subscriber@example.com"
}
```

#### Response (Error)
```javascript
{
  "success": false,
  "error": "Email already subscribed"
}
```

#### Validation Rules
- **email**: Required, valid email format, not already subscribed

#### Error Codes
- `400` - Invalid email
- `409` - Already subscribed
- `500` - Server error

#### Example Usage
```javascript
import { newsletterService } from './api/services/index.js';

try {
  const response = await newsletterService.subscribe('user@example.com');
  console.log('Subscribed:', response.email);
} catch (error) {
  if (error.message.includes('409')) {
    console.log('Already subscribed');
  }
}
```

---

### 3. Create Payment Intent

**POST** `/api/create-payment-intent`

Create a Stripe payment intent for processing payments.

#### Request
```javascript
{
  "amount": 5000,        // in cents (50.00 USD)
  "service": "web-design"
}
```

#### Response (Success)
```javascript
{
  "success": true,
  "clientSecret": "pi_test_1234567890abcdefghijklmn_secret_abcdefg",
  "amount": 5000,
  "currency": "usd"
}
```

#### Response (Error)
```javascript
{
  "success": false,
  "error": "Payment processing failed"
}
```

#### Request Parameters
- **amount**: Number, minimum 100 (1.00 USD), maximum 999999
- **service**: String, service identifier

#### Error Codes
- `400` - Invalid amount or service
- `402` - Payment required / Declined
- `500` - Server error

#### Example Usage
```javascript
import { paymentService } from './api/services/index.js';

try {
  const intent = await paymentService.createPaymentIntent(5000, 'web-design');
  console.log('Client Secret:', intent.clientSecret);
  // Use clientSecret with Stripe.js
} catch (error) {
  console.error('Payment intent failed:', error);
}
```

---

### 4. Get Services

**GET** `/api/services`

Retrieve available services and pricing.

#### Response
```javascript
{
  "success": true,
  "services": [
    {
      "id": "web-design",
      "name": "Web Design",
      "description": "Custom responsive web design...",
      "price": 5000,
      "duration": "4-6 weeks",
      "features": [
        "Responsive design",
        "Mobile optimization",
        "SEO optimization"
      ]
    },
    {
      "id": "branding",
      "name": "Branding",
      "description": "Complete brand identity...",
      "price": 3000,
      "duration": "2-3 weeks",
      "features": [
        "Logo design",
        "Brand guidelines",
        "Color palette"
      ]
    }
  ]
}
```

#### Query Parameters
None

#### Error Codes
- `500` - Server error

#### Example Usage
```javascript
import { servicesData } from './api/services/index.js';

try {
  const response = await servicesData.getAll();
  response.services.forEach(service => {
    console.log(`${service.name}: $${service.price}`);
  });
} catch (error) {
  console.error('Failed to load services:', error);
}
```

---

### 5. Get Portfolio

**GET** `/api/portfolio`

Retrieve portfolio items and case studies.

#### Response
```javascript
{
  "success": true,
  "items": [
    {
      "id": "project_1",
      "title": "E-Commerce Platform",
      "category": "web",
      "description": "Full-stack e-commerce platform with payment integration...",
      "image": "/assets/images/project-1.jpg",
      "link": "https://example.com",
      "results": "30% increase in conversions"
    },
    {
      "id": "project_2",
      "title": "Mobile App Design",
      "category": "design",
      "description": "User-friendly mobile app interface design...",
      "image": "/assets/images/project-2.jpg",
      "link": "https://example.com"
    }
  ]
}
```

#### Query Parameters
None (filtering done client-side)

#### Error Codes
- `500` - Server error

#### Example Usage
```javascript
import { portfolioData } from './api/services/index.js';

try {
  const response = await portfolioData.getAll();
  const webProjects = response.items.filter(p => p.category === 'web');
} catch (error) {
  console.error('Failed to load portfolio:', error);
}
```

---

### 6. Get Blog Posts

**GET** `/api/blog`

Retrieve blog articles and posts.

#### Response
```javascript
{
  "success": true,
  "posts": [
    {
      "id": "post_1",
      "title": "10 Web Design Trends for 2024",
      "excerpt": "Discover the latest trends in web design...",
      "content": "Full article content here...",
      "category": "design",
      "date": "2024-01-15T10:00:00Z",
      "author": "Jane Smith",
      "image": "/assets/images/post-1.jpg",
      "readTime": 5
    },
    {
      "id": "post_2",
      "title": "React vs Vue: A Comparison",
      "excerpt": "Comparing two popular JavaScript frameworks...",
      "content": "Full article content here...",
      "category": "development",
      "date": "2024-01-14T09:30:00Z",
      "author": "John Developer",
      "image": "/assets/images/post-2.jpg",
      "readTime": 8
    }
  ]
}
```

#### Query Parameters
None (search & filtering done client-side)

#### Error Codes
- `500` - Server error

#### Example Usage
```javascript
import { blogData } from './api/services/index.js';

try {
  const response = await blogData.getAll();
  const designPosts = response.posts.filter(p => p.category === 'design');
  console.log(`Found ${designPosts.length} design articles`);
} catch (error) {
  console.error('Failed to load blog:', error);
}
```

---

### 7. Chatbot Conversation (Optional)

**POST** `/api/chatbot-conversation`

Log chatbot conversations for analytics (optional).

#### Request
```javascript
{
  "messages": [
    {
      "text": "What services do you offer?",
      "sender": "user",
      "timestamp": "2024-01-15T10:30:00Z"
    },
    {
      "text": "We offer web design, branding, and more...",
      "sender": "bot",
      "timestamp": "2024-01-15T10:30:05Z"
    }
  ]
}
```

#### Response
```javascript
{
  "success": true,
  "conversationId": "conv_1234567890",
  "messagesLogged": 2
}
```

#### Error Codes
- `400` - Invalid message format
- `500` - Server error

#### Example Usage
```javascript
import { chatbotService } from './api/services/index.js';

try {
  const response = await chatbotService.sendConversation([
    { text: 'Hello', sender: 'user', timestamp: new Date() },
    { text: 'Hi there!', sender: 'bot', timestamp: new Date() }
  ]);
  console.log('Conversation logged:', response.conversationId);
} catch (error) {
  console.error('Failed to log conversation:', error);
}
```

---

## HTTP Status Codes

| Code | Meaning | Action |
|------|---------|--------|
| 200 | OK | Request successful |
| 400 | Bad Request | Invalid input, check validation rules |
| 402 | Payment Required | Card declined or payment failed |
| 409 | Conflict | Resource already exists (e.g., duplicate email) |
| 500 | Server Error | Server error, try again later |
| 503 | Service Unavailable | Service temporarily down |

---

## Error Handling

### Standard Error Response
```javascript
{
  "success": false,
  "error": "Error message here",
  "code": "ERROR_CODE"
}
```

### Handle Errors in Code
```javascript
try {
  const response = await apiClient.post('/api/endpoint', data);
  // Success
} catch (error) {
  if (error.response?.status === 400) {
    // Validation error
    console.log('Invalid input:', error.response.data.error);
  } else if (error.response?.status === 409) {
    // Conflict (duplicate, etc)
    console.log('Already exists:', error.response.data.error);
  } else if (error.response?.status === 500) {
    // Server error
    console.log('Server error, try again later');
  } else {
    // Network or timeout error
    console.log('Network error:', error.message);
  }
}
```

---

## Rate Limiting

Currently no rate limiting implemented. Contact/newsletter endpoints may have backend limits.

**Recommended**:
- Max 1 contact form submission per minute per IP
- Max 1 newsletter subscription per email per day
- Max 10 API calls per second

---

## Authentication

All endpoints are public. No authentication required.

**Future**: Consider adding:
- API key validation for sensitive endpoints
- CORS whitelist for specific origins
- Request signing with timestamps

---

## CORS

CORS is enabled for all origins during development.

**Production configuration** (recommended):
```
Allow-Origin: https://www.aizoniq.com
Allow-Methods: GET, POST, OPTIONS
Allow-Headers: Content-Type, Authorization
```

---

## Caching

API responses are cached client-side using the `APIClient` configuration.

- **Default cache duration**: 1 hour (3600000ms)
- **Can be disabled** in `src/config/config.js`

---

## Testing Endpoints

### Using curl
```bash
# Contact form
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name":"Test",
    "email":"test@example.com",
    "message":"Test message"
  }'

# Newsletter
curl -X POST http://localhost:5000/api/newsletter \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'

# Get services
curl http://localhost:5000/api/services

# Get portfolio
curl http://localhost:5000/api/portfolio

# Get blog
curl http://localhost:5000/api/blog
```

### Using Postman
1. Import endpoints as described above
2. Set method (GET/POST)
3. Set URL
4. Add headers if needed
5. Add request body for POST
6. Send request

---

## API Client Usage

### Basic Fetch
```javascript
import apiClient from './api/client.js';

// GET
const data = await apiClient.get('/api/services');

// POST
const result = await apiClient.post('/api/contact', formData);

// PUT
const updated = await apiClient.put('/api/item/1', { name: 'New' });

// DELETE
await apiClient.delete('/api/item/1');
```

### With Error Handling
```javascript
try {
  const response = await apiClient.post('/api/contact', data);
  if (response.success) {
    console.log('Success!');
  }
} catch (error) {
  console.error('API Error:', error.message);
}
```

---

## Troubleshooting

### "Cannot reach API" Error
- Check if backend server is running: `node server.js`
- Check API URL in `.env` (should be `http://localhost:5000`)
- Check firewall/network settings

### "Invalid email" Error
- Email must be valid format: `user@example.com`
- Check for extra spaces or special characters

### "Already subscribed" Error
- Email already in newsletter list
- User can unsubscribe first if needed

### CORS Error
- Check if backend has CORS enabled
- Check if origin is whitelisted in production

---

## Changelog

### Version 1.0.0 (Jan 2024)
- Initial API release
- All 7 main endpoints
- Error handling
- CORS support

---

For more details, see:
- [COMPONENTS.md](./COMPONENTS.md) - How to use endpoints in code
- [README.md](./README.md) - General project overview
