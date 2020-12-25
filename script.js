/* eslint-disable max-len */
"use strict";
document.addEventListener('DOMContentLoaded', ()  => {
	const cityArr = {
		rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
		uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
		bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
		jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
	};
	class Region {
		//==================================================constructor===================================================
		constructor(country, result, city, cityArr) {
			this.countryElem = document.querySelector(country); 		// получаем элементы со старнциы
			this.resultElem = document.querySelector(result);			// получаем элементы со старнциы
			this.cityElem = document.querySelector(city); 				// получаем элементы со старнциы
			this.cityArr = cityArr;
		}
		//==========================================\\\\\\constructor====================================================


		//==================================================getresult===================================================
		getresult() {
			const countryElemValue = this.countryElem.options[this.countryElem.selectedIndex].textContent;
			const cityElemValue = this.cityElem.options[this.cityElem.selectedIndex].textContent;
			this.resultElem.textContent = countryElemValue + ' ' + cityElemValue;
		}
		//==========================================\\\\\\getresult====================================================


		
		//==========================================\\\\\\getCityElem====================================================

		getCitis() {
			this.cityElem.textContent = '';
			switch (this.countryElem.value) {
			case 'rus':
				this.cityArr.rus.forEach(item => {
					this.cityElem.insertAdjacentHTML('afterbegin', `<option>${item}</option>`);
				});
				this.getresult();


				break;
			case 'uk':
				this.cityArr.uk.forEach(item => {
					this.cityElem.insertAdjacentHTML('afterbegin', `<option>${item}</option>`);
				});
				this.getresult();
				break;

			case 'bel':
				this.cityArr.bel.forEach(item => {
					this.cityElem.insertAdjacentHTML('afterbegin', `<option>${item}</option>`);
				});
				this.getresult();
				break;

			case 'jap':
				this.cityArr.jap.forEach(item => {
					this.cityElem.insertAdjacentHTML('afterbegin', `<option>${item}</option>`);
				});
				this.getresult();
				break;

			}

		}
		//==================================================showCity===================================================
		showCity() {
			this.getCitis();
			this.cityElem.style.display = 'inline-block'; 						// показываем cityElem
		}
		//==========================================\\\\\\showCity====================================================


		//==================================================init===================================================
		init() {
			this.countryElem.addEventListener('change', this.showCity.bind(this)); // слушатель на countryElem запускаем this.showCity и передаем this сласса Region

			this.cityElem.addEventListener('change', this.getresult.bind(this));
		}
		//==========================================\\\\\\init====================================================
	}
	const region = new Region('#country', '.result', '#city', cityArr); 						// присваеваем constructor элементы со страницы
	region.init(); 																	// вызываем инициализацию
});

// const option = document.createElement('option');
// if (valueSelect === 'rus') {
// 	region.cityElem.textContent = '';
// 	for (let i = 0; i < cityArr.rus.length; i++) {
// 		option.innerHTML = cityArr.rus[i];
// 		region.cityElem.appendChild(option.cloneNode(true));
// 	}
// 	region.resultElem.textContent =  region.countryElem.options[0].text;
// } else if (valueSelect === 'uk') {
// 	region.cityElem.textContent = '';
// 	for (let i = 0; i < cityArr.uk.length; i++) {
// 		option.innerHTML = cityArr.uk[i];
// 		region.cityElem.appendChild(option.cloneNode(true));
// 	}
// 	region.resultElem.textContent =  region.countryElem.options[1].text;

// } else if (valueSelect === 'bel') {
// 	region.cityElem.textContent = '';
// 	for (let i = 0; i < cityArr.bel.length; i++) {
// 		option.innerHTML = cityArr.bel[i];
// 		region.cityElem.appendChild(option.cloneNode(true));
// 	}
// 	let textOption = region.countryElem.options[2].text;
// 	region.resultElem.textContent =  textOption;

// } else if (valueSelect === 'jap') {
// 	region.cityElem.textContent = '';
// 	for (let i = 0; i < cityArr.jap.length; i++) {
// 		option.innerHTML = cityArr.jap[i];
// 		region.cityElem.appendChild(option.cloneNode(true));
// 	}
// 	region.resultElem.textContent =  region.countryElem.options[3].text;

// }

// function getResult(x,y){
// 	let result;
// 	result = x**y;
// 	console.log('result: степень', result);
// 	result = String(result);
// 	console.log('result: перевод в строку ', result);
// 	result = result.split('');
// 	console.log('result: разбивание на масив ', result);
// 	result = result.reduce(function (sum, current){
// 		return +sum + +current;
// 	}, 0);
// 	console.log('results: сумма его цифр ', result);
// 	return result
// }
// console.log('getResult ', getResult(4, 8))






// let aElem = document.querySelector('#a'); // 1 число
// let bElem = document.querySelector('#b');	// 2 число
// let sumElem = document.querySelector('#sum'); // сумму  a b
// let multElem = document.querySelector('#mult'); // произведение  a b
// let resElem = document.querySelector('#res'); // результат a b

// const calculator = {
// 	blocking: function(){
// 		if (aElem.value !== '' && bElem.value !== '') {
// 			sumElem.disabled = false;
// 			multElem.disabled = false;
// 		} else {
// 			resElem.disabled = true;
// 			sumElem.disabled = true;
// 			multElem.disabled = true;
// 		}
// 	},
// 	clearInput: function (){
// 		aElem.value = '';
// 		bElem.value = '';
// 	},
// 	sum: function(){
// 		resElem.value = +aElem.value + (+bElem.value);
// 		calculator.clearInput();
// 		calculator.blocking();
// 	},
// 	mult: function(){
// 		resElem.value = +aElem.value * (+bElem.value);
// 		calculator.clearInput();
// 		calculator.blocking();
// 	},
// 	show: function(){
// 		this.blocking();
// 		aElem.addEventListener('input', this.blocking);
// 		bElem.addEventListener('input', this.blocking);
// 		sumElem.addEventListener('click', this.sum);
// 		multElem.addEventListener('click', this.mult);
// 	}
// };
// calculator.show();



// const calculator = {
// 	blocking: function(){
// 		if (aElem.value !== '' && bElem.value !== '') {
// 			sumElem.disabled = false;
// 			multElem.disabled = false;
// 		} else {
// 			resElem.disabled = true;
// 			sumElem.disabled = true;
// 			multElem.disabled = true;
// 		}
// 	},
// 	clearInput: function (){
// 		aElem.value = '';
// 		bElem.value = '';
// 	},
// 	sum: function(){
// 		// sumElem.removeEventListener('click', calculator.sum);
// 		return calculator.show();
// 	},
// 	mult: function(){
// 		// multElem.removeEventListener('click', calculator.sum);
// 		return calculator.show();
// 	},
// 	show: function(aElema, bElemb, event){
// 		// event.preventDefault();
// 		resElem.value = '';
// 		aElema = +aElem.value;
// 		bElemb = +bElem.value;

// 		if (false) {
// 			resElem.value = aElema + bElemb;
// 			calculator.clearInput();
// 			calculator.blocking();
// 			return resElem;
// 		} else {
// 			resElem.value = aElema * bElemb;
// 			calculator.clearInput();
// 			calculator.blocking();
// 			console.log(resElem.value);
// 			return resElem;
// 		}

// 	}
// };
// calculator.blocking();
// sumElem.addEventListener('click', calculator.sum);
// multElem.addEventListener('click', calculator.mult);
// aElem.addEventListener('input', calculator.blocking);
// bElem.addEventListener('input', calculator.blocking);



// let calculator = {
// 	firstNumber: 0,
// 	secondNumber: 0,
// 	blocking: function(){
// 		if (aElem.value !== '' && bElem.value !== '') {
// 			sumElem.disabled = false;
// 			multElem.disabled = false;
// 		} else {
// 			resElem.disabled = true;
// 			sumElem.disabled = true;
// 			multElem.disabled = true;
// 		}
// 	},
// 	sum: function(){
// 		calculator.firstNumber = +aElem.value;
// 		calculator.secondNumber = +bElem.value;
// 		let sumFirstSecond = calculator.firstNumber + calculator.secondNumber;
// 		console.log('sum: ', sumFirstSecond);
// 		return sumFirstSecond;
// 	},
// 	mult: function(){
// 		calculator.firstNumber = +aElem.value;
// 		calculator.secondNumber = +bElem.value;
// 		let sumFirstSecond = calculator.firstNumber * calculator.secondNumber;
// 		console.log('mult: ', sumFirstSecond);
// 		return sumFirstSecond;
// 	},
// 	show: function(){
// 		let sumElemNotPressed = true;
// 		console.log('sumElemNotPressed: ', sumElemNotPressed);

// 		sumElemNotPressed = !sumElem ;
// 		console.log('sumElemNotPressed: ', sumElemNotPressed);

// 		if (!sumElemNotPressed ) {
// 			calculator.sum();
// 			console.log('sum: ', sumElemNotPressed);

// 			aElem.value = '';
// 			bElem.value = '';
// 			calculator.blocking();
// 		} else {
// 			calculator.mult();
// 			console.log('mult: ', sumElemNotPressed);

// 			aElem.value = '';
// 			bElem.value = '';
// 			calculator.blocking();

// 		}
// 	}
// };

// calculator.blocking();

// aElem.addEventListener('input', calculator.blocking);
// bElem.addEventListener('input', calculator.blocking);

// sumElem.addEventListener('click', calculator.sum);
// multElem.addEventListener('click', calculator.mult);

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

// for (let i = 0; i < myLesson.length; i++) {
// 	if (myLesson[i].type === 'basic') {
// 		myLesson[i].points /= 2;
// 	} else {
// 		myLesson.splice(i, 1);
// 		i--;
// 	}
// }

// console.log(myLesson);


// let myLesson = [
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


// 	let newMyLesson = myLesson.filter(item => item.type === 'basic').map(item => ({...item, points: item.points/2}));

// console.log('newMyLesson ', newMyLesson);
// console.log('myLesson ', myLesson);


// let ulElem = document.querySelector('ul');
// let liElem = document.querySelectorAll('li');
// let inputElem = document.querySelector('input');
// let buttonElem = document.querySelector('button');

// let buttonElemBlok = () => {
// 	buttonElem.disabled = true;
// };

// inputElem.addEventListener('input', () => {
// 	if (inputElem.value !== ''){
// 		buttonElem.disabled = false;
// 	} else{
// 		buttonElemBlok();
// 	}
// });

// buttonElem.addEventListener('click', (item ) => {
// 	let li = document.createElement('li');
// 	item = inputElem.value;
// 	li.innerHTML = `<li>${item}</li>`;
// 	ulElem.append(li);
// 	inputElem.value = '';
// 	buttonElemBlok();
// });

// buttonElemBlok();
