// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile navigation toggle
const createMobileNav = () => {
    const nav = document.querySelector('.nav-links');
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.setAttribute('aria-label', 'Alternar menú de navegación');
    navToggle.innerHTML = `
        <span class="visually-hidden">Menú</span>
        <span class="hamburger"></span>
    `;

    navToggle.addEventListener('click', () => {
        nav.classList.toggle('nav-open');
        navToggle.classList.toggle('nav-toggle-open');
        const isExpanded = navToggle.classList.contains('nav-toggle-open');
        navToggle.setAttribute('aria-expanded', isExpanded);
    });

    document.querySelector('.nav-container').prepend(navToggle);
};

// Add mobile navigation styles
const addMobileStyles = () => {
    const style = document.createElement('style');
    style.textContent = `
        @media (max-width: 768px) {
            .nav-toggle {
                display: block;
                background: none;
                border: none;
                padding: 0.5rem;
                cursor: pointer;
                position: relative;
                z-index: 100;
            }

            .hamburger {
                display: block;
                width: 24px;
                height: 2px;
                background: white;
                position: relative;
                transition: background 0.2s ease;
            }

            .hamburger::before,
            .hamburger::after {
                content: '';
                position: absolute;
                left: 0;
                width: 100%;
                height: 2px;
                background: white;
                transition: transform 0.2s ease;
            }

            .hamburger::before {
                top: -6px;
            }

            .hamburger::after {
                bottom: -6px;
            }

            .nav-toggle-open .hamburger {
                background: transparent;
            }

            .nav-toggle-open .hamburger::before {
                transform: rotate(45deg);
                top: 0;
            }

            .nav-toggle-open .hamburger::after {
                transform: rotate(-45deg);
                bottom: 0;
            }

            .nav-links {
                position: fixed;
                top: 0;
                right: -100%;
                width: 100%;
                height: 100vh;
                background: var(--bg-dark);
                padding: 5rem 2rem;
                transition: right 0.3s ease;
            }

            .nav-links.nav-open {
                right: 0;
            }
        }
    `;
    document.head.appendChild(style);
};

// Initialize mobile navigation
if (window.innerWidth <= 768) {
    createMobileNav();
    addMobileStyles();
}

// Handle window resize
let timeout;
window.addEventListener('resize', () => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        const isMobile = window.innerWidth <= 768;
        const navToggle = document.querySelector('.nav-toggle');
        
        if (isMobile && !navToggle) {
            createMobileNav();
            addMobileStyles();
        } else if (!isMobile && navToggle) {
            navToggle.remove();
            document.querySelector('.nav-links').classList.remove('nav-open');
        }
    }, 100);
});

// Intersection Observer for section animations
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: '0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }
    });
}, observerOptions);

// Add fade-in animation styles
const fadeStyles = document.createElement('style');
fadeStyles.textContent = `
    .section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .section-visible {
        opacity: 1;
        transform: translateY(0);
    }

    @media (prefers-reduced-motion: reduce) {
        .section {
            transition: none;
            transform: none;
            opacity: 1;
        }
    }
`;
document.head.appendChild(fadeStyles);

// Observe all sections
document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
}); 

// Ripple effect for schedule items
const addRippleEffect = (event) => {
    const item = event.currentTarget;
    
    // Remove existing ripples
    const existingRipple = item.querySelector('.ripple');
    if (existingRipple) {
        existingRipple.remove();
    }
    
    // Create ripple element
    const ripple = document.createElement('div');
    ripple.classList.add('ripple');
    
    // Calculate ripple position
    const rect = item.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    // Set ripple style
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    
    // Add ripple to item
    item.appendChild(ripple);
    
    // Remove ripple after animation
    ripple.addEventListener('animationend', () => {
        ripple.remove();
    });
};



// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const expanded = button.getAttribute('aria-expanded') === 'true';
        
        // Close all other questions
        document.querySelectorAll('.faq-question').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.setAttribute('aria-expanded', 'false');
            }
        });
        
        // Toggle current question
        button.setAttribute('aria-expanded', !expanded);
    });
}); 