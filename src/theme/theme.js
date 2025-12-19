/**
 * Theme Management System
 * Supports Light, Dark, and System preference modes
 */

class ThemeManager {
  constructor() {
    this.themes = ['light', 'dark', 'system'];
    this.STORAGE_KEY = 'aizoniq_theme';
    this.currentTheme = this.getStoredTheme();
    this.init();
  }

  /**
   * Initialize theme manager
   */
  init() {
    this.applyTheme();
    this.watchSystemPreference();
  }

  /**
   * Get stored theme from localStorage or default to 'system'
   */
  getStoredTheme() {
    return localStorage.getItem(this.STORAGE_KEY) || 'system';
  }

  /**
   * Detect system color scheme preference
   */
  detectSystemTheme() {
    if (window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  }

  /**
   * Get effective theme (considering system preference)
   */
  getEffectiveTheme() {
    if (this.currentTheme === 'system') {
      return this.detectSystemTheme();
    }
    return this.currentTheme;
  }

  /**
   * Apply theme to document
   */
  applyTheme() {
    const theme = this.getEffectiveTheme();
    const root = document.documentElement;
    
    // Remove old theme classes
    root.classList.remove('light-mode', 'dark-mode');
    
    // Apply new theme
    if (theme === 'dark') {
      root.classList.add('dark-mode');
      root.setAttribute('data-theme', 'dark');
    } else {
      root.classList.add('light-mode');
      root.setAttribute('data-theme', 'light');
    }

    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute(
        'content',
        theme === 'dark' ? '#1a1a1a' : '#ffffff'
      );
    }

    // Dispatch event
    document.dispatchEvent(
      new CustomEvent('themeChanged', { detail: { theme, effectiveTheme: theme } })
    );
  }

  /**
   * Toggle between light and dark themes
   */
  toggle() {
    if (this.currentTheme === 'light') {
      this.setTheme('dark');
    } else if (this.currentTheme === 'dark') {
      this.setTheme('light');
    } else {
      // From system mode, switch to opposite of current effective
      const effective = this.getEffectiveTheme();
      this.setTheme(effective === 'dark' ? 'light' : 'dark');
    }
  }

  /**
   * Set specific theme
   */
  setTheme(theme) {
    if (!this.themes.includes(theme)) return;
    this.currentTheme = theme;
    localStorage.setItem(this.STORAGE_KEY, theme);
    this.applyTheme();
  }

  /**
   * Watch for system theme changes
   */
  watchSystemPreference() {
    if (window.matchMedia) {
      const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
      darkModeQuery.addListener?.(() => {
        if (this.currentTheme === 'system') {
          this.applyTheme();
        }
      });
      // For newer browsers
      darkModeQuery.addEventListener?.('change', () => {
        if (this.currentTheme === 'system') {
          this.applyTheme();
        }
      });
    }
  }

  /**
   * Check if dark mode is active
   */
  isDark() {
    return this.getEffectiveTheme() === 'dark';
  }

  /**
   * Check if light mode is active
   */
  isLight() {
    return this.getEffectiveTheme() === 'light';
  }

  /**
   * Get theme icon (sun/moon)
   */
  getThemeIcon() {
    return this.isDark() ? '☀️' : '🌙';
  }

  /**
   * Get theme label
   */
  getThemeLabel() {
    const theme = this.getEffectiveTheme();
    return theme === 'dark' ? 'Dark' : 'Light';
  }
}

// Export singleton instance
export const themeManager = new ThemeManager();
