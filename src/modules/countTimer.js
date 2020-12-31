/* eslint-disable max-len */
//======================================================countTimer===========================================================
// Timer
function countTimer(deadline) {
	const timerHoursElem = document.querySelector('#timer-hours'),		// элементы со страницы (hours).
		timerMinutesElem = document.querySelector('#timer-minutes'),	// элементы со страницы (minutes).
		timerSecondsElem = document.querySelector('#timer-seconds'),	// элементы со страницы (seconds).
		timerElem = document.querySelector('#timer');
		//======================================================getTimeRemaining======================================================
	function getTimeRemaining() {
		const dateStop = new Date(deadline).getTime(),	// экземпляр класса date так мы получим конечную дату через метод getTime находим милисекунды.
			dateNow = new Date().getTime(),					// получаем текущю дату через метод getTime находим милисекунды.
			timeRemaining = (dateStop - dateNow) / 1000,	// разница между двумя датами |1000 получаем секунды.
			seconds = Math.floor(timeRemaining % 60),		// % 60 остаток от деления.
			minutes = Math.floor((timeRemaining / 60) % 60),
			hours = Math.floor(timeRemaining / 60 / 60);
		return { timeRemaining, hours, minutes, seconds };
	}
	//===============================================\\\\\\\getTimeRemaining======================================================
	//======================================================updateClock===========================================================
	const deletInterval = setInterval(updateClock, 1000); 	// setInterval
	function updateClock() {
		const timer = getTimeRemaining();
		if (timer.timeRemaining >= 0) {
			timerHoursElem.textContent = timer.hours + ' :';			// выводим hours в html.
			timerMinutesElem.textContent = timer.minutes + ' :';		// выводим minutes в html.
			timerSecondsElem.textContent = timer.seconds;				// выводим seconds в html.
			if (timer.hours < 10) {
				timerHoursElem.textContent = '0' + timer.hours + ' :';			// конкантенация строки с числом hours.
			}
			if (timer.minutes < 10) {
				timerMinutesElem.textContent = '0' + timer.minutes + ' :';		// конкантенация строки с числом minutes.
			}
			if (timer.seconds < 10) {
				timerSecondsElem.textContent = '0' + timer.seconds;				// конкантенация строки с числом seconds.
			}
		} else {
			clearInterval(deletInterval);				// удаление deletInterval (удаление setInterval).
			timerElem.textContent = `Акция закончилась: ${deadline}`;
		}
	}
	//==============================================\\\\\\\updateClock===========================================================
}
//==============================================\\\\\\\countTimer===========================================================

export default countTimer;
