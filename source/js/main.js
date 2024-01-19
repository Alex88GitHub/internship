// https://swiperjs.com/get-started#installation
// import Swiper from '../../node_modules/swiper';
// import {Navigation, Pagination} from '../../node_modules/swiper/modules';
import './modules/init-burger-menu';
import './utils/scroll-lock';
import {initAccordions} from './modules/init-accordion';
import { initSliders } from './modules/init-sliders';
// import 'swiper/css';

initAccordions();
initSliders();
