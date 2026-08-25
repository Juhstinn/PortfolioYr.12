// Wait for DOM to load fully
document.addEventListener('DOMContentLoaded', () => {

  // 1. MOBILE NAVIGATION MENU TOGGLE
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Toggle Menu
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close Mobile Menu when clicking a Nav Link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });


  // 2. AUTOMATIC CURRENT YEAR IN FOOTER
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }


  // 3. CONTACT FORM BASIC VALIDATION
  const contactForm = document.getElementById('contact-form');
  const formMessage = document.getElementById('form-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent page reload

      const nameInput = document.getElementById('name').value.trim();
      const emailInput = document.getElementById('email').value.trim();
      const messageInput = document.getElementById('message').value.trim();

      // Check if any required field is empty
      if (nameInput === '' || emailInput === '' || messageInput === '') {
        formMessage.textContent = 'Please fill in all fields before sending.';
        formMessage.className = 'form-message error';
        return;
      }

      // Display friendly success message
      formMessage.textContent = `Thank you, ${nameInput}! Your message has been sent successfully.`;
      formMessage.className = 'form-message success';

      // Reset the form fields
      contactForm.reset();
    });
  }

});