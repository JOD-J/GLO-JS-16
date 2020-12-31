/* eslint-disable max-len */
//======================================================sendForm==========================================================
// send ajax FORM
const sendForm = () => {
	let isError = [];														// флаг для отправки формы
	const errorMessage = 'Что то пошло не так',									// выводим на экрам определный текст
		successMessage = 'Спасибо! Мы скоро с вами свяжемся!',					// выводим на экрам определный текст
		notInput = 'Поля заполнены не корректно',
		placeholderName = 'example "Иван"',
		placeholderPhone = 'example "+79078425469"',
		placeholderEmail = 'example "vika@gmail.com"',
		placeholderMessage = 'Разрешенно вводить только кириллицу, пробелы, цифры и знаки препинания.',
		statusMessage = document.createElement('div'), 							// создаем див для текста
		formInputs = document.querySelectorAll('input[id]');					// получаем инпуты со всех форм
	statusMessage.style.color = 'white';										// белый цвет для текста
	const skWaveElem = document.querySelector('.sk-wave');


	//======================================================postData==========================================================
	function postData(body) {
		return fetch('./server.php', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body),
			credentials: 'include'
		});
	}
	//==============================================\\\\\\\postData======================================================


	//======================================================checkUserFormElems==========================================================
	document.addEventListener('submit', event => {
		event.preventDefault();									// отключаем стандартную перезакрузку
		const target = event.target; 							// делегирование
		checkUserFormElems(target);
	});
	//==============================================\\\\\\\checkUserFormElems======================================================

	//======================================================checkUserFormElems==========================================================
	function checkUserFormElems(elem) {
		elem.appendChild(statusMessage);
		statusMessage.textContent = '';							// присваеваем диву текст successMessage(выполнено)
		skWaveElem.style.display = 'block';
		statusMessage.appendChild(skWaveElem); 					// присваеваем диву текст с loadMessage(загрузка)
		const formData = new FormData(elem);
		const body = {};
		for (const val of formData.entries()) {
			body[val[0]] = val[1];
		}		if (!isError.length) {
			postData(body)
				.then(response => {
					if (response.status !== 200) {
						throw new Error('status network mot 200');
					}
					statusMessage.textContent = successMessage;		// присваеваем диву текст successMessage(выполнено)
					removeStatusMessage();
					clearInput(elem);
				})
				.catch(error => {
					statusMessage.textContent = errorMessage;		// присваеваем диву текст errorMessage(ошибка)
					removeStatusMessage();
					console.log(error);
					clearInput(elem);
				});
		} else {
			statusMessage.textContent = notInput;		// присваеваем диву текст errorMessage(ошибка)
			removeStatusMessage();
		}
	}
	//==============================================\\\\\\\checkUserFormElems======================================================

	function removeStatusMessage() {
		setTimeout(() => {
			statusMessage.textContent = '';		// присваеваем диву текст errorMessage(ошибка)
		}, 5000);
	}

	//======================================================showBoxShadow==========================================================
	function showBoxShadow(checkBolean, elem) {
		if (checkBolean) {
			isError.push(elem);
			elem.style.boxShadow = '0 0 5px 5px red';
		} else {
			isError = isError.filter(item => item !== elem);
			elem.style.boxShadow = '0 0 5px 5px green';
		}
	}
	//==============================================\\\\\\\showBoxShadow======================================================


	//======================================================formInputs==========================================================
	formInputs.forEach(item => {
		item.setAttribute('autocomplete', 'off');
		item.addEventListener('focus', event => {
			const target = event.target;
			if (target.matches('[name="user_name"]')) {
				target.setAttribute('placeholder', placeholderName);
			}
			if (target.matches('.form-phone')) {
				target.setAttribute('placeholder', placeholderPhone);
			}
			if (target.matches('.form-email')) {
				target.setAttribute('placeholder', placeholderEmail);
			}
			if (target.matches('.mess')) {
				target.setAttribute('placeholder', placeholderMessage);
			}
		});
		item.addEventListener('change', event => {
			const target = event.target;
			if (target.matches('[name="user_name"]')) {
				if (!checkName(target)) {
					target.setAttribute('placeholder', placeholderName);
					showBoxShadow(!checkName(target), target);
				} else {
					target.setAttribute('placeholder', 'Ваше имя');
					showBoxShadow(!checkName(target), target);
				}
			}
			if (target.matches('.form-phone')) {
				if (!checkPhone(target)) {
					target.setAttribute('placeholder', placeholderPhone);
					showBoxShadow(!checkPhone(target), target);
				} else {
					target.setAttribute('placeholder', 'Номер телефона');
					showBoxShadow(!checkPhone(target), target);
				}
			}
			if (target.matches('.form-email')) {
				if (!checkEmail(target)) {
					target.setAttribute('placeholder', placeholderEmail);
					showBoxShadow(!checkEmail(target), target);
				} else {
					target.setAttribute('placeholder', 'E-mail');
					showBoxShadow(!checkEmail(target), target);
				}
			}
			if (target.matches('.mess')) {
				if (!checkMessage(target)) {
					target.setAttribute('placeholder', placeholderMessage);
					showBoxShadow(!checkMessage(target), target);
				} else {
					target.setAttribute('placeholder', 'Ваше сообщение');
					showBoxShadow(!checkMessage(target), target);
				}
			}
		});
	});
	//==============================================\\\\\\\formInputs======================================================


	//======================================================валид==========================================================
	function checkName(elem) {
		elem.value = elem.value.replace(/[a-z0-9?@!,.=_'"/+*)(}{\][|;:\\-]/gi, '');
		return /^[а-яА-Я\s]{3,20}$/.test(elem.value);
	}
	function checkPhone(elem) {
		elem.value = elem.value.replace(/[a-zA-Zа-яА-ЯЁё?@!,.=_'"/*}{\][|;:-]/gi, '');
		return /^\+?\d{11}$/.test(elem.value);
	}
	function checkEmail(elem) {
		elem.value = elem.value.replace(/[а-яА-Я?!,+='"/*)(}{\][|;:\\-]/gi, '');
		return /\w+@\w+\.\w{2,4}$/g.test(elem.value);
	}
	function checkMessage(elem) {
		elem.value = elem.value.replace(/[^а-яА-Я\s!,\\.\\?\d]+/gi, '');
		return /^[а-яА-Я\s\d\\.,!\\?-\\:]{1,}$/g.test(elem.value);
	}
	//==============================================\\\\\\\валид======================================================


	//======================================================clearInput==========================================================
	function clearInput(form) {
		[...form.elements].filter(item => item.tagName.toLowerCase() !== 'button' && item.type !== 'button').forEach(item => {
			item.value = '';
			item.style.boxShadow = '';
		});
	}
	//==============================================\\\\\\\clearInput======================================================


};
	//==============================================\\\\\\\sendForm======================================================

export default sendForm;
