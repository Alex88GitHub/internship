import Swiper from 'swiper/bundle';
// import {Pagination} from 'swiper/modules';

export const heroSlider = () => {
  const slider = document.querySelector('[data-slider="hero-slider"]');
  const pagination = slider.querySelector('[data-slider="hero-pagination"]');

  return new Swiper(slider, {
    loop: true,
    // autoHeight: true,
    // autoplay: {
    //   delay: 3000,
    // },
    pagination: {
      el: pagination,
      clickable: true,
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
