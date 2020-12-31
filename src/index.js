'use sctrict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import animationBtn from './modules/animationBtn';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourTeam from './modules/ourTeam';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';

// Timer
countTimer('31 December 2020 ');
// menu
toggleMenu();
// анимация кнопок
animationBtn();
// popup
togglePopup();
// табы
tabs();
// slider
slider();
// смнеа нашей команды картинки
ourTeam();
// калькулятор
calculator(100);
// send ajax FORM
sendForm();
