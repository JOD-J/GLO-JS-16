"use strict";
// проверка на число 
let isNumber = function(n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
// проверка на строку
let isStr = function(n) {
	return (typeof n === "string" && !parseFloat(n) && n !== null);
};
let money;
let start = function() {
	do {
		money = prompt( 'Ваш месячный доход?', 50000 );
	} while( !isNumber( money ));
};
start();

let appData = {
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
	// цель денег.
	mission: 650555,
	// за сколько хотим достичь этой цели.
	period: 6,
	// доход за месяц 
	budget: money, 
	// бюджет на день в зависемости от дохода и расходов.
	budgetDay: 0, 
	// бюджет на месяц
	budgetMonth: 0, 
	// расходы за месяц 
	expensesMonth: 0, 

	asking: function () {
		if (confirm( 'есть ли у вас дополнительный заработок?' )) {
			let itemIncome;
			let cashIncome;
			do {
				itemIncome = prompt( 'какой у вас дополнительный заработок?', 'таксую' );
			} while( !isStr( itemIncome ));
			do {
				cashIncome = prompt( 'сколько в месяц вы на этом зарабатываете', 5000);
			} while( !isNumber( cashIncome ));
			appData.income[itemIncome]= cashIncome;
		} 
		let addExpenses;
		do {
			addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
		} while( !isStr( addExpenses ));
		// присваеваем свойства  addExpenses в обьекте appData  значение возможных расходов через , в нижнем регистре.
		appData.addExpenses = addExpenses.toLowerCase().split(', ');
		// присваеваем свойства  deposit в обьекте appData булевое значение.
		appData.deposit = confirm( 'Есть ли у вас депозит в банке?' );
		// 
		for (let i = 0; i < 2; i++) {
			let sum;
			let expenses;
			do {
				expenses = prompt( 'Введите обязательную статью расходов?', 'школа' );
			} while( !isStr( expenses ));
			while( !isNumber(sum)) {
				sum = prompt( 'Во сколько это обойдется?', 5000);
			}
			appData.expenses[expenses] = +sum ;
		}
		console.log( appData.expenses );
	},
	// расходы за месяц (expensesMonth)
	getExpensesMonth: function () {
		for (let key in appData.expenses){
			appData.expensesMonth +=  appData.expenses[key];
		}
		console.log( 'appData.expensesMonth ' + appData.expensesMonth);
		return appData.expensesMonth;
	},
	// доход за месяц минус расходы за месяц (budgetDay)
	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = appData.budgetMonth / 30;
	},
	// за сколько месяцев будет достигнута цель 
	getTargetMonth: function () {
		return appData.mission / appData.budgetMonth;
	},
	// уровень дохода 
	getStatusIncome: function() {
		if (appData.budgetDay >= 1200) {
		console.log( 'У вас высокий уровень дохода' ) ;
		} else if (appData.budgetDay < 1200, appData.budgetDay >= 600) {
			console.log( 'У вас средний уровень дохода' );
		} else if (appData.budgetDay < 600, appData.budgetDay >= 0) {
			console.log( 'К сожалению у вас уровень дохода ниже среднего' );
		} else {
			console.log( 'Что то пошло не так' );
		} 	
	},
	// годовой процент , сумма заложенных денег 
	getInfoDeposit: function () {
		if (appData.deposit) {
			do {
				appData.percentDeposit = prompt( 'какой годовой процент?', '10');
			} while( !isNumber( appData.percentDeposit ));
			do {
				appData.moneyDeposit = prompt( 'какая сумма заложенна', 10000);
			} while( !isNumber( appData.moneyDeposit ));
		}
	},
	// сколько денег мы заработаем за период 
	calcSavedMoney: function () {
		return appData.budgetMonth * appData.period;
	},
	// привидение первой буквы к большой остальное к нижней 
	getAddExpenses(){
        appData.addExpenses = appData.addExpenses.map(function(item) {
			let transformations = item.toLowerCase();
			let theFirst = transformations.slice(0, 1).toUpperCase();
			let remainder = transformations.slice(1);
            return theFirst + remainder;
        });
    }
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getAddExpenses();

// console.clear();
console.log( 'расходы за месяц ', appData.expensesMonth );
console.log( appData.getTargetMonth() > 0 ? 'Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев'  : 'цель не будет достигнута');
console.log( 'бюджет на день', Math.ceil(appData.budgetDay));

// console.clear();
for ( let key in appData ) {
	console.log( 'Наша программа включает в себя данные: ' + key );
}
appData.getInfoDeposit()
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

console.log(appData.addExpenses.join(', '));
