import Swiper from 'swiper/bundle';

const sliderEl = document.querySelector('[data-slider="programs-slider"]');
const buttonPrev = document.querySelector('[data-slider="programs-prev-button"]');
const buttonNext = document.querySelector('[data-slider="programs-next-button"]');
const scrollbar = document.querySelector('[data-slider="programs-scrollbar"]');

export const programsSlider = () => {
  new Swiper(sliderEl, {
    loop: false,
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },
    scrollbar: {
      el: scrollbar,
      draggable: true,
    },
    breakpoints: {
      1440: {
        slidesPerView: 3,
        allowTouchMove: false,
        spaceBetween: 32,
        scrollbar: {
          dragSize: '392',
        },
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: '324',
        },
      },
      320: {
        slidesPerView: 'auto',
        spaceBetween: 30,
      },
    },
  });
};
