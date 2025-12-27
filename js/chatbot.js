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
            <button class="chatbot-btn" id="chatbot-btn">
                <i class="fas fa-comments"></i>
                <span class="chatbot-badge">1</span>
            </button>
            <div class="chatbot-box" id="chatbot-box">
                <div class="chatbot-header">
                    <h3>AIZONIQ</h3>
                    <button class="chatbot-close" id="chatbot-close">×</button>
                </div>
                <div class="chatbot-msgs" id="chatbot-msgs"></div>
                <div class="chatbot-input">
                    <input type="text" id="chatbot-input" placeholder="Type...">
                    <button id="chatbot-send"><i class="fas fa-paper-plane"></i></button>
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
        document.getElementById('chatbot-send')?.addEventListener('click', () => this.send());
        document.getElementById('chatbot-input')?.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.send();
        });
    }

    toggle() {
        document.getElementById('chatbot-box')?.classList.toggle('open');
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
        div.className = `msg ${type}`;
        div.innerHTML = `<span>${text}</span>`;
        box?.appendChild(div);
        box?.scrollTo(0, box.scrollHeight);
        this.messages.push({ text, type, time: Date.now() });
        localStorage.setItem('cb_msgs', JSON.stringify(this.messages.slice(-20)));
    }

    reply(text) {
        const t = text.toLowerCase();
        const ar = {
            'مرحبا|سلام': 'مرحباً! كيف أساعدك؟',
            'خدمات|ايش': '🎯 لدينا: كتابة، صور، شات، تحليل، فيديو، أتمتة، Deep Learning, ML\nأيها تختار؟',
            'أتمتة|automation': '⚙️ n8n, Make, Power Automate\nتريد عرض؟',
            'لوحات|dashboard': '📊 Power BI, Tableau, مخصص\nجدول عرض؟',
            'deep|ديب': '🧠 شبكات عصبية متقدمة\nهل لديك بيانات؟',
            'machine|مشين': '🤖 تصنيف، تنبؤ، تحليل\nكم البيانات؟'
        };
        const en = {
            'hello|hi': 'Hello! How can I help?',
            'services': '🎯 We offer: Writing, Images, Chatbots, Analytics, Video, Automation, Deep Learning, ML\nWhich interests you?',
            'automation': '⚙️ n8n, Make, Power Automate\nWant a demo?',
            'dashboard': '📊 Power BI, Tableau, Custom\nSchedule a call?',
            'deep learning': '🧠 Advanced neural networks\nDo you have data?',
            'machine learning': '🤖 Classification, Prediction, Analysis\nHow much data?'
        };
        
        const resp = this.currentLanguage === 'ar' ? ar : en;
        for (const [k, v] of Object.entries(resp)) {
            if (k.split('|').some(p => t.includes(p))) return v;
        }
        return this.currentLanguage === 'ar' ? '👍 سؤال ممتاز! تحدث مع الفريق؟' : '👍 Great question! Talk to our team?';
    }

    onLanguageChange() {
        this.currentLanguage = typeof i18n !== 'undefined' ? i18n.currentLanguage : 'ar';
        const inp = document.getElementById('chatbot-input');
        if (inp) inp.placeholder = this.currentLanguage === 'ar' ? 'اكتب...' : 'Type...';
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
