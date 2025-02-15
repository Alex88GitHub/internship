const accordionElements = document.querySelectorAll('[data-faq][data-accordion="element"]');
const accordionButtonEl = document.querySelectorAll('[data-faq][data-accordion="button"]');

const setIconImage = (el) => {
  if (!accordionButtonEl.classList.contains('is-active')) {
    el.setAttribute('href', '__spritemap#sprite-minus-icon');
  } else {
    el.setAttribute('href', '__spritemap#sprite-plus-icon');
  }
};

const onAccordionElClick = (el) => {
  setIconImage(el);
};

accordionElements.forEach((element) => {
  element.addEventListener('click', onAccordionElClick);
});
