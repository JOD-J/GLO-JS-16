"use strict";

let ulElem = document.querySelector('.ul');
let liElem = document.querySelectorAll('li');
let inputElem = document.querySelector('.input');
let buttonElem = document.querySelector('.button');

let buttonElemBlok = () => {
	buttonElem.disabled = true;
};

inputElem.addEventListener('input', () => {
	if (inputElem.value !== ''){
		buttonElem.disabled = false;
	}
});

buttonElem.addEventListener('click', (item) => {
	let li = document.createElement('li');
	item = inputElem.value;
	li.innerHTML = `<li>${item}</li>`;

	// ulElem.append(liValue) ;

	inputElem.value = '';

	buttonElemBlok();

});

buttonElemBlok();