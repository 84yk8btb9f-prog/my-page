document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // CUSTOM CURSOR
    // ==========================================
    const cursorRing = document.querySelector('.cursor-ring');

    if (cursorRing && window.innerWidth > 968) {
        let mouseX = 0, mouseY = 0;
        let ringX  = 0, ringY  = 0;
        let started = false;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            if (!started) {
                // Snap ring to position before making it visible
                ringX = mouseX;
                ringY = mouseY;
                cursorRing.style.left = ringX + 'px';
                cursorRing.style.top  = ringY + 'px';
                cursorRing.style.opacity = '1';
                started = true;
            }
        });

        // Ring follows with smooth lag
        function animateRing() {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            cursorRing.style.left = ringX + 'px';
            cursorRing.style.top  = ringY + 'px';
            rafId = requestAnimationFrame(animateRing);
        }
        animateRing();

        // Hover states
        const hoverTargets = 'a, button, .project-card, .pricing-card, .benefit-card, .addon-item, .btn, .btn-view, .social-links a';
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest(hoverTargets)) {
                cursorRing.classList.add('hovering');
            }
        });
        document.addEventListener('mouseout', (e) => {
            if (e.target.closest(hoverTargets)) {
                cursorRing.classList.remove('hovering');
            }
        });

        document.addEventListener('mousedown', () => cursorRing.classList.add('hovering'));
        document.addEventListener('mouseup',   () => cursorRing.classList.remove('hovering'));
    }


    // ==========================================
    // HERO CANVAS PARTICLES
    // ==========================================
    const canvas = document.getElementById('hero-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animFrame;

        function resizeCanvas() {
            canvas.width  = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        }

        resizeCanvas();
        window.addEventListener('resize', () => {
            resizeCanvas();
            initParticles();
        });

        class Particle {
            constructor() { this.reset(true); }

            reset(initial = false) {
                this.x  = Math.random() * canvas.width;
                this.y  = initial ? Math.random() * canvas.height : canvas.height + 10;
                this.vx = (Math.random() - 0.5) * 0.3;
                this.vy = -(Math.random() * 0.4 + 0.1);
                this.radius = Math.random() * 1.5 + 0.5;
                this.alpha  = Math.random() * 0.5 + 0.1;
                this.maxAlpha = this.alpha;
                this.life   = 0;
                this.maxLife = Math.random() * 300 + 200;
                const roll = Math.random();
                this.color = roll < 0.6
                    ? `rgba(0, 217, 255,`
                    : `rgba(127, 90, 240,`;
            }

            update() {
                this.x   += this.vx;
                this.y   += this.vy;
                this.life++;
                const progress = this.life / this.maxLife;
                if (progress < 0.1) {
                    this.alpha = this.maxAlpha * (progress / 0.1);
                } else if (progress > 0.8) {
                    this.alpha = this.maxAlpha * (1 - (progress - 0.8) / 0.2);
                }
                if (this.life >= this.maxLife) this.reset();
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${this.color} ${this.alpha})`;
                ctx.fill();
            }
        }

        // Connection lines
        function drawConnections() {
            const maxDist = 100;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        const alpha = (1 - dist / maxDist) * 0.12;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(0, 217, 255, ${alpha})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function initParticles() {
            particles = [];
            const count = Math.min(80, Math.floor((canvas.width * canvas.height) / 12000));
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawConnections();
            particles.forEach(p => { p.update(); p.draw(); });
            animFrame = requestAnimationFrame(animate);
        }

        initParticles();
        animate();
    }


    // ==========================================
    // TYPING EFFECT — Enhanced with cursor + loop
    // ==========================================
    let currentLang = 'en';
    let typingTimeouts = [];

    function clearTypingTimeouts() {
        typingTimeouts.forEach(t => clearTimeout(t));
        typingTimeouts = [];
    }

    function initTypingEffect(lang) {
        clearTypingTimeouts();

        const typingEl = document.querySelector('.typing-text');
        const cursorEl = document.querySelector('.typing-cursor');
        if (!typingEl) return;

        const text = typingEl.getAttribute('data-' + lang) || typingEl.getAttribute('data-en') || 'In Just 5 Days';

        // Clear
        typingEl.textContent = '';
        if (cursorEl) {
            cursorEl.classList.add('typing');
        }

        // Type out
        let i = 0;
        function type() {
            if (i < text.length) {
                typingEl.textContent += text.charAt(i);
                i++;
                // Slightly varied speed for natural feel
                const delay = 80 + Math.random() * 60;
                const t = setTimeout(type, delay);
                typingTimeouts.push(t);
            } else {
                // Done typing — cursor starts blinking
                if (cursorEl) {
                    cursorEl.classList.remove('typing');
                }
            }
        }

        // Delay start on page load so it feels intentional
        const startDelay = lang === 'en' ? 2200 : 300;
        const startT = setTimeout(type, startDelay);
        typingTimeouts.push(startT);
    }


    // ==========================================
    // LANGUAGE TOGGLE
    // ==========================================
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                langButtons.forEach(b => b.classList.remove('active'));
                this.classList.add('active');
                currentLang = lang;
                applyTranslations(lang);
                initTypingEffect(lang);
            }
        });
    });


    // ==========================================
    // SCROLL REVEAL (IntersectionObserver)
    // ==========================================
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('[data-reveal], [data-reveal-group]').forEach(el => {
        revealObserver.observe(el);
    });


    // ==========================================
    // STAT COUNTER ANIMATION
    // ==========================================
    function animateCounter(el, target, suffix, duration) {
        const start = 0;
        const startTime = performance.now();

        function update(currentTime) {
            const elapsed  = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 4); // easeOutQuart
            const current  = Math.round(eased * target);
            el.textContent = current + suffix;
            if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
    }

    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumbers = entry.target.querySelectorAll('.stat-number');
                const targets = [
                    { value: 9,   suffix: '' },
                    { value: 100, suffix: '%' },
                    { value: 5,   suffix: '' },
                    { value: 2,   suffix: '' },
                ];
                statNumbers.forEach((el, i) => {
                    if (targets[i]) {
                        setTimeout(() => {
                            animateCounter(el, targets[i].value, targets[i].suffix, 1200);
                        }, i * 150);
                    }
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    const statsBar = document.querySelector('.stats-bar');
    if (statsBar) statsObserver.observe(statsBar);


    // ==========================================
    // MAGNETIC BUTTONS
    // ==========================================
    if (window.innerWidth > 968) {
        document.querySelectorAll('.btn-primary, .btn-nav').forEach(btn => {
            btn.addEventListener('mousemove', function (e) {
                const rect = this.getBoundingClientRect();
                const cx = rect.left + rect.width / 2;
                const cy = rect.top  + rect.height / 2;
                const dx = (e.clientX - cx) * 0.25;
                const dy = (e.clientY - cy) * 0.25;
                this.style.transform = `translate(${dx}px, ${dy}px) translateY(-3px)`;
            });

            btn.addEventListener('mouseleave', function () {
                this.style.transform = '';
            });
        });
    }


    // ==========================================
    // NAVBAR SCROLL
    // ==========================================
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            navbar.classList.toggle('scrolled', window.scrollY > 80);
        }
    }, { passive: true });


    // ==========================================
    // MOBILE MENU
    // ==========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu    = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            this.classList.toggle('open');
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('open');
            });
        });
    }


    // ==========================================
    // SMOOTH SCROLL
    // ==========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });


    // ==========================================
    // PARALLAX — Hero subtle depth
    // ==========================================
    if (window.innerWidth > 768) {
        const heroContent = document.querySelector('.hero-content');
        const heroBg = document.querySelector('.hero-bg-gradient');

        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.12}px)`;
                heroContent.style.opacity   = Math.max(0, 1 - scrolled / 600) + '';
            }
            if (heroBg) {
                heroBg.style.transform = `translateY(${scrolled * 0.05}px)`;
            }
        }, { passive: true });
    }


    // ==========================================
    // INIT
    // ==========================================
    function init() {
        currentLang = 'en';
        applyTranslations('en');
        initTypingEffect('en');
    }

    init();


    // ==========================================
    // TRANSLATIONS (complete)
    // ==========================================
    function applyTranslations(lang) {
        const translations = {
            en: {
                'nav-home': 'Home', 'nav-work': 'Work', 'nav-pricing': 'Pricing',
                'nav-contact': 'Contact', 'nav-btn': 'See Pricing',
                'hero-badge': '16-Year-Old Developer',
                'hero-title-1': 'From Invisible to Unforgettable',
                'hero-desc': 'Your competitors are launching. Your customers are searching. Don\'t wait weeks for an agency — get a professional, mobile-responsive website built in 5 days. Bilingual (EN/GR), fast, and honest. No bureaucracy. Just results.',
                'hero-btn-1': 'Lock In Launch Price', 'hero-btn-2': 'View Live Examples',
                'stat-1-label': 'Live Sites Built', 'stat-2-label': 'Mobile-Perfect',
                'stat-3-label': 'Day Turnaround', 'stat-4-label': 'Languages',
                'work-label': 'Portfolio', 'work-title': 'Real Sites. Live. Functional.',
                'work-desc': 'These aren\'t mockups. They\'re websites businesses actually use to get customers.',
                'btn-view': 'View Live Site',
                'project-1-tag': 'Restaurant', 'project-1-title': 'Olive & Thyme',
                'project-1-desc': 'Mediterranean restaurant with instant online reservations and menu showcase. Built to convert browsers into bookings.',
                'project-2-tag': 'Business', 'project-2-title': 'Apex Consulting',
                'project-2-desc': 'Consulting firm that needed credibility fast. Professional design that positions them as industry leaders.',
                'project-3-tag': 'Web3/NFT', 'project-3-title': 'CryptoVerse',
                'project-3-desc': 'NFT marketplace with cutting-edge design. Built to stand out in a crowded crypto space.',
                'project-4-tag': 'Fitness', 'project-4-title': 'FitZone Gym',
                'project-4-desc': 'High-energy gym site that drives sign-ups. Schedules, trainers, and pricing designed for conversions.',
                'pricing-label': 'Pricing',
                'pricing-title': 'One Price. No Surprises. No Haggling.',
                'pricing-desc': 'Pick a package. Pay once. Get your site in 5 days. Simple.',
                'launch-banner-title': '🔥 Early-Bird Pricing Ends Soon',
                'launch-banner-desc': 'I\'m locking in 30% off for my first 5 clients. After that, prices go up permanently. 3 slots left.',
                'popular-badge': 'Best Value', 'pricing-delivery': '5 days delivery',
                'pricing-4-delivery': '7-10 days delivery', 'btn-get-started': 'Claim This Price',
                'pricing-1-name': 'Landing Page', 'pricing-2-name': 'Basic Website',
                'pricing-3-name': 'Business Website', 'pricing-4-name': 'E-commerce Ready',
                'feature-1-1': '1 page, 3-5 sections', 'feature-1-2': 'Mobile responsive',
                'feature-1-3': 'Contact form', 'feature-1-4': '1 revision round',
                'feature-2-1': '3-5 pages', 'feature-2-2': 'Mobile responsive',
                'feature-2-3': 'Contact form', 'feature-2-4': 'Basic SEO',
                'feature-2-5': '2 revision rounds',
                'feature-3-1': '5-8 pages', 'feature-3-2': 'Gallery/Portfolio',
                'feature-3-3': 'Google Maps integration', 'feature-3-4': 'Social media links',
                'feature-3-5': 'Email setup help', 'feature-3-6': '3 revision rounds',
                'feature-4-1': 'Full business site +', 'feature-4-2': 'Product catalog',
                'feature-4-3': 'WhatsApp order system', 'feature-4-4': 'Payment integration',
                'feature-4-5': 'Admin training included',
                'addons-title': 'Add-Ons',
                'addon-1-name': 'Bilingual (EN/GR)', 'addon-1-price': '+€75',
                'addon-2-name': 'Advanced SEO', 'addon-2-price': '+€60',
                'addon-3-name': 'Extra Revisions', 'addon-3-price': '+€30',
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
                'contact-label': 'Get Started', 'contact-title': 'Ready to Go Live?',
                'contact-desc': 'Tell me about your project. I\'ll reply within 24 hours with next steps.',
                'form-name': 'Your Name', 'form-email': 'Email',
                'form-package-label': 'Package', 'form-package-select': 'Select a package...',
                'form-package-1': 'Landing Page - €100', 'form-package-2': 'Basic Website - €200',
                'form-package-3': 'Business Website - €350', 'form-package-4': 'E-commerce Ready - €500',
                'form-package-5': 'Custom Quote', 'form-message': 'Project Details',
                'form-message-placeholder': 'Tell me about your project...',
                'form-btn': 'Send Project Brief',
                'contact-email-label': 'Email', 'contact-location-label': 'Location',
                'contact-location': 'Athens, Greece', 'contact-response-label': 'Response Time',
                'contact-response-time': 'Within 24 hours',
                'footer-text': 'Helping Greek businesses go from invisible to unforgettable. One fast website at a time.',
                'footer-location': 'Athens, Greece',
            },
            gr: {
                'nav-home': 'Αρχική', 'nav-work': 'Έργα', 'nav-pricing': 'Τιμές',
                'nav-contact': 'Επικοινωνία', 'nav-btn': 'Δείτε Τιμές',
                'hero-badge': 'Developer 16 Ετών',
                'hero-title-1': 'Από Αόρατος σε Αξέχαστος',
                'hero-desc': 'Οι ανταγωνιστές σας ξεκινούν. Οι πελάτες σας αναζητούν. Μην περιμένετε εβδομάδες για πρακτορείο — αποκτήστε επαγγελματική, mobile-responsive ιστοσελίδα σε 5 ημέρες. Δίγλωσση (EN/GR), γρήγορη και ειλικρινής. Χωρίς γραφειοκρατία. Μόνο αποτελέσματα.',
                'hero-btn-1': 'Κλειδώστε την Τιμή Έναρξης', 'hero-btn-2': 'Δείτε Ζωντανά Παραδείγματα',
                'stat-1-label': 'Ζωντανές Ιστοσελίδες', 'stat-2-label': 'Τέλειο Mobile',
                'stat-3-label': 'Ημέρες Παράδοσης', 'stat-4-label': 'Γλώσσες',
                'work-label': 'Portfolio', 'work-title': 'Πραγματικές Ιστοσελίδες. Ζωντανές. Λειτουργικές.',
                'work-desc': 'Αυτά δεν είναι mockups. Είναι ιστοσελίδες που επιχειρήσεις χρησιμοποιούν για να αποκτήσουν πελάτες.',
                'btn-view': 'Δείτε Ζωντανή Ιστοσελίδα',
                'project-1-tag': 'Εστιατόριο', 'project-1-title': 'Olive & Thyme',
                'project-1-desc': 'Μεσογειακό εστιατόριο με άμεσες online κρατήσεις και παρουσίαση μενού. Φτιαγμένο για να μετατρέπει επισκέπτες σε κρατήσεις.',
                'project-2-tag': 'Επιχείρηση', 'project-2-title': 'Apex Consulting',
                'project-2-desc': 'Συμβουλευτική εταιρεία που χρειαζόταν αξιοπιστία γρήγορα. Επαγγελματικό design που τους τοποθετεί ως ηγέτες.',
                'project-3-tag': 'Web3/NFT', 'project-3-title': 'CryptoVerse',
                'project-3-desc': 'Αγορά NFT με cutting-edge design. Φτιαγμένη για να ξεχωρίζει σε έναν πολύ ανταγωνιστικό χώρο.',
                'project-4-tag': 'Γυμναστήριο', 'project-4-title': 'FitZone Gym',
                'project-4-desc': 'Δυναμική ιστοσελίδα γυμναστηρίου που οδηγεί σε εγγραφές. Προγράμματα, προπονητές και τιμολόγηση για conversions.',
                'pricing-label': 'Τιμολόγηση',
                'pricing-title': 'Μία Τιμή. Χωρίς Εκπλήξεις. Χωρίς Διαπραγματεύσεις.',
                'pricing-desc': 'Διαλέξτε πακέτο. Πληρώστε μία φορά. Πάρτε την ιστοσελίδα σας σε 5 ημέρες. Απλό.',
                'launch-banner-title': '🔥 Οι Τιμές Πρώιμης Εγγραφής Τελειώνουν Σύντομα',
                'launch-banner-desc': 'Κλειδώνω 30% έκπτωση για τους πρώτους 5 πελάτες μου. Μετά, οι τιμές ανεβαίνουν μόνιμα. Απομένουν 3 θέσεις.',
                'popular-badge': 'Καλύτερη Αξία', 'pricing-delivery': '5 ημέρες παράδοση',
                'pricing-4-delivery': '7-10 ημέρες παράδοση', 'btn-get-started': 'Διεκδικήστε Αυτή την Τιμή',
                'pricing-1-name': 'Landing Page', 'pricing-2-name': 'Βασική Ιστοσελίδα',
                'pricing-3-name': 'Επιχειρηματική Ιστοσελίδα', 'pricing-4-name': 'E-commerce Έτοιμο',
                'feature-1-1': '1 σελίδα, 3-5 τμήματα', 'feature-1-2': 'Mobile responsive',
                'feature-1-3': 'Φόρμα επικοινωνίας', 'feature-1-4': '1 γύρος αλλαγών',
                'feature-2-1': '3-5 σελίδες', 'feature-2-2': 'Mobile responsive',
                'feature-2-3': 'Φόρμα επικοινωνίας', 'feature-2-4': 'Βασικό SEO',
                'feature-2-5': '2 γύροι αλλαγών',
                'feature-3-1': '5-8 σελίδες', 'feature-3-2': 'Γκαλερί/Portfolio',
                'feature-3-3': 'Ενσωμάτωση Google Maps', 'feature-3-4': 'Social media links',
                'feature-3-5': 'Βοήθεια email setup', 'feature-3-6': '3 γύροι αλλαγών',
                'feature-4-1': 'Πλήρης ιστοσελίδα +', 'feature-4-2': 'Κατάλογος προϊόντων',
                'feature-4-3': 'Σύστημα παραγγελιών WhatsApp', 'feature-4-4': 'Ενσωμάτωση πληρωμών',
                'feature-4-5': 'Admin training συμπεριλαμβάνεται',
                'addons-title': 'Πρόσθετα',
                'addon-1-name': 'Δίγλωσση (EN/GR)', 'addon-1-price': '+€75',
                'addon-2-name': 'Προχωρημένο SEO', 'addon-2-price': '+€60',
                'addon-3-name': 'Επιπλέον Αλλαγές', 'addon-3-price': '+€30',
                'benefits-label': 'Γιατί να με Επιλέξετε',
                'benefits-title': 'Χωρίς Γραφειοκρατία. Μόνο Ταχύτητα & Ειλικρίνεια.',
                'benefit-1-title': 'Κάντε Launch Πριν τον Ανταγωνιστή σας',
                'benefit-1-desc': 'Παράδοση σε 5 ημέρες σημαίνει είστε live ενώ τα πρακτορεία ακόμα προγραμματίζουν συναντήσεις.',
                'benefit-2-title': 'Μιλήστε σε Ελληνικές & Παγκόσμιες Αγορές',
                'benefit-2-desc': 'Μητρική Ελληνικά, άπταιστα Αγγλικά. Η ιστοσελίδα σας λειτουργεί για τοπικούς και διεθνείς πελάτες.',
                'benefit-3-title': 'Mobile = 70% της Κίνησής σας',
                'benefit-3-desc': 'Κάθε ιστοσελίδα που φτιάχνω είναι mobile-first. Οι πελάτες σας περιηγούνται από κινητά.',
                'benefit-4-title': 'Χωρίς Μεσάζοντες = Δίκαιη Τιμολόγηση',
                'benefit-4-desc': 'Συνεργάζεστε απευθείας μαζί μου. Χωρίς project managers. Μόνο ένα άτομο που φτιάχνει την ιστοσελίδα σας.',
                'contact-label': 'Ξεκινήστε', 'contact-title': 'Έτοιμοι να Πάτε Live;',
                'contact-desc': 'Πείτε μου για το έργο σας. Θα απαντήσω εντός 24 ωρών με τα επόμενα βήματα.',
                'form-name': 'Το Όνομά σας', 'form-email': 'Email',
                'form-package-label': 'Πακέτο', 'form-package-select': 'Επιλέξτε πακέτο...',
                'form-package-1': 'Landing Page - €100', 'form-package-2': 'Βασική Ιστοσελίδα - €200',
                'form-package-3': 'Επιχειρηματική - €350', 'form-package-4': 'E-commerce - €500',
                'form-package-5': 'Προσαρμοσμένη Προσφορά', 'form-message': 'Λεπτομέρειες Έργου',
                'form-message-placeholder': 'Πες μου για το έργο σου...',
                'form-btn': 'Αποστολή Περιγραφής Έργου',
                'contact-email-label': 'Email', 'contact-location-label': 'Τοποθεσία',
                'contact-location': 'Αθήνα, Ελλάδα', 'contact-response-label': 'Χρόνος Απόκρισης',
                'contact-response-time': 'Εντός 24 ωρών',
                'footer-text': 'Βοηθώντας ελληνικές επιχειρήσεις να πάνε από αόρατες σε αξέχαστες.',
                'footer-location': 'Αθήνα, Ελλάδα',
            }
        };

        const t = translations[lang];
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (!t[key]) return;
            if (el.tagName === 'INPUT' && (el.type === 'text' || el.type === 'email')) {
                if (!el.value) el.placeholder = t[key];
            } else if (el.tagName === 'TEXTAREA') {
                if (!el.value) el.placeholder = t[key];
            } else if (el.tagName === 'OPTION') {
                el.textContent = t[key];
            } else {
                el.textContent = t[key];
            }
        });
    }

});
