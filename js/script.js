/* eslint-disable max-len */
//======================================================DOMContentLoaded======================================================
// eslint-disable-next-line strict
window.addEventListener('DOMContentLoaded', ()  => {
	'use sctrict';
//======================================================countTimer===========================================================
	// Timer
	function countTimer(deadline) {
		const timerHoursElem = document.querySelector('#timer-hours'),
			timerMinutesElem = document.querySelector('#timer-minutes'),
			timerSecondsElem = document.querySelector('#timer-seconds');
//======================================================getTimeRemaining======================================================
		function getTimeRemaining() {
			const	dateStop = new Date(deadline).getTime(),	// экземпляр класса date так мы получим конечную дату через метод getTime находим милисекунды.
				dateNow = new Date().getTime(),					// получаем текущю дату через метод getTime находим милисекунды.
				timeRemaining = (dateStop - dateNow) / 1000,	// разница между двумя датами |1000 получаем секунды.
				seconds = Math.floor(timeRemaining % 60),		// % 60 остаток от деления.
				minutes = Math.floor((timeRemaining / 60) % 60),
				hours = Math.floor((timeRemaining / 60 / 60) % 24);
			return { timeRemaining, hours, minutes, seconds };
		}
		
//===============================================\\\\\\\getTimeRemaining======================================================
//======================================================updateClock===========================================================
		function updateClock() {
			const timer = getTimeRemaining();
			if (timer.timeRemaining >= 0) {
				timerHoursElem.textContent = timer.hours;			// выводим hours в html.
				timerMinutesElem.textContent = timer.minutes;		// выводим minutes в html.
				timerSecondsElem.textContent = timer.seconds;		// выводим seconds в html.
				console.log('if', timer.timeRemaining);
			} else {
				clearInterval(updateClockInterval);
				timerHoursElem.textContent = '00';		// остановка часов при достижении цели.
				timerMinutesElem.textContent = '00';	// остановка часов при достижении цели.
				timerSecondsElem.textContent = '00';	// остановка часов при достижении цели.
				console.log('else', timer.timeRemaining);

			}
		}
//==============================================\\\\\\\updateClock===========================================================
		const  updateClockInterval = setInterval(updateClock, 1000);
}
//==============================================\\\\\\\countTimer===========================================================
	countTimer('15 December 2020');
});
//==============================================\\\\\\\DOMContentLoaded======================================================
