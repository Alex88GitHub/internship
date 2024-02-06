import Swiper from 'swiper/bundle';

export const heroSlider = () => {
  const sliderEl = document.querySelector('[data-slider="hero-slider"]');

  const slider = new Swiper(sliderEl, {
    observer: true,
    loop: true,
    autoHeight: true,
    autoplay: {
      delay: 3000,
    },
    pagination: {
      el: '.swiper-slide-active [data-slider="hero-pagination"]',
      clickable: true,
    },
    on: {
      slideChangeTransitionStart: function () {
        slider.pagination.init();
        slider.pagination.render();
        slider.pagination.update();
      }
    },

    breakpoints: {
      320: {

      },
      768: {

      },
      1440: {
        allowTouchMove: false,
      },
    },
  });
};
