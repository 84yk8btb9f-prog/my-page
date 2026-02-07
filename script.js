console.log('Portfolio loaded');

let currentLang = 'en';

document.addEventListener('DOMContentLoaded', function() {
    console.log('Initializing portfolio...');
    
    // Initialize all features
    initLanguageSwitcher();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();
    initTypingEffect();
    initScrollAnimations();
    initContactForm();
});

// Language switcher
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === 'en') {
            btn.classList.add('active');
        }
    });
    
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            console.log('Language switched to:', lang);
            
            langButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            currentLang = lang;
            applyLanguage(lang);
        });
    });
    
    applyLanguage('en');
}

function applyLanguage(lang) {
    const allElements = document.querySelectorAll('[data-en][data-gr]');
    
    allElements.forEach(element => {
        const text = element.getAttribute('data-' + lang);
        
        if (element.tagName === 'INPUT') {
            element.placeholder = text;
        } else if (element.tagName === 'TEXTAREA') {
            element.placeholder = text;
        } else if (element.classList.contains('typing-text')) {
            // Re-trigger typing effect with new language
            element.textContent = '';
            const textToType = element.getAttribute('data-' + lang);
            typeText(element, textToType);
        } else {
            element.textContent = text;
        }
    });
}

// Mobile menu
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
        
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
            });
        });
    }
}

// Smooth scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Navbar scroll effect
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Typing effect
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        const text = typingElement.getAttribute('data-en');
        typingElement.textContent = '';
        typeText(typingElement, text);
    }
}

function typeText(element, text, index = 0) {
    if (index < text.length) {
        element.textContent += text.charAt(index);
        setTimeout(() => typeText(element, text, index + 1), 100);
    }
}

// Scroll animations with Intersection Observer
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements
    const animatedElements = document.querySelectorAll('.project-card, .skill-category, .highlight-item, .contact-item');
    animatedElements.forEach(el => observer.observe(el));
}

// Contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            
            let message;
            if (currentLang === 'en') {
                message = `Thank you, ${name}!\n\nYour message has been received.\n\nDetails:\n• Email: ${email}\n• Subject: ${subject}\n\nI'll get back to you within 24 hours.`;
            } else {
                message = `Ευχαριστώ, ${name}!\n\nΤο μήνυμά σου έχει ληφθεί.\n\nΛεπτομέρειες:\n• Email: ${email}\n• Θέμα: ${subject}\n\nΘα σου απαντήσω εντός 24 ωρών.`;
            }
            
            alert(message);
            form.reset();
        });
    }
}

// Scroll indicator
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', function() {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

// Active nav link on scroll
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Update project links (you'll need to replace these with your actual demo URLs)
document.addEventListener('DOMContentLoaded', function() {
    // This is just a placeholder - you'll update these with your actual Vercel URLs
    const projectLinks = {
        'restaurant': 'https://demo-1-bice.vercel.app',
        'consulting': 'https://demo-2-coral.vercel.app',
        'web3': 'https://demo-3-three.vercel.app',
        'gym': 'https://demo-4-mu.vercel.app'
    };
    
    // You can uncomment and update this when you have all URLs

    document.querySelectorAll('.project-card').forEach(card => {
        const category = card.getAttribute('data-category');
        const liveLink = card.querySelector('.project-link[target="_blank"]:first-child');
        if (liveLink && projectLinks[category]) {
            liveLink.href = projectLinks[category];
        }
    });

});

console.log('Portfolio fully initialized');