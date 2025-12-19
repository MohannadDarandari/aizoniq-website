/**
 * Chatbot Component
 * AI chatbot widget with smart responses
 */

import { chatbotService } from '../../api/services/index.js';
import CONFIG from '../../config/config.js';
import { MESSAGES, STORAGE_KEYS } from '../../config/constants.js';
import { formatTime, generateUUID } from '../../utils/helpers.js';
import { StorageManager } from '../../utils/storage.js';
import { i18n } from '../../i18n/i18n.js';
import { themeManager } from '../../theme/theme.js';

export class ChatbotWidget {
  constructor(containerSelector = '#chatbot-widget') {
    this.container = document.querySelector(containerSelector);
    this.isOpen = false;
    this.isTyping = false;
    this.messages = [];
    this.sessionId = generateUUID();
    this.storage = new StorageManager();
    this.i18n = i18n;
    this.theme = themeManager;
    this.init();
  }

  init() {
    this.loadHistory();
    this.render();
    this.attachEvents();
    this.setupLanguageWatcher();
    this.setupThemeWatcher();
  }

  /**
   * Watch for language changes
   */
  setupLanguageWatcher() {
    document.addEventListener('languageChanged', () => {
      this.render();
    });
  }

  /**
   * Watch for theme changes
   */
  setupThemeWatcher() {
    document.addEventListener('themeChanged', () => {
      this.updateTheme();
    });
  }

  /**
   * Load chat history from localStorage
   */
  loadHistory() {
    const saved = this.storage.get(STORAGE_KEYS.CHAT_HISTORY);
    this.messages = saved || [];
  }

  /**
   * Save chat history to localStorage
   */
  saveHistory() {
    this.storage.set(STORAGE_KEYS.CHAT_HISTORY, this.messages);
  }

  /**
   * Render chatbot UI
   */
  render() {
    if (!this.container) {
      console.error('Chatbot container not found');
      return;
    }

    const isArabic = i18n.currentLanguage === 'ar';
    const placeholder = i18n.get('chatbot.input_placeholder');
    const send = i18n.get('chatbot.send');
    const close = i18n.get('chatbot.close');

    const html = `
      <div class="chatbot-container ${this.isOpen ? 'open' : ''}" dir="${isArabic ? 'rtl' : 'ltr'}">
        <div class="chatbot-header">
          <div class="chatbot-header-info">
            <h3>🤖 ${i18n.get('chatbot.welcome')}</h3>
            <span class="chatbot-status">Online</span>
          </div>
          <div class="chatbot-header-actions">
            <button class="chatbot-minimize" aria-label="Minimize" title="−">−</button>
            <button class="chatbot-close" aria-label="${close}" title="×">×</button>
          </div>
        </div>
        
        <div class="chatbot-messages">
          ${this.messages.map((msg) => this.renderMessage(msg)).join('')}
        </div>

        <div class="chatbot-quick-replies" id="quickReplies">
          ${this.isOpen && this.messages.length === 0 ? `
            <div class="quick-replies-label">${isArabic ? 'اختر من الأسئلة الشائعة:' : 'Quick questions:'}</div>
            <button class="quick-reply">${isArabic ? 'ما الخدمات التي تقدمونها؟' : 'What services do you offer?'}</button>
            <button class="quick-reply">${isArabic ? 'كم أسعاركم؟' : 'How much do you charge?'}</button>
            <button class="quick-reply">${isArabic ? 'أخبرني عن محفظتكم' : 'Tell me about your portfolio'}</button>
            <button class="quick-reply">${isArabic ? 'معلومات التواصل' : 'Contact information'}</button>
          ` : ''}
        </div>

        <div class="chatbot-input">
          <input 
            type="text" 
            placeholder="${placeholder}" 
            class="chatbot-input-field"
            aria-label="Chat message input"
          />
          <button class="chatbot-send" aria-label="${send}" title="${send}">
            <span class="send-icon">${isArabic ? '←' : '→'}</span>
          </button>
        </div>
      </div>

      <button class="chatbot-toggle" aria-label="Open chat">
        <span class="chatbot-pulse"></span>
        <span>💬</span>
      </button>
    `;

    this.container.innerHTML = html;
  }

  /**
   * Render individual message
   */
  renderMessage(msg) {
    const timestamp = msg.timestamp ? formatTime(msg.timestamp) : '';
    return `
      <div class="message ${msg.sender}">
        <p>${this.escapeHtml(msg.text)}</p>
        ${timestamp ? `<span class="timestamp">${timestamp}</span>` : ''}
      </div>
    `;
  }

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
  }

  /**
   * Attach event listeners
   */
  attachEvents() {
    const toggle = this.container.querySelector('.chatbot-toggle');
    const close = this.container.querySelector('.chatbot-close');
    const sendBtn = this.container.querySelector('.chatbot-send');
    const input = this.container.querySelector('.chatbot-input-field');

    toggle.addEventListener('click', () => this.toggleChat());
    close.addEventListener('click', () => this.toggleChat());
    sendBtn.addEventListener('click', () => this.sendMessage());
    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') this.sendMessage();
    });

    // Quick replies
    const quickReplies = this.container.querySelectorAll('.quick-reply');
    quickReplies.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        this.addMessage(e.target.textContent, 'user');
        this.respond(e.target.textContent);
      });
    });
  }

  /**
   * Toggle chat visibility
   */
  toggleChat() {
    this.isOpen = !this.isOpen;
    this.render();
    this.attachEvents();

    if (this.isOpen) {
      setTimeout(() => {
        const input = this.container.querySelector('.chatbot-input-field');
        input?.focus();
      }, 100);
    }
  }

  /**
   * Update theme when it changes
   */
  updateTheme() {
    const messages = this.container?.querySelector('.chatbot-messages');
    if (messages) {
      messages.style.backgroundColor = themeManager.isDark() 
        ? 'var(--bg-secondary)' 
        : 'var(--bg-primary)';
    }
  }

  /**
   * Send user message
   */
  sendMessage() {
    const input = this.container.querySelector('.chatbot-input-field');
    const text = input.value.trim();

    if (!text) return;

    this.addMessage(text, 'user');
    input.value = '';
    this.respond(text);
  }

  /**
   * Add message to conversation
   */
  addMessage(text, sender) {
    this.messages.push({
      text,
      sender,
      timestamp: new Date()
    });
    this.saveHistory();
    this.render();
    this.attachEvents();
    this.scrollToBottom();
  }

  /**
   * Generate AI response
   */
  async respond(userMessage) {
    if (this.isTyping) return;

    this.isTyping = true;
    this.showTypingIndicator();

    try {
      // Get response from logic
      const response = await this.generateResponse(userMessage);
      
      // Simulate typing delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      this.removeTypingIndicator();
      this.addMessage(response, 'bot');

      // Save to backend if configured
      if (CONFIG.CHATBOT.SAVE_CONVERSATIONS) {
        await chatbotService.sendConversation(this.messages);
      }
    } catch (error) {
      console.error('Chatbot error:', error);
      this.addMessage('Sorry, I encountered an error. Please try again.', 'bot');
    } finally {
      this.isTyping = false;
    }
  }

  /**
   * Generate response based on user input
   */
  async generateResponse(message) {
    const lower = message.toLowerCase();
    const lowerAr = message.toLowerCase();

    // Services
    if (/service|offer|do you do|خدم|تقدم|ما الخدمات/i.test(lower + lowerAr)) {
      return this.i18n.get('chatbot.services');
    }

    // Pricing
    if (/price|cost|how much|charge|سعر|تكلفة|كم السعر|أسعار/i.test(lower + lowerAr)) {
      return this.i18n.get('chatbot.pricing');
    }

    // Portfolio
    if (/portfolio|project|case|work|محفظة|مشروع|دراسة حالة/i.test(lower + lowerAr)) {
      return this.i18n.get('chatbot.portfolio');
    }

    // Contact
    if (/contact|email|phone|call|reach|تواصل|بريد|رقم|اتصل/i.test(lower + lowerAr)) {
      return this.i18n.get('chatbot.contact');
    }

    // Team
    if (/team|who|company|about|فريق|من|شركة|عن/i.test(lower + lowerAr)) {
      return this.i18n.get('chatbot.team');
    }

    // Blog
    if (/blog|article|post|news|مدونة|مقال|أخبار/i.test(lower + lowerAr)) {
      return this.i18n.get('chatbot.blog');
    }

    // Default
    return this.i18n.get('chatbot.default');
  }

  /**
   * Respond to initial greeting
   */
  respondToGreeting() {
    if (this.messages.length === 0) {
      this.addMessage(this.i18n.get('chatbot.greeting'), 'bot');
    }
  }

  /**
   * Show typing indicator
   */
  showTypingIndicator() {
    const messagesDiv = this.container.querySelector('.chatbot-messages');
    const typing = document.createElement('div');
    typing.className = 'message bot typing-indicator';
    typing.id = 'typing-indicator';
    typing.innerHTML = '<span></span><span></span><span></span>';
    messagesDiv.appendChild(typing);
    this.scrollToBottom();
  }

  /**
   * Remove typing indicator
   */
  removeTypingIndicator() {
    const typing = this.container.querySelector('#typing-indicator');
    typing?.remove();
  }

  /**
   * Scroll messages to bottom
   */
  scrollToBottom() {
    const messagesDiv = this.container.querySelector('.chatbot-messages');
    if (messagesDiv) {
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }
  }

  /**
   * Clear chat history
   */
  clearHistory() {
    this.messages = [];
    this.storage.remove(STORAGE_KEYS.CHAT_HISTORY);
    this.respondToGreeting();
    this.render();
    this.attachEvents();
  }
}

// Auto-initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const chatbotContainer = document.querySelector('#chatbot-widget');
  if (chatbotContainer) {
    new ChatbotWidget('#chatbot-widget');
  }
});
