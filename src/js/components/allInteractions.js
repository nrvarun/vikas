// Common Interactions
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded...');
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'linear'
  });

  var showSingle = document.querySelector('.js-single-table');
  var showJumbo = document.querySelector('.js-jumbo-table');

  showSingle.addEventListener('click', () => {
    $('.jumbo-tubular').addClass('d-none');
    $('.single-tubular').toggleClass('d-none');
  });

  showJumbo.addEventListener('click', () => {
    $('.single-tubular').addClass('d-none');
    $('.jumbo-tubular').toggleClass('d-none');
  });
});
