// Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
hamburger.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// Dropdown click for mobile support
const dropdown = document.querySelector('.dropdown');
if (dropdown) {
  dropdown.addEventListener('click', function (e) {
    if (window.innerWidth <= 700) {
      const menu = dropdown.querySelector('.dropdown-menu');
      if (menu.style.display === 'flex') {
        menu.style.display = 'none';
      } else {
        menu.style.display = 'flex';
      }
      e.stopPropagation();
    }
  });
}
document.addEventListener('click', function () {
  if (window.innerWidth <= 700) {
    const menu = document.querySelector('.dropdown-menu');
    if (menu) menu.style.display = 'none';
  }
});
