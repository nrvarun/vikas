
window.addEventListener('load', () => {
  const menuBtn = document.querySelector('.navbar-toggler');
  const overlay = document.querySelector('.overlay');
  const menu = document.querySelector('.sidebar');
  const header = document.querySelector('.header .navbar');

  const toggleMenu = () => {
    if (menu.classList.contains('show') && overlay.classList.contains('active')) {
      menu.classList.remove('show');
      overlay.classList.remove('active');
    } else {
      overlay.classList.add('active');
      menu.classList.add('show');
    }
  }

  menuBtn.addEventListener('click', toggleMenu);

  window.addEventListener('scroll', () => {
    if (window.scrollY >= 80) {
      header.classList.add('active');
    } else {
      header.classList.remove('active');
    }
  });
});
