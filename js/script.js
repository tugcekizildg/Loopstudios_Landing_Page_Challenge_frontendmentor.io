/* Open and Close Mobile Menu when hamburger menu icon clicked */

const hamburgerEl = document.getElementById('hamburger-btn');
const mobileMenuEl = document.getElementById('menu');

function toggleMultipleClasses(element, ...classes) {
  classes.forEach(cls => {
    element.classList.toggle(cls);
  });
}

hamburgerEl.addEventListener('click', () => {
  hamburgerEl.classList.toggle('open');
  toggleMultipleClasses(mobileMenuEl, 'flex', 'hidden');
});
