import Swiper from 'swiper/bundle';
// import {Pagination} from 'swiper/modules';

// const slider = document.querySelector('[data-slider="hero-slider"]');
// // const pagination = slider.querySelector('[data-slider="hero-pagination"]');

export const reviewsSlider = () => {
  const sliderEl = document.querySelector('[data-slider="reviews-slider"]');
  const buttonPrev = document.querySelector('[data-slider="reviews-prev-button"]');
  const buttonNext = document.querySelector('[data-slider="reviews-next-button"]');
  const scrollbar = document.querySelector('[data-slider="reviews-scrollbar"]');

  const slider = new Swiper(sliderEl, {
    loop: false,
    autoHeight: false,
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
      },
    },
  });
  slider();
};
