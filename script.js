"use strict";

let ulElem = document.querySelector('.ul');
let liElem = document.querySelector('li');
let inputElem = document.querySelector('.input');
let buttonElem = document.querySelector('.button');

let inputElemBlok = () => {
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
	console.log('li: ', li);
	ulElem.append(li) ;
	inputElem.value = '';
	inputElemBlok();
} );

inputElemBlok();