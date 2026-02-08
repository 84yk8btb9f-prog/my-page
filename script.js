document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded');

    let currentLang = 'en';

    // Initialize everything
    initLanguage();
    initTypingEffect();
    initMobileMenu();
    initSmoothScroll();
    initNavbarScroll();

    // Language toggle
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentLang = lang;
                applyTranslations(lang);
                // Re-trigger typing effect with new language
                initTypingEffect();
            }
        });
    });

    function initLanguage() {
        currentLang = 'en';
        applyTranslations('en');
    }

    function initTypingEffect() {
        const typingElement = document.querySelector('.typing-text');
        if (typingElement) {
            const text = typingElement.getAttribute('data-' + currentLang);
            typingElement.textContent = '';
            typeText(typingElement, text, 0);
        }
    }

    function typeText(element, text, index) {
        if (index < text.length) {
            element.textContent += text.charAt(index);
            setTimeout(() => typeText(element, text, index + 1), 100);
        }
    }

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

    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const target = document.querySelector(targetId);
                if (target) {
                    const offsetTop = target.offsetTop - 70;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    function initNavbarScroll() {
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }
        });
    }

    function applyTranslations(lang) {
        console.log('Applying translations for:', lang);

        const translations = {
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-work': 'Work',
                'nav-pricing': 'Pricing',
                'nav-contact': 'Contact',
                'nav-btn': 'Get Started',
                
                // Hero
                'hero-badge': 'Building in Public',
                'hero-title-1': 'Modern Websites',
                'hero-desc': 'Professional, mobile-responsive websites for Greek businesses. Bilingual support (EN/GR), clean code, and fast delivery. No agencies, no overhead — just quality work.',
                'hero-btn-1': 'View Pricing',
                'hero-btn-2': 'See Examples',
                
                // Stats
                'stat-1-label': 'Live Projects',
                'stat-2-label': 'Responsive',
                'stat-3-label': 'Days Delivery',
                'stat-4-label': 'Languages',
                
                // Work Section
                'work-label': 'My Work',
                'work-title': 'Live Project Examples',
                'work-desc': 'Real websites, live and functional. Click to explore.',
                'btn-view': 'View Live',
                
                // Projects
                'project-1-tag': 'Restaurant',
                'project-1-title': 'Olive & Thyme',
                'project-1-desc': 'Mediterranean restaurant with menu showcase, reservations, and bilingual support.',
                
                'project-2-tag': 'Business',
                'project-2-title': 'Apex Consulting',
                'project-2-desc': 'Professional consulting firm with service pages, team profiles, and contact forms.',
                
                'project-3-tag': 'Web3/NFT',
                'project-3-title': 'CryptoVerse',
                'project-3-desc': 'Futuristic NFT marketplace with dark cyber aesthetic and wallet connection features.',
                
                'project-4-tag': 'Fitness',
                'project-4-title': 'FitZone Gym',
                'project-4-desc': 'High-energy gym site with class schedules, trainer profiles, and membership pricing.',
                
                // Pricing
                'pricing-label': 'Pricing',
                'pricing-title': 'Simple, Transparent Pricing',
                'pricing-desc': 'No hidden fees. No hourly rates. Just clear packages.',
                'popular-badge': 'Most Popular',
                'pricing-delivery': '5 days delivery',
                'pricing-4-delivery': '7-10 days delivery',
                'btn-get-started': 'Get Started',
                
                // Pricing Names
                'pricing-1-name': 'Landing Page',
                'pricing-2-name': 'Basic Website',
                'pricing-3-name': 'Business Website',
                'pricing-4-name': 'E-commerce Ready',
                
                // Pricing Features - Package 1
                'feature-1-1': '1 page, 3-5 sections',
                'feature-1-2': 'Mobile responsive',
                'feature-1-3': 'Contact form',
                'feature-1-4': '1 revision round',
                
                // Pricing Features - Package 2
                'feature-2-1': '3-5 pages',
                'feature-2-2': 'Mobile responsive',
                'feature-2-3': 'Contact form',
                'feature-2-4': 'Basic SEO',
                'feature-2-5': '2 revision rounds',
                
                // Pricing Features - Package 3
                'feature-3-1': '5-8 pages',
                'feature-3-2': 'Gallery/Portfolio',
                'feature-3-3': 'Google Maps',
                'feature-3-4': 'Social media links',
                'feature-3-5': 'Email setup help',
                'feature-3-6': '3 revision rounds',
                
                // Pricing Features - Package 4
                'feature-4-1': 'Full business site +',
                'feature-4-2': 'Product catalog',
                'feature-4-3': 'WhatsApp orders',
                'feature-4-4': 'Payment setup',
                'feature-4-5': 'Admin training',
                
                // Add-ons
                'addons-title': 'Add-Ons',
                'addon-1-name': 'Bilingual (EN/GR)',
                'addon-1-price': '+€100',
                'addon-2-name': 'Advanced SEO',
                'addon-2-price': '+€75',
                'addon-3-name': 'Extra Revisions',
                'addon-3-price': '+€50',
                
                // Benefits
                'benefits-label': 'Why Me',
                'benefits-title': 'Why Work With Me?',
                'benefit-1-title': 'Fast Delivery',
                'benefit-1-desc': 'Most projects done in 5 days. No weeks of waiting. Quick turnaround without sacrificing quality.',
                'benefit-2-title': 'Bilingual Expert',
                'benefit-2-desc': 'Native Greek, fluent English. Build sites that work for both local and international audiences.',
                'benefit-3-title': 'Mobile-First',
                'benefit-3-desc': 'Every site works perfectly on phones, tablets, and desktops. 70% of users browse on mobile.',
                'benefit-4-title': 'No Agency Markup',
                'benefit-4-desc': 'Work directly with me. No middlemen, no inflated prices. Just honest pricing for quality work.',
                
                // Contact
                'contact-label': 'Get in Touch',
                'contact-title': "Let's Build Your Website",
                'contact-desc': "Fill out the form and I'll get back to you within 24 hours.",
                'form-name': 'Your Name',
                'form-email': 'Email',
                'form-package-label': 'Package',
                'form-package-select': 'Select a package...',
                'form-package-1': 'Landing Page - €150',
                'form-package-2': 'Basic Website - €300',
                'form-package-3': 'Business Website - €500',
                'form-package-4': 'E-commerce Ready - €700',
                'form-package-5': 'Custom Quote',
                'form-message': 'Project Details',
                'form-message-placeholder': 'Tell me about your project...',
                'form-btn': 'Send Message',
                'contact-email-label': 'Email',
                'contact-location-label': 'Location',
                'contact-location': 'Athens, Greece',
                'contact-response-label': 'Response Time',
                'contact-response-time': 'Within 24 hours',
                
                // Footer
                'footer-text': 'Building modern websites for Greek businesses. One project at a time.',
                'footer-location': 'Athens, Greece',
            },
            gr: {
                // Navigation
                'nav-home': 'Αρχική',
                'nav-work': 'Έργα',
                'nav-pricing': 'Τιμές',
                'nav-contact': 'Επικοινωνία',
                'nav-btn': 'Ξεκινήστε',
                
                // Hero
                'hero-badge': 'Χτίζοντας Δημόσια',
                'hero-title-1': 'Σύγχρονες Ιστοσελίδες',
                'hero-desc': 'Επαγγελματικές, mobile-responsive ιστοσελίδες για ελληνικές επιχειρήσεις. Δίγλωσση υποστήριξη (EN/GR), καθαρός κώδικας και γρήγορη παράδοση. Χωρίς πρακτορεία, χωρίς επιπλέον κόστη — απλά ποιοτική δουλειά.',
                'hero-btn-1': 'Δείτε Τιμές',
                'hero-btn-2': 'Δείτε Παραδείγματα',
                
                // Stats
                'stat-1-label': 'Ζωντανά Έργα',
                'stat-2-label': 'Responsive',
                'stat-3-label': 'Ημέρες Παράδοσης',
                'stat-4-label': 'Γλώσσες',
                
                // Work Section
                'work-label': 'Η Δουλειά Μου',
                'work-title': 'Ζωντανά Παραδείγματα Έργων',
                'work-desc': 'Πραγματικές ιστοσελίδες, ζωντανές και λειτουργικές. Κλικ για εξερεύνηση.',
                'btn-view': 'Δείτε Ζωντανή',
                
                // Projects
                'project-1-tag': 'Εστιατόριο',
                'project-1-title': 'Olive & Thyme',
                'project-1-desc': 'Μεσογειακό εστιατόριο με μενού, κρατήσεις και δίγλωσση υποστήριξη.',
                
                'project-2-tag': 'Επιχείρηση',
                'project-2-title': 'Apex Consulting',
                'project-2-desc': 'Επαγγελματική συμβουλευτική με σελίδες υπηρεσιών, προφίλ ομάδας και φόρμες επικοινωνίας.',
                
                'project-3-tag': 'Web3/NFT',
                'project-3-title': 'CryptoVerse',
                'project-3-desc': 'Φουτουριστική αγορά NFT με σκούρο cyber αισθητική και σύνδεση πορτοφολιού.',
                
                'project-4-tag': 'Γυμναστήριο',
                'project-4-title': 'FitZone Gym',
                'project-4-desc': 'Δυναμική ιστοσελίδα γυμναστηρίου με προγράμματα, προφίλ προπονητών και τιμολόγηση.',
                
                // Pricing
                'pricing-label': 'Τιμολόγηση',
                'pricing-title': 'Απλή, Διαφανής Τιμολόγηση',
                'pricing-desc': 'Χωρίς κρυφές χρεώσεις. Χωρίς ωριαία τιμολόγηση. Μόνο ξεκάθαρα πακέτα.',
                'popular-badge': 'Πιο Δημοφιλές',
                'pricing-delivery': '5 ημέρες παράδοση',
                'pricing-4-delivery': '7-10 ημέρες παράδοση',
                'btn-get-started': 'Ξεκινήστε',
                
                // Pricing Names
                'pricing-1-name': 'Landing Page',
                'pricing-2-name': 'Βασική Ιστοσελίδα',
                'pricing-3-name': 'Επιχειρηματική Ιστοσελίδα',
                'pricing-4-name': 'E-commerce Έτοιμο',
                
                // Pricing Features - Package 1
                'feature-1-1': '1 σελίδα, 3-5 τμήματα',
                'feature-1-2': 'Mobile responsive',
                'feature-1-3': 'Φόρμα επικοινωνίας',
                'feature-1-4': '1 γύρος αλλαγών',
                
                // Pricing Features - Package 2
                'feature-2-1': '3-5 σελίδες',
                'feature-2-2': 'Mobile responsive',
                'feature-2-3': 'Φόρμα επικοινωνίας',
                'feature-2-4': 'Βασικό SEO',
                'feature-2-5': '2 γύροι αλλαγών',
                
                // Pricing Features - Package 3
                'feature-3-1': '5-8 σελίδες',
                'feature-3-2': 'Γκαλερί/Portfolio',
                'feature-3-3': 'Google Maps',
                'feature-3-4': 'Social media links',
                'feature-3-5': 'Email setup',
                'feature-3-6': '3 γύροι αλλαγών',
                
                // Pricing Features - Package 4
                'feature-4-1': 'Πλήρης ιστοσελίδα +',
                'feature-4-2': 'Κατάλογος προϊόντων',
                'feature-4-3': 'WhatsApp παραγγελίες',
                'feature-4-4': 'Payment setup',
                'feature-4-5': 'Admin training',
                
                // Add-ons
                'addons-title': 'Πρόσθετα',
                'addon-1-name': 'Δίγλωσση (EN/GR)',
                'addon-1-price': '+€100',
                'addon-2-name': 'Προχωρημένο SEO',
                'addon-2-price': '+€75',
                'addon-3-name': 'Επιπλέον Αλλαγές',
                'addon-3-price': '+€50',
                
                // Benefits
                'benefits-label': 'Γιατί Εμένα',
                'benefits-title': 'Γιατί να Συνεργαστείτε Μαζί Μου;',
                'benefit-1-title': 'Γρήγορη Παράδοση',
                'benefit-1-desc': 'Τα περισσότερα έργα ολοκληρώνονται σε 5 ημέρες. Χωρίς εβδομάδες αναμονής. Γρήγορη παράδοση χωρίς θυσία ποιότητας.',
                'benefit-2-title': 'Δίγλωσσος Ειδικός',
                'benefit-2-desc': 'Μητρική Ελληνικά, άπταιστα Αγγλικά. Ιστοσελίδες που λειτουργούν για τοπικό και διεθνές κοινό.',
                'benefit-3-title': 'Mobile-First',
                'benefit-3-desc': 'Κάθε ιστοσελίδα λειτουργεί τέλεια σε κινητά, tablets και υπολογιστές. 70% των χρηστών περιηγούνται σε mobile.',
                'benefit-4-title': 'Χωρίς Προσαύξηση',
                'benefit-4-desc': 'Συνεργαστείτε απευθείας μαζί μου. Χωρίς μεσάζοντες, χωρίς φουσκωμένες τιμές. Απλά ειλικρινής τιμολόγηση για ποιοτική δουλειά.',
                
                // Contact
                'contact-label': 'Επικοινωνία',
                'contact-title': 'Ας Φτιάξουμε την Ιστοσελίδα Σας',
                'contact-desc': 'Συμπληρώστε τη φόρμα και θα σας απαντήσω εντός 24 ωρών.',
                'form-name': 'Το Όνομά σας',
                'form-email': 'Email',
                'form-package-label': 'Πακέτο',
                'form-package-select': 'Επιλέξτε πακέτο...',
                'form-package-1': 'Landing Page - €150',
                'form-package-2': 'Βασική Ιστοσελίδα - €300',
                'form-package-3': 'Επιχειρηματική - €500',
                'form-package-4': 'E-commerce - €700',
                'form-package-5': 'Προσαρμοσμένη Προσφορά',
                'form-message': 'Λεπτομέρειες Έργου',
                'form-message-placeholder': 'Πες μου για το έργο σου...',
                'form-btn': 'Αποστολή Μηνύματος',
                'contact-email-label': 'Email',
                'contact-location-label': 'Τοποθεσία',
                'contact-location': 'Αθήνα, Ελλάδα',
                'contact-response-label': 'Χρόνος Απόκρισης',
                'contact-response-time': 'Εντός 24 ωρών',
                
                // Footer
                'footer-text': 'Χτίζοντας σύγχρονες ιστοσελίδες για ελληνικές επιχειρήσεις. Ένα έργο τη φορά.',
                'footer-location': 'Αθήνα, Ελλάδα',
            }
        };

        // Apply translations to all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                if (element.tagName === 'INPUT') {
                    if (element.type === 'text' || element.type === 'email') {
                        // For form inputs, skip if they already have value
                        if (!element.value) {
                            element.placeholder = translations[lang][key];
                        }
                    }
                } else if (element.tagName === 'TEXTAREA') {
                    if (!element.value) {
                        element.placeholder = translations[lang][key];
                    }
                } else if (element.tagName === 'OPTION') {
                    element.textContent = translations[lang][key];
                } else {
                    element.textContent = translations[lang][key];
                }
            }
        });
    }

    console.log('All features initialized - translations ready, typing animation active');
});