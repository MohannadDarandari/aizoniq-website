/**
 * Analytics Tracker
 * Google Analytics integration and event tracking
 */

import CONFIG from '../../config/config.js';

export class AnalyticsTracker {
  constructor() {
    this.gaId = CONFIG.ANALYTICS.GA_ID;
    this.isEnabled = CONFIG.ANALYTICS.ENABLED;
    this.init();
  }

  /**
   * Initialize Google Analytics
   */
  init() {
    if (!this.isEnabled || !this.gaId) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${this.gaId}`;
    document.head.appendChild(script);

    // Configure Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', this.gaId);

    // Track page view
    this.trackPageView();

    // Track user interactions
    this.trackInteractions();
  }

  /**
   * Track page view
   */
  trackPageView(title = document.title, path = window.location.pathname) {
    if (!this.isEnabled) return;

    gtag('event', 'page_view', {
      page_title: title,
      page_path: path
    });
  }

  /**
   * Track custom event
   */
  trackEvent(eventName, eventData = {}) {
    if (!this.isEnabled) return;

    gtag('event', eventName, eventData);
  }

  /**
   * Track form submission
   */
  trackFormSubmission(formName) {
    this.trackEvent('form_submit', {
      form_name: formName
    });
  }

  /**
   * Track file download
   */
  trackDownload(fileName) {
    this.trackEvent('file_download', {
      file_name: fileName
    });
  }

  /**
   * Track external link click
   */
  trackExternalLink(url) {
    this.trackEvent('click', {
      link_url: url,
      link_type: 'external'
    });
  }

  /**
   * Track scroll depth
   */
  trackScrollDepth() {
    let maxScroll = 0;

    window.addEventListener('scroll', () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;

        // Track milestones: 25%, 50%, 75%, 100%
        const milestones = [25, 50, 75, 100];
        for (let milestone of milestones) {
          if (maxScroll >= milestone && maxScroll < milestone + 10) {
            this.trackEvent('scroll_depth', {
              scroll_percent: milestone
            });
          }
        }
      }
    });
  }

  /**
   * Track time on page
   */
  trackTimeOnPage() {
    const startTime = Date.now();

    window.addEventListener('beforeunload', () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      this.trackEvent('time_on_page', {
        seconds: timeSpent
      });
    });
  }

  /**
   * Track interactions
   */
  trackInteractions() {
    // Track button clicks
    document.addEventListener('click', (e) => {
      const button = e.target.closest('button');
      if (button && button.textContent.trim()) {
        this.trackEvent('button_click', {
          button_text: button.textContent.trim()
        });
      }
    });

    // Track link clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (link && link.href && !link.href.includes(window.location.hostname)) {
        this.trackExternalLink(link.href);
      }
    });
  }
}

// Export singleton instance
export const tracker = new AnalyticsTracker();
