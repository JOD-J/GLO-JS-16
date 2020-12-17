
"use strict";

function counterTimer(newYear) {
	const timeOfDayElem = document.querySelector('.time-of-day'),
		nowDayElem = document.querySelector('.now-day'),
		nowTimeElem = document.querySelector('.now-time'),
		newYearCounterElem = document.querySelector('.new-year-counter');

	function getTimeRemaining() {
		const dateNow = new Date().getTime(),
			dateNewYear = new Date(newYear).getTime(),
			timeRemaining = (dateNewYear - dateNow) / 1000,
			days = Math.floor(timeRemaining / 60 / 60 / 24),
			now = new Date(),
			nowDay = new Date(),
			options = {
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric'
			},
			hours = Intl.DateTimeFormat('ru-Ru', options).format(now),
			weekday = Intl.DateTimeFormat('ru-Ru',  { weekday: 'long' }).format(nowDay);
		return { days, hours, weekday };
	}

	function showDayTime() {
		const timer = getTimeRemaining();
		nowDayElem.textContent = `Сегодня ${timer.weekday}`;
		nowTimeElem.textContent = `Текущее время: ${timer.hours}`;
	}
	setInterval(updateClock, 1000);
	function updateClock() {
		const timer = getTimeRemaining();
		if (timer.hours > '12:00:00') {
			timeOfDayElem.textContent = `Добрый день`;
			showDayTime();
		}
		if (timer.hours > '17:00:00') {
			timeOfDayElem.textContent = `Добрый вечер`;
			showDayTime();
		}
		if (timer.hours < '12:00:00') {
			timeOfDayElem.textContent = `Доброе утро`;
			showDayTime();
		}
		if (timer.hours > '00:00:00' && timer.hours < '06:00:00') {
			timeOfDayElem.textContent = `Доброй ночи`;
			showDayTime();
		}
		if (timer.days) {
			newYearCounterElem.textContent = `До нового года осталось ${timer.days} дней`;
		}
	}
}
counterTimer('1 jan 2021');
