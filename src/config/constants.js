/**
 * Application Constants
 * Shared constants used across the application
 */

export const ROUTES = {
  HOME: '/',
  SERVICES: '/services.html',
  PORTFOLIO: '/portfolio.html',
  BLOG: '/blog.html',
  ABOUT: '/about.html',
  CONTACT: '/contact.html'
};

export const API_ENDPOINTS = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
  CHATBOT: '/api/chatbot-conversation',
  PAYMENT_INTENT: '/api/create-payment-intent',
  SERVICES: '/api/services',
  PORTFOLIO: '/api/portfolio',
  BLOG: '/api/blog',
  HEALTH: '/api/health'
};

export const MESSAGES = {
  SUCCESS: 'Operation completed successfully',
  ERROR: 'An error occurred. Please try again.',
  LOADING: 'Loading...',
  SENDING: 'Sending...',
  CONTACT_SUCCESS: 'Thank you! We\'ll be in touch soon.',
  CONTACT_ERROR: 'Failed to send message. Please try again.',
  NEWSLETTER_SUCCESS: 'Successfully subscribed to our newsletter!',
  NEWSLETTER_ERROR: 'Subscription failed. Please try again.'
};

export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000
};

export const STORAGE_KEYS = {
  USER_ID: 'aizoniq_user_id',
  CHAT_HISTORY: 'aizoniq_chat_history',
  USER_PREFERENCES: 'aizoniq_user_prefs',
  LAST_VISIT: 'aizoniq_last_visit'
};

export const TIMING = {
  CHAT_TYPING_DELAY: 800,
  FORM_SUBMIT_DELAY: 500,
  NOTIFICATION_DISPLAY: 3000
};

export const SERVICES = [
  {
    id: 'writing',
    name: 'AI Content Writing',
    startPrice: 299
  },
  {
    id: 'image',
    name: 'AI Image Generation',
    startPrice: 199
  },
  {
    id: 'chatbot',
    name: 'AI Chatbots',
    startPrice: 399
  },
  {
    id: 'analytics',
    name: 'Data Analytics',
    startPrice: 299
  },
  {
    id: 'video',
    name: 'AI Video Creation',
    startPrice: 599
  },
  {
    id: 'custom',
    name: 'Custom AI Solutions',
    startPrice: 999
  }
];
