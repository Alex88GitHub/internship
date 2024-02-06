import Swiper from 'swiper/bundle';

const sliderEl = document.querySelector('[data-slider="news-slider"]');
const buttonPrev = document.querySelector('[data-slider="news-prev-button"]');
const buttonNext = document.querySelector('[data-slider="news-next-button"]');
const pagination = document.querySelector('[data-slider="news-pagination"]');

export const newsSlider = () => {
  new Swiper(sliderEl, {
    loop: false,
    navigation: {
      prevEl: buttonPrev,
      nextEl: buttonNext,
    },
    pagination: {
      el: pagination,
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${ className }">${ index + 1 }</span>`;
      },
      bulletClass: 'news__pagination',
    },
    slidesPerView: 'auto',
    breakpoints: {
      320: {
        spaceBetween: 20,
        grid: {
          rows: 2,
          fill: 'column',
        },
      },
      768: {
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      1440: {
        allowTouchMove: false,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      },
    },
  });
};

const tabs = document.querySelectorAll('[data-tabs="button"]');

const onTabsClickHandler = (evt) => {
  tabs.forEach((element) => {
    element.classList.remove('is-active');
  });
  const target = evt.target;
  target.classList.add('is-active');
};

tabs.forEach((element) => {
  element.addEventListener('click', onTabsClickHandler);
});
