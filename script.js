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
      
      // Prevent scrolling when mobile menu is open
      if (navLinks.classList.contains('active')) {
        body.style.overflow = 'hidden';
      } else {
        body.style.overflow = '';
      }
    });

    // Close menu when a link is clicked
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
        body.style.overflow = '';
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

  // --- Card Mouse Tracking (Interactive Glow Effect) ---
  const cards = document.querySelectorAll('.offering-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
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
      submitBtn.textContent = 'Accelerating...';
      formStatus.textContent = '';
      formStatus.className = 'form-status';

      // Gather form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        bottleneck: document.getElementById('bottleneck').value
      };

      // Simulate API submission
      setTimeout(() => {
        // Mock successful submission
        submitBtn.disabled = false;
        submitBtn.textContent = originalBtnText;
        
        formStatus.textContent = 'Inquiry sent! We will review your bottleneck and contact you within 24 hours.';
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
