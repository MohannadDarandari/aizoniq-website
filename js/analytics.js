// Payment Handler
async function initializePayment(serviceId, amount, serviceName) {
    try {
        // Create payment intent
        const response = await fetch('http://localhost:5000/api/create-payment-intent', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ amount, service: serviceId })
        });

        const data = await response.json();
        
        if (data.success) {
            // Redirect to Stripe Checkout or show payment form
            console.log('Payment intent created:', data.clientSecret);
            showPaymentModal(data.clientSecret, amount, serviceName);
        }
    } catch (error) {
        console.error('Payment error:', error);
    }
}

function showPaymentModal(clientSecret, amount, serviceName) {
    // Create simple payment modal
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 9999;">
            <div style="background: var(--card-bg); padding: 40px; border-radius: 12px; max-width: 500px; color: var(--text-primary);">
                <h2>Payment Details</h2>
                <p style="color: var(--text-secondary); margin: 20px 0;">Service: <strong>${serviceName}</strong></p>
                <p style="color: var(--text-secondary); margin: 20px 0;">Amount: <strong>$${amount}</strong></p>
                <div id="card-element" style="border: 1px solid #ddd; padding: 10px; margin: 20px 0; border-radius: 6px;"></div>
                <button onclick="processPayment('${clientSecret}')" style="width: 100%; padding: 12px; background: var(--primary-color); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">
                    Pay $${amount}
                </button>
                <button onclick="this.parentElement.parentElement.remove()" style="width: 100%; padding: 12px; background: transparent; color: var(--text-secondary); border: 1px solid rgba(99,102,241,0.2); border-radius: 6px; cursor: pointer; margin-top: 10px;">
                    Cancel
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
}

// Contact Form Handler
async function submitContactForm(event) {
    event.preventDefault();
    
    const formData = {
        name: document.getElementById('contactName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value || '',
        service: document.getElementById('contactService').value || '',
        message: document.getElementById('contactMessage').value
    };

    try {
        const response = await fetch('http://localhost:5000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        
        if (data.success) {
            // Track event with Google Analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'contact_form_submission', {
                    'service': formData.service,
                    'email': formData.email
                });
            }
            
            alert('Thank you! We\'ll be in touch soon.');
            event.target.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    } catch (error) {
        console.error('Form submission error:', error);
        alert('Error: ' + error.message);
    }
}

// Newsletter Form Handler
async function submitNewsletterForm(event) {
    event.preventDefault();
    
    const email = event.target.querySelector('input[type="email"]').value;

    try {
        const response = await fetch('http://localhost:5000/api/newsletter', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });

        const data = await response.json();
        
        if (data.success) {
            // Track newsletter subscription
            if (typeof gtag !== 'undefined') {
                gtag('event', 'newsletter_signup', {
                    'email': email
                });
            }
            
            alert('Successfully subscribed to our newsletter!');
            event.target.reset();
        }
    } catch (error) {
        console.error('Newsletter error:', error);
    }
}

// Analytics Tracking Functions
function trackEvent(eventName, eventData) {
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    console.log(`Event tracked: ${eventName}`, eventData);
}

function trackPageView(pageName) {
    if (typeof gtag !== 'undefined') {
        gtag('config', 'G-XXXXXXXXXX', {
            'page_title': pageName,
            'page_path': window.location.pathname
        });
    }
}

// Track service view
function trackServiceView(serviceId, serviceName) {
    trackEvent('service_view', {
        'service_id': serviceId,
        'service_name': serviceName
    });
}

// Track button click
function trackButtonClick(buttonName, category) {
    trackEvent('button_click', {
        'button_name': buttonName,
        'category': category
    });
}

// Track scroll depth
let maxScroll = 0;
window.addEventListener('scroll', () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    
    if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        if (scrollPercent >= 25 && scrollPercent < 50) {
            trackEvent('scroll_depth', { 'percent': '25%' });
        } else if (scrollPercent >= 50 && scrollPercent < 75) {
            trackEvent('scroll_depth', { 'percent': '50%' });
        } else if (scrollPercent >= 75) {
            trackEvent('scroll_depth', { 'percent': '75%' });
        }
    }
});

// Track time on page
let timeOnPage = 0;
setInterval(() => {
    timeOnPage += 5;
}, 5000);

window.addEventListener('beforeunload', () => {
    if (timeOnPage > 10) {
        trackEvent('page_engagement', {
            'time_on_page': timeOnPage,
            'page': window.location.pathname
        });
    }
});

// Export functions for global use
window.submitContactForm = submitContactForm;
window.submitNewsletterForm = submitNewsletterForm;
window.trackEvent = trackEvent;
window.trackServiceView = trackServiceView;
window.trackButtonClick = trackButtonClick;
window.initializePayment = initializePayment;
