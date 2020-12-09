"use strict";

let start = document.getElementById('start'),	// кнопка расчитать 
	cancel = document.getElementById('cancel');	// кнопка сбросить

let incomePlusElem = document.getElementsByTagName('button')[0], // кнопка плюсь для Дополнительный доход
	expensesPlusElem = document.getElementsByTagName('button')[1];	// кнопка плюсь для Обязательные расходы

let checkboxElem = document.querySelector('#deposit-check');	// Чекбокс по id через querySelector

// поля ввода (input) с правой стороны
let budgetMonthElem = document.getElementsByClassName('result-total')[0],	// инпут доход за месяц (число)
	budgetDayElem = document.getElementsByClassName('result-total')[1],		// инпут Дневной бюджет (число)
	expensesMonthElem = document.getElementsByClassName('result-total')[2],	// инпут Расход за месяц (число)
	addIncomeElem = document.getElementsByClassName('result-total')[3],		// инпут Возможные доходы (строка)
	addExpensesElem = document.getElementsByClassName('result-total')[4],	// инпут Возможные расходы (строка)
	incomePeriodElem = document.getElementsByClassName('result-total')[5],	// инпут Накопления за период (число)
	targetMonthElem = document.getElementsByClassName('result-total')[6];	// инпут Срок достижения цели в месяцах (число)

// поля ввода (input) с левой стороны
let salaryAmountElem = document.querySelector('.salary-amount'), 	// инпут месячный доход (число)
	incomeAmountElem = document.querySelector('.income-amount'),	// инпут дополнительный доход (число)
	expensesAmountElem = document.querySelector('.expenses-amount'),// инпут обязательныйе расходы (число)
	targetAmountElem = document.querySelector('.target-amount'),	// инпут цель (число)
	
	incomeTitleElem = document.querySelector('.income-title'),		// инпут Дополнительный доход (строка)
	expensesTitleElem = document.querySelector('.expenses-title'),	// инпут Обязательные расходы (строка)
	additionalExpensesItemElem = document.querySelector('.additional_expenses-item'),	// инпут Возможные расходы (строка)
	additionIncomeItemElem = document.querySelectorAll('.additional_income-item'),	// инпут возможный доход (строка)

	periodAmountElem = document.querySelector('.period-amount'),	// период расчета ДИВ значение меняется при изменение инпута
	periodSelectElem = document.querySelector('.period-select'),	// инпут периода расчета 

	incomeItemsElem = document.querySelectorAll('.income-items'),	// дополнительный доход ДИВ для добовление новых инпутов
	expensesItemsElem = document.querySelectorAll('.expenses-items');	// Обязательные расходы ДИВ для добовление новых инпутов

// проверка на число 
let isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

// проверка на строку
let isStr = function(n) {
	return (typeof n === "string" && !parseFloat(n) && n !== null);
};

//  конструктор AppData
let AppData = function() {

	this.incomeMonth = 0;	// сумма доп доходов за месяц.
	this.income = {};		// дополнительные доходы обьект.
	this.addIncome = [];	// перечелсенние дополнительных доходов масив.
	this.expenses = {};		// дополнительные рассходы обьект.
	this.addExpenses = [];	// возможные рассходы масив.
	this.deposit = false;	// депозит в банке.
	this.percentDeposit = 0;// процент депозита
	this.moneyDeposit = 0;	// сколько человек денег заложил
	this.budget = 0;		// доход за месяц 
	this.budgetDay = 0;		// бюджет на день в зависемости от дохода и расходов.
	this.budgetMonth = 0;	// бюджет на месяц
	this.expensesMonth = 0;	// расходы за месяц 

};

AppData.prototype.start = function () {
	this.budget = +salaryAmountElem.value;
	this.getExpenses();
	this.getBudget();
	this.getExpensesMonth();
	this.getAddExpenses();
	this.getAddIncome();
	this.getIncome();
	this.showResult();

	//  блокируем все input[type=text] 
	let  input = document.querySelectorAll('input[type=text]');
	input.forEach(function (item) {
		item.disabled = true;	 // блокировка всех инпутов
	});
	start.style.display = 'none';	// кнопка старт пропадает 
	cancel.style.display = 'block'; // кнопка расчитать появляется 
	expensesPlusElem.style.display = 'none';	// убираем кнопку плюс 
	incomePlusElem.style.display = 'none';		// убираем кнопку плюс 
};

// сброс всей программы 
AppData.prototype.reset = function () {
	// разблокируем все input[type=text] 
	let  input = document.querySelectorAll('input[type=text]');
	input.forEach(function (item) {
		item.disabled = false;	// сброс  блокировки всех инпутов
		item.value = '';		// очистка всех инпутов 
	});
	
	periodSelectElem.value = 1;			// сброс периода расчета в левом поле инпут
	periodAmountElem.textContent = '1';	// сброс периода расчета в левом поле текст
	cancel.style.display = 'none';		// кнопка сбросить пропадет 
	start.style.display = 'block'; 		// кнопка старт появляется 
	start.disabled = true;				// сброс  блокировки всех инпутов
	expensesPlusElem.style.display = 'block';	// возвращаем кнопки плюс 
	incomePlusElem.style.display = 'block';		// возвращаем кнопки плюс 

	// циклами удаляем  Обязательные расходы блоки ДИВ для добовление новых инпутов
	for (let i = expensesItemsElem.length - 1; i > 0 ; i--){
		expensesItemsElem[i].remove();
	}
	// циклами удаляем  дополнительный доход блоки ДИВ для добовление новых инпутов
	for (let i = incomeItemsElem.length - 1; i > 0 ; i--){
		incomeItemsElem[i].remove();
	}
	
	// возвращаем все ключи в обект в исходное положение 
	this.incomeMonth = 0;
	this.income = {};
	this.addIncome = [];
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
	this.expensesMonth = 0;
};

// поля данных 
AppData.prototype.showResult = function () {
	let _this = this;
	periodSelectElem.addEventListener( 'input', function() {
		incomePeriodElem.value = _this.calcSavedMoney();	// динамическое изменение инпут Накопления за период
	});
	budgetMonthElem.value = this.budgetMonth;
	budgetDayElem.value = Math.ceil(this.budgetDay);
	expensesMonthElem.value = this.expensesMonth;
	addExpensesElem.value = this.addExpenses.join(', ');
	addIncomeElem.value = this.addIncome.join(', ');
	targetMonthElem.value = Math.ceil(this.getTargetMonth());
	incomePeriodElem.value = this.calcSavedMoney();
	
};

// добавление дополнительных полей обязательных расходров
AppData.prototype.addExpensesBlock = function () {
	let cloneExpensesItem = expensesItemsElem[0].cloneNode(true);
	expensesItemsElem[0].parentNode.insertBefore(cloneExpensesItem, expensesPlusElem );
	expensesItemsElem = document.querySelectorAll('.expenses-items');
	if ( expensesItemsElem.length === 3) {
		expensesPlusElem.style.display = 'none';
	}
};

// добавление дополнительных полей доходов
AppData.prototype.addIncomeBlock = function () {
	let cloneIncomeItems = incomeItemsElem[0].cloneNode(true);
	incomeItemsElem[0].parentNode.insertBefore(cloneIncomeItems, incomePlusElem);
	incomeItemsElem = document.querySelectorAll('.income-items');
	if (incomeItemsElem.length === 3) {
		incomePlusElem.style.display = 'none';
	}
};

 // получение списка обязательных расходов
AppData.prototype.getExpenses = function () {
	let _this = this;
	expensesItemsElem.forEach(function(item) {
		let itemExpenses = item.querySelector('.expenses-title').value;
		let cashExpenses = item.querySelector('.expenses-amount').value;
		if (itemExpenses !== '' && cashExpenses !== '') {
			_this.expenses[itemExpenses] = cashExpenses;
		}
	});
};

// получение списка дополнительного источника заработка
AppData.prototype.getIncome = function () {
	let _this = this;
	incomeItemsElem.forEach(function(item) {
		let itemIncome = item.querySelector('.income-title').value;
		let cashIncome = item.querySelector('.income-amount').value;
		if (itemIncome !== '' && cashIncome !== '') {
			_this.income[itemIncome] = cashIncome;
		}
	});
	for (let key in this.income) {
		this.incomeMonth += +this.income[key];
	}
};
// значение additionalExpensesItemElem разбивает на масив через метод split через запятую и присваеваеться переменной addExpenses через forEach перебераем масив addExpenses item – очередной элемент массива через метод trim удаляет  пробельные символы с обоих концов строки и через условие если item – очередной элемент массива не пустая строка то пушим в обьект appData методом push в конец масива 
AppData.prototype.getAddExpenses = function () {
	let _this = this;
	let addExpenses = additionalExpensesItemElem.value.split(', ');
	addExpenses.forEach(function(item) {
		item = item.trim();
		if (item !== '') {
			_this.addExpenses.push(item);
		}
	});
};

AppData.prototype.getAddIncome = function () {
	let _this = this;

	additionIncomeItemElem.forEach(function(item) {
		let itemVaule = item.value.trim();
		if ( itemVaule !== '' ) {
			_this.addIncome.push(itemVaule);
		}
	});
};

// расходы за месяц (expensesMonth)
AppData.prototype.getExpensesMonth = function () {
	for (let key in this.expenses){
		this.expensesMonth +=  +this.expenses[key];
	}
	return this.expensesMonth;
};

// доход за месяц минус расходы за месяц (budgetDay)
AppData.prototype.getBudget = function () {
	this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
	this.budgetDay = this.budgetMonth / 30;
};

// за сколько месяцев будет достигнута цель 
AppData.prototype.getTargetMonth = function () {
	return targetAmountElem.value / this.budgetMonth;
};

// сколько денег мы заработаем за период 
AppData.prototype.calcSavedMoney = function () {
	return this.budgetMonth * periodSelectElem.value;
};


AppData.prototype.eventsListeners = function () {

	start.disabled = true; // блокировка кнопки старт

	// разблокирвока кнопки старт при условии salaryAmountElem (Месячный доход*) не пустая строка 
	salaryAmountElem.addEventListener('input', function () {
		if (salaryAmountElem.value !== '') {
			start.disabled = false;
		} else {
			start.disabled = true;
		}
	});

	// на кнопку старт навешиваем слушатель клик, вызываем функцию start обьекта appData привязываем контекст this с помощью bind для обьекта appData
	start.addEventListener('click', this.start.bind(appData));

	// на кнопку сбросить навешиваем слушатель клик, вызываем функцию reset обьекта appData привязываем контекст this с помощью bind для обьекта appData
	cancel.addEventListener('click', this.reset.bind(appData));

	// на кнопку + expensesPlusElem навешиваем слушатель клик, вызываем функцию addExpensesBlock обьекта appData 
	expensesPlusElem.addEventListener('click', this.addExpensesBlock); // Обязательные расходы ДИВ для добовление новых инпутов

	// на кнопку + incomePlusElem навешиваем слушатель клик, вызываем функцию addIncomeBlock обьекта appData 
	incomePlusElem.addEventListener('click', this.addIncomeBlock);	// дополнительный доход ДИВ для добовление новых инпутов

	// динамическое изменение инпута период расчета 
	periodSelectElem.addEventListener('input', function () {
		periodAmountElem.textContent = periodSelectElem.value;
});
};

let appData = new AppData();

appData.eventsListeners();


