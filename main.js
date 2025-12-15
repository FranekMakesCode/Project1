document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  const form = document.querySelector('#contact-form');
  const feedback = document.querySelector('#form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.querySelector('#full-name').value.trim();
      const email = document.querySelector('#email').value.trim();
      const message = document.querySelector('#message').value.trim();

      if (!name || !email || !message) {
        feedback.textContent = 'Please fill in all fields.';
        return;
      }

      if (!email.includes('@') || !email.includes('.')) {
        feedback.textContent = 'Please enter a valid email address.';
        return;
      }

      feedback.textContent = 'Thank you. Your message has been recorded.';
      form.reset();
    });
  }
});