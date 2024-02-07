import Swiper from 'swiper/bundle';

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
      draggable: true,
    },

    breakpoints: {
      1440: {
        slidesPerView: 2,
        allowTouchMove: false,
        spaceBetween: 32,
        scrollbar: {
          dragSize: 392,
        },
      },
      768: {
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 15,
      }
    },
  });
  return slider;
};
