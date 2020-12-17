
"use strict";

function counterTimer(newYear) {
	const timeOfDay = document.querySelector('.time-of-day'),
		nowDay = document.querySelector('.now-day'),
		nowTime = document.querySelector('.now-time'),
		newYearCounter = document.querySelector('.new-year-counter');

	function getTimeRemaining() {
		const dateNow = new Date().getTime(),
			dateNewYear = new Date(newYear).getTime(),
			timeRemaining = (dateNewYear - dateNow) / 1000,
			days = Math.floor(timeRemaining / 60 / 60 / 24),
			now = new Date(),
			nowDay = new Date(),
			options = { hour: 'numeric', minute: 'numeric', second: 'numeric' },
			hours = Intl.DateTimeFormat('ru-Ru', options).format(now),
			weekday = Intl.DateTimeFormat('ru-Ru',  { weekday: 'long' }).format(nowDay);
		return { timeRemaining, days, now, hours, weekday };
	}
	setInterval(updateClock, 1);
	function updateClock() {
		const timer = getTimeRemaining();

		if (timer.hours > '12:00:00') {
			timeOfDay.textContent = `Добрый день`;
			nowDay.textContent = `Сегодня ${timer.weekday}`;
			nowTime.textContent = `Текущее время: ${timer.hours} PM`;
		}
		if (timer.hours > '17:00:00') {
			timeOfDay.textContent = `Добрый вечер`;
		}
		if (timer.hours < '12:00:00') {
			timeOfDay.textContent = `Доброе утро`;
			nowTime.textContent = `Текущее время: ${timer.hours} AM`;
		}
		if (timer.hours > '00:00:00' && timer.hours < '06:00:00') {
			timeOfDay.textContent = `Доброй ночи`;
			nowTime.textContent = `Текущее время: ${timer.hours} AM`;
		}
		if (timer.days.toString().match(/[2-4]$/)) {
			newYearCounter.textContent = `До нового года осталось ${timer.days} дня`;
		}
		if (timer.days.toString().match(/[5-9]$/) || timer.days.toString().match(/0$/)) {
			newYearCounter.textContent = `До нового года осталось ${timer.days} дней`;
		}
		if (timer.days.toString().match(/1$/)) {
			newYearCounter.textContent = `До нового года остался ${timer.days} день`;
		}
		if (timer.days.toString().match(/[1]1$/)) {
			newYearCounter.textContent = `До нового года осталось ${timer.days} дней`;
		}
		if (timer.days.toString().match(/^1[2-9]$/)) {
			newYearCounter.textContent = `До нового года осталось ${timer.days} дней`;
		}
	}
}

counterTimer('1 jan 2021');
