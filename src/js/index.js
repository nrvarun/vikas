/**
 * Application entry point
 */

// Load application styles
import '../css/main.scss';

// ================================
// START YOUR APP HERE
// ================================

console.log('Webpack 4 is sweet');

// $(document).ready((e) => {
//   console.log('dom loaded');
// });

var mySwiper = new Swiper('.swiper-container.products', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 2,
  spaceBetween: 30,
  loop: false,
  freeMode: true,
  centeredSlides: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is <= 768
    768: {
      slidesPerView: 2,
      spaceBetween: 10
    }
  }
});

var testimonialSwiper = new Swiper('.swiper-container.testimonials', {
  // Optional parameters
  // direction: 'vertical',
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    // when window width is <= 768
    600: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
});
