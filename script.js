// Mobile navigation toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu after clicking a link on small screens
  navMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Close mobile nav when pressing Escape for accessibility
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navMenu?.classList.contains('open')) {
    navMenu.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.focus();
  }
});

// Wedding countdown (October 1, 2026 at 5:00 PM Mexico City time, UTC-06:00)
const countdownDays = document.querySelector('#countdown-days');

if (countdownDays) {
  const targetDate = new Date('2026-10-01T17:00:00-06:00');
  const millisecondsPerDay = 1000 * 60 * 60 * 24;

  const updateCountdown = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      countdownDays.textContent = '0';
      return;
    }

    countdownDays.textContent = String(
      Math.ceil(difference / millisecondsPerDay)
    );
  };

  updateCountdown();
  setInterval(updateCountdown, 60 * 1000);
}
