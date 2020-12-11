"use strict";

const a = document.querySelector('#a'); // 1 число 
const b = document.querySelector('#b');	// 2 число 
const sum = document.querySelector('#sum'); // сумму  a b
const mult = document.querySelector('#mult'); // произведение  a b
const res = document.querySelector('#res'); // результат a b


const calculator = {
	sum: function(){
		return a.value + b.value;
	},
	mult: function(){
	  // ваш код
	},
	show: function(){
		mult.textContent = sum();
	}
};

sum.addEventListener('click', calculator.sum);

mult.addEventListener('click', function () {

});


// class First {
// 	constructor(heloFirst, heloSecond) {
// 		this.heloFirst = heloFirst;
// 		this.heloSecond = heloSecond;
// 	}
// 	hello (){
// 		console.log(this.heloFirst);
// 	}
// }
// class Second extends First {
// 		hello (){
// 		super.hello();
// 		console.log(this.heloSecond);
// 	}
// }
// 	const second = new Second('Привет я метод родителя!', 'А я наследуемый метод!');
// 	second.hello();































// const myLesson = [
// 	{lesson: 1, type: 'basic', points: 2},
// 	{lesson: 2, type: 'additional', points: 4},
// 	{lesson: 3, type: 'basic', points: 6},
// 	{lesson: 4, type: 'additional', points: 3},
// 	{lesson: 5, type: 'basic', points: 4},
// 	{lesson: 6, type: 'basic', points: 2},
// 	{lesson: 7, type: 'additional', points: 2},
// 	{lesson: 8, type: 'basic', points: 6},
// 	{lesson: 9, type: 'basic', points: 4},
// 	{lesson: 10, type: 'basic', points: 6},
// 	{lesson: 11, type: 'additional', points: 5}, 
// 	{lesson: 12, type: 'basic', points: 2}, 
// 	{lesson: 13, type: 'additional', points: 2}, 
// 	{lesson: 14, type: 'basic', points: 4},
// 	{lesson: 15, type: 'additional', points: 1},
// 	{lesson: 16, type: 'additional', points: 7},
// 	];

// 	for (let i = 0; i < myLesson.length; i++) {
// 		if (myLesson[i].type === 'basic') {
// 			myLesson[i].points /= 2;
// 		} else {
// 			myLesson.splice(i, 1);
// 			i--;
// 		}
// 	}
	
// 	console.log(myLesson);































// let ulElem = document.querySelector('.ul');
// let liElem = document.querySelectorAll('li');
// let inputElem = document.querySelector('.input');
// let buttonElem = document.querySelector('.button');

// let buttonElemBlok = () => {
// 	buttonElem.disabled = true;
// };

// inputElem.addEventListener('input', () => {
// 	if (inputElem.value !== ''){
// 		buttonElem.disabled = false;
// 	}
// });

// buttonElem.addEventListener('click', (item) => {
// 	let li = document.createElement('li');
// 	item = inputElem.value;
// 	li.innerHTML = `<li>${item}</li>`;

// 	// ulElem.append(liValue) ;

// 	inputElem.value = '';

// 	buttonElemBlok();

// });

// buttonElemBlok();