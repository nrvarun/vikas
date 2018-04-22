
const productSwiper = document.querySelectorAll('.swiper-container.products');
const testimonialsSwiper = document.querySelectorAll('.swiper-container.testimonials');

if (productSwiper.length !== 0) {
  var mySwiper = new Swiper('.swiper-container.products', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
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
}

if (testimonialsSwiper.length !== 0) {
  var testimonialSwiper = new Swiper('.swiper-container.testimonials', {
    // Optional parameters
    // direction: 'vertical',
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
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
      },
      992: {
        slidesPerView: 2,
        spaceBetween: 20
      }
    }
  });
}
