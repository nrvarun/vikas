document.addEventListener('DOMContentLoaded', () => {
  const productSwiper = document.querySelectorAll('.swiper-container.products');
  const testimonialsSwiper = document.querySelectorAll('.swiper-container.testimonials');
  const homeBannerSwiper = document.querySelectorAll('.swiper-container.home');

  if (productSwiper.length !== 0) {
    var mySwiper = new Swiper('.swiper-container.products', {

      // Optional parameters

      // direction: 'vertical',
      speed: 1000,
      slidesPerView: 2,
      spaceBetween: 30,
      loop: false,
      freeMode: true,
      centeredSlides: true,
      autoplay: {
        delay: 5000
      },

      // If we need pagination
      pagination: {
        el: '.swiper-pagination.product',
        clickable: true
      },

      breakpoints: {
        // when window width is <= 768
        576: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        600: {
          slidesPerView: 2,
          spaceBetween: 10
        }
      }
    });
  }

  if (testimonialsSwiper.length !== 0) {
    var testimonialSwiper = new Swiper('.swiper-container.testimonials', {
      // Optional parameters
      // direction: 'vertical',
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      centeredSlides: false,
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next.testimonial',
        prevEl: '.swiper-button-prev.testimonial'
      }
    });
  }

  if (homeBannerSwiper.length !== 0) {
    var homeSwiper = new Swiper('.swiper-container.home', {
      // Optional parameters
      // direction: 'vertical',
      speed: 1000,
      slidesPerView: 1,
      // spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 5000
      }
    });
  }
});
