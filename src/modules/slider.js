/* eslint-disable max-len */
//======================================================slider===========================================================
// slider
const slider = () => {
	const slideElem = document.querySelectorAll('.portfolio-item'),		// элемент со страницы картинки
		sliderElem = document.querySelector('.portfolio-content'),		// элемент со страницы ул контейнер
		portfolioDotsElem = document.querySelector('.portfolio-dots');	// элемент со страницы ul для li
	for (let i = 0; i < slideElem.length; i++) {						// добавление dot в слайдер
		const dotCreatesElem = document.createElement('li');					// создание элемента li для portfolioDotsElem
		dotCreatesElem.classList.add('dot');									// присваеваем dotCreatesElem класс dot
		portfolioDotsElem.insertAdjacentElement('afterbegin', dotCreatesElem); 	// добовляем в portfolioDotsElem полученный dotCreatesElem
	}
	const dot = document.querySelectorAll('.dot');						// получаем dot для дальнейшей работы
	dot[0].classList.add('dot-active'); 								// активный класс дайем первой точке
	let currentSlide = 0, 												// номер слайда для изменение слайда
		interval;
		//======================================================prevSlide===========================================================
	const prevSlide = (elem, index, strClass) => {						// удаление  у слайда класса
		elem[index].classList.remove(strClass);
	};
		//==============================================\\\\\\\prevSlide======================================================
		//======================================================nextSlide===========================================================
	const nextSlide = (elem, index, strClass) => {						//  добовление у слайда класса
		elem[index].classList.add(strClass);
	};
		//==============================================\\\\\\\nextSlide======================================================
		//======================================================autoPlaySlide===========================================================
	const autoPlaySlide = () => {  										// запуск слайда автоматически
		prevSlide(slideElem, currentSlide, 'portfolio-item-active');	//  удаление у слайда активных  картинок
		prevSlide(dot, currentSlide, 'dot-active');						//  удаление у слайда активных точек
		currentSlide++;													// переход к след слайду
		if (currentSlide >= slideElem.length) {
			currentSlide = 0; 											// возфращение на 1 слайд
		}
		nextSlide(slideElem, currentSlide, 'portfolio-item-active');	// добовление  у слайда активных  картинок
		nextSlide(dot, currentSlide, 'dot-active');					// добовление у слайда активных точек
	};
		//==============================================\\\\\\\autoPlaySlide======================================================
		//======================================================startSlide===========================================================
	const startSlide = (time = 3000) => {								// запуск слайда при определенных условиях
		interval = setInterval(autoPlaySlide, time);
	};
		//==============================================\\\\\\\startSlide======================================================
		//======================================================stopSlide===========================================================
	const stopSlide = () => {											// остановка слайда при определенных условиях
		clearInterval(interval);
	};
		//==============================================\\\\\\\stopSlide======================================================
		//======================================================слушатели===========================================================
	sliderElem.addEventListener('click', event => {
		event.preventDefault(); 										// отмена действие по умолчанию
		const target = event.target; 									// target = элементу со страницы
		if (!target.matches('.portfolio-btn, .dot')) { 					// если не .portfolio-btn, .dot то return
			return;
		}
		prevSlide(slideElem, currentSlide, 'portfolio-item-active');	//  удаление у слайда активных  картинок
		prevSlide(dot, currentSlide, 'dot-active');						//  удаление у слайда активных точек
		if (target.matches('#arrow-right')) {							// клик по кнопке  право вперед слайд
			currentSlide++;												// вперед слайд
		} else if (target.matches('#arrow-left')) {						// клик по кнопке лево назад слайд
			currentSlide--;												// назад слайд
		} else if (target.matches('.dot')) {
			dot.forEach((elem, index) => {
				if (elem === target) {
					currentSlide = index;
				}
			});
		}
		if (currentSlide >= slideElem.length) {
			currentSlide = 0;											// возфращение на 1 слайд
		}
		if (currentSlide < 0) {
			currentSlide = slideElem.length - 1;						// возфращение на 1 слайд
		}
		nextSlide(slideElem, currentSlide, 'portfolio-item-active');	// добовление  у слайда активных  картинок
		nextSlide(dot, currentSlide, 'dot-active');						// добовление у слайда активных точек
	});
	sliderElem.addEventListener('mouseover', event => {
		if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
			stopSlide();
		}
	});
	sliderElem.addEventListener('mouseout', event => {
		if (event.target.matches('.portfolio-btn') ||
				event.target.matches('.dot')) {
			startSlide();
		}
	});
	//==============================================\\\\\\\слушатели======================================================

	startSlide(1500);
};
	//==============================================\\\\\\\slider======================================================

export default slider;
