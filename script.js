// Smooth scroll-based animations for Shree Dhruvi website
document.addEventListener('DOMContentLoaded', function() {
    
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Handle sequential animations for benefits section
                if (entry.target.classList.contains('benefits-grid')) {
                    animateSequentialCards(entry.target, '.benefit-card');
                }
                

                
                // Handle sequential animations for wholesale section
                if (entry.target.classList.contains('wholesale-content')) {
                    // No sequential cards in wholesale section, but we can add fade-in for the showcase
                    const showcase = entry.target.querySelector('.product-showcase');
                    if (showcase) {
                        showcase.style.opacity = '1';
                        showcase.style.transform = 'translateY(0)';
                    }
                }
            }
        });
    }, observerOptions);

    // Function to animate cards sequentially
    function animateSequentialCards(container, cardSelector) {
        const cards = container.querySelectorAll(cardSelector);
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, index * 200); // 200ms delay between each card
        });
    }

    // Observe all animated elements
    const animatedElements = document.querySelectorAll([
        '.animate-fade-in',
        '.animate-fade-in-delay',
        '.animate-fade-up',
        '.animate-card',
        '.animate-sequential',
        '.animate-bounce-in',
        '.benefits-grid',
        '.wholesale-content'
    ].join(', '));

    animatedElements.forEach(element => {
        observer.observe(element);
    });

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Enhanced button animations
    const buttons = document.querySelectorAll('.cta-button, .submit-button, .order-button, .whatsapp-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
    });

    // Form input focus animations
    const formInputs = document.querySelectorAll('.form-input');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 20px rgba(74, 124, 89, 0.3)';
        });
        
        input.addEventListener('blur', function() {
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '0 0 10px rgba(74, 124, 89, 0.2)';
        });
    });

    // Product card enhanced hover effects
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 25px 50px rgba(74, 124, 89, 0.25)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 10px 30px rgba(45, 80, 22, 0.1)';
        });
    });

    // Benefit card hover effects
    const benefitCards = document.querySelectorAll('.benefit-card');
    benefitCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) rotate(1deg)';
            this.style.boxShadow = '0 15px 35px rgba(74, 124, 89, 0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) rotate(0deg)';
            this.style.boxShadow = '0 5px 20px rgba(45, 80, 22, 0.1)';
        });
    });



    // Navbar background change on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 25px rgba(45, 80, 22, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(45, 80, 22, 0.1)';
        }
    });

    // Parallax effect for hero section
    const heroSection = document.querySelector('.hero-section');
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroSection) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    });

    // Contact form submission animation
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;

            // Animate button
            submitButton.textContent = 'Sending...';
            submitButton.style.background = 'linear-gradient(135deg, #7fb069, #4a7c59)';
            submitButton.style.transform = 'scale(0.95)';

            // Simulate form submission
            setTimeout(() => {
                submitButton.textContent = 'Message Sent! ✓';
                submitButton.style.background = 'linear-gradient(135deg, #28a745, #20c997)';
                submitButton.style.transform = 'scale(1)';

                // Reset form
                setTimeout(() => {
                    this.reset();
                    submitButton.textContent = originalText;
                    submitButton.style.background = 'linear-gradient(135deg, var(--primary-green), var(--light-green))';
                }, 2000);
            }, 1500);
        });
    }

    // Add floating animation to hero elements
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    if (heroTitle && heroSubtitle) {
        setInterval(() => {
            heroTitle.style.transform = 'translateY(-5px)';
            setTimeout(() => {
                heroTitle.style.transform = 'translateY(0)';
            }, 1000);
        }, 3000);
        
        setInterval(() => {
            heroSubtitle.style.transform = 'translateY(-3px)';
            setTimeout(() => {
                heroSubtitle.style.transform = 'translateY(0)';
            }, 800);
        }, 4000);
    }

    // Add glow effect to CTA button
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        setInterval(() => {
            ctaButton.style.boxShadow = '0 5px 25px rgba(74, 124, 89, 0.5), 0 0 30px rgba(127, 176, 105, 0.3)';
            setTimeout(() => {
                ctaButton.style.boxShadow = '0 5px 15px rgba(74, 124, 89, 0.3)';
            }, 1500);
        }, 3000);
    }

    // Initialize animations for elements already in view
    setTimeout(() => {
        const elementsInView = document.querySelectorAll('.hero-section .animate-fade-in, .hero-section .animate-fade-in-delay');
        elementsInView.forEach(element => {
            element.classList.add('visible');
        });
    }, 500);

    // Add typing effect to hero title (optional enhancement)
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Uncomment the line below to enable typing effect for hero title
    // setTimeout(() => typeWriter(heroTitle, "Bring Nature's Calm to Your Home – with Shree Dhruvi"), 1000);

    // Modal functionality
    const orderModal = document.getElementById('orderModal');
    const qrModal = document.getElementById('qrModal');
    const floatingShopBtn = document.getElementById('floatingShopBtn');
    const heroShopBtn = document.getElementById('heroShopBtn');
    const footerOrderBtn = document.getElementById('footerOrderBtn');
    const closeOrderModal = document.getElementById('closeOrderModal');
    const closeQrModal = document.getElementById('closeQrModal');
    const orderForm = document.getElementById('orderForm');

    // Open order modal
    floatingShopBtn.addEventListener('click', () => {
        orderModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Connect hero Shop Now button
    heroShopBtn.addEventListener('click', () => {
        orderModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Connect footer Order Now button
    footerOrderBtn.addEventListener('click', () => {
        orderModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    });

    // Close order modal
    closeOrderModal.addEventListener('click', () => {
        orderModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });



    // Close QR modal
    closeQrModal.addEventListener('click', () => {
        qrModal.style.display = 'none';
        orderModal.style.display = 'block';
    });

    // QR button functionality
    const openQrBtn = document.getElementById('openQrBtn');
    openQrBtn.addEventListener('click', () => {
        qrModal.style.display = 'block';
        orderModal.style.display = 'none';
    });

    // Close modals when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === orderModal) {
            orderModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        if (e.target === qrModal) {
            qrModal.style.display = 'none';
            orderModal.style.display = 'block';
        }
    });

    // Form submission
    orderForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(orderForm);
        const orderData = Object.fromEntries(formData.entries());

        // Simulate form submission
        console.log('Order submitted:', orderData);

        // Show success message
        alert('Thank you for your order! We will contact you soon.');

        // Reset form and close modal
        orderForm.reset();
        orderModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });



    // Hamburger menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    const mobileNavLinks = navMenu.querySelectorAll('a');
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    console.log('Shree Dhruvi website animations loaded successfully! 🌿');
});
