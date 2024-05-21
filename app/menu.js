const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

closeMenu.addEventListener('click', () => {
  navLinks.classList.remove('show');
});