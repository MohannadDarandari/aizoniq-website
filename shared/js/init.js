/**
 * Initialization Script
 * تفعيل نظام الترجمة والمكونات الأساسية
 */

// Wait for DOM to be fully loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    console.log('🚀 Initializing app...');
    
    // ✅ Check if i18n is ready
    if (typeof i18n === 'undefined') {
        console.error('❌ i18n not available');
        return;
    }
    
    // ✅ Initialize i18n system
    console.log('✓ i18n system ready');
    console.log('✓ Current language:', i18n.currentLanguage);
    
    // ✅ Apply translations
    i18n.applyLanguage();
    
    console.log('✓ App initialized successfully');
}

// Listen for language changes from other tabs
window.addEventListener('storage', function(e) {
    if (e.key === 'aizoniq_language') {
        console.log('🔄 Language changed from another tab:', e.newValue);
        if (typeof i18n !== 'undefined') {
            i18n.setLanguage(e.newValue);
        }
    }
});
