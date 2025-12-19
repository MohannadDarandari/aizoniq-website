/**
 * API Services
 * Business logic for API calls
 */

import apiClient from '../client.js';
import { API_ENDPOINTS } from '../../config/constants.js';

/**
 * Contact Service
 */
export const contactService = {
  submit: (formData) => 
    apiClient.post(API_ENDPOINTS.CONTACT, formData)
};

/**
 * Newsletter Service
 */
export const newsletterService = {
  subscribe: (email) => 
    apiClient.post(API_ENDPOINTS.NEWSLETTER, { email })
};

/**
 * Chatbot Service
 */
export const chatbotService = {
  sendConversation: (messages) => 
    apiClient.post(API_ENDPOINTS.CHATBOT, { messages, timestamp: new Date() })
};

/**
 * Payment Service
 */
export const paymentService = {
  createPaymentIntent: (amount, service) => 
    apiClient.post(API_ENDPOINTS.PAYMENT_INTENT, { amount, service })
};

/**
 * Services Data
 */
export const servicesData = {
  getAll: () => 
    apiClient.get(API_ENDPOINTS.SERVICES)
};

/**
 * Portfolio Data
 */
export const portfolioData = {
  getAll: () => 
    apiClient.get(API_ENDPOINTS.PORTFOLIO)
};

/**
 * Blog Data
 */
export const blogData = {
  getAll: () => 
    apiClient.get(API_ENDPOINTS.BLOG)
};

/**
 * Health Check
 */
export const healthCheck = {
  ping: () => 
    apiClient.get(API_ENDPOINTS.HEALTH)
};
