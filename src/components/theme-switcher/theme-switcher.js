/**
 * Language and Theme Switcher Component
 */

import { i18n } from '../../i18n/i18n.js';
import { themeManager } from '../../theme/theme.js';

export class ThemeSwitcher {
  constructor(containerSelector = 'header') {
    this.container = document.querySelector(containerSelector);
    this.init();
  }

  /**
   * Initialize theme switcher
   */
  init() {
    this.createSwitchers();
    this.attachEvents();
  }

  /**
   * Create switcher buttons in header
   */
  createSwitchers() {
    // Check if switchers already exist
    if (document.getElementById('language-switcher')) return;

    const switcherHTML = `
      <div class="theme-switchers">
        <!-- Language Switcher -->
        <button id="language-switcher" 
                class="switcher-btn language-switcher" 
                aria-label="Toggle language">
          <span class="switcher-flag">${i18n.currentLanguage === 'ar' ? '🇸🇦' : '🇬🇧'}</span>
          <span class="switcher-text">${i18n.currentLanguage.toUpperCase()}</span>
        </button>

        <!-- Theme Switcher -->
        <button id="theme-switcher" 
                class="switcher-btn theme-switcher" 
                aria-label="Toggle dark mode">
          <span class="switcher-icon">${themeManager.getThemeIcon()}</span>
          <span class="switcher-text">${themeManager.getThemeLabel()}</span>
        </button>
      </div>
    `;

    // Insert after navbar if exists, otherwise at the top
    const nav = document.querySelector('nav');
    if (nav) {
      nav.insertAdjacentHTML('beforeend', switcherHTML);
    } else {
      this.container.insertAdjacentHTML('beforeend', switcherHTML);
    }
  }

  /**
   * Attach event listeners
   */
  attachEvents() {
    const langBtn = document.getElementById('language-switcher');
    const themeBtn = document.getElementById('theme-switcher');

    if (langBtn) {
      langBtn.addEventListener('click', () => this.toggleLanguage());
    }

    if (themeBtn) {
      themeBtn.addEventListener('click', () => this.toggleTheme());
    }

    // Update UI when language changes
    document.addEventListener('languageChanged', () => {
      this.updateUI();
    });

    // Update UI when theme changes
    document.addEventListener('themeChanged', () => {
      this.updateUI();
    });
  }

  /**
   * Toggle language
   */
  toggleLanguage() {
    const current = i18n.currentLanguage;
    const newLang = current === 'ar' ? 'en' : 'ar';
    i18n.setLanguage(newLang);
    this.updateUI();
  }

  /**
   * Toggle theme
   */
  toggleTheme() {
    themeManager.toggle();
    this.updateUI();
  }

  /**
   * Update switcher UI
   */
  updateUI() {
    const langBtn = document.getElementById('language-switcher');
    const themeBtn = document.getElementById('theme-switcher');

    if (langBtn) {
      const flag = i18n.currentLanguage === 'ar' ? '🇸🇦' : '🇬🇧';
      const text = i18n.currentLanguage.toUpperCase();
      langBtn.innerHTML = `<span class="switcher-flag">${flag}</span><span class="switcher-text">${text}</span>`;
    }

    if (themeBtn) {
      const icon = themeManager.getThemeIcon();
      const label = themeManager.getThemeLabel();
      themeBtn.innerHTML = `<span class="switcher-icon">${icon}</span><span class="switcher-text">${label}</span>`;
    }
  }
}

export const themeSwitcher = new ThemeSwitcher();
