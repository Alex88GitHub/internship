import Swiper from 'swiper/bundle';
// import {Pagination} from 'swiper/modules';

// const slider = document.querySelector('[data-slider="hero-slider"]');
// // const pagination = slider.querySelector('[data-slider="hero-pagination"]');

export const heroSlider = () => {
  const sliderEl = document.querySelector('[data-slider="hero-slider"]');
  // const pagination = slider.querySelector('[data-slider="hero-pagination"]');

  const slider = new Swiper(sliderEl, {
    observer: true,
    loop: true,
    autoHeight: true,
    // autoplay: {
    //   delay: 3000,
    // },
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
