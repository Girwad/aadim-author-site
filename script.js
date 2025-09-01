// Dark Mode Toggle
const toggleDarkMode = () => {
  document.body.classList.toggle('dark-theme');
};

document.addEventListener('DOMContentLoaded', () => {
  // Add dark mode button
  const header = document.querySelector('header');
  const toggleBtn = document.createElement('button');
  toggleBtn.textContent = '🌙';
  toggleBtn.className = 'dark-toggle';
  toggleBtn.onclick = toggleDarkMode;
  header.appendChild(toggleBtn);

  // Animate sections on scroll
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
      }
    });
  }, { threshold: 0.2 });

  sections.forEach(section => observer.observe(section));

  // Form validation feedback
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const inputs = form.querySelectorAll('input, textarea');
      let valid = true;
      inputs.forEach(input => {
        if (!input.value.trim()) {
          input.classList.add('error');
          valid = false;
        } else {
          input.classList.remove('error');
        }
      });
      if (valid) {
        alert('Thanks for reaching out!');
        form.reset();
      }
    });
  });
});
