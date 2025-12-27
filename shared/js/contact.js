// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    initContactForm();
    initFAQ();
});

// ============================================
// CONTACT FORM HANDLING
// ============================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Validate form
        if (validateForm(data)) {
            // Show loading state
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                showSuccess();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                form.reset();
                
                // Here you would normally send to your backend
                // Example: sendFormData(data);
                
                console.log('Form data:', data);
            }, 2000);
        }
    });
}

function validateForm(data) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!data.firstName || !data.lastName) {
        showError('Please enter your full name');
        return false;
    }
    
    if (!data.email || !emailRegex.test(data.email)) {
        showError('Please enter a valid email address');
        return false;
    }
    
    if (!data.service) {
        showError('Please select a service');
        return false;
    }
    
    if (!data.message || data.message.length < 10) {
        showError('Please provide more details about your project (at least 10 characters)');
        return false;
    }
    
    if (!data.terms) {
        showError('Please accept the terms and conditions');
        return false;
    }
    
    return true;
}

function showSuccess() {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-success, .form-error');
    existingMessages.forEach(msg => msg.remove());
    
    // Create success message
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success show';
    successMsg.innerHTML = `
        <i class="fas fa-check-circle" style="font-size: 2rem; margin-bottom: 10px;"></i>
        <h4 style="margin-bottom: 5px;">Message Sent Successfully!</h4>
        <p style="margin: 0;">Thank you for reaching out. We'll get back to you within 24 hours.</p>
    `;
    
    const form = document.getElementById('contactForm');
    form.appendChild(successMsg);
    
    // Scroll to success message
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
        setTimeout(() => successMsg.remove(), 300);
    }, 5000);
}

function showError(message) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.form-success, .form-error');
    existingMessages.forEach(msg => msg.remove());
    
    // Create error message
    const errorMsg = document.createElement('div');
    errorMsg.className = 'form-error show';
    errorMsg.innerHTML = `
        <i class="fas fa-exclamation-circle" style="font-size: 2rem; margin-bottom: 10px;"></i>
        <p style="margin: 0; font-weight: 600;">${message}</p>
    `;
    
    const form = document.getElementById('contactForm');
    form.appendChild(errorMsg);
    
    // Scroll to error message
    errorMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        errorMsg.classList.remove('show');
        setTimeout(() => errorMsg.remove(), 300);
    }, 5000);
}

// Example function to send data to backend
async function sendFormData(data) {
    try {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        showError('Something went wrong. Please try again later.');
    }
}

// ============================================
// FAQ ACCORDION
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// ============================================
// INPUT ANIMATIONS
// ============================================
const inputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

inputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
    
    // Check if input has value on page load
    if (input.value) {
        input.parentElement.classList.add('focused');
    }
});