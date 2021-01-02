/* eslint-disable max-len */
//======================================================sendForm==========================================================
// send ajax FORM
const sendForm = () => {
	const style = document.createElement('style');
	style.textContent = `
	.errorValueforForm1{
		position: absolute;
		left: 50px;
		bottom: -8px;
		font-size: 12px;
		border: 3px solid red;
		background: #fff;
		color: #000;
		padding: 5px 10px;
		border-radius: 10px;
	}
	.errorValueforForm2{
		position: relative;
		left: -5px;
		top: 8px;
		font-size: 12px;
		border: 3px solid red;
		background: #fff;
		color: #000;
		padding: 5px 10px;
		border-radius: 10px;
	}
	.errorValueforForm3{
		position: relative;
		left: -40px;
		top: 5px;
		font-size: 12px;
		border: 3px solid red;
		background: #fff;
		color: #000;
		padding: 5px 10px;
		border-radius: 10px;
	}

        `;
	document.head.appendChild(style);



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
	formInputs.forEach(item => {
		item.setAttribute('autocomplete', 'off');
	});
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
		} if (!isError.length) {
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


	//======================================================removeStatusMessage==========================================================
	function removeStatusMessage() {
		setTimeout(() => {
			statusMessage.remove();		// присваеваем диву текст errorMessage(ошибка)
		}, 5000);
	}
	//==============================================\\\\\\\removeStatusMessage======================================================


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


	//======================================================validateInput==========================================================
	function validateInput(form, target) {
		target.parentElement.style.position = 'relative';
		const errorAtr = document.createElement('span');
		errorAtr.textContent = notInput;
		const a = target.closest('[name="user_form"]');
		if (a.matches('[id="form1"]')) {
			errorAtr.classList.add('errorValueforForm1');
			console.log(true);
		} else if (a.matches('[id="form2"]')) {
			errorAtr.classList.add('errorValueforForm2');
		} else {
			errorAtr.classList.add('errorValueforForm3');
		}
		target.insertAdjacentElement('afterend', errorAtr);
	}
	//==============================================\\\\\\\validateInput======================================================


	document.addEventListener('change', event => {
		const target = event.target;
		if (target.matches('[name="user_name"]')) {
			showBoxShadow(!checkName(target), target);
			if (!checkName(target)) {
				if (target.nextElementSibling) {
					return;
				}
				target.setAttribute('placeholder', placeholderName);
				validateInput(null, target);
			} else {
				if (target.nextElementSibling) {
					target.nextElementSibling.remove();
				}
				target.setAttribute('placeholder', 'Ваше имя');
			}
		}
		if (target.matches('.form-phone')) {
			showBoxShadow(!checkPhone(target), target);
			if (!checkPhone(target)) {
				if (target.nextElementSibling) {
					return;
				}
				validateInput(null, target);
				target.setAttribute('placeholder', placeholderPhone);
			} else {
				if (target.nextElementSibling) {
					target.nextElementSibling.remove();
				}
				target.setAttribute('placeholder', 'Номер телефона');
			}
		}
		if (target.matches('.form-email')) {
			showBoxShadow(!checkEmail(target), target);
			if (!checkEmail(target)) {
				if (target.nextElementSibling) {
					return;
				}
				validateInput(null, target);
				target.setAttribute('placeholder', placeholderEmail);
			} else {
				if (target.nextElementSibling) {
					target.nextElementSibling.remove();
				}
				target.setAttribute('placeholder', 'E-mail');
			}
		}
		if (target.matches('.mess')) {
			showBoxShadow(!checkMessage(target), target);
			if (!checkMessage(target)) {
				if (target.nextElementSibling) {
					return;
				}
				validateInput(null, target);
				target.setAttribute('placeholder', placeholderMessage);
			} else {
				if (target.nextElementSibling) {
					target.nextElementSibling.remove();
				}
				target.setAttribute('placeholder', 'Ваше сообщение');
			}
		}
	});


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
