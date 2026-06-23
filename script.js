/* =============================================================
   Arrgrow Landing Page JavaScript
   Adds micro-interactions, responsive navigation, and form validation.
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {
  // --- Mobile Navigation Menu ---
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const navLinks = document.getElementById('nav-links');
  const body = document.body;

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');

      const isOpen = navLinks.classList.contains('active');
      body.style.overflow = isOpen ? 'hidden' : '';
      mobileMenuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileMenuBtn.setAttribute('aria-label', isOpen ? 'סגור תפריט' : 'פתח תפריט');
    });

    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = '';
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.setAttribute('aria-label', 'פתח תפריט');
      });
    });
  }

  // --- Sticky Header Scroll Effect ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    });
  }

  // --- Subtle Parallax on Hero Elements (respects reduced motion) ---
  const heroVisual = document.querySelector('.hero-visual');
  const ambientGlows = document.querySelectorAll('.ambient-glow');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (heroVisual && !prefersReducedMotion) {
    const parallaxElements = [heroVisual, ...ambientGlows];
    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          parallaxElements.forEach((el, i) => {
            if (el) {
              const speed = 0.05 + (i * 0.02);
              el.style.transform = `translateY(${scrollY * speed}px)`;
            }
          });
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // --- FAQ Accordion ---
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(open => {
        open.classList.remove('open');
        open.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // --- Scroll Reveal with stagger support ---
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  // Observe all reveal elements and their staggered children
  document.querySelectorAll('.reveal, .reveal--item').forEach(el => revealObserver.observe(el));

  // Staggered parent reveal
  const staggerContainers = document.querySelectorAll('.reveal.stagger-parent');
  staggerContainers.forEach(container => {
    const items = container.querySelectorAll('.reveal--item');
    const staggerObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          items.forEach((item, i) => {
            setTimeout(() => item.classList.add('visible'), i * 100);
          });
          staggerObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    staggerObserver.observe(container);
  });

  // --- Active Nav on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const allNavLinks = document.querySelectorAll('.nav-link[href^="#"]');
  if (sections.length && allNavLinks.length) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          allNavLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
          });
        }
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach(s => sectionObserver.observe(s));
  }

  // --- Calendar/Booking Button Handling ---
  const calendarButtons = document.querySelectorAll('#calendar-cta, #calendar-cta-secondary');
  calendarButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Placeholder: Will link to Calendly or booking system
      alert('כאן יופיע קישור למערכת התזמון (Calendly או דומה). אנא צרו קשר דרך וואטסאפ או אימייל לקביעת פגישה.');
    });
  });

  // --- Contact Form Submission Handling ---
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm && formStatus && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Update UI to loading state
      submitBtn.disabled = true;
      const originalBtnText = submitBtn.textContent;
      submitBtn.textContent = 'שולח...';
      formStatus.textContent = '';
      formStatus.className = 'form-status';


      // Simulate API submission
      setTimeout(() => {
        // Mock successful submission
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;

        formStatus.textContent = 'הפנייה נשלחה! נחזור אליכם תוך 24 שעות.';
        formStatus.classList.add('success');

        // Reset form fields
        contactForm.reset();

        // Clear status message after 6 seconds
        setTimeout(() => {
          formStatus.textContent = '';
          formStatus.className = 'form-status';
        }, 6000);

      }, 1500);
    });
  }
});
