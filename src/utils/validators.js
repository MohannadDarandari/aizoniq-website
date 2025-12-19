/**
 * Form Validators
 * Validation functions for form inputs
 */

import { VALIDATION } from '../config/constants.js';

/**
 * Validate email address
 */
export function validateEmail(email) {
  return VALIDATION.EMAIL.test(email);
}

/**
 * Validate phone number
 */
export function validatePhone(phone) {
  // Remove spaces and dashes
  const cleaned = phone.replace(/[\s-]/g, '');
  return VALIDATION.PHONE.test(cleaned);
}

/**
 * Validate message length
 */
export function validateMessage(message) {
  const text = message.trim();
  return text.length >= 10 && text.length <= 5000;
}

/**
 * Validate URL
 */
export function validateURL(url) {
  try {
    new URL(url);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * Validate credit card
 */
export function validateCreditCard(cardNumber) {
  // Remove spaces
  const cleaned = cardNumber.replace(/\s/g, '');
  
  // Check if it's all digits
  if (!/^\d+$/.test(cleaned)) return false;
  
  // Luhn algorithm
  let sum = 0;
  let isEven = false;
  
  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i], 10);
    
    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    
    sum += digit;
    isEven = !isEven;
  }
  
  return sum % 10 === 0;
}

/**
 * Validate field is not empty
 */
export function validateRequired(value) {
  return value && value.trim().length > 0;
}

/**
 * Validate minimum length
 */
export function validateMinLength(value, length) {
  return value && value.trim().length >= length;
}

/**
 * Validate maximum length
 */
export function validateMaxLength(value, length) {
  return !value || value.length <= length;
}

/**
 * Validate field matches regex
 */
export function validatePattern(value, pattern) {
  if (typeof pattern === 'string') {
    pattern = new RegExp(pattern);
  }
  return pattern.test(value);
}

/**
 * Validate phone format (international)
 */
export function validatePhoneInternational(phone) {
  const intlPattern = /^\+?[1-9]\d{1,14}$/;
  const cleaned = phone.replace(/[\s\-\(\)]/g, '');
  return intlPattern.test(cleaned);
}
