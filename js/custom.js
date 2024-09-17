$(function () {
  $('.owl-carousel').owlCarousel();
});

$('.quotes-carousel').owlCarousel({
  loop: true,
  nav: false,
  dots: true,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
      loop: true,
    },
  },
});

$('.features-carousel').owlCarousel({
  loop: true,
  nav: false,
  dots: false,
  margin: 0,
  autoplay: true,
  responsiveClass: true,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
      loop: true,
    },
  },
});
