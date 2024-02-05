// https://swiperjs.com/get-started#installation
// import Swiper from '../../node_modules/swiper';
// import {Navigation, Pagination} from '../../node_modules/swiper/modules';
import './modules/init-burger-menu';
import './utils/scroll-lock';
import {initAccordions} from './modules/init-accordion';
import {initSliders} from './modules/init-sliders';
// import './vendor/custom-select';
import {CustomSelect} from './vendor/custom-select';
import { initModals } from './modules/init-modals';

// import 'swiper/css';

initAccordions();
initSliders();

const select = new CustomSelect;
select.init();
initModals();
