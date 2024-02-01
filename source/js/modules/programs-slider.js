import Swiper from 'swiper/bundle';

const sliderEl = document.querySelector('[data-slider="programs-slider"]');
const buttonPrev = document.querySelector('[data-slider="programs-prev-button"]');
const buttonNext = document.querySelector('[data-slider="programs-next-button"]');
const scrollbar = document.querySelector('[data-slider="programs-scrollbar"]');

export const programsSlider = () => {
  new Swiper(sliderEl, {
    loop: false,
    // autoHeight: false,
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },
    scrollbar: {
      el: scrollbar,
      draggable: false,
    },

    breakpoints: {
      320: {

      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
      1440: {
        slidesPerView: 'auto',
        allowTouchMove: false,
        spaceBetween: 32,
        scrollbar: {
          dragSize: '392',
        },
      },
    },
  });
};
