// ── SMOOTH SCROLL ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ── ACTIVE NAV HIGHLIGHT ON SCROLL ──
const sections = document.querySelectorAll('section, [id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerOptions = {
  root: null,
  rootMargin: '-40% 0px -55% 0px',
  threshold: 0
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${entry.target.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}, observerOptions);

document.querySelectorAll('#work, #team, #contact').forEach(section => {
  observer.observe(section);
});

// ── CONTACT FORM VALIDATION ──
const sendBtn = document.getElementById('send-btn');
const feedback = document.getElementById('form-feedback');

function showFeedback(msg, isError) {
  feedback.textContent = msg;
  feedback.style.color = isError ? '#E24B4A' : '#0F6E56';
}

function clearFeedback() {
  feedback.textContent = '';
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (sendBtn) {
  sendBtn.addEventListener('click', () => {
    const name    = document.getElementById('f-name').value.trim();
    const email   = document.getElementById('f-email').value.trim();
    const subject = document.getElementById('f-subject').value.trim();
    const msg     = document.getElementById('f-msg').value.trim();

    clearFeedback();

    if (!name) {
      showFeedback('Please enter your name.', true);
      document.getElementById('f-name').focus();
      return;
    }

    if (!email) {
      showFeedback('Please enter your email address.', true);
      document.getElementById('f-email').focus();
      return;
    }

    if (!validateEmail(email)) {
      showFeedback('That email doesn\'t look right. Please double-check it.', true);
      document.getElementById('f-email').focus();
      return;
    }

    if (!msg) {
      showFeedback('Please write a message before sending.', true);
      document.getElementById('f-msg').focus();
      return;
    }

    // success
    showFeedback('Message sent! We\'ll get back to you soon 🚀', false);

    document.getElementById('f-name').value    = '';
    document.getElementById('f-email').value   = '';
    document.getElementById('f-subject').value = '';
    document.getElementById('f-msg').value     = '';
  });
}

// ── CLEAR FEEDBACK ON INPUT ──
['f-name', 'f-email', 'f-subject', 'f-msg'].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.addEventListener('input', clearFeedback);
});