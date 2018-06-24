window.addEventListener('load', () => {
  const productSlider = document.querySelector('.productdetail-slider');
  const productContentSlider = document.querySelector('.productcontent-slider');
  const testimonialsSlider = document.querySelector('.testimonial-slider');
  const homeSlider = document.querySelector('.home-slider');
  const contentNextBtn = document.querySelector('.productcontent-next-btn');

  if (testimonialsSlider) {
    $('.testimonial-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  console.log(productSlider);

  if (productSlider) {
    $('.productdetail-slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      autoplay: true,
      slidesToScroll: 1,
      fade: true
    });
  }

  if (productContentSlider) {
    $('.productcontent-slider').slick({
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1
      // fade: true
    });

    $('.productcontent-slider').on('beforeChange', () => {
      $('.single-tubular').addClass('d-none');
      $('.jumbo-tubular').addClass('d-none');
    });
  }

  if (homeSlider) {
    $('.home-slider').slick({
      speed: 500,
      arrows: false,
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    });
  }

  var contactGoto = document.querySelector('.js-gotocontact');

  contactGoto.addEventListener('click', () => {
    $('html, body').animate(
      {
        scrollTop: $('.footer').offset().top
      }, 600);
  });

  if (contentNextBtn) {
    contentNextBtn.addEventListener('click', () => {
      $('.productcontent-slider').slick('slickNext');
    });
  }
});
