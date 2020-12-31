//======================================================tabs===========================================================
// табы
const tabs = () => {
	const tabHeaderElem = document.querySelector('.service-header'),		// элемент со страницы див с сылками
		tabElem = tabHeaderElem.querySelectorAll('.service-header-tab'),	// элемент со страницы ссылки
		tabContentElem = document.querySelectorAll('.service-tab');			// элемент со страницы контент
		//======================================================toggleTabContent===========================================================
	const toggleTabContent = index => {
		for (let i = 0; i < tabContentElem.length; i++) {
			if (index === i) {									// условие
				tabElem[i].classList.add('active');				// добовление  активного класса
				tabContentElem[i].classList.remove('d-none');	// удаление display none
			} else {
				tabElem[i].classList.remove('active');			// удаление активного класса
				tabContentElem[i].classList.add('d-none');		// добовление display none
			}
		}
	};
		//==============================================\\\\\\\toggleTabContent======================================================
		//======================================================слушатель===========================================================
	tabHeaderElem.addEventListener('click', event => {
		let target = event.target;
		target = event.target.closest('.service-header-tab');
		if (target) {
			tabElem.forEach((item, i) => {
				if (item === target) {
					toggleTabContent(i);
				}
			});
		}
	});
	//==============================================\\\\\\\слушатель======================================================
};
	//==============================================\\\\\\\tabs======================================================

export default tabs;
