// AIZONIQ - Main JavaScript
// Modern, Interactive & Smooth Animations

// ============================================
// INITIALIZATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize i18n first
    if (typeof i18n !== 'undefined') {
        i18n.applyLanguage();
    }
    
    // Then initialize other components
    initAOS();
    initNavigation();
    initCursor();
    initCounters();
    initSmoothScroll();
    initNewsletterForm();
    initCircleProgress();
});

// ============================================
// AOS (Animate On Scroll) Initialization
// ============================================
function initAOS() {
    AOS.init({
        duration: 1000,
        easing: 'ease-out-cubic',
        once: true,
        offset: 100,
        delay: 100
    });
}

// ============================================
// NAVIGATION
// ============================================
function initNavigation() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger && hamburger.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    });

    // Active link highlighting
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// ============================================
// CUSTOM CURSOR
// ============================================
function initCursor() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (!cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursorDot.style.left = `${e.clientX}px`;
        cursorDot.style.top = `${e.clientY}px`;
    });

    // Smooth follow for outline
    setInterval(() => {
        outlineX += (mouseX - outlineX) * 0.15;
        outlineY += (mouseY - outlineY) * 0.15;

        cursorOutline.style.left = `${outlineX}px`;
        cursorOutline.style.top = `${outlineY}px`;
    }, 16);

    // Cursor effects on hover
    const interactiveElements = document.querySelectorAll('a, button, .btn, .service-card, .testimonial-card');
    
    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorDot.style.transform = 'scale(1.5)';
            cursorOutline.style.transform = 'scale(1.5)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursorDot.style.transform = 'scale(1)';
            cursorOutline.style.transform = 'scale(1)';
        });
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Animation speed

    const countUp = (counter) => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => countUp(counter), 1);
        } else {
            counter.innerText = target;
        }
    };

    // Intersection Observer for triggering animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                counter.innerText = '0';
                countUp(counter);
                observer.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        observer.observe(counter);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignore if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// NEWSLETTER FORM
// ============================================
function initNewsletterForm() {
    const newsletterForms = document.querySelectorAll('.newsletter-form');
    
    newsletterForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = form.querySelector('input[type="email"]').value;
            
            if (email) {
                // Simulate form submission
                showNotification('Thank you for subscribing! 🎉', 'success');
                form.reset();
                
                // Here you would normally send the email to your backend
                // Example: sendToMailingList(email);
            }
        });
    });
}

// ============================================
// NOTIFICATION SYSTEM
// ============================================
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button onclick="this.parentElement.remove()">×</button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#6366f1'};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        animation: slideIn 0.3s ease;
    `;
    
    notification.querySelector('button').style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0;
        width: 25px;
        height: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Add animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ============================================
// CIRCLE PROGRESS ANIMATION
// ============================================
function initCircleProgress() {
    const circles = document.querySelectorAll('.circle-progress');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circle = entry.target;
                const percent = circle.getAttribute('data-progress');
                
                // Animate the circle
                animateCircle(circle, percent);
                observer.unobserve(circle);
            }
        });
    }, { threshold: 0.5 });
    
    circles.forEach(circle => {
        observer.observe(circle);
    });
}

function animateCircle(circle, targetPercent) {
    const circleElement = circle.querySelector('circle:last-child');
    const percentText = circle.querySelector('.percent');
    let currentPercent = 0;
    const duration = 2000;
    const increment = targetPercent / (duration / 16);
    
    const animate = () => {
        currentPercent += increment;
        
        if (currentPercent < targetPercent) {
            percentText.textContent = Math.round(currentPercent) + '%';
            circleElement.style.setProperty('--percent', currentPercent);
            requestAnimationFrame(animate);
        } else {
            percentText.textContent = targetPercent + '%';
            circleElement.style.setProperty('--percent', targetPercent);
        }
    };
    
    animate();
}

// ============================================
// PARALLAX EFFECT
// ============================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.gradient-orb');
    
    parallaxElements.forEach((el, index) => {
        const speed = 0.5 + (index * 0.1);
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============================================
// LAZY LOADING IMAGES
// ============================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// PAGE LOADER (Optional)
// ============================================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
    }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Throttle function for scroll events
function throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Debounce function for resize events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c🚀 AIZONIQ - Premium AI Services Agency', 'color: #6366f1; font-size: 20px; font-weight: bold;');
console.log('%cWebsite crafted with ❤️ and AI', 'color: #8b5cf6; font-size: 14px;');

// ============================================
// PAYMENT SYSTEM
// ============================================
const courseDetails = {
    basic: {
        name: 'Beginner Course',
        nameAr: 'الدورة التأسيسية',
        price: 99
    },
    pro: {
        name: 'Professional Course',
        nameAr: 'الدورة الاحترافية',
        price: 299
    },
    master: {
        name: 'Master Course',
        nameAr: 'دورة الماستر',
        price: 599
    }
};

// Initialize payment when user clicks buy button
function initiatePayment(courseType, price) {
    const course = courseDetails[courseType];
    if (!course) return;
    
    // Show payment modal
    showPaymentModal(course, price);
}

// Create and show payment modal
function showPaymentModal(course, price) {
    // Check current language
    const isArabic = document.documentElement.lang === 'ar';
    
    // Remove existing modal if any
    const existingModal = document.getElementById('payment-modal');
    if (existingModal) {
        existingModal.remove();
    }
    
    const modalHTML = `
        <div id="payment-modal" class="payment-modal-overlay">
            <div class="payment-modal">
                <button class="payment-modal-close" onclick="closePaymentModal()">
                    <i class="fas fa-times"></i>
                </button>
                
                <div class="payment-header">
                    <h2>${isArabic ? 'إتمام الشراء' : 'Complete Purchase'}</h2>
                    <p class="course-name">${isArabic ? course.nameAr : course.name}</p>
                    <div class="payment-amount">$${price}</div>
                </div>
                
                <div class="payment-methods-grid">
                    <button class="payment-method-btn apple-pay" onclick="processPayment('apple-pay', '${course.name}', ${price})">
                        <i class="fab fa-apple"></i>
                        <span>Pay</span>
                    </button>
                    
                    <button class="payment-method-btn google-pay" onclick="processPayment('google-pay', '${course.name}', ${price})">
                        <i class="fab fa-google"></i>
                        <span>Pay</span>
                    </button>
                    
                    <button class="payment-method-btn paypal" onclick="processPayment('paypal', '${course.name}', ${price})">
                        <i class="fab fa-paypal"></i>
                        <span>PayPal</span>
                    </button>
                    
                    <button class="payment-method-btn stripe" onclick="showCardForm()">
                        <i class="fas fa-credit-card"></i>
                        <span>${isArabic ? 'بطاقة ائتمان' : 'Credit Card'}</span>
                    </button>
                </div>
                
                <div id="card-form-container" class="card-form-container" style="display: none;">
                    <form id="card-payment-form" onsubmit="processCardPayment(event, '${course.name}', ${price})">
                        <div class="form-group">
                            <label>${isArabic ? 'الاسم على البطاقة' : 'Name on Card'}</label>
                            <input type="text" id="card-name" required placeholder="${isArabic ? 'أدخل الاسم' : 'Enter name'}">
                        </div>
                        <div class="form-group">
                            <label>${isArabic ? 'رقم البطاقة' : 'Card Number'}</label>
                            <input type="text" id="card-number" required placeholder="1234 5678 9012 3456" maxlength="19" oninput="formatCardNumber(this)">
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label>${isArabic ? 'تاريخ الانتهاء' : 'Expiry Date'}</label>
                                <input type="text" id="card-expiry" required placeholder="MM/YY" maxlength="5" oninput="formatExpiry(this)">
                            </div>
                            <div class="form-group">
                                <label>CVV</label>
                                <input type="text" id="card-cvv" required placeholder="123" maxlength="4">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-primary btn-block pay-now-btn">
                            <i class="fas fa-lock"></i>
                            ${isArabic ? 'ادفع الآن' : 'Pay Now'} - $${price}
                        </button>
                    </form>
                </div>
                
                <div class="payment-security">
                    <i class="fas fa-shield-alt"></i>
                    <span>${isArabic ? 'مدفوعات آمنة ومشفرة بـ SSL 256-bit' : '256-bit SSL Secure & Encrypted Payments'}</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    document.body.style.overflow = 'hidden';
    
    // Add animation
    setTimeout(() => {
        document.getElementById('payment-modal').classList.add('active');
    }, 10);
}

// Close payment modal
function closePaymentModal() {
    const modal = document.getElementById('payment-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => {
            modal.remove();
        }, 300);
    }
}

// Show card form
function showCardForm() {
    const cardForm = document.getElementById('card-form-container');
    const methodsGrid = document.querySelector('.payment-methods-grid');
    if (cardForm && methodsGrid) {
        methodsGrid.style.display = 'none';
        cardForm.style.display = 'block';
    }
}

// Format card number with spaces
function formatCardNumber(input) {
    let value = input.value.replace(/\s/g, '').replace(/\D/g, '');
    value = value.match(/.{1,4}/g)?.join(' ') || value;
    input.value = value;
}

// Format expiry date
function formatExpiry(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
    }
    input.value = value;
}

// Process payment with different methods
function processPayment(method, courseName, price) {
    const isArabic = document.documentElement.lang === 'ar';
    
    // Show loading state
    showPaymentProcessing(isArabic);
    
    // Simulate payment processing (In production, integrate with actual payment APIs)
    setTimeout(() => {
        // For demo purposes, show success
        showPaymentSuccess(courseName, price, isArabic);
    }, 2000);
}

// Process card payment
function processCardPayment(event, courseName, price) {
    event.preventDefault();
    const isArabic = document.documentElement.lang === 'ar';
    
    // Get form values
    const cardName = document.getElementById('card-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const cardExpiry = document.getElementById('card-expiry').value;
    const cardCvv = document.getElementById('card-cvv').value;
    
    // Basic validation
    if (!cardName || !cardNumber || !cardExpiry || !cardCvv) {
        alert(isArabic ? 'يرجى ملء جميع الحقول' : 'Please fill all fields');
        return;
    }
    
    // Show loading state
    showPaymentProcessing(isArabic);
    
    // Simulate payment processing (In production, integrate with Stripe/PayPal API)
    setTimeout(() => {
        showPaymentSuccess(courseName, price, isArabic);
    }, 2500);
}

// Show payment processing
function showPaymentProcessing(isArabic) {
    const modal = document.querySelector('.payment-modal');
    if (modal) {
        modal.innerHTML = `
            <div class="payment-processing">
                <div class="processing-spinner"></div>
                <h3>${isArabic ? 'جاري معالجة الدفع...' : 'Processing Payment...'}</h3>
                <p>${isArabic ? 'يرجى الانتظار' : 'Please wait'}</p>
            </div>
        `;
    }
}

// Show payment success
function showPaymentSuccess(courseName, price, isArabic) {
    const modal = document.querySelector('.payment-modal');
    if (modal) {
        modal.innerHTML = `
            <div class="payment-success">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>${isArabic ? 'تم الدفع بنجاح!' : 'Payment Successful!'}</h3>
                <p>${isArabic ? 'تم تسجيلك في الدورة بنجاح' : 'You have been enrolled successfully'}</p>
                <div class="success-details">
                    <p><strong>${isArabic ? 'الدورة:' : 'Course:'}</strong> ${courseName}</p>
                    <p><strong>${isArabic ? 'المبلغ:' : 'Amount:'}</strong> $${price}</p>
                </div>
                <p class="email-notice">
                    <i class="fas fa-envelope"></i>
                    ${isArabic ? 'سيتم إرسال تفاصيل الوصول إلى بريدك الإلكتروني' : 'Access details will be sent to your email'}
                </p>
                <button class="btn btn-primary" onclick="closePaymentModal()">
                    ${isArabic ? 'إغلاق' : 'Close'}
                </button>
            </div>
        `;
    }
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('payment-modal-overlay')) {
        closePaymentModal();
    }
});

// Close modal on Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closePaymentModal();
    }
});