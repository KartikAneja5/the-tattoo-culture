/**
 * INK & ARTISTRY - Vanilla JavaScript
 * Premium Tattoo Portfolio - No Dependencies
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize navbar
    loadNavbar();
    // Initialize loading screen
    initLoader();
    // Initialize FAQ
    initFAQ();
});

/* ===================================
   Dynamic Navbar Loading
   =================================== */

function loadNavbar() {
    const placeholder = document.getElementById('navbar-placeholder');
    if (!placeholder) {
        console.error('Navbar placeholder not found!');
        return;
    }

    console.log('Injecting navbar hardcoded...');
    // Hardcoded Navbar HTML for reliability
    const navbarHTML = `
    <!-- Navigation -->
    <nav class="nav" id="nav">
        <a href="#contact" class="nav-cta nav-cta-talk mobile-logo-btn">LET'S TALK!</a>

        <a href="index.html" class="nav-logo desktop-logo">
            <img src="images/logo-new.webp" alt="The Tattoo Culture" class="nav-logo-img">
        </a>

        <!-- Social Links in Nav -->
        <div class="nav-social">
            <a href="https://wa.me/7600714691" class="social-icon" aria-label="WhatsApp" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
            <a href="https://www.instagram.com/thetattooculture/" class="social-icon" aria-label="Instagram" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
            </a>
            <a href="https://www.facebook.com/p/The-Tattoo-Culture-100093140287209/" class="social-icon nav-facebook" aria-label="Facebook" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            </a>
        </div>

        <ul class="nav-links">
            <li><a href="index.html#about" class="nav-link" data-text="About">About</a></li>
            <li><a href="index.html#gallery" class="nav-link" data-text="Portfolio">Portfolio</a></li>
            <li><a href="pricing.html" class="nav-link" data-text="Pricing">Pricing</a></li>
            <li><a href="aftercare.html" class="nav-link" data-text="After Care">After Care</a></li>
            <li><a href="training.html" class="nav-link" data-text="Tattoo Training">Tattoo Training</a></li>
            <li><a href="index.html#contact" class="nav-link" data-text="Contact">Contact</a></li>
        </ul>

        <!-- Mobile Right Group (Facebook, Instagram, WhatsApp, Hamburger) -->
        <div class="mobile-header-group">
            <a href="https://www.facebook.com/p/The-Tattoo-Culture-100093140287209/" class="mobile-header-social mobile-header-facebook" aria-label="Facebook" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
            </a>
            <a href="https://www.instagram.com/thetattooculture/" class="mobile-header-social mobile-header-instagram" aria-label="Instagram" target="_blank">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                </svg>
            </a>
            <a href="https://wa.me/7600714691" class="mobile-header-social mobile-header-whatsapp" aria-label="WhatsApp" target="_blank">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
            </a>
            <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
                <img src="https://cdn-icons-png.flaticon.com/512/12314/12314153.png" alt="Menu" width="24" height="24">
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobile-menu">
        <div class="mobile-menu-inner">
            <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Close menu">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                </svg>
                <span>Close</span>
            </button>
            <ul class="mobile-nav-links">
                <li><a href="index.html#about" class="mobile-nav-link">About</a></li>
                <li><a href="index.html#gallery" class="mobile-nav-link">Gallery</a></li>
                <li><a href="pricing.html" class="mobile-nav-link">Pricing</a></li>
                <li><a href="aftercare.html" class="mobile-nav-link">After Care</a></li>
                <li><a href="training.html" class="mobile-nav-link">Tattoo Training</a></li>
                <li><a href="index.html#contact" class="mobile-nav-link">Contact</a></li>
            </ul>
            <div class="mobile-cta-group">
                <a href="tel:+917600714691" class="mobile-cta">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>Call Us</span>
                </a>
                <a href="https://wa.me/7600714691" class="mobile-cta mobile-cta-whatsapp" target="_blank">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <span>WhatsApp</span>
                </a>
            </div>
        </div>
    </div>
    `;

    placeholder.innerHTML = navbarHTML;

    // Initialize nav-related functions after injection
    try {
        initNavigation();
        initMobileMenu();
        console.log('Navigation initialized');
    } catch (e) {
        console.error('Error initializing navigation:', e);
    }

    // Highlight active link
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

    navLinks.forEach(link => {
        // simple check: if link href matches current page
        const href = link.getAttribute('href');
        if (href === currentPage ||
            (currentPage === 'index.html' && href.startsWith('index.html')) ||
            (currentPage === '' && href.startsWith('index.html'))) {
            // logic can be refined if needed
        }

        // Specific fix for active state
        if ((currentPage === 'pricing.html' && href === 'pricing.html') ||
            (currentPage === 'aftercare.html' && href === 'aftercare.html') ||
            (currentPage === 'training.html' && href === 'training.html')) {
            link.classList.add('active');
        }
    });

    // Handle Pricing Page Solid Nav with detailed logging
    if (currentPage.includes('pricing')) {
        setTimeout(() => {
            const nav = document.getElementById('nav');
            if (nav) {
                console.log('Adding nav-solid class to pricing page nav');
                nav.classList.add('nav-solid');
            } else {
                console.error('Nav element not found on pricing page!');
            }
        }, 100);
    }
}

/* ===================================
   Loading Screen
   =================================== */

function initLoader() {
    const loader = document.getElementById('loader');

    // If no loader element exists, just initialize other things
    if (!loader) {
        initCursor();
        initScrollReveal();
        // initNavigation(); // Moved to loadNavbar
        // initMobileMenu(); // Moved to loadNavbar
        initHorizontalGallery();
        // initMagneticButtons();
        initContactForm();
        initCounterAnimations();
        // initParallax();
        // revealHero();
        return;
    }

    // Check if we've already shown the loader in this session
    const loaderShown = sessionStorage.getItem('loader_shown');

    if (loaderShown) {
        // Force hide instantly without transition
        loader.style.display = 'none';
        loader.classList.add('hidden');

        // Initialize everything immediately without delay
        initCursor();
        initScrollReveal();
        // initNavigation(); // Moved to loadNavbar
        // initMobileMenu(); // Moved to loadNavbar
        initHorizontalGallery();
        // initMagneticButtons();
        initContactForm();
        initCounterAnimations();
        // initParallax();
        // revealHero();
        return;
    }

    // First time visit in this session
    const minLoadTime = 700;

    Promise.all([
        document.fonts.ready,
        new Promise(resolve => setTimeout(resolve, minLoadTime))
    ]).then(() => {
        loader.classList.add('hidden');
        sessionStorage.setItem('loader_shown', 'true');

        // Initialize everything after loader
        setTimeout(() => {
            initCursor();
            initScrollReveal();
            // initNavigation(); // Moved to loadNavbar
            // initMobileMenu(); // Moved to loadNavbar
            initHorizontalGallery();
            // initMagneticButtons();
            initContactForm();
            initCounterAnimations();
            // initParallax();
            // revealHero();
        }, 300);
    });
}

/* ===================================
   Mobile Menu
   =================================== */

function initMobileMenu() {
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeBtn = document.getElementById('mobile-menu-close');

    if (!menuToggle || !mobileMenu) return;

    // Function to close the menu
    function closeMenu() {
        menuToggle.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Toggle menu on hamburger click
    menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu on close button click
    if (closeBtn) {
        closeBtn.addEventListener('click', closeMenu);
    }

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
            closeMenu();
        }
    });
}


/* ===================================
   Custom Cursor with Trail
   =================================== */

function initCursor() {
    const cursor = document.getElementById('cursor');
    const trailsContainer = document.getElementById('cursor-trails');

    // Skip cursor initialization if elements don't exist (removed for mobile)
    if (!cursor) return;

    const cursorDot = cursor.querySelector('.cursor-dot');
    const cursorRing = cursor.querySelector('.cursor-ring');

    if (!cursorDot || !cursorRing) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;
    let lastTrailTime = 0;
    const trailInterval = 50;

    // Track mouse position
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        // Create trail dots
        if (trailsContainer) {
            const now = Date.now();
            if (now - lastTrailTime > trailInterval) {
                createTrailDot(mouseX, mouseY);
                lastTrailTime = now;
            }
        }
    });

    function createTrailDot(x, y) {
        if (!trailsContainer) return;
        const dot = document.createElement('div');
        dot.className = 'cursor-trail-dot';
        dot.style.left = `${x}px`;
        dot.style.top = `${y}px`;
        trailsContainer.appendChild(dot);
        setTimeout(() => dot.remove(), 1000);
    }


    // Animate cursor
    function animateCursor() {
        dotX += (mouseX - dotX) * 0.2;
        dotY += (mouseY - dotY) * 0.2;
        ringX += (mouseX - ringX) * 0.08;
        ringY += (mouseY - ringY) * 0.08;

        cursorDot.style.transform = `translate(${dotX - 4}px, ${dotY - 4}px)`;
        cursorRing.style.transform = `translate(${ringX - 20}px, ${ringY - 20}px)`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, input, textarea, select, .bento-item, .gallery-item, .service-card, .care-step, .training-card');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // Click effects
    document.addEventListener('mousedown', () => cursor.classList.add('click'));
    document.addEventListener('mouseup', () => cursor.classList.remove('click'));

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => cursor.style.opacity = '0');
    document.addEventListener('mouseenter', () => cursor.style.opacity = '1');
}

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.scroll-reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

/* revealHero removed */

/* ===================================
   Navigation
   =================================== */

function initNavigation() {
    const nav = document.getElementById('nav');

    // Scroll behavior
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }, { passive: true });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));

            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ===================================
   Horizontal Gallery
   =================================== */

function initHorizontalGallery() {
    const gallery = document.getElementById('horizontal-gallery');
    const scrollLeftBtn = document.querySelector('.scroll-left');
    const scrollRightBtn = document.querySelector('.scroll-right');
    const progressBar = document.querySelector('.progress-bar');

    if (!gallery) return;

    const scrollAmount = 420;

    scrollLeftBtn?.addEventListener('click', () => {
        gallery.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    scrollRightBtn?.addEventListener('click', () => {
        gallery.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });

    // Update progress bar
    gallery.addEventListener('scroll', () => {
        const scrollPercent = (gallery.scrollLeft / (gallery.scrollWidth - gallery.clientWidth)) * 100;
        const barWidth = Math.max(20, Math.min(100, 20 + scrollPercent * 0.8));
        progressBar.style.width = `${barWidth}%`;
    });

    // Auto-scroll on mobile
    if (window.innerWidth < 768) {
        let autoScrollInterval;

        const startAutoScroll = () => {
            clearInterval(autoScrollInterval);
            autoScrollInterval = setInterval(() => {
                if (gallery.matches(':active')) return;

                if (gallery.scrollLeft + gallery.clientWidth >= gallery.scrollWidth - 20) {
                    gallery.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    gallery.scrollBy({ left: 300, behavior: 'smooth' });
                }
            }, 2000);
        };

        startAutoScroll();

        // Pause on interaction, resume after delay
        gallery.addEventListener('touchstart', () => clearInterval(autoScrollInterval), { passive: true });
        gallery.addEventListener('touchend', () => setTimeout(startAutoScroll, 2000)); // Resume after 2s

        gallery.addEventListener('mousedown', () => clearInterval(autoScrollInterval));
        gallery.addEventListener('mouseup', () => setTimeout(startAutoScroll, 2000));
    }
}

/* initMagneticButtons removed */

/* ===================================
   Contact Form
   =================================== */

function initContactForm() {
    const form = document.getElementById('contact-form');

    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Show loading state
        const submitBtn = form.querySelector('.form-submit');
        const originalText = submitBtn.querySelector('span').textContent;
        submitBtn.querySelector('span').textContent = 'Redirecting...';
        submitBtn.disabled = true;

        // Construct WhatsApp Message
        const phoneNumber = "917600714691"; // Target number
        const text = `
*New Inquiry from Website*
*Name:* ${data.name}
*Phone:* ${data.phone}
*Service:* ${data.service}
*Vision/Message:* ${data.message}
        `.trim();

        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

        // Simulate short delay for UX then redirect
        setTimeout(() => {
            console.log('Redirecting to WhatsApp:', whatsappUrl);

            // Show success state briefly
            submitBtn.querySelector('span').textContent = '✓ Opening WhatsApp!';
            submitBtn.style.background = 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'; // WhatsApp Green

            // Create success particles
            createSuccessParticles(submitBtn);

            setTimeout(() => {
                window.open(whatsappUrl, '_blank');

                // Reset form
                submitBtn.querySelector('span').textContent = originalText;
                submitBtn.style.background = '';
                submitBtn.disabled = false;
                form.reset();
            }, 1000);
        }, 1000);
    });
}

function createSuccessParticles(element) {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    for (let i = 0; i < 12; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
      position: fixed;
      width: 8px;
      height: 8px;
      background: linear-gradient(135deg, #D4AF37, #E8C547);
      border-radius: 50%;
      pointer-events: none;
      z-index: 10000;
      left: ${centerX}px;
      top: ${centerY}px;
    `;
        document.body.appendChild(particle);

        const angle = (i / 12) * Math.PI * 2;
        const velocity = 100 + Math.random() * 50;
        const destX = Math.cos(angle) * velocity;
        const destY = Math.sin(angle) * velocity;

        particle.animate([
            { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
            { transform: `translate(calc(-50% + ${destX}px), calc(-50% + ${destY}px)) scale(0)`, opacity: 0 }
        ], {
            duration: 800,
            easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
        }).onfinish = () => particle.remove();
    }
}

/* ===================================
   Counter Animations
   =================================== */

function initCounterAnimations() {
    const counters = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'), 10);
    const duration = 2000;
    const startTime = Date.now();

    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * easeOut);

        element.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }

    update();
}

/* initParallax removed */

/* ===================================
   FAQ Accordion
   =================================== */

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(other => {
                if (other !== item) {
                    other.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}


