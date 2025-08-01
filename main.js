document.addEventListener('DOMContentLoaded', function() {

  // Smooth scrolling for all anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetID = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetID);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Simple form validation for Contact form
  const form = document.querySelector('form');
  if (form) {
    form.addEventListener('submit', function(e) {
      const name = form.querySelector('input[name="name"]').value.trim();
      const email = form.querySelector('input[name="email"]').value.trim();
      const message = form.querySelector('textarea[name="message"]').value.trim();

      if (!name || !email || !message) {
        e.preventDefault();
        alert('Please fill in all fields before submitting.');
      } else if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
      } else {
        e.preventDefault(); // Always prevent default
        window.location.href = 'success.html';
      }
    });

    function validateEmail(email) {
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      return re.test(email);
    }
  }
});
