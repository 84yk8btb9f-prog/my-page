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
            'funnel-skip':'Skip','funnel-step1-label':'Step 1 of 3','funnel-step2-label':'Step 2 of 3','funnel-step3-label':'Step 3 of 3','funnel-result-label':'Your Match',
            'funnel-q1':'What do you need?','funnel-q2':'What type of business?','funnel-q3':'What matters most?',
            'funnel-opt-new':'A brand new website','funnel-opt-redesign':'Redesign my current site','funnel-opt-store':'An online store','funnel-opt-notsure':'Not sure yet',
            'funnel-opt-restaurant':'Restaurant / Cafe / Bar','funnel-opt-shop':'Shop / Retail / Products','funnel-opt-services':'Professional Services','funnel-opt-other':'Other Business',
            'funnel-opt-fast':'Launch as fast as possible','funnel-opt-credible':'Look credible & professional','funnel-opt-seo':'Get found on Google','funnel-opt-cost':'Keep costs low',
            'funnel-result-intro':'Based on what you told me, the best fit is:','funnel-recommended':'Recommended',
            'funnel-cta':'Get This Package','funnel-view-all':'View All Options','funnel-just-skip':'Just show me the site →',
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
            'funnel-skip':'Παράλειψη','funnel-step1-label':'Βήμα 1 από 3','funnel-step2-label':'Βήμα 2 από 3','funnel-step3-label':'Βήμα 3 από 3','funnel-result-label':'Η Επιλογή σας',
            'funnel-q1':'Τι χρειάζεστε;','funnel-q2':'Τι είδος επιχείρηση έχετε;','funnel-q3':'Τι είναι πιο σημαντικό;',
            'funnel-opt-new':'Μια εντελώς νέα ιστοσελίδα','funnel-opt-redesign':'Ανανέωση υπάρχουσας ιστοσελίδας','funnel-opt-store':'Ένα online κατάστημα','funnel-opt-notsure':'Δεν είμαι σίγουρος/η ακόμα',
            'funnel-opt-restaurant':'Εστιατόριο / Καφέ / Bar','funnel-opt-shop':'Κατάστημα / Λιανική / Προϊόντα','funnel-opt-services':'Επαγγελματικές Υπηρεσίες','funnel-opt-other':'Άλλη Επιχείρηση',
            'funnel-opt-fast':'Να ανεβώ online όσο πιο γρήγορα γίνεται','funnel-opt-credible':'Να φαίνομαι αξιόπιστος & επαγγελματίας','funnel-opt-seo':'Να με βρίσκουν στο Google','funnel-opt-cost':'Να κρατήσω το κόστος χαμηλά',
            'funnel-result-intro':'Βάσει όσων μου είπατε, η καλύτερη επιλογή είναι:','funnel-recommended':'Προτεινόμενο',
            'funnel-cta':'Επιλογή Πακέτου','funnel-view-all':'Δείτε Όλες τις Επιλογές','funnel-just-skip':'Απλά δείξτε μου την ιστοσελίδα →',
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
    // AGENT CARD SCROLLSPY — highlight left step
    // ==========================================
    const orcSteps = document.querySelectorAll('.orc-step');
    const agentCards = document.querySelectorAll('.agent-card[data-step]');

    if (orcSteps.length && agentCards.length) {
        const setActiveStep = (stepNum) => {
            orcSteps.forEach(s => {
                s.classList.toggle('orc-step--active', s.getAttribute('data-step') === String(stepNum));
            });
        };

        // Start with step 1 active
        setActiveStep(1);

        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const step = entry.target.getAttribute('data-step');
                    setActiveStep(step);
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '-10% 0px -40% 0px'
        });

        agentCards.forEach(card => cardObserver.observe(card));
    }

    // ==========================================
    // WEBGL BACKGROUND SHADER
    // ==========================================
    (function initBgShader() {
        const canvas = document.getElementById('bg-shader');
        if (!canvas) return;
        const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
        if (!gl) return;

        const vert = `attribute vec2 a_pos;void main(){gl_Position=vec4(a_pos,0.,1.);}`;
        // Chromatic sine-wave shader (wavy RGB lines)
        const frag = `
precision highp float;
uniform vec2 iResolution;
uniform float iTime;

void main(){
  vec2 p=(gl_FragCoord.xy*2.0-iResolution)/min(iResolution.x,iResolution.y);
  float d=length(p)*0.05;
  float rx=p.x*(1.0+d);
  float bx=p.x*(1.0-d);
  float xScale=1.0;
  float yScale=0.5;
  float r=0.05/abs(p.y+sin((rx+iTime)*xScale)*yScale);
  float g=0.05/abs(p.y+sin((p.x+iTime)*xScale)*yScale);
  float b=0.05/abs(p.y+sin((bx+iTime)*xScale)*yScale);
  gl_FragColor=vec4(r,g,b,1.0);
}`;

        function mkShader(type, src) {
            const s = gl.createShader(type);
            gl.shaderSource(s, src);
            gl.compileShader(s);
            return s;
        }
        const prog = gl.createProgram();
        gl.attachShader(prog, mkShader(gl.VERTEX_SHADER, vert));
        gl.attachShader(prog, mkShader(gl.FRAGMENT_SHADER, frag));
        gl.linkProgram(prog);
        gl.useProgram(prog);

        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1,-1, 1,-1, -1,1, 1,1]), gl.STATIC_DRAW);
        const loc = gl.getAttribLocation(prog, 'a_pos');
        gl.enableVertexAttribArray(loc);
        gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

        const uRes  = gl.getUniformLocation(prog, 'iResolution');
        const uTime = gl.getUniformLocation(prog, 'iTime');

        function resize() {
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
        window.addEventListener('resize', resize, { passive: true });
        resize();

        let startT = null;
        function frame(ts) {
            if (!startT) startT = ts;
            gl.uniform2f(uRes, canvas.width, canvas.height);
            gl.uniform1f(uTime, (ts - startT) / 1000);
            gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
            requestAnimationFrame(frame);
        }
        requestAnimationFrame(frame);
    })();

    // ==========================================
    // DOT WAVE CANVAS (process section)
    // ==========================================
    (function initDotWave() {
        const canvas = document.getElementById('dot-wave');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const DOT_SIZE = 2;
        const GAP = 22;
        let W, H, cols, rows;

        function resize() {
            W = canvas.offsetWidth;
            H = canvas.offsetHeight;
            canvas.width  = W;
            canvas.height = H;
            cols = Math.ceil(W / GAP) + 1;
            rows = Math.ceil(H / GAP) + 1;
        }

        const ro = new ResizeObserver(resize);
        ro.observe(canvas.parentElement);
        resize();

        let t = 0;
        function draw() {
            ctx.clearRect(0, 0, W, H);
            t += 0.025;
            for (let r = 0; r < rows; r++) {
                for (let c = 0; c < cols; c++) {
                    const x = c * GAP;
                    const baseY = r * GAP;
                    // sine wave: offset by column, ripple over time
                    const wave = Math.sin(c * 0.45 + r * 0.3 + t) * 6;
                    const y = baseY + wave;
                    // brightness based on wave amplitude
                    const brightness = 0.3 + 0.7 * ((Math.sin(c * 0.45 + r * 0.3 + t) + 1) / 2);
                    const alpha = 0.15 + brightness * 0.55;
                    // Color: blue shifting to accent based on position
                    const hue = 220 + Math.sin(c * 0.2 + t * 0.5) * 30;
                    ctx.beginPath();
                    ctx.arc(x, y, DOT_SIZE, 0, Math.PI * 2);
                    ctx.fillStyle = `hsla(${hue}, 80%, 65%, ${alpha})`;
                    ctx.fill();
                }
            }
            requestAnimationFrame(draw);
        }
        draw();
    })();

    // ==========================================
    // PROJECT SHOWCASE — floating hover preview
    // ==========================================
    (function initProjectShowcase() {
        const preview   = document.getElementById('project-preview');
        const previewImg= document.getElementById('project-preview-img');
        if (!preview || !previewImg) return;

        let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
        let raf = null;
        let active = false;

        function lerp(a, b, t) { return a + (b - a) * t; }

        function animate() {
            currentX = lerp(currentX, targetX, 0.12);
            currentY = lerp(currentY, targetY, 0.12);
            preview.style.transform = `translate3d(${currentX}px,${currentY}px,0) scale(1)`;
            if (active) raf = requestAnimationFrame(animate);
        }

        document.querySelectorAll('.project-row[data-preview-img]').forEach(row => {
            const imgSrc = row.getAttribute('data-preview-img');

            row.addEventListener('mouseenter', () => {
                previewImg.src = imgSrc;
                preview.classList.add('is-visible');
                active = true;
                cancelAnimationFrame(raf);
                raf = requestAnimationFrame(animate);
            });

            row.addEventListener('mouseleave', () => {
                preview.classList.remove('is-visible');
                active = false;
            });

            row.addEventListener('mousemove', e => {
                targetX = e.clientX + 24;
                targetY = e.clientY - 100;
            });
        });
    })();

    // ==========================================
    // SLIDE-TO-SEND BUTTON
    // ==========================================
    (function initSlideBtn() {
        const wrap   = document.getElementById('slide-btn-wrap');
        const handle = document.getElementById('slide-btn-handle');
        const fill   = document.getElementById('slide-btn-fill');
        const hidden = document.getElementById('form-submit-hidden');
        if (!wrap || !handle) return;

        const TRACK_W = () => wrap.offsetWidth - 54; // max drag distance
        const THRESHOLD = 0.88; // 88% = trigger

        let dragging = false, startX = 0, dragX = 0;

        function setPos(x) {
            const max = TRACK_W();
            dragX = Math.max(0, Math.min(x, max));
            handle.style.left = `${4 + dragX}px`;
            fill.style.width  = `${dragX + 50}px`;
        }

        function onStart(e) {
            if (wrap.classList.contains('is-sent')) return;
            dragging = true;
            startX = (e.touches ? e.touches[0].clientX : e.clientX) - dragX;
            handle.classList.add('is-dragging');
            wrap.classList.add('is-dragging');
        }

        function onMove(e) {
            if (!dragging) return;
            e.preventDefault();
            const cx = e.touches ? e.touches[0].clientX : e.clientX;
            setPos(cx - startX);
        }

        function onEnd() {
            if (!dragging) return;
            dragging = false;
            handle.classList.remove('is-dragging');
            wrap.classList.remove('is-dragging');

            if (dragX / TRACK_W() >= THRESHOLD) {
                // Fire submit
                wrap.classList.add('is-sent');
                // Give the form a moment to validate, then submit
                setTimeout(() => {
                    if (hidden) hidden.click();
                }, 150);
            } else {
                // snap back
                handle.style.transition = 'left 0.35s cubic-bezier(0.4,0,0.2,1)';
                fill.style.transition   = 'width 0.35s cubic-bezier(0.4,0,0.2,1)';
                setPos(0);
                setTimeout(() => {
                    handle.style.transition = '';
                    fill.style.transition   = '';
                }, 360);
            }
        }

        handle.addEventListener('mousedown',  onStart);
        handle.addEventListener('touchstart', onStart, { passive: true });
        window.addEventListener('mousemove',  onMove);
        window.addEventListener('touchmove',  onMove, { passive: false });
        window.addEventListener('mouseup',    onEnd);
        window.addEventListener('touchend',   onEnd);
    })();

    // ==========================================
    // HERO ORBS — spring physics + cursor repel
    // ==========================================
    (function initHeroOrbs() {
        const hero   = document.getElementById('home');
        const orbEls = document.querySelectorAll('.hero-orb');
        if (!hero || !orbEls.length) return;

        let heroRect = hero.getBoundingClientRect();

        // Home positions as fractions of hero size [left%, top%]
        const homesFrac = [
            { fx: 0.13, fy: 0.22 },
            { fx: 0.84, fy: 0.28 },
            { fx: 0.07, fy: 0.72 },
            { fx: 0.87, fy: 0.70 },
        ];

        const orbs = [...orbEls].map((el, i) => {
            const hf = homesFrac[i] || { fx: 0.5, fy: 0.5 };
            const homeX = hf.fx * heroRect.width;
            const homeY = hf.fy * heroRect.height;
            return { el, homeX, homeY, x: homeX, y: homeY, vx: 0, vy: 0, phase: i * 1.9 };
        });

        let cursorX = -9999, cursorY = -9999;

        window.addEventListener('resize', () => {
            heroRect = hero.getBoundingClientRect();
            orbs.forEach((o, i) => {
                const hf = homesFrac[i] || { fx: 0.5, fy: 0.5 };
                o.homeX = hf.fx * heroRect.width;
                o.homeY = hf.fy * heroRect.height;
            });
        }, { passive: true });

        hero.addEventListener('mousemove', e => {
            cursorX = e.clientX - heroRect.left;
            cursorY = e.clientY - heroRect.top;
        });
        hero.addEventListener('mouseleave', () => { cursorX = -9999; cursorY = -9999; });
        hero.addEventListener('touchmove', e => {
            heroRect = hero.getBoundingClientRect();
            cursorX = e.touches[0].clientX - heroRect.left;
            cursorY = e.touches[0].clientY - heroRect.top;
        }, { passive: true });
        hero.addEventListener('touchend', () => { cursorX = -9999; cursorY = -9999; });

        orbEls.forEach(orb => {
            orb.addEventListener('click', () => {
                orb.classList.remove('orb-tap');
                void orb.offsetWidth; // reflow to restart
                orb.classList.add('orb-tap');
                setTimeout(() => orb.classList.remove('orb-tap'), 520);
            });
        });

        function tick(time) {
            const t = time * 0.001;
            orbs.forEach(o => {
                const hw = o.el.offsetWidth  / 2;
                const hh = o.el.offsetHeight / 2;
                // Natural sine drift around home
                const natX = o.homeX + Math.sin(t * 0.35 + o.phase)       * 18;
                const natY = o.homeY + Math.cos(t * 0.27 + o.phase * 1.3)  * 22;
                // Spring toward natural position
                o.vx += (natX - o.x) * 0.038;
                o.vy += (natY - o.y) * 0.038;
                // Repel from cursor/touch
                if (cursorX > -999) {
                    const rx = cursorX - o.x;
                    const ry = cursorY - o.y;
                    const dist = Math.sqrt(rx * rx + ry * ry);
                    if (dist < 190 && dist > 1) {
                        const force = 6000 / (dist * dist);
                        o.vx -= (rx / dist) * force;
                        o.vy -= (ry / dist) * force;
                    }
                }
                // Damping + integrate
                o.vx *= 0.86;
                o.vy *= 0.86;
                o.x += o.vx;
                o.y += o.vy;
                // Clamp within hero bounds
                o.x = Math.max(hw, Math.min(heroRect.width  - hw, o.x));
                o.y = Math.max(hh, Math.min(heroRect.height - hh, o.y));
                // Position via transform (left:0 top:0 baseline)
                o.el.style.transform = `translate(${o.x - hw}px,${o.y - hh}px)`;
            });
            requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    })();

    // ==========================================
    // AGENT MOBILE CAROUSEL — dot sync
    // ==========================================
    (function initAgentCarousel() {
        const track = document.querySelector('.process-stacking-right');
        const dots  = document.querySelectorAll('.agent-mobile-dot');
        if (!track || !dots.length) return;

        function getCardWidth() {
            const dwell = track.querySelector('.agent-dwell');
            return dwell ? dwell.offsetWidth + 12 : 312; // 12 = gap
        }

        function updateDots() {
            const idx = Math.round(track.scrollLeft / getCardWidth());
            dots.forEach((d, i) => d.classList.toggle('active', i === idx));
        }

        track.addEventListener('scroll', updateDots, { passive: true });

        dots.forEach((dot, i) => {
            dot.addEventListener('click', () => {
                track.scrollTo({ left: i * getCardWidth(), behavior: 'smooth' });
            });
        });
    })();

    // ==========================================
    // QUESTION FUNNEL
    // ==========================================
    (function initFunnel() {
        if (sessionStorage.getItem('funnel-done')) return;

        const overlay     = document.getElementById('funnel-overlay');
        const progressBar = document.getElementById('funnel-progress-bar');
        if (!overlay) return;

        const funnelSteps = [
            document.getElementById('funnel-s1'),
            document.getElementById('funnel-s2'),
            document.getElementById('funnel-s3'),
            document.getElementById('funnel-result'),
        ];

        const answers = { q1: null, q2: null, q3: null };

        const pkgData = {
            landing: {
                name: { en: 'Landing Page', gr: 'Landing Page' },
                price: '€149',
                desc: { en: 'Perfect for getting online fast — 1 page, contact form, mobile-ready, delivered in 5 days.', gr: 'Ιδανικό για να πάτε online γρήγορα — 1 σελίδα, φόρμα επικοινωνίας, mobile-ready, σε 5 ημέρες.' },
                features: { en: ['1 page, 3–5 sections', 'Mobile responsive', 'Contact form', '1 revision round'], gr: ['1 σελίδα, 3–5 τμήματα', 'Mobile responsive', 'Φόρμα επικοινωνίας', '1 γύρος αλλαγών'] },
                delivery: { en: '✦ Delivered in 5 days', gr: '✦ Παράδοση σε 5 ημέρες' },
            },
            basic: {
                name: { en: 'Basic Website', gr: 'Βασική Ιστοσελίδα' },
                price: '€299',
                desc: { en: 'Great for services & professionals — 3–5 pages, SEO-ready, clean and credible.', gr: 'Ιδανικό για υπηρεσίες & επαγγελματίες — 3–5 σελίδες, SEO-ready, καθαρό και αξιόπιστο.' },
                features: { en: ['3–5 pages', 'Basic SEO', 'Contact form', '2 revision rounds'], gr: ['3–5 σελίδες', 'Βασικό SEO', 'Φόρμα επικοινωνίας', '2 γύροι αλλαγών'] },
                delivery: { en: '✦ Delivered in 5 days', gr: '✦ Παράδοση σε 5 ημέρες' },
            },
            business: {
                name: { en: 'Business Website', gr: 'Επιχειρηματική Ιστοσελίδα' },
                price: '€499',
                desc: { en: 'The full package — gallery, Google Maps, social links, email setup. Built to convert.', gr: 'Το πλήρες πακέτο — γκαλερί, Google Maps, social links, email setup. Φτιαγμένο να μετατρέπει.' },
                features: { en: ['5–8 pages', 'Gallery / portfolio', 'Google Maps', '3 revision rounds'], gr: ['5–8 σελίδες', 'Γκαλερί / portfolio', 'Google Maps', '3 γύροι αλλαγών'] },
                delivery: { en: '✦ Delivered in 5 days', gr: '✦ Παράδοση σε 5 ημέρες' },
            },
            ecommerce: {
                name: { en: 'E-commerce Store', gr: 'E-commerce Κατάστημα' },
                price: '€799',
                desc: { en: 'Sell online with confidence — Stripe/Viva Wallet payments, product management, admin dashboard.', gr: 'Πουλήστε online με σιγουριά — πληρωμές Stripe/Viva Wallet, διαχείριση προϊόντων, admin dashboard.' },
                features: { en: ['Full shopping cart', 'Online payments', 'Product management', 'Admin dashboard'], gr: ['Πλήρες καλάθι αγορών', 'Online πληρωμές', 'Διαχείριση προϊόντων', 'Admin dashboard'] },
                delivery: { en: '✦ Delivered in 7–10 days', gr: '✦ Παράδοση σε 7–10 ημέρες' },
            },
        };

        function recommend() {
            const { q1, q2, q3 } = answers;
            if (q1 === 'store' || q2 === 'shop') return 'ecommerce';
            if (q1 === 'redesign' || q2 === 'restaurant' || q2 === 'other') return 'business';
            if (q3 === 'fast' || q3 === 'cost' || q1 === 'notsure') return 'landing';
            return 'basic';
        }

        function showFunnelStep(index) {
            funnelSteps.forEach(s => { s.classList.remove('active'); });
            const target = funnelSteps[index];
            target.classList.add('active');
            progressBar.style.width = (index === 3 ? 100 : (index / 3) * 100) + '%';
        }

        function renderResult() {
            const key = recommend();
            const pkg = pkgData[key];
            const l = currentLang === 'gr' ? 'gr' : 'en';
            document.getElementById('funnel-rc-name').textContent    = pkg.name[l];
            document.getElementById('funnel-rc-price').textContent   = pkg.price;
            document.getElementById('funnel-rc-desc').textContent    = pkg.desc[l];
            document.getElementById('funnel-rc-delivery').textContent = pkg.delivery[l];
            const ul = document.getElementById('funnel-rc-features');
            ul.innerHTML = '';
            pkg.features[l].forEach(f => { const li = document.createElement('li'); li.textContent = f; ul.appendChild(li); });
            showFunnelStep(3);
        }

        function closeFunnel(scrollToHero) {
            overlay.classList.remove('visible');
            sessionStorage.setItem('funnel-done', '1');
            setTimeout(() => {
                overlay.style.display = 'none';
                if (scrollToHero !== false) {
                    const hero = document.getElementById('home');
                    if (hero) hero.scrollIntoView({ behavior: 'smooth' });
                }
            }, 420);
        }

        setTimeout(() => { overlay.classList.add('visible'); }, 1400);

        overlay.addEventListener('click', function (e) {
            const opt = e.target.closest('.funnel-opt[data-step]');
            if (opt) {
                const step = parseInt(opt.getAttribute('data-step'), 10);
                const val  = opt.getAttribute('data-val');
                if (step === 1) { answers.q1 = val; showFunnelStep(1); }
                else if (step === 2) { answers.q2 = val; showFunnelStep(2); }
                else if (step === 3) { answers.q3 = val; renderResult(); }
                return;
            }
            if (e.target.closest('#funnel-view-all') || e.target.closest('#funnel-cta') || e.target.closest('.funnel-just-skip')) {
                closeFunnel();
            }
            if (e.target.closest('#funnel-skip')) {
                closeFunnel();
            }
        });
    })();

    // ==========================================
    // INIT
    // ==========================================
    applyTranslations('en');
    setTimeout(() => { startTyping('en'); }, 1350);

});
