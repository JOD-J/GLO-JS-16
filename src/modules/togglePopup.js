//======================================================togglePopup===========================================================
	// popup
	const togglePopup = () => {
		const popupElem = document.querySelector('.popup'),					// элементы со тсраницы див с самим popup
			btnPopupElem = document.querySelectorAll('.popup-btn'),			// элементы со тсраницы кнопки оставить заявку
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
		popupElem.addEventListener('click', event => {
			let target = event.target;
			if (target.classList.contains('popup-close')) {
				popupElem.style.display = 'none';
			} else {
				target = target.closest('.popup-content');
				if (!target) {
					popupElem.style.display = 'none';
				}
			}
		});
		//==============================================\\\\\\\слушатели======================================================
	};
	//==============================================\\\\\\\togglePopup======================================================

	export default togglePopup;