# Quick Reference Guide - 🌍 Bilingual + 🎨 Dark Mode + 💬 Modern Chatbot

## 🎯 What's New?

### 1️⃣ **Bilingual Support (العربية + English)**
- Automatic language detection
- Saved preference in localStorage
- RTL/LTR layout switching
- 50+ translation keys ready

### 2️⃣ **Dark/Light Theme System**
- Light mode (default)
- Dark mode
- System preference detection
- Smooth transitions
- CSS variables for all colors

### 3️⃣ **Modern Chatbot UI**
- Gradient header
- Animated messages
- Typing indicator
- Quick reply buttons
- Responsive design
- Accessible

---

## 📁 New Files Created

```
src/
├── i18n/i18n.js              ← Translation system
├── theme/theme.js            ← Theme manager
└── components/theme-switcher/theme-switcher.js ← Language & theme buttons

css/
├── variables-theme.css       ← CSS variables & colors
├── chatbot-modern.css        ← Modern chatbot styles
└── theme-switcher.css        ← Switcher button styles
```

---

## 🚀 How to Use

### Change Language
```javascript
import { i18n } from './i18n/i18n.js';

i18n.setLanguage('ar');  // العربية
i18n.setLanguage('en');  // English
```

### Toggle Theme
```javascript
import { themeManager } from './theme/theme.js';

themeManager.toggle();              // Toggle Light ↔ Dark
themeManager.setTheme('dark');      // Set dark
themeManager.setTheme('light');     // Set light
themeManager.setTheme('system');    // Follow system
```

### Get Translated Text
```javascript
const welcome = i18n.get('chatbot.welcome');
const services = i18n.get('chatbot.services');
```

### Listen for Changes
```javascript
document.addEventListener('languageChanged', (e) => {
  console.log('Language:', e.detail.lang); // 'ar' or 'en'
});

document.addEventListener('themeChanged', (e) => {
  console.log('Theme:', e.detail.effectiveTheme); // 'dark' or 'light'
});
```

---

## 🎨 CSS Variables

All colors use CSS variables for theme switching:

```css
:root {
  /* Light Mode */
  --primary-color: #667eea;
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
}

[data-theme="dark"] {
  /* Dark Mode */
  --bg-primary: #1a1a2e;
  --text-primary: #e0e0e0;
}
```

Update any element with these variables:
```css
.my-element {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border-color);
}
```

---

## 🌐 Translation Keys

### Common Keys
```javascript
i18n.get('nav.home')           // Navigation: Home
i18n.get('nav.services')       // Navigation: Services
i18n.get('btn.learn_more')     // Button: Learn More
i18n.get('btn.get_started')    // Button: Get Started
```

### Chatbot Keys
```javascript
i18n.get('chatbot.welcome')    // Welcome message
i18n.get('chatbot.services')   // Services info
i18n.get('chatbot.pricing')    // Pricing info
i18n.get('chatbot.contact')    // Contact info
i18n.get('chatbot.input_placeholder') // Input text
```

### Add More Keys
Edit `src/i18n/i18n.js`:
```javascript
ar: {
  'your.key': 'القيمة العربية',
  // ...
},
en: {
  'your.key': 'English value',
  // ...
}
```

---

## 🎛️ Theme Switcher Button

Automatically added to header with:
- 🇸🇦/🇬🇧 Language toggle
- 🌙/☀️ Theme toggle

Users can click to change preferences.

---

## 📱 Responsive Design

All components are responsive:
- Mobile: Full width
- Tablet: Optimized
- Desktop: Enhanced UI

Chatbot buttons hide text on small screens (show only icons).

---

## ♿ Accessibility Features

- Keyboard navigation support
- Focus indicators
- ARIA labels
- High contrast support
- Reduced motion support

---

## 🔄 Automatic Features

### On Page Load:
✅ Detects saved language preference
✅ Detects saved theme preference
✅ Applies RTL for Arabic
✅ Creates switcher buttons
✅ Initializes all components

### On Language Change:
✅ Updates all translated text
✅ Changes text direction (RTL/LTR)
✅ Saves preference
✅ Dispatches `languageChanged` event

### On Theme Change:
✅ Updates all colors via CSS variables
✅ Saves preference
✅ Updates switcher icon
✅ Dispatches `themeChanged` event

---

## 🧪 Testing

### Test Language Switching
1. Open browser console
2. Run: `i18n.setLanguage('ar')`
3. Page should change to Arabic (RTL)
4. Refresh - should stay in Arabic

### Test Theme Switching
1. Click the theme button (☀️/🌙)
2. Colors should change smoothly
3. Refresh - should remember choice
4. Check in dark system settings

---

## 🐛 Troubleshooting

**Translations not showing?**
- Check key exists in `src/i18n/i18n.js`
- Use `i18n.get('key', 'fallback')`

**Theme not applying?**
- Ensure `variables-theme.css` is loaded
- Check `data-theme` attribute on `<html>`

**Switcher buttons not visible?**
- Ensure `theme-switcher.css` is loaded
- Check header element exists

---

## 📊 Performance

- ⚡ Instant language switching (no reload)
- ⚡ Instant theme switching (CSS variables)
- ⚡ Small JS bundle size (<5KB)
- ⚡ Minimal CSS overhead

---

## 🎯 Next Steps

1. Translate remaining pages
2. Add more translation keys
3. Test all languages and themes
4. Deploy and monitor
5. Gather user feedback

---

**Version:** 2.0  
**Last Updated:** 2024  
**Status:** ✅ Ready for Production
