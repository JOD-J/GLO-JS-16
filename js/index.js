"use strict";

// Кнопку "Рассчитать" через id
let start = document.getElementById('start');
// Кнопки “+” (плюс) через Tag, каждую в своей переменной
let incomePlusElem = document.getElementsByTagName('button')[0];
let expensesPlusElem = document.getElementsByTagName('button')[1];
// Чекбокс по id через querySelector
let checkboxElem = document.querySelector('#deposit-check');
// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let additionIncomeItemElem = document.querySelectorAll('.additional_income-item');
// Каждый элемент в правой части программы через класс(не через querySelector), которые имеют в имени класса "-value", начиная с class="budget_day-value" и заканчивая class="target_month-value">

// доход за месяц 
let budgetMonthElem  = document.getElementsByClassName('result-total')[0];
// Дневной бюджет
let budgetDayElem  = document.getElementsByClassName('result-total')[1];
// Расход за месяц
let expensesMonthElem = document.getElementsByClassName('result-total')[2];
// Возможные доходы
let addIncomeElem = document.getElementsByClassName('result-total')[3];
// Возможные расходы
let addExpensesElem = document.getElementsByClassName('result-total')[4];
// Накопления за период
let incomePeriodElem = document.getElementsByClassName('result-total')[5];
// Срок достижения цели в месяцах
let targetMonthElem = document.getElementsByClassName('result-total')[6];

// Оставшиеся поля через querySelector каждый в отдельную переменную:
// поля ввода (input) с левой стороны и не забудьте про range.
let salaryAmountElem  = document.querySelector('.salary-amount');
let incomeTitleElem  = document.querySelector('.income-title');
let incomeAmountElem = document.querySelector('.income-amount');
let incomeItemElem = document.querySelectorAll('.income-items');
let expensesTitleElem = document.querySelector('.expenses-title');
// let expensesAmountElem = document.querySelector('.expenses-amount');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItemElem = document.querySelector('.additional_expenses-item');
let depositAmountElem = document.querySelector('.deposit-amount');
let depositPercentElem = document.querySelector('.deposit-percent');
let targetAmountElem = document.querySelector('.target-amount');
let periodSelectElem = document.querySelector('.period-select');
let periodAmountElem = document.querySelector('.period-amount');

// проверка на число 
let isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
// проверка на строку
let isStr = function(n) {
	return (typeof n === "string" && !parseFloat(n) && n !== null);
};

let appData = {
	 // сумма доп доходов за месяц.
	incomeMonth: 0,
	// дополнительные доходы обьект.
	income: {},
	// перечелсенние дополнительных доходов масив.
	addIncome: [],
	// дополнительные рассходы обьект.
	expenses: {},
	// возможные рассходы масив.
	addExpenses: [],
	//  депозит в банке.
	deposit: false,
	// процент депозита
	percentDeposit: 0,
	// сколько человек денег заложил
	moneyDeposit: 0,
	// доход за месяц 
	budget: 0, 
	// бюджет на день в зависемости от дохода и расходов.
	budgetDay: 0, 
	// бюджет на месяц
	budgetMonth: 0, 
	// расходы за месяц 
	expensesMonth: 0, 
	// расчет всего 
	start: function () {
		appData.budget = +salaryAmountElem.value;
		appData.getExpenses();
		appData.getBudget();
		appData.getExpensesMonth();
		appData.getAddExpenses();
		appData.getAddIncome();
		appData.getIncome();
		appData.showResult();
	},
	// поля данных 
	showResult: function () {
		periodSelectElem.addEventListener( 'input', function() {
			incomePeriodElem.value = appData.calcSavedMoney();
		});
		budgetMonthElem.value = appData.budgetMonth;
		budgetDayElem.value = Math.ceil(appData.budgetDay);
		expensesMonthElem.value = appData.expensesMonth;
		addExpensesElem.value = appData.addExpenses.join(', ');
		addIncomeElem.value = appData.addIncome.join(', ');
		targetMonthElem.value = Math.ceil(appData.getTargetMonth());
		incomePeriodElem.value = appData.calcSavedMoney();
		
	},
	// добавление дополнительных полей обязательных расходров
	addExpensesBlock: function () {
		let cloneExpensesItem = expensesItems[0].cloneNode(true);
		expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlusElem );
		expensesItems = document.querySelectorAll('.expenses-items');
		if ( expensesItems.length === 3) {
			expensesPlusElem.style.display = 'none';
		}
	},
	// добавление дополнительных полей доходов
	addIncomeBlock() {
		let cloneIncomeItems = incomeItemElem[0].cloneNode(true);
		incomeItemElem[0].parentNode.insertBefore(cloneIncomeItems, incomePlusElem);
		incomeItemElem = document.querySelectorAll('.income-items');
		if (incomeItemElem.length === 3) {
			incomePlusElem.style.display = 'none';
		}
	},
	 // получение списка обязательных расходов
	getExpenses: function () {
		expensesItems.forEach(function(item) {
			let itemExpenses = item.querySelector('.expenses-title').value;
			let cashExpenses = item.querySelector('.expenses-amount').value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses] = cashExpenses;
			}
		});
	},
	// получение списка дополнительного источника заработка
	getIncome: function () {
		incomeItemElem.forEach(function(item) {
			let itemIncome = item.querySelector('.income-title').value;
			let cashIncome = item.querySelector('.income-amount').value;
			if (itemIncome !== '' && cashIncome !== '') {
				appData.income[itemIncome] = cashIncome;
			}
		});
		for (let key in appData.income) {
			appData.incomeMonth += +appData.income[key];
		}
	},
	getAddExpenses: function () {
		let addExpenses = additionalExpensesItemElem.value.split(', ');
		addExpenses.forEach(function(item) {
			item = item.trim();
			if (item !== '') {
				appData.addExpenses.push(item);
			}
		});
	},
	getAddIncome: function () {
		additionIncomeItemElem.forEach(function(item) {
			let itemVaule = item.value.trim();
			if ( itemVaule !== '' ) {
				appData.addIncome.push(itemVaule);
			}
		});
	},
	// расходы за месяц (expensesMonth)
	getExpensesMonth: function () {
		for (let key in appData.expenses){
			appData.expensesMonth +=  +appData.expenses[key];
		}
		return appData.expensesMonth;
	},
	// доход за месяц минус расходы за месяц (budgetDay)
	getBudget: function () {
		appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		appData.budgetDay = appData.budgetMonth / 30;
	},
	// за сколько месяцев будет достигнута цель 
	getTargetMonth: function () {
		return targetAmountElem.value / appData.budgetMonth;
	},
	// уровень дохода 
	// getStatusIncome: function() {
	// 	if (appData.budgetDay >= 1200) {
	// 	console.log( 'У вас высокий уровень дохода' ) ;
	// 	} else if (appData.budgetDay < 1200, appData.budgetDay >= 600) {
	// 		console.log( 'У вас средний уровень дохода' );
	// 	} else if (appData.budgetDay < 600, appData.budgetDay >= 0) {
	// 		console.log( 'К сожалению у вас уровень дохода ниже среднего' );
	// 	} else {
	// 		console.log( 'Что то пошло не так' );
	// 	} 	
	// },
	// годовой процент , сумма заложенных денег 
	// getInfoDeposit: function () {
	// 	if (appData.deposit) {
	// 		do {
	// 			appData.percentDeposit = prompt( 'какой годовой процент?', '10');
	// 		} while( !isNumber( appData.percentDeposit ));
	// 		do {
	// 			appData.moneyDeposit = prompt( 'какая сумма заложенна', 10000);
	// 		} while( !isNumber( appData.moneyDeposit ));
	// 	}
	// },
	// сколько денег мы заработаем за период 
	calcSavedMoney: function () {
		return appData.budgetMonth * periodSelectElem.value;
	},
	// привидение первой буквы к большой остальное к нижней 
	getAddExpensess(){
	appData.addExpenses = appData.addExpenses.map(function(item) {
		let transformations = item.toLowerCase();
		let theFirst = transformations.slice(0, 1).toUpperCase();
		let remainder = transformations.slice(1);
		return theFirst + remainder;
	});
	}
};

start.disabled = true;

salaryAmountElem.addEventListener('input', function () {
	if (salaryAmountElem.value !== '') {
		start.disabled = false;
    } else {
        start.disabled = true;
	}
});

start.addEventListener('click', appData.start);

expensesPlusElem.addEventListener('click', appData.addExpensesBlock);
incomePlusElem.addEventListener('click', appData.addIncomeBlock);

periodSelectElem.addEventListener('input', function () {
	periodAmountElem.textContent = periodSelectElem.value;
});



// console.clear();
// console.log( 'расходы за месяц ', appData.expensesMonth );
// console.log( appData.getTargetMonth() > 0 ? 'Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев'  : 'цель не будет достигнута');
// console.log( 'бюджет на день', Math.ceil(appData.budgetDay));

// console.clear();
// for ( let key in appData ) {
// 	console.log( 'Наша программа включает в себя данные: ' + key );
// }
appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

// console.log(appData.addExpenses.join(', '));