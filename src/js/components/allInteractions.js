// Common Interactions
import AOS from 'aos';

document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'linear'
  });

  const productCards = document.querySelectorAll('.product-card');
  let productOneCard = document.querySelector('.product-card.one');

  console.log(productCards);

  productCards.forEach((card) => {
    card.addEventListener('mouseover', function (e) {
      this.classList.add('active');
    });

    card.addEventListener('mouseout', function (e) {
      this.classList.remove('active');
      const elementBeingHovered = e.relatedTarget;
      if (elementBeingHovered.classList.contains('products-wrapper')) {
        productOneCard.classList.add('active');
      }
    });
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
