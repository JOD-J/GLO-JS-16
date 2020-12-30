//======================================================calculator==========================================================
	// калькулятор
	const calculator = (price = 100) => {
		const calcBlockElem = document.querySelector('.calc-block'),		// находи родительский элемент калькулятор
			calcTypeElem = document.querySelector('.calc-type'),			// select
			calcSquareElem = document.querySelector('.calc-square'),		// общая площадь
			calcCountElem = document.querySelector('.calc-count'),			// количесвто помещений
			calcDayElem = document.querySelector('.calc-day'),				// срок исполнения в днях
			totalValueElem = document.getElementById('total');				// цена
		let interval;
		//======================================================countSum===========================================================
		const countSum = () => {
			let total = 0,
				countValue = 1,
				dayValue = 1,
				step = 0;
			const typeValue = calcTypeElem.options[calcTypeElem.selectedIndex].value;
			const squareValue = +calcSquareElem.value;
			if (calcCountElem.value > 1) {
				countValue += (calcCountElem.value - 1) / 10;
			}
			if (calcDayElem.value && calcDayElem.value < 5) {
				dayValue *= 2;
			} else if (calcDayElem.value && calcDayElem.value < 10) {
				dayValue *= 1.5;
			}
			if (typeValue && squareValue) {
				total = price * typeValue * squareValue * countValue * dayValue;
			}
			const animateSumm = () => {
				interval = requestAnimationFrame(animateSumm, 50);
				if (step < total && total < 5000) {
					step += 50;
					totalValueElem.textContent = step;
				} else if (step < total && total > 5000) {
					step += 1000;
					totalValueElem.textContent = step;
				} else if (step > total) {
					cancelAnimationFrame(interval);
					totalValueElem.textContent = Math.floor(total);
				}
				calcTypeElem.addEventListener('input', () => {
					totalValueElem.textContent = 0;
				});
			};
			interval = requestAnimationFrame(animateSumm);
		};
		//==============================================\\\\\\\countSum======================================================

		calcBlockElem.addEventListener('change', event => {				// слушатель
			const target = event.target;							// делегирование
			if (target.matches('select') || target.matches('input')) {
				countSum();
			}
		});
		calcBlockElem.addEventListener('input', event => {				// слушатель
			const target = event.target;							// делегирование
			if (target.matches('.calc-square') ||
				target.matches('.calc-count') ||
				target.matches('.calc-day')) {
				target.value = target.value.replace(/\D/, ''); 		// удаление все что не цифры
			}
		});
	};
	//==============================================\\\\\\\calculator======================================================

	export default calculator;