/* eslint-disable max-len */
//======================================================DOMContentLoaded======================================================
// eslint-disable-next-line strict
window.addEventListener('DOMContentLoaded', ()  => {
	'use sctrict';


	//======================================================countTimer===========================================================
	// Timer
	function countTimer(deadline) {
		const timerHoursElem = document.querySelector('#timer-hours'),		// элементы со страницы (hours).
			timerMinutesElem = document.querySelector('#timer-minutes'),	// элементы со страницы (minutes).
			timerSecondsElem = document.querySelector('#timer-seconds');	// элементы со страницы (seconds).
		//======================================================getTimeRemaining======================================================
		function getTimeRemaining() {
			const	dateStop = new Date(deadline).getTime(),	// экземпляр класса date так мы получим конечную дату через метод getTime находим милисекунды.
				dateNow = new Date().getTime(),					// получаем текущю дату через метод getTime находим милисекунды.
				timeRemaining = (dateStop - dateNow) / 1000,	// разница между двумя датами |1000 получаем секунды.
				seconds = Math.floor(timeRemaining % 60),		// % 60 остаток от деления.
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor(timeRemaining / 60 / 60);
			return { timeRemaining, hours, minutes, seconds };
		}
		//===============================================\\\\\\\getTimeRemaining======================================================
		//======================================================updateClock===========================================================
		const  deletInterval = setInterval(updateClock, 1000); 	// setInterval
		function updateClock() {
			const timer = getTimeRemaining();
			if (timer.timeRemaining >= 0) {
				timerHoursElem.textContent = timer.hours;			// выводим hours в html.
				timerMinutesElem.textContent = timer.minutes;		// выводим minutes в html.
				timerSecondsElem.textContent = timer.seconds;		// выводим seconds в html.
				// console.log('if', timer.timeRemaining);				// проверка работы setInterval.
				if (timer.hours < 10) {
					timerHoursElem.textContent = '0' +  timer.hours;		// конкантенация строки с числом hours.
				}
				if (timer.minutes < 10) {
					timerMinutesElem.textContent = '0' +   timer.minutes;		// конкантенация строки с числом minutes.
				}
				if (timer.seconds < 10) {
					timerSecondsElem.textContent = '0' +   timer.seconds;		// конкантенация строки с числом seconds.
				}
			} else {
				clearInterval(deletInterval);				// удаление deletInterval (удаление setInterval).
				timerHoursElem.textContent = '00';			// присвоение значение 00 для hours в сулчае окончание акции.
				timerMinutesElem.textContent = '00';		// присвоение значение 00 для minutes в сулчае окончание акции.
				timerSecondsElem.textContent = '00';		// присвоение значение 00 для seconds в сулчае окончание акции.
				// console.log('else', timer.timeRemaining);	// проверка удаление setInterval.

			}
		}
		//==============================================\\\\\\\updateClock===========================================================
	}
	//==============================================\\\\\\\countTimer===========================================================
	countTimer('30 December 2020 ');


	//======================================================toggleMenu===========================================================
	// menu
	const toggleMenu = () => {
		const btnMenuElem = document.querySelector('.menu'),		// элементы со тсраницы кнопка header
			menuElem = document.querySelector('menu'),				// элементы со тсраницы див с меню
			btnCloseElem = document.querySelector('.close-btn'),	// элементы со тсраницы закрытие меню
			menuItemElem = menuElem.querySelectorAll('ul>li');		// элементы со тсраницы получение всег осписка меню
		//======================================================handlerMenu===========================================================
		const handlerMenu = () => {
			menuElem.classList.toggle('active-menu');	 // навешивание стилей на див
		};
		//==============================================\\\\\\\handlerMenu===========================================================
		//===================================================слушатели==============================================================
		btnMenuElem.addEventListener('click', handlerMenu);								// слушатель на закрытие меню
		btnCloseElem.addEventListener('click', handlerMenu);							// слушатель на закрытие меню
		menuItemElem.forEach(elem => elem.addEventListener('click', handlerMenu));		// для каждого элемента закрытие меню
		//==============================================\\\\\\\слушатели===========================================================
	};
	//==============================================\\\\\\\toggleMenu===========================================================
	toggleMenu();


	//======================================================togglePopup===========================================================
	// popup
	const togglePopup = () => {
		const popupElem = document.querySelector('.popup'),					// элементы со тсраницы див с самим popup
			btnPopupElem = document.querySelectorAll('.popup-btn'),			// элементы со тсраницы кнопки оставить заявку
			btnPopupCloseElem = document.querySelector('.popup-close'),		// элементы со тсраницы закрытие popup окна
			popupContentElem = document.querySelector('.popup-content');	// элементы со тсраницы контейнер для popup
		//======================================================animatePopup===========================================================
		const animatePopup = () => {
			popupContentElem.style.transform = `translate(-50%)`;	// убираем popup
			let count = -100;								// счетчик -100 для скрытия popup
			const go = () => {
				count = 1 + count; 							// счетчик прибавляем каждый раз с условием count === 100
				popupContentElem.style.left = `${count}%`; 		// появление popup окна
				const animate = requestAnimationFrame(go);	// запуск анимации
				if (count === 50) {
					cancelAnimationFrame(animate); 			// отмена анимации при условии count === 100
				}
			};
			requestAnimationFrame(go);						// запуск анимации
		};
		//==============================================\\\\\\\animatePopup======================================================
		//======================================================слушатели===========================================================
		btnPopupElem.forEach(elem => {
			elem.addEventListener('click', () => {
				popupElem.style.display = 'block';	// показываем элемент со страницы popup
				if (window.innerWidth > 768) {
					animatePopup();					// при условие если экран меньше чем 768 отключаем анимацию
				}
			});
		});
		btnPopupCloseElem.addEventListener('click', () => {
			popupElem.style.display = 'none';	// убираем элемент со страницы popup
		});
		//==============================================\\\\\\\слушатели======================================================
	};
	//==============================================\\\\\\\togglePopup======================================================
	togglePopup();
});
//==============================================\\\\\\\DOMContentLoaded======================================================
