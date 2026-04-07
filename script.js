document.addEventListener('DOMContentLoaded', function () {

    document.body.classList.add('js-ready');

    // ==========================================
    // TRANSLATIONS  ← must be defined FIRST
    // ==========================================
    const translations = {
        en: {
            'nav-home':'Home','nav-work':'Work','nav-pricing':'Pricing','nav-contact':'Contact','nav-btn':'See Pricing',
            'hero-badge':'16-Year-Old Developer','hero-title-1':'From Invisible to Unforgettable',
            'hero-desc':"Your competitors are launching. Your customers are searching. Don't wait weeks for an agency — get a professional, mobile-responsive website built in 5 days. Bilingual (EN/GR), fast, and honest. No bureaucracy. Just results.",
            'hero-btn-1':'Lock In Launch Price','hero-btn-2':'View Live Examples',
            'stat-1-label':'Live Sites Built','stat-2-label':'Mobile-Perfect','stat-3-label':'Day Turnaround','stat-4-label':'Languages',
            'work-label':'Portfolio','work-title':'Real Sites. Live. Functional.','work-desc':"These aren't mockups. They're websites businesses actually use to get customers.",
            'btn-view':'View Live Site',
            'project-1-tag':'Restaurant','project-1-title':'Olive & Thyme','project-1-desc':'Mediterranean restaurant with instant online reservations and menu showcase. Built to convert browsers into bookings.',
            'project-2-tag':'Business','project-2-title':'Apex Consulting','project-2-desc':'Consulting firm that needed credibility fast. Professional design that positions them as industry leaders.',
            'project-3-tag':'Web3/NFT','project-3-title':'CryptoVerse','project-3-desc':'NFT marketplace with cutting-edge design. Built to stand out in a crowded crypto space.',
            'project-4-tag':'Fitness','project-4-title':'FitZone Gym','project-4-desc':'High-energy gym site that drives sign-ups. Schedules, trainers, and pricing designed for conversions.',
            'pricing-label':'Pricing','pricing-title':'One Price. No Surprises. No Haggling.','pricing-desc':'Pick a package. Pay once. Get your site in 5 days. Simple.',
            'launch-banner-title':'Early-Bird Pricing — Limited Availability','launch-banner-desc':"Prices are locked in for early clients only. After these spots fill, prices go up permanently.",
            'popular-badge':'Best Value','pricing-delivery':'5 days delivery','pricing-4-delivery':'7-10 days delivery','btn-get-started':'Claim This Price',
            'pricing-1-name':'Landing Page','pricing-2-name':'Basic Website','pricing-3-name':'Business Website','pricing-4-name':'E-commerce Store',
            'feature-1-1':'1 page, 3-5 sections','feature-1-2':'Mobile responsive','feature-1-3':'Contact form','feature-1-4':'1 revision round',
            'feature-2-1':'3-5 pages','feature-2-2':'Mobile responsive','feature-2-3':'Contact form','feature-2-4':'Basic SEO','feature-2-5':'2 revision rounds',
            'feature-3-1':'5-8 pages','feature-3-2':'Gallery/Portfolio','feature-3-3':'Google Maps integration','feature-3-4':'Social media links','feature-3-5':'Email setup help','feature-3-6':'3 revision rounds',
            'feature-4-1':'Full business site +','feature-4-2':'Complete shopping cart & checkout','feature-4-3':'Online payments (Stripe / Viva Wallet)','feature-4-4':'Product & inventory management','feature-4-5':'Admin dashboard + training',
            'addons-title':'Add-Ons','addon-1-name':'Bilingual (EN/GR)','addon-1-price':'+€75','addon-2-name':'Advanced SEO','addon-2-price':'+€60','addon-3-name':'Extra Revisions','addon-3-price':'+€30',
            'benefits-label':'Why Choose Me','benefits-title':'No Agency Red Tape. Just Speed & Honesty.',
            'benefit-1-title':'Launch Before Your Competitor','benefit-1-desc':"5-day delivery means you're live while agencies are still scheduling discovery calls. Speed is your advantage.",
            'benefit-2-title':'Speak to Greek & Global Markets','benefit-2-desc':'Native Greek, fluent English. Your site works for local customers and international clients — no translation guesswork.',
            'benefit-3-title':'Mobile = 70% of Your Traffic','benefit-3-desc':'Every site I build is mobile-first. Your customers browse on phones — your site needs to work flawlessly there.',
            'benefit-4-title':'No Middlemen = Fair Pricing','benefit-4-desc':'You work directly with me. No project managers, no account reps. Just one person who builds your site and answers your questions.',
            'contact-label':'Get Started','contact-title':'Ready to Go Live?','contact-desc':"Tell me about your project. I'll reply within 24 hours with next steps.",
            'form-name':'Your Name','form-email':'Email','form-package-label':'Package','form-package-select':'Select a package...',
            'form-package-1':'Landing Page - €149','form-package-2':'Basic Website - €299','form-package-3':'Business Website - €499','form-package-4':'E-commerce Store - €799','form-package-5':'Custom Quote',
            'form-message':'Project Details','form-btn':'Send Project Brief',
            'contact-email-label':'Email','contact-location-label':'Location','contact-location':'Athens, Greece','contact-response-label':'Response Time','contact-response-time':'Within 24 hours',
            'footer-text':'Helping Greek businesses go from invisible to unforgettable. One fast website at a time.','footer-location':'Athens, Greece',
        },
        gr: {
            'nav-home':'Αρχική','nav-work':'Έργα','nav-pricing':'Τιμές','nav-contact':'Επικοινωνία','nav-btn':'Δείτε Τιμές',
            'hero-badge':'Developer 16 Ετών','hero-title-1':'Από Αόρατος σε Αξέχαστος',
            'hero-desc':'Οι ανταγωνιστές σας ξεκινούν. Οι πελάτες σας αναζητούν. Μην περιμένετε εβδομάδες για πρακτορείο — αποκτήστε επαγγελματική, mobile-responsive ιστοσελίδα σε 5 ημέρες. Δίγλωσση (EN/GR), γρήγορη και ειλικρινής. Χωρίς γραφειοκρατία. Μόνο αποτελέσματα.',
            'hero-btn-1':'Κλειδώστε την Τιμή Έναρξης','hero-btn-2':'Δείτε Ζωντανά Παραδείγματα',
            'stat-1-label':'Ζωντανές Ιστοσελίδες','stat-2-label':'Τέλειο Mobile','stat-3-label':'Ημέρες Παράδοσης','stat-4-label':'Γλώσσες',
            'work-label':'Portfolio','work-title':'Πραγματικές Ιστοσελίδες. Ζωντανές. Λειτουργικές.','work-desc':'Αυτά δεν είναι mockups. Είναι ιστοσελίδες που επιχειρήσεις χρησιμοποιούν για να αποκτήσουν πελάτες.',
            'btn-view':'Δείτε Ζωντανή Ιστοσελίδα',
            'project-1-tag':'Εστιατόριο','project-1-title':'Olive & Thyme','project-1-desc':'Μεσογειακό εστιατόριο με άμεσες online κρατήσεις και παρουσίαση μενού.',
            'project-2-tag':'Επιχείρηση','project-2-title':'Apex Consulting','project-2-desc':'Συμβουλευτική εταιρεία που χρειαζόταν αξιοπιστία γρήγορα.',
            'project-3-tag':'Web3/NFT','project-3-title':'CryptoVerse','project-3-desc':'Αγορά NFT με cutting-edge design. Φτιαγμένη για να ξεχωρίζει.',
            'project-4-tag':'Γυμναστήριο','project-4-title':'FitZone Gym','project-4-desc':'Δυναμική ιστοσελίδα γυμναστηρίου που οδηγεί σε εγγραφές.',
            'pricing-label':'Τιμολόγηση','pricing-title':'Μία Τιμή. Χωρίς Εκπλήξεις. Χωρίς Διαπραγματεύσεις.','pricing-desc':'Διαλέξτε πακέτο. Πληρώστε μία φορά. Πάρτε την ιστοσελίδα σας σε 5 ημέρες. Απλό.',
            'launch-banner-title':'Τιμές Πρώιμης Εγγραφής — Περιορισμένη Διαθεσιμότητα','launch-banner-desc':'Οι τιμές είναι κλειδωμένες μόνο για τους πρώτους πελάτες. Μετά, ανεβαίνουν οριστικά.',
            'popular-badge':'Καλύτερη Αξία','pricing-delivery':'5 ημέρες παράδοση','pricing-4-delivery':'7-10 ημέρες παράδοση','btn-get-started':'Διεκδικήστε Αυτή την Τιμή',
            'pricing-1-name':'Landing Page','pricing-2-name':'Βασική Ιστοσελίδα','pricing-3-name':'Επιχειρηματική Ιστοσελίδα','pricing-4-name':'E-commerce Κατάστημα',
            'feature-1-1':'1 σελίδα, 3-5 τμήματα','feature-1-2':'Mobile responsive','feature-1-3':'Φόρμα επικοινωνίας','feature-1-4':'1 γύρος αλλαγών',
            'feature-2-1':'3-5 σελίδες','feature-2-2':'Mobile responsive','feature-2-3':'Φόρμα επικοινωνίας','feature-2-4':'Βασικό SEO','feature-2-5':'2 γύροι αλλαγών',
            'feature-3-1':'5-8 σελίδες','feature-3-2':'Γκαλερί/Portfolio','feature-3-3':'Ενσωμάτωση Google Maps','feature-3-4':'Social media links','feature-3-5':'Βοήθεια email setup','feature-3-6':'3 γύροι αλλαγών',
            'feature-4-1':'Πλήρης ιστοσελίδα +','feature-4-2':'Πλήρες καλάθι αγορών & checkout','feature-4-3':'Online πληρωμές (Stripe / Viva Wallet)','feature-4-4':'Διαχείριση προϊόντων & αποθέματος','feature-4-5':'Admin dashboard + εκπαίδευση',
            'addons-title':'Πρόσθετα','addon-1-name':'Δίγλωσση (EN/GR)','addon-1-price':'+€75','addon-2-name':'Προχωρημένο SEO','addon-2-price':'+€60','addon-3-name':'Επιπλέον Αλλαγές','addon-3-price':'+€30',
            'benefits-label':'Γιατί να με Επιλέξετε','benefits-title':'Χωρίς Γραφειοκρατία. Μόνο Ταχύτητα & Ειλικρίνεια.',
            'benefit-1-title':'Κάντε Launch Πριν τον Ανταγωνιστή σας','benefit-1-desc':'Παράδοση σε 5 ημέρες σημαίνει είστε live ενώ τα πρακτορεία ακόμα προγραμματίζουν συναντήσεις.',
            'benefit-2-title':'Μιλήστε σε Ελληνικές & Παγκόσμιες Αγορές','benefit-2-desc':'Μητρική Ελληνικά, άπταιστα Αγγλικά. Η ιστοσελίδα σας λειτουργεί για τοπικούς και διεθνείς πελάτες.',
            'benefit-3-title':'Mobile = 70% της Κίνησής σας','benefit-3-desc':'Κάθε ιστοσελίδα που φτιάχνω είναι mobile-first.',
            'benefit-4-title':'Χωρίς Μεσάζοντες = Δίκαιη Τιμολόγηση','benefit-4-desc':'Συνεργάζεστε απευθείας μαζί μου. Χωρίς project managers.',
            'contact-label':'Ξεκινήστε','contact-title':'Έτοιμοι να Πάτε Live;','contact-desc':'Πείτε μου για το έργο σας. Θα απαντήσω εντός 24 ωρών.',
            'form-name':'Το Όνομά σας','form-email':'Email','form-package-label':'Πακέτο','form-package-select':'Επιλέξτε πακέτο...',
            'form-package-1':'Landing Page - €149','form-package-2':'Βασική Ιστοσελίδα - €299','form-package-3':'Επιχειρηματική - €499','form-package-4':'E-commerce - €799','form-package-5':'Προσαρμοσμένη Προσφορά',
            'form-message':'Λεπτομέρειες Έργου','form-btn':'Αποστολή Περιγραφής Έργου',
            'contact-email-label':'Email','contact-location-label':'Τοποθεσία','contact-location':'Αθήνα, Ελλάδα','contact-response-label':'Χρόνος Απόκρισης','contact-response-time':'Εντός 24 ωρών',
            'footer-text':'Βοηθώντας ελληνικές επιχειρήσεις να πάνε από αόρατες σε αξέχαστες.','footer-location':'Αθήνα, Ελλάδα',
        }
    };

    function applyTranslations(lang) {
        const t = translations[lang];
        if (!t) return;
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (!t[key]) return;
            if (el.tagName === 'INPUT' && !el.value) { el.placeholder = t[key]; }
            else if (el.tagName === 'TEXTAREA' && !el.value) { el.placeholder = t[key]; }
            else if (el.tagName === 'OPTION') { el.textContent = t[key]; }
            else { el.textContent = t[key]; }
        });
    }


    // ==========================================
    // TYPING EFFECT
    // ==========================================
    let currentLang = 'en';
    let typingTimeouts = [];

    function clearTyping() {
        typingTimeouts.forEach(t => clearTimeout(t));
        typingTimeouts = [];
    }

    function startTyping(lang) {
        clearTyping();
        const el     = document.querySelector('.typing-text');
        const cursor = document.querySelector('.typing-cursor');
        if (!el) return;
        const text = el.getAttribute('data-' + lang) || 'In Just 5 Days';
        el.textContent = '';
        if (cursor) cursor.classList.add('typing');
        let i = 0;
        function type() {
            if (i < text.length) {
                el.textContent = text.substring(0, i + 1);
                i++;
                typingTimeouts.push(setTimeout(type, 80 + Math.random() * 50));
            } else {
                if (cursor) cursor.classList.remove('typing');
            }
        }
        typingTimeouts.push(setTimeout(type, 80));
    }

    // ==========================================
    // LANGUAGE TOGGLE
    // ==========================================
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            if (lang === currentLang) return;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentLang = lang;
            applyTranslations(lang);
            startTyping(lang);
        });
    });

    // ==========================================
    // SCROLL REVEAL
    // ==========================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                if (el.hasAttribute('data-reveal-group')) {
                    el.querySelectorAll(':scope > *').forEach(child => child.classList.add('revealed'));
                } else {
                    el.classList.add('revealed');
                }
                revealObserver.unobserve(el);
            }
        });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach(el => {
        revealObserver.observe(el);
    });

    // ==========================================
    // STAT COUNTERS
    // Auto-counts .project-card elements so "Live Sites Built"
    // never needs manual updates when you add new projects.
    // ==========================================
    const liveCount = document.querySelectorAll('.project-card').length;

    const statTargets = [
        { value: liveCount, suffix: '' },
        { value: 100,       suffix: '%' },
        { value: 5,         suffix: '' },
        { value: 2,         suffix: '' }
    ];

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.querySelectorAll('.stat-number').forEach((el, i) => {
                if (!statTargets[i]) return;
                const { value, suffix } = statTargets[i];
                const start = performance.now();
                const dur   = 1200;
                setTimeout(() => {
                    function tick(now) {
                        const p = Math.min((now - start) / dur, 1);
                        const e = 1 - Math.pow(1 - p, 4);
                        el.textContent = Math.round(e * value) + suffix;
                        if (p < 1) requestAnimationFrame(tick);
                    }
                    requestAnimationFrame(tick);
                }, i * 150);
            });
            statsObserver.unobserve(entry.target);
        });
    }, { threshold: 0.5 });

    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) statsObserver.observe(statsBar);

    // ==========================================
    // NAVBAR SCROLL
    // ==========================================
    window.addEventListener('scroll', () => {
        document.querySelector('.navbar')?.classList.toggle('scrolled', window.scrollY > 80);
    }, { passive: true });

    // ==========================================
    // MOBILE MENU
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMobile  = document.getElementById('nav-mobile');
    if (menuToggle && navMobile) {
        menuToggle.addEventListener('click', function () {
            navMobile.classList.toggle('open');
            this.classList.toggle('open');
        });
        navMobile.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMobile.classList.remove('open');
                menuToggle.classList.remove('open');
            });
        });
    }

    // ==========================================
    // SCROLLSPY — active folder tab
    // ==========================================
    const sections  = document.querySelectorAll('#home, #work, #process, #pricing, #contact');
    const navTabs   = document.querySelectorAll('.nav-tab');

    const spyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navTabs.forEach(tab => {
                    tab.classList.toggle('active', tab.getAttribute('data-section') === id);
                });
            }
        });
    }, { threshold: 0.35, rootMargin: '-10% 0px -55% 0px' });

    sections.forEach(s => spyObserver.observe(s));

    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            const target = document.querySelector(id);
            if (target) {
                e.preventDefault();
                window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // HERO MOUSE SPOTLIGHT
    // ==========================================
    const heroEl = document.getElementById('home');
    if (heroEl) {
        heroEl.addEventListener('mousemove', (e) => {
            const rect = heroEl.getBoundingClientRect();
            heroEl.style.setProperty('--mx', `${e.clientX - rect.left}px`);
            heroEl.style.setProperty('--my', `${e.clientY - rect.top}px`);
        });
    }

    // ==========================================
    // HERO SCROLL FADE
    // ==========================================
    if (window.innerWidth > 768) {
        const heroCenter = document.querySelector('.hero-center');
        window.addEventListener('scroll', () => {
            if (heroCenter) {
                const s = window.scrollY;
                heroCenter.style.opacity = Math.max(0, 1 - s / 500);
            }
        }, { passive: true });
    }

    // ==========================================
    // INIT
    // ==========================================
    applyTranslations('en');
    setTimeout(() => { startTyping('en'); }, 1350);

});
