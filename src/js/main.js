$(function () {

   $('.hero-slider').slick({
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
   });

   $('.client-slider__inner').slick({
      dots: true,
      infinite: true,
      prevArrow: '<button class="slick-arrow slick-prev"><img src="img/client-slider/slide-prev.svg" alt=""></button>',
      nextArrow: '<button class="slick-arrow slick-next"><img src="img/client-slider/slide-next.svg" alt=""></button>',
      autoplay: true,
      autoplaySpeed: 2000,
   });
});