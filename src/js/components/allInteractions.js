// Common Interactions
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Loaded...');
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'linear'
  });
});
