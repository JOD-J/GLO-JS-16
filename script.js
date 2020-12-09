"use strict";

let ulElem = document.querySelector('#d');
console.log('ulElem: ', ulElem);
let liElem = document.querySelector('li');
console.log('liElem: ', liElem);
let buttonElem = document.querySelector('.button');
console.log('buttonElem: ', buttonElem);
let inputElem = document.querySelector('.input');
console.log('inputElem: ', inputElem);

let getPet = () => {
	let li = document.createElement('li');
	console.log('li: ', li);
		li = inputElem.value;
		console.log('li: ', li);
		ulElem.inerHTML = li;
};

buttonElem.addEventListener('click', getPet);
