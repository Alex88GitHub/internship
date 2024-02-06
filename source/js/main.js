// https://swiperjs.com/get-started#installation
// import Swiper from '../../node_modules/swiper';
// import {Navigation, Pagination} from '../../node_modules/swiper/modules';
import './modules/init-burger-menu';
import './utils/scroll-lock';
import './utils/focus-lock';
import {initAccordions} from './modules/init-accordion';
import {initSliders} from './modules/init-sliders';
import {StickyHeader} from './vendor/sticky-header';
import {CustomSelect} from './vendor/custom-select';
import {Form} from './vendor/form-validate/form';
import {initModals} from './modules/init-modals';

// import 'swiper/css';


// initSliders();



window.addEventListener('DOMContentLoaded', () => {
  const stickyHeader = new StickyHeader;
  stickyHeader.init();
  initSliders();

  window.addEventListener('load', () => {
    initAccordions();
    const select = new CustomSelect;
    select.init();
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
  });
});
