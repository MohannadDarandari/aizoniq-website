// ============================================
// AIZONIQ - AI Chatbot Widget
// ============================================

class AIZONIQChatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.isTyping = false;
        this.init();
    }

    init() {
        this.createWidget();
        this.attachEventListeners();
        this.showWelcomeMessage();
    }

    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'chatbot-widget';
        widget.innerHTML = `
            <button class="chatbot-toggle" id="chatbotToggle" title="AI Assistant">
                <i class="fas fa-comments"></i>
                <span class="chatbot-badge">1</span>
            </button>

            <div class="chatbot-container" id="chatbotContainer">
                <div class="chatbot-header">
                    <div>
                        <h3>AIZONIQ Assistant</h3>
                        <div class="chat-status">
                            <span class="status-dot"></span>
                            <span>Online</span>
                        </div>
                    </div>
                    <button class="chatbot-close" id="chatbotClose">×</button>
                </div>

                <div class="chatbot-messages" id="chatbotMessages"></div>

                <div class="quick-replies" id="quickReplies"></div>

                <div class="chatbot-input-area">
                    <input 
                        type="text" 
                        class="chatbot-input" 
                        id="chatbotInput" 
                        placeholder="Type your message..."
                        autocomplete="off"
                    >
                    <button class="chatbot-send" id="chatbotSend">
                        <i class="fas fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(widget);

        // Add stylesheet
        if (!document.querySelector('link[href*="chatbot.css"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'css/chatbot.css';
            document.head.appendChild(link);
        }
    }

    attachEventListeners() {
        const toggle = document.getElementById('chatbotToggle');
        const close = document.getElementById('chatbotClose');
        const send = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');

        toggle.addEventListener('click', () => this.toggleChat());
        close.addEventListener('click', () => this.closeChat());
        send.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
    }

    toggleChat() {
        this.isOpen ? this.closeChat() : this.openChat();
    }

    openChat() {
        this.isOpen = true;
        document.getElementById('chatbotContainer').classList.add('active');
        document.getElementById('chatbotToggle').classList.add('active');
        document.getElementById('chatbotInput').focus();
        this.removeBadge();
    }

    closeChat() {
        this.isOpen = false;
        document.getElementById('chatbotContainer').classList.remove('active');
        document.getElementById('chatbotToggle').classList.remove('active');
    }

    removeBadge() {
        const badge = document.querySelector('.chatbot-badge');
        if (badge) badge.style.display = 'none';
    }

    sendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();

        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        // Get bot response
        setTimeout(() => {
            this.removeTypingIndicator();
            const response = this.getBotResponse(message);
            this.addMessage(response, 'bot');
            this.updateQuickReplies();
        }, 800 + Math.random() * 400);
    }

    addMessage(text, sender) {
        const messagesDiv = document.getElementById('chatbotMessages');
        const messageElement = document.createElement('div');
        messageElement.className = `chat-message ${sender}`;
        messageElement.innerHTML = `<div class="message-bubble">${this.escapeHtml(text)}</div>`;
        messagesDiv.appendChild(messageElement);

        // Auto-scroll to bottom
        messagesDiv.scrollTop = messagesDiv.scrollHeight;

        this.messages.push({ text, sender, time: new Date() });
    }

    showTypingIndicator() {
        const messagesDiv = document.getElementById('chatbotMessages');
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chat-message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-bubble">
                <div class="message-typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        messagesDiv.appendChild(typingDiv);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    removeTypingIndicator() {
        const indicator = document.getElementById('typingIndicator');
        if (indicator) indicator.remove();
    }

    getBotResponse(userMessage) {
        const message = userMessage.toLowerCase();

        // Services inquiries
        if (message.includes('pricing') || message.includes('cost') || message.includes('price')) {
            return 'Our services start at $199/month and scale based on your needs. Would you like to know more about a specific service?';
        }

        if (message.includes('content') || message.includes('writing') || message.includes('blog')) {
            return 'Our AI Content Writing service can generate 10x more content while maintaining quality. Perfect for blogs, social media, and product descriptions. Interested?';
        }

        if (message.includes('chatbot') || message.includes('chat') || message.includes('assistant')) {
            return 'Our AI Chatbots handle customer support 24/7, reducing support costs by up to 65%. They support multiple languages and platforms. Want to learn more?';
        }

        if (message.includes('image') || message.includes('design') || message.includes('visual')) {
            return 'Our Image Generation service creates stunning visuals from text descriptions. Great for marketing, ads, and product mockups. Shall we discuss your project?';
        }

        if (message.includes('video') || message.includes('edit') || message.includes('production')) {
            return 'Our AI Video Creation service automates editing and effects. You can produce 100+ videos monthly. Interested in scaling your video production?';
        }

        if (message.includes('analytics') || message.includes('data') || message.includes('insights')) {
            return 'Our Data Analytics AI transforms raw data into actionable insights with 96% accuracy. Perfect for business intelligence and predictive modeling.';
        }

        // Portfolio and case studies
        if (message.includes('portfolio') || message.includes('case') || message.includes('example') || message.includes('project')) {
            return 'We\'ve helped 250+ companies achieve amazing results. Check out our portfolio page to see real case studies and measurable results!';
        }

        // Contact and meetings
        if (message.includes('consultation') || message.includes('demo') || message.includes('meeting') || message.includes('call')) {
            return 'I\'d love to help! Click "Get Started" to schedule a free consultation with our team. We\'ll discuss your specific needs.';
        }

        if (message.includes('contact') || message.includes('email') || message.includes('phone')) {
            return 'You can reach us at info@aizoniq.com or use the contact form on our website. We respond within 24 hours!';
        }

        // About
        if (message.includes('about') || message.includes('company') || message.includes('team') || message.includes('who are')) {
            return 'AIZONIQ is a premier AI services agency founded in 2023. We help businesses automate operations and unlock new revenue streams. Learn more on our About page!';
        }

        // General greetings
        if (message.includes('hello') || message.includes('hi') || message.includes('hey') || message.includes('greet')) {
            return 'Hello! 👋 I\'m your AI Assistant. How can I help you today? Feel free to ask about our services, pricing, or schedule a consultation!';
        }

        if (message.includes('thank') || message.includes('thanks') || message.includes('appreciate')) {
            return 'You\'re welcome! Is there anything else I can help you with?';
        }

        if (message.includes('bye') || message.includes('goodbye') || message.includes('see you')) {
            return 'Goodbye! Feel free to reach out anytime. We\'re here to help! 👋';
        }

        // Questions about capability
        if (message.includes('what') || message.includes('how') || message.includes('can you')) {
            return 'I can help you with:\n• Information about our AI services\n• Pricing details\n• Portfolio and case studies\n• Booking consultations\n• General inquiries\n\nWhat would you like to know?';
        }

        // Default response
        const defaultResponses = [
            'That\'s a great question! Could you tell me more about what you\'re looking for?',
            'I\'d be happy to help! Are you interested in learning about a specific service?',
            'Interesting! Would you like me to connect you with our team for more details?',
            'I can help with that! Do you want to schedule a consultation with our experts?'
        ];

        return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
    }

    showWelcomeMessage() {
        setTimeout(() => {
            this.addMessage('👋 Hi! I\'m your AI Assistant. How can I help you today?', 'bot');
            this.updateQuickReplies();
        }, 500);
    }

    updateQuickReplies() {
        const container = document.getElementById('quickReplies');
        const replies = [
            'Tell me about services',
            'View pricing',
            'See portfolio',
            'Schedule consultation'
        ];

        container.innerHTML = replies.map(reply => `
            <button class="quick-reply-btn" onclick="chatbot.handleQuickReply('${reply}')">
                ${reply}
            </button>
        `).join('');
    }

    handleQuickReply(text) {
        document.getElementById('chatbotInput').value = text;
        this.sendMessage();
    }

    escapeHtml(text) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };
        return text.replace(/[&<>"']/g, m => map[m]);
    }

    // Send chat data to backend
    async sendToBackend() {
        if (this.messages.length === 0) return;

        try {
            await fetch('http://localhost:5000/api/chatbot-conversation', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    messages: this.messages,
                    timestamp: new Date()
                })
            });
        } catch (error) {
            console.log('Chat data saved locally');
        }
    }
}

// Initialize chatbot when page loads
let chatbot;
document.addEventListener('DOMContentLoaded', () => {
    chatbot = new AIZONIQChatbot();
});

// Save conversations when page unloads
window.addEventListener('beforeunload', () => {
    if (chatbot) chatbot.sendToBackend();
});
