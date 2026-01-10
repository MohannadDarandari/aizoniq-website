/**
 * i18n - Internationalization Module
 * Supports Arabic and English
 */

class I18n {
  constructor() {
    this.currentLanguage = this.getLanguage();
    this.translations = {
      ar: {
        // Navigation
        'nav.home': 'الرئيسية',
        'nav.services': 'الخدمات',
        'nav.portfolio': 'المحفظة',
        'nav.about': 'عن الشركة',
        'nav.blog': 'المدونة',
        'nav.contact': 'اتصل بنا',

        // Hero Section
        'hero.title': 'حلول ذكية للشركات الحديثة',
        'hero.subtitle': 'نحن نقدم خدمات AI متقدمة لتطوير أعمالك',
        'hero.cta': 'ابدأ الآن',

        // Services
        'services.ai_automation': 'أتمتة ذكية',
        'services.ai_automation_desc': 'حلول تلقائية للعمليات المعقدة',
        'services.data_analytics': 'تحليل البيانات',
        'services.data_analytics_desc': 'استخراج رؤى قيمة من بيانات الشركة',
        'services.custom_solutions': 'حلول مخصصة',
        'services.custom_solutions_desc': 'أنظمة مصممة خصيصاً لاحتياجاتك',

        // Chatbot
        'chatbot.welcome': 'مرحباً بك! 👋',
        'chatbot.welcome_message': 'كيف يمكنني مساعدتك اليوم؟',
        'chatbot.services': 'نحن نقدم: ✅ أتمتة ذكية\n✅ تحليل بيانات\n✅ حلول مخصصة\n\nما الذي يثير اهتمامك؟',
        'chatbot.pricing': 'تختلف أسعارنا حسب الحل:\n💎 باقات مخصصة\n📞 تواصل معنا للعرض',
        'chatbot.portfolio': 'تعلم AI في 30 يوم:\n💻 دورة عملية كاملة\n💰 299 ريال فقط\n📢 تواصل واتساب: +966540303098',
        'chatbot.academy': 'تعلم AI في 30 يوم:\n💻 دورة عملية كاملة\n💰 299 ريال فقط\n📢 تواصل واتساب: +966540303098',
        'chatbot.contact': '📧 البريد: info@aizoniq.com\n📱 الهاتف: +966 50 xxx xxxx\n💬 تواصل معنا الآن',
        'chatbot.team': 'فريقنا يتكون من:\n👨‍💻 مهندسي AI متخصصين\n📊 محللي بيانات خبراء\n🎨 مصممين محترفين',
        'chatbot.blog': 'اقرأ أحدث مقالاتنا عن:\n🤖 تقنيات AI الحديثة\n💼 دراسات حالة واقعية\n📚 نصائح عملية مفيدة',
        'chatbot.default': 'عذراً، لم أفهم السؤال. يمكنك السؤال عن الخدمات أو الأسعار أو المحفظة؟',
        'chatbot.input_placeholder': 'اكتب سؤالك هنا...',
        'chatbot.send': 'إرسال',
        'chatbot.close': 'إغلاق',

        // Buttons
        'btn.learn_more': 'تعرف أكثر',
        'btn.get_started': 'ابدأ الآن',
        'btn.contact_us': 'تواصل معنا',
        'btn.view_portfolio': 'عرض المحفظة',

        // Footer
        'footer.rights': 'جميع الحقوق محفوظة © 2024 أيزونيك',
        'footer.contact': 'تواصل معنا',
        'footer.privacy': 'سياسة الخصوصية',
      },
      en: {
        // Navigation
        'nav.home': 'Home',
        'nav.services': 'Services',
        'nav.portfolio': 'Portfolio',
        'nav.about': 'About',
        'nav.blog': 'Blog',
        'nav.contact': 'Contact',

        // Hero Section
        'hero.title': 'Smart Solutions for Modern Businesses',
        'hero.subtitle': 'We provide advanced AI services to grow your business',
        'hero.cta': 'Get Started',

        // Services
        'services.ai_automation': 'Smart Automation',
        'services.ai_automation_desc': 'Automated solutions for complex processes',
        'services.data_analytics': 'Data Analytics',
        'services.data_analytics_desc': 'Extract valuable insights from your data',
        'services.custom_solutions': 'Custom Solutions',
        'services.custom_solutions_desc': 'Systems designed specifically for you',

        // Chatbot
        'chatbot.welcome': 'Welcome! 👋',
        'chatbot.welcome_message': 'How can I help you today?',
        'chatbot.services': 'We offer:\n✅ Smart Automation\n✅ Data Analytics\n✅ Custom Solutions\n\nWhat interests you?',
        'chatbot.pricing': 'Our pricing varies by solution:\n💎 Custom packages\n📞 Contact us for quotes',
        'chatbot.portfolio': 'Learn AI in 30 Days:\n💻 Complete practical course\n💰 Only 299 SAR\n📢 WhatsApp: +966540303098',
        'chatbot.academy': 'Learn AI in 30 Days:\n💻 Complete practical course\n💰 Only 299 SAR\n📢 WhatsApp: +966540303098',
        'chatbot.contact': '📧 Email: info@aizoniq.com\n📱 Phone: +966 50 xxx xxxx\n💬 Contact us now',
        'chatbot.team': 'Our team consists of:\n👨‍💻 Specialized AI engineers\n📊 Expert data analysts\n🎨 Professional designers',
        'chatbot.blog': 'Read our latest articles about:\n🤖 Modern AI technologies\n💼 Real case studies\n📚 Practical tips',
        'chatbot.default': 'Sorry, I didn\'t understand. You can ask about services, pricing, or portfolio?',
        'chatbot.input_placeholder': 'Type your question here...',
        'chatbot.send': 'Send',
        'chatbot.close': 'Close',

        // Buttons
        'btn.learn_more': 'Learn More',
        'btn.get_started': 'Get Started',
        'btn.contact_us': 'Contact Us',
        'btn.view_portfolio': 'View Portfolio',

        // Footer
        'footer.rights': 'All rights reserved © 2024 Aizoniq',
        'footer.contact': 'Contact Us',
        'footer.privacy': 'Privacy Policy',
      },
    };

    this.init();
  }

  /**
   * Initialize i18n
   */
  init() {
    this.applyLanguage();
    this.watchLanguageChanges();
  }

  /**
   * Get current language from localStorage or browser
   */
  getLanguage() {
    let lang = localStorage.getItem('language');
    if (!lang) {
      lang = navigator.language.startsWith('ar') ? 'ar' : 'en';
      localStorage.setItem('language', lang);
    }
    return lang;
  }

  /**
   * Set current language
   */
  setLanguage(lang) {
    if (lang === 'ar' || lang === 'en') {
      this.currentLanguage = lang;
      localStorage.setItem('language', lang);
      this.applyLanguage();
      document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
  }

  /**
   * Get translated string
   */
  get(key, defaultValue = key) {
    const keys = key.split('.');
    let value = this.translations[this.currentLanguage];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || defaultValue;
  }

  /**
   * Apply language to HTML
   */
  applyLanguage() {
    const isArabic = this.currentLanguage === 'ar';
    document.documentElement.lang = this.currentLanguage;
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('data-language', this.currentLanguage);
  }

  /**
   * Watch for language changes from other instances
   */
  watchLanguageChanges() {
    document.addEventListener('languageChanged', (e) => {
      if (e.detail.lang !== this.currentLanguage) {
        this.currentLanguage = e.detail.lang;
        this.applyLanguage();
      }
    });
  }

  /**
   * Check if current language is RTL (Arabic)
   */
  isRTL() {
    return this.currentLanguage === 'ar';
  }

  /**
   * Check if current language is LTR (English)
   */
  isLTR() {
    return this.currentLanguage === 'en';
  }
}

// Export singleton instance
export const i18n = new I18n();
