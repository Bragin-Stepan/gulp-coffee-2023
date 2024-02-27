/**
 * !(i)
 * Код попадает в итоговый файл, только когда вызвана функция, например FLSFunctions.spollers();
 * Или когда импортирован весь файл, например import "files/script.js";
 * Неиспользуемый код в итоговый файл не попадает.

 * Если мы хотим добавить модуль следует его раскомментировать
 */
// import MousePRLX from './libs/parallaxMouse'
// import AOS from 'aos'
// import Swiper, { Navigation, Pagination } from 'swiper';

import BaseHelpers from './helpers/baseHelpers.js';
import PopupManager from './modules/popupManager.js';
import Tabs from './modules/tabs.js';
import Bootstrap from '/node_modules/bootstrap/dist/js/bootstrap.min';
import PopupCard from './modules/popupCard.js';

BaseHelpers.checkWebpSupport();

BaseHelpers.addTouchClass();

BaseHelpers.addLoadedClass();

BaseHelpers.headerFixed();

new PopupManager();
PopupCard();

/*
  Bootstrap
 */
new Bootstrap();

/**
 *  Библиотека для анимаций
 *  документация: https://michalsnik.github.io/aos
 * */
// AOS.init();

/**
 * Параллакс мышей
 * */
// new MousePRLX();

new Tabs('tabs-example', {
  onChange: (data) => {
    console.log(data);
  },
});
