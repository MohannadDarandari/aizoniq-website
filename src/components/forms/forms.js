/**
 * Forms Component
 * Reusable form handlers and validation
 */

import { contactService, newsletterService } from '../../api/services/index.js';
import { VALIDATION, MESSAGES } from '../../config/constants.js';
import { validateEmail, validatePhone } from '../../utils/validators.js';
import { showNotification } from '../../utils/helpers.js';

/**
 * Contact Form Handler
 */
export class ContactForm {
  constructor(formSelector = '#contactForm') {
    this.form = document.querySelector(formSelector);
    this.isSubmitting = false;

    if (this.form) {
      this.attachEvents();
    }
  }

  attachEvents() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.form.addEventListener('reset', () => this.handleReset());
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.isSubmitting) return;

    // Validate
    if (!this.validate()) {
      return;
    }

    this.isSubmitting = true;
    const submitBtn = this.form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    try {
      const formData = new FormData(this.form);
      const data = Object.fromEntries(formData);

      await contactService.submit(data);

      showNotification('✓ Message sent successfully!', 'success');
      this.form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      showNotification('✗ Failed to send message. Please try again.', 'error');
    } finally {
      this.isSubmitting = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
    }
  }

  validate() {
    const name = this.form.querySelector('[name="name"]');
    const email = this.form.querySelector('[name="email"]');
    const phone = this.form.querySelector('[name="phone"]');
    const message = this.form.querySelector('[name="message"]');

    // Clear previous errors
    this.form.querySelectorAll('.error-message').forEach(el => el.remove());

    let isValid = true;

    if (!name.value.trim()) {
      this.showError(name, 'Name is required');
      isValid = false;
    }

    if (!validateEmail(email.value)) {
      this.showError(email, 'Valid email is required');
      isValid = false;
    }

    if (phone.value && !validatePhone(phone.value)) {
      this.showError(phone, 'Valid phone number is required');
      isValid = false;
    }

    if (!message.value.trim() || message.value.trim().length < 10) {
      this.showError(message, 'Message must be at least 10 characters');
      isValid = false;
    }

    return isValid;
  }

  showError(field, message) {
    field.classList.add('error');
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    field.parentElement.appendChild(error);
  }

  handleReset() {
    this.form.querySelectorAll('input, textarea').forEach(field => {
      field.classList.remove('error');
    });
    this.form.querySelectorAll('.error-message').forEach(el => el.remove());
  }
}

/**
 * Newsletter Form Handler
 */
export class NewsletterForm {
  constructor(formSelector = '.newsletter-form') {
    this.forms = document.querySelectorAll(formSelector);
    this.isSubmitting = false;

    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e, form));
    });
  }

  async handleSubmit(e, form) {
    e.preventDefault();

    if (this.isSubmitting) return;

    const emailInput = form.querySelector('input[type="email"]');
    const email = emailInput.value.trim();

    if (!validateEmail(email)) {
      showNotification('Please enter a valid email', 'error');
      return;
    }

    this.isSubmitting = true;
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Subscribing...';

    try {
      await newsletterService.subscribe(email);
      showNotification('✓ Successfully subscribed!', 'success');
      form.reset();
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      showNotification('✗ Subscription failed. Please try again.', 'error');
    } finally {
      this.isSubmitting = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Subscribe';
    }
  }
}

/**
 * Payment Form Handler
 */
export class PaymentForm {
  constructor(formSelector = '#paymentForm') {
    this.form = document.querySelector(formSelector);
    this.isProcessing = false;

    if (this.form) {
      this.attachEvents();
    }
  }

  attachEvents() {
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
  }

  async handleSubmit(e) {
    e.preventDefault();

    if (this.isProcessing) return;

    const amount = this.form.querySelector('[name="amount"]').value;
    const service = this.form.querySelector('[name="service"]').value;

    if (!amount || !service) {
      showNotification('Please select a service and amount', 'error');
      return;
    }

    this.isProcessing = true;
    const submitBtn = this.form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Processing...';

    try {
      // Implementation depends on Stripe integration
      showNotification('Payment processing started', 'info');
      // Handle payment logic here
    } catch (error) {
      console.error('Payment error:', error);
      showNotification('✗ Payment failed. Please try again.', 'error');
    } finally {
      this.isProcessing = false;
      submitBtn.disabled = false;
      submitBtn.textContent = 'Pay Now';
    }
  }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  new ContactForm('#contactForm');
  new NewsletterForm('.newsletter-form');
  new PaymentForm('#paymentForm');
});
