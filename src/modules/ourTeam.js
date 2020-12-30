//======================================================ourTeam==========================================================
	// смнеа нашей команды картинки
	const ourTeam = () => {
		const commandElem = document.querySelector('.command'); 	// находи родительский элемент нашей комады
		const links = {}; 											// создаем объект для сохранение исходной картинки
		commandElem.addEventListener('mouseover', event => { 		// наведение
			const target = event.target; 							// делегирование
			if (target.matches('.command__photo')) { 				// находим наш обьект
				links[target.dataset.img] = target.src; 			// записываем исходную картинку
				target.src = target.dataset.img; 					// задаем новую картинку
			}
		});
		commandElem.addEventListener('mouseout', event => { 		// не наведение
			const target = event.target; 							// делегирование
			if (target.matches('.command__photo')) { 				// находим наш обьект
				target.src = links[target.dataset.img]; 			// переписываем новую картинку на исходную
			}
		});
	};
	//==============================================\\\\\\\ourTeam======================================================

	export default ourTeam;