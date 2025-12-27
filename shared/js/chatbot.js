/**
 * AIZONIQ Professional Chatbot - 2024
 * Advanced AI Assistant with Bilingual Support
 */

class AIZONIQChatbot {
    constructor() {
        this.messages = [];
        this.currentLanguage = localStorage.getItem('aizoniq_language') || 'ar';
        this.init();
    }

    init() {
        this.createWidget();
        this.attachListeners();
        this.loadMessages();
        window.addEventListener('languageChanged', () => this.onLanguageChange());
    }

    createWidget() {
        const html = `
            <div class="chatbot-overlay" id="chatbot-overlay"></div>
            <button class="chatbot-toggle" id="chatbot-btn">
                <i class="fas fa-robot"></i>
                <span class="chatbot-badge">AI</span>
            </button>
            <div class="chatbot-container" id="chatbot-box">
                <div class="chatbot-header">
                    <div class="chatbot-header-content">
                        <h3>🤖 AIZONIQ Assistant</h3>
                        <div class="chat-status">
                            <span class="status-dot"></span>
                            <span>Online Now</span>
                        </div>
                    </div>
                    <button class="chatbot-close" id="chatbot-close">×</button>
                </div>
                <div class="chatbot-messages" id="chatbot-msgs">
                    <div class="chat-message bot">
                        <div class="message-bubble">
                            ${this.currentLanguage === 'ar' ? 
                                '👋 أهلاً! أنا مساعد AIZONIQ الذكي. كيف أساعدك اليوم؟' : 
                                '👋 Hello! I\'m AIZONIQ AI Assistant. How can I help you today?'
                            }
                        </div>
                    </div>
                </div>
                <div class="chatbot-input-area">
                    <input type="text" id="chatbot-input" 
                           placeholder="${this.currentLanguage === 'ar' ? 'اكتب رسالتك...' : 'Type your message...'}">
                    <button id="chatbot-send" class="chatbot-send">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;
        
        const div = document.createElement('div');
        div.className = 'chatbot-widget';
        div.innerHTML = html;
        document.body.appendChild(div);
    }

    attachListeners() {
        document.getElementById('chatbot-btn')?.addEventListener('click', () => this.toggle());
        document.getElementById('chatbot-close')?.addEventListener('click', () => this.toggle());
        document.getElementById('chatbot-overlay')?.addEventListener('click', () => this.toggle());
        document.getElementById('chatbot-send')?.addEventListener('click', () => this.send());
        document.getElementById('chatbot-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.send();
        });
    }

    toggle() {
        const box = document.getElementById('chatbot-box');
        const btn = document.getElementById('chatbot-btn');
        const overlay = document.getElementById('chatbot-overlay');
        box?.classList.toggle('active');
        btn?.classList.toggle('active');
        overlay?.classList.toggle('active');
    }

    send() {
        const input = document.getElementById('chatbot-input');
        const msg = input?.value.trim();
        if (!msg) return;
        
        this.addMsg(msg, 'user');
        input.value = '';
        
        setTimeout(() => {
            this.addMsg(this.reply(msg), 'bot');
        }, 600);
    }

    addMsg(text, type) {
        const box = document.getElementById('chatbot-msgs');
        const div = document.createElement('div');
        div.className = `chat-message ${type}`;
        div.innerHTML = `<div class="message-bubble">${text}</div>`;
        box?.appendChild(div);
        box?.scrollTo({ top: box.scrollHeight, behavior: 'smooth' });
        this.messages.push({ text, type, time: Date.now() });
        localStorage.setItem('cb_msgs', JSON.stringify(this.messages.slice(-20)));
    }

    reply(text) {
        const t = text.toLowerCase();
        const ar = {
            'مرحبا|سلام|هلا': '🎉 مرحباً بك! أنا هنا لمساعدتك في كل ما يتعلق بخدمات الذكاء الاصطناعي. ماذا تحب أن تعرف؟',
            'خدمات|ايش|services': '🎯 نقدم خدمات شاملة:\n\n✍️ كتابة محتوى بالذكاء الاصطناعي\n🎨 توليد الصور\n💬 روبوتات المحادثة\n📊 تحليل البيانات\n🎬 إنشاء الفيديو\n⚙️ الأتمتة\n🧠 Deep Learning\n🤖 Machine Learning\n\nأي خدمة تهمك؟',
            'أتمتة|automation': '⚙️ خدمات الأتمتة المتقدمة:\n• n8n, Make, Zapier, Power Automate\n• ربط التطبيقات والأنظمة\n• توفير 10x من الوقت\n\nهل تريد عرض توضيحي؟',
            'لوحات|dashboard|تحليل': '📊 لوحات تحكم تفاعلية:\n• Power BI, Tableau, Looker\n• تحليلات في الوقت الفعلي\n• مؤشرات أداء مخصصة\n\nهل تريد جدولة عرض؟',
            'deep|ديب|تعلم عميق': '🧠 Deep Learning المتقدم:\n• شبكات عصبية متطورة\n• Computer Vision\n• NLP Models\n• تدريب مخصص\n\nهل لديك بيانات للعمل عليها؟',
            'machine|مشين|تعلم آلي': '🤖 Machine Learning الاحترافي:\n• نماذج التنبؤ\n• التصنيف والتجميع\n• كشف الشذوذ\n• أنظمة التوصية\n\nما حجم بياناتك؟',
            'سعر|price|pricing': '💰 خطط مرنة:\n• Starter: $299\n• Professional: $799\n• Enterprise: مخصص\n\nتواصل معنا للحصول على عرض خاص!',
            'contact|تواصل|اتصال': '📞 تواصل معنا:\n• البريد: info@aizoniq.com\n• الموقع: صفحة الاتصال\n\nسنرد خلال 24 ساعة!',
        };
        const en = {
            'hello|hi|hey': '🎉 Welcome! I\'m here to help you with AI services. What would you like to know?',
            'services|what': '🎯 Our comprehensive services:\n\n✍️ AI Content Writing\n🎨 Image Generation\n💬 Chatbots\n📊 Data Analytics\n🎬 Video Creation\n⚙️ Automation\n🧠 Deep Learning\n🤖 Machine Learning\n\nWhich interests you?',
            'automation': '⚙️ Advanced Automation:\n• n8n, Make, Zapier, Power Automate\n• Connect apps & systems\n• Save 10x time\n\nWant a demo?',
            'dashboard|analytics': '📊 Interactive Dashboards:\n• Power BI, Tableau, Looker\n• Real-time analytics\n• Custom KPIs\n\nSchedule a demo call?',
            'deep learning': '🧠 Advanced Deep Learning:\n• Sophisticated neural networks\n• Computer Vision\n• NLP Models\n• Custom training\n\nDo you have data to work with?',
            'machine learning': '🤖 Professional ML:\n• Predictive models\n• Classification & clustering\n• Anomaly detection\n• Recommendation systems\n\nHow much data do you have?',
            'price|pricing|cost': '💰 Flexible Plans:\n• Starter: $299\n• Professional: $799\n• Enterprise: Custom\n\nContact us for special offer!',
            'contact': '📞 Get in touch:\n• Email: info@aizoniq.com\n• Website: Contact page\n\nWe reply within 24 hours!',
        };
        
        const resp = this.currentLanguage === 'ar' ? ar : en;
        for (const [k, v] of Object.entries(resp)) {
            if (k.split('|').some(p => t.includes(p))) return v;
        }
        return this.currentLanguage === 'ar' ? 
            '💡 سؤال رائع! لمساعدة أفضل، تواصل مع فريقنا مباشرة. نحن جاهزون! 🚀' : 
            '💡 Great question! For better assistance, contact our team directly. We\'re ready! 🚀';
    }

    onLanguageChange() {
        this.currentLanguage = typeof i18n !== 'undefined' ? i18n.currentLanguage : 'ar';
        const inp = document.getElementById('chatbot-input');
        if (inp) inp.placeholder = this.currentLanguage === 'ar' ? 'اكتب رسالتك...' : 'Type your message...';
        
        // Update status text
        const statusText = document.querySelector('.chat-status span:last-child');
        if (statusText) {
            statusText.textContent = this.currentLanguage === 'ar' ? 'متصل الآن' : 'Online Now';
        }
    }

    loadMessages() {
        try {
            const saved = localStorage.getItem('cb_msgs');
            if (saved) this.messages = JSON.parse(saved);
        } catch (e) {
            console.log('No saved messages');
        }
    }
}

// Init when ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => new AIZONIQChatbot());
} else {
    new AIZONIQChatbot();
}
