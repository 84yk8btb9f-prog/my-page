document.addEventListener('DOMContentLoaded', function() {
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
        const translations = {
            en: {
                // Navigation
                'nav-home': 'Home',
                'nav-work': 'Work',
                'nav-pricing': 'Pricing',
                'nav-contact': 'Contact',
                'nav-btn': 'See Pricing',
                
                // Hero
                'hero-badge': '16-Year-Old Developer',
                'hero-title-1': 'From Invisible to Unforgettable',
                'hero-desc': 'Your competitors are launching. Your customers are searching. Don\'t wait weeks for an agency — get a professional, mobile-responsive website built in 5 days. Bilingual (EN/GR), fast, and honest. No bureaucracy. Just results.',
                'hero-btn-1': 'Lock In Launch Price',
                'hero-btn-2': 'View Live Examples',
                
                // Stats
                'stat-1-label': 'Live Sites Built',
                'stat-2-label': 'Mobile-Perfect',
                'stat-3-label': 'Day Turnaround',
                'stat-4-label': 'Languages',
                
                // Work Section
                'work-label': 'Portfolio',
                'work-title': 'Real Sites. Live. Functional.',
                'work-desc': 'These aren\'t mockups. They\'re websites businesses actually use to get customers.',
                'btn-view': 'View Live Site',
                
                // Projects
                'project-1-tag': 'Restaurant',
                'project-1-title': 'Olive & Thyme',
                'project-1-desc': 'Mediterranean restaurant with instant online reservations and menu showcase. Built to convert browsers into bookings.',
                
                'project-2-tag': 'Business',
                'project-2-title': 'Apex Consulting',
                'project-2-desc': 'Consulting firm that needed credibility fast. Professional design that positions them as industry leaders.',
                
                'project-3-tag': 'Web3/NFT',
                'project-3-title': 'CryptoVerse',
                'project-3-desc': 'NFT marketplace with cutting-edge design. Built to stand out in a crowded crypto space.',
                
                'project-4-tag': 'Fitness',
                'project-4-title': 'FitZone Gym',
                'project-4-desc': 'High-energy gym site that drives sign-ups. Schedules, trainers, and pricing designed for conversions.',
                
                // Pricing
                'pricing-label': 'Pricing',
                'pricing-title': 'One Price. No Surprises. No Haggling.',
                'pricing-desc': 'Pick a package. Pay once. Get your site in 5 days. Simple.',
                'launch-banner-title': '🔥 Early-Bird Pricing Ends Soon',
                'launch-banner-desc': 'I\'m locking in 30% off for my first 5 clients. After that, prices go up permanently. 3 slots left.',
                'popular-badge': 'Best Value',
                'pricing-delivery': '5 days delivery',
                'pricing-4-delivery': '7-10 days delivery',
                'btn-get-started': 'Claim This Price',
                
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
                'feature-3-3': 'Google Maps integration',
                'feature-3-4': 'Social media links',
                'feature-3-5': 'Email setup help',
                'feature-3-6': '3 revision rounds',
                
                // Pricing Features - Package 4
                'feature-4-1': 'Full business site +',
                'feature-4-2': 'Product catalog',
                'feature-4-3': 'WhatsApp order system',
                'feature-4-4': 'Payment integration',
                'feature-4-5': 'Admin training included',
                
                // Add-ons
                'addons-title': 'Add-Ons',
                'addon-1-name': 'Bilingual (EN/GR)',
                'addon-1-price': '+€75',
                'addon-2-name': 'Advanced SEO',
                'addon-2-price': '+€60',
                'addon-3-name': 'Extra Revisions',
                'addon-3-price': '+€30',
                
                // Benefits
                'benefits-label': 'Why Choose Me',
                'benefits-title': 'No Agency Red Tape. Just Speed & Honesty.',
                'benefit-1-title': 'Launch Before Your Competitor',
                'benefit-1-desc': '5-day delivery means you\'re live while agencies are still scheduling discovery calls. Speed is your advantage.',
                'benefit-2-title': 'Speak to Greek & Global Markets',
                'benefit-2-desc': 'Native Greek, fluent English. Your site works for local customers and international clients — no translation guesswork.',
                'benefit-3-title': 'Mobile = 70% of Your Traffic',
                'benefit-3-desc': 'Every site I build is mobile-first. Your customers browse on phones — your site needs to work flawlessly there.',
                'benefit-4-title': 'No Middlemen = Fair Pricing',
                'benefit-4-desc': 'You work directly with me. No project managers, no account reps. Just one person who builds your site and answers your questions.',
                
                // Contact
                'contact-label': 'Get Started',
                'contact-title': 'Ready to Go Live?',
                'contact-desc': 'Tell me about your project. I\'ll reply within 24 hours with next steps.',
                'form-name': 'Your Name',
                'form-email': 'Email',
                'form-package-label': 'Package',
                'form-package-select': 'Select a package...',
                'form-package-1': 'Landing Page - €100',
                'form-package-2': 'Basic Website - €200',
                'form-package-3': 'Business Website - €350',
                'form-package-4': 'E-commerce Ready - €500',
                'form-package-5': 'Custom Quote',
                'form-message': 'Project Details',
                'form-message-placeholder': 'Tell me about your project...',
                'form-btn': 'Send Project Brief',
                'contact-email-label': 'Email',
                'contact-location-label': 'Location',
                'contact-location': 'Athens, Greece',
                'contact-response-label': 'Response Time',
                'contact-response-time': 'Within 24 hours',
                
                // Footer
                'footer-text': 'Helping Greek businesses go from invisible to unforgettable. One fast website at a time.',
                'footer-location': 'Athens, Greece',
            },
            gr: {
                // Navigation
                'nav-home': 'Αρχική',
                'nav-work': 'Έργα',
                'nav-pricing': 'Τιμές',
                'nav-contact': 'Επικοινωνία',
                'nav-btn': 'Δείτε Τιμές',
                
                // Hero
                'hero-badge': 'Developer 16 Ετών',
                'hero-title-1': 'Από Αόρατος σε Αξέχαστος',
                'hero-desc': 'Οι ανταγωνιστές σας ξεκινούν. Οι πελάτες σας αναζητούν. Μην περιμένετε εβδομάδες για πρακτορείο — αποκτήστε επαγγελματική, mobile-responsive ιστοσελίδα σε 5 ημέρες. Δίγλωσση (EN/GR), γρήγορη και ειλικρινής. Χωρίς γραφειοκρατία. Μόνο αποτελέσματα.',
                'hero-btn-1': 'Κλειδώστε την Τιμή Έναρξης',
                'hero-btn-2': 'Δείτε Ζωντανά Παραδείγματα',
                
                // Stats
                'stat-1-label': 'Ζωντανές Ιστοσελίδες',
                'stat-2-label': 'Τέλειο Mobile',
                'stat-3-label': 'Ημέρες Παράδοσης',
                'stat-4-label': 'Γλώσσες',
                
                // Work Section
                'work-label': 'Portfolio',
                'work-title': 'Πραγματικές Ιστοσελίδες. Ζωντανές. Λειτουργικές.',
                'work-desc': 'Αυτά δεν είναι mockups. Είναι ιστοσελίδες που επιχειρήσεις χρησιμοποιούν για να αποκτήσουν πελάτες.',
                'btn-view': 'Δείτε Ζωντανή Ιστοσελίδα',
                
                // Projects
                'project-1-tag': 'Εστιατόριο',
                'project-1-title': 'Olive & Thyme',
                'project-1-desc': 'Μεσογειακό εστιατόριο με άμεσες online κρατήσεις και παρουσίαση μενού. Φτιαγμένο για να μετατρέπει επισκέπτες σε κρατήσεις.',
                
                'project-2-tag': 'Επιχείρηση',
                'project-2-title': 'Apex Consulting',
                'project-2-desc': 'Συμβουλευτική εταιρεία που χρειαζόταν αξιοπιστία γρήγορα. Επαγγελματικό design που τους τοποθετεί ως ηγέτες της βιομηχανίας.',
                
                'project-3-tag': 'Web3/NFT',
                'project-3-title': 'CryptoVerse',
                'project-3-desc': 'Αγορά NFT με cutting-edge design. Φτιαγμένη για να ξεχωρίζει σε έναν πολύ ανταγωνιστικό χώρο crypto.',
                
                'project-4-tag': 'Γυμναστήριο',
                'project-4-title': 'FitZone Gym',
                'project-4-desc': 'Δυναμική ιστοσελίδα γυμναστηρίου που οδηγεί σε εγγραφές. Προγράμματα, προπονητές και τιμολόγηση σχεδιασμένα για conversions.',
                
                // Pricing
                'pricing-label': 'Τιμολόγηση',
                'pricing-title': 'Μία Τιμή. Χωρίς Εκπλήξεις. Χωρίς Διαπραγματεύσεις.',
                'pricing-desc': 'Διαλέξτε πακέτο. Πληρώστε μία φορά. Πάρτε την ιστοσελίδα σας σε 5 ημέρες. Απλό.',
                'launch-banner-title': '🔥 Οι Τιμές Πρώιμης Εγγραφής Τελειώνουν Σύντομα',
                'launch-banner-desc': 'Κλειδώνω 30% έκπτωση για τους πρώτους 5 πελάτες μου. Μετά, οι τιμές ανεβαίνουν μόνιμα. Απομένουν 3 θέσεις.',
                'popular-badge': 'Καλύτερη Αξία',
                'pricing-delivery': '5 ημέρες παράδοση',
                'pricing-4-delivery': '7-10 ημέρες παράδοση',
                'btn-get-started': 'Διεκδικήστε Αυτή την Τιμή',
                
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
                'feature-3-3': 'Ενσωμάτωση Google Maps',
                'feature-3-4': 'Social media links',
                'feature-3-5': 'Βοήθεια email setup',
                'feature-3-6': '3 γύροι αλλαγών',
                
                // Pricing Features - Package 4
                'feature-4-1': 'Πλήρης ιστοσελίδα +',
                'feature-4-2': 'Κατάλογος προϊόντων',
                'feature-4-3': 'Σύστημα παραγγελιών WhatsApp',
                'feature-4-4': 'Ενσωμάτωση πληρωμών',
                'feature-4-5': 'Admin training συμπεριλαμβάνεται',
                
                // Add-ons
                'addons-title': 'Πρόσθετα',
                'addon-1-name': 'Δίγλωσση (EN/GR)',
                'addon-1-price': '+€75',
                'addon-2-name': 'Προχωρημένο SEO',
                'addon-2-price': '+€60',
                'addon-3-name': 'Επιπλέον Αλλαγές',
                'addon-3-price': '+€30',
                
                // Benefits
                'benefits-label': 'Γιατί να με Επιλέξετε',
                'benefits-title': 'Χωρίς Γραφειοκρατία Πρακτορείων. Μόνο Ταχύτητα & Ειλικρίνεια.',
                'benefit-1-title': 'Κάντε Launch Πριν τον Ανταγωνιστή σας',
                'benefit-1-desc': 'Παράδοση σε 5 ημέρες σημαίνει είστε live ενώ τα πρακτορεία ακόμα προγραμματίζουν συναντήσεις. Η ταχύτητα είναι το πλεονέκτημά σας.',
                'benefit-2-title': 'Μιλήστε σε Ελληνικές & Παγκόσμιες Αγορές',
                'benefit-2-desc': 'Μητρική Ελληνικά, άπταιστα Αγγλικά. Η ιστοσελίδα σας λειτουργεί για τοπικούς πελάτες και διεθνείς — χωρίς μαντέματα στη μετάφραση.',
                'benefit-3-title': 'Mobile = 70% της Κίνησής σας',
                'benefit-3-desc': 'Κάθε ιστοσελίδα που φτιάχνω είναι mobile-first. Οι πελάτες σας περιηγούνται από κινητά — η ιστοσελίδα σας πρέπει να λειτουργεί άψογα εκεί.',
                'benefit-4-title': 'Χωρίς Μεσάζοντες = Δίκαιη Τιμολόγηση',
                'benefit-4-desc': 'Συνεργάζεστε απευθείας μαζί μου. Χωρίς project managers, χωρίς εκπροσώπους. Μόνο ένα άτομο που φτιάχνει την ιστοσελίδα σας και απαντά στις ερωτήσεις σας.',
                
                // Contact
                'contact-label': 'Ξεκινήστε',
                'contact-title': 'Έτοιμοι να Πάτε Live;',
                'contact-desc': 'Πείτε μου για το έργο σας. Θα απαντήσω εντός 24 ωρών με τα επόμενα βήματα.',
                'form-name': 'Το Όνομά σας',
                'form-email': 'Email',
                'form-package-label': 'Πακέτο',
                'form-package-select': 'Επιλέξτε πακέτο...',
                'form-package-1': 'Landing Page - €100',
                'form-package-2': 'Βασική Ιστοσελίδα - €200',
                'form-package-3': 'Επιχειρηματική - €350',
                'form-package-4': 'E-commerce - €500',
                'form-package-5': 'Προσαρμοσμένη Προσφορά',
                'form-message': 'Λεπτομέρειες Έργου',
                'form-message-placeholder': 'Πες μου για το έργο σου...',
                'form-btn': 'Αποστολή Περιγραφής Έργου',
                'contact-email-label': 'Email',
                'contact-location-label': 'Τοποθεσία',
                'contact-location': 'Αθήνα, Ελλάδα',
                'contact-response-label': 'Χρόνος Απόκρισης',
                'contact-response-time': 'Εντός 24 ωρών',
                
                // Footer
                'footer-text': 'Βοηθώντας ελληνικές επιχειρήσεις να πάνε από αόρατες σε αξέχαστες. Μία γρήγορη ιστοσελίδα τη φορά.',
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
});