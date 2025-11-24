// Simple interactivity: theme toggle, smooth scroll, and form handling
(function(){
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;
  const yearEl = document.getElementById('year');
  const learnBtn = document.getElementById('learn-btn');
  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');
  const resetBtn = document.getElementById('reset-btn');

  // set year
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // restore theme
  const saved = localStorage.getItem('theme');
  if(saved === 'dark') body.classList.add('dark');

  // toggle theme
  themeToggle && themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
  });

  // smooth scroll to features
  learnBtn && learnBtn.addEventListener('click', () => {
    document.getElementById('features').scrollIntoView({behavior:'smooth'});
  });

  // simple form handling (no backend)
  form && form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();
    if(!name || !email || !message){
      result.textContent = 'Please fill in all fields.';
      result.style.color = 'var(--muted)';
      return;
    }
    // simulate success
    result.textContent = `Thanks, ${name}! Your message has been sent.`;
    result.style.color = 'var(--accent)';
    form.reset();
  });

  resetBtn && resetBtn.addEventListener('click', () => {
    form.reset();
    result.textContent = '';
  });
})();
