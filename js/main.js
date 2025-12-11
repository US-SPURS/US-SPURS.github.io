/**
 * Main JavaScript functionality for US-SPURS website
 * Progressive enhancement and accessibility features
 */

(function() {
    'use strict';
    
    // Check if JavaScript is enabled and add class to body
    document.body.classList.add('js-enabled');
    
    // Focus management for skip links
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.setAttribute('tabindex', '-1');
                target.focus();
                target.addEventListener('blur', function() {
                    this.removeAttribute('tabindex');
                }, { once: true });
            }
        });
    }
    
    // External link detection and warning (for security)
    const links = document.querySelectorAll('a[href^="http"]');
    links.forEach(function(link) {
        const linkHost = new URL(link.href).hostname;
        const currentHost = window.location.hostname;
        
        if (linkHost !== currentHost && !link.hasAttribute('aria-label')) {
            const linkText = link.textContent || link.innerText;
            link.setAttribute('aria-label', linkText + ' (external link)');
            link.setAttribute('rel', 'noopener noreferrer');
            
            // Add external link icon (using text for now)
            if (!link.querySelector('.external-icon')) {
                const icon = document.createElement('span');
                icon.className = 'external-icon';
                icon.setAttribute('aria-hidden', 'true');
                icon.textContent = ' ↗';
                link.appendChild(icon);
            }
        }
    });
    
    // Form validation helpers (if forms exist)
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(function(field) {
                if (!field.value.trim()) {
                    isValid = false;
                    field.setAttribute('aria-invalid', 'true');
                    
                    // Add error message if not present
                    if (!field.nextElementSibling || !field.nextElementSibling.classList.contains('error-message')) {
                        const error = document.createElement('span');
                        error.className = 'error-message';
                        error.textContent = 'This field is required';
                        error.setAttribute('role', 'alert');
                        field.parentNode.insertBefore(error, field.nextSibling);
                    }
                } else {
                    field.removeAttribute('aria-invalid');
                    const errorMsg = field.nextElementSibling;
                    if (errorMsg && errorMsg.classList.contains('error-message')) {
                        errorMsg.remove();
                    }
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                // Focus on first invalid field
                const firstInvalid = form.querySelector('[aria-invalid="true"]');
                if (firstInvalid) {
                    firstInvalid.focus();
                }
            }
        });
    });
    
    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#' && targetId !== '#main-content') {
                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    target.focus();
                }
            }
        });
    });
    
    // Print functionality helper
    const printButtons = document.querySelectorAll('[data-print]');
    printButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.print();
        });
    });
    
    // Console message for developers
    console.log('%cUS Department of SPURS', 'font-size: 20px; font-weight: bold; color: #005ea2;');
    console.log('%cOfficial US Government Website', 'font-size: 14px; color: #1b1b1b;');
    console.log('For technical issues, please visit our contact page.');
    
})();
