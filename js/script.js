"use strict";

let isNumber = function(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function(){
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
		// 
		let addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
			// присваеваем свойства  addExpenses в обьекте appData  значение возможных расходов через , в нижнем регистре.
			appData.addExpenses = addExpenses.toLowerCase().split(', ');
			// присваеваем свойства  deposit в обьекте appData булевое значение.
			appData.deposit = confirm( 'Есть ли у вас депозит в банке?' );
			// 
			for (let i = 0; i < 2; i++) {
				let sum;
				let expenses = prompt( 'Введите обязательную статью расходов?', 'школа' );
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
	// за какой период будет достигнута цель (period)
	getTargetMonth: function () {
		return appData.period = appData.budget / appData.budgetDay;
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
	}
};
appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();

console.clear();
console.log( 'расходы за месяц ', appData.expensesMonth );
console.log( appData.getTargetMonth() > 0 ? 'Цель будет достигнута за ' + Math.ceil(appData.getTargetMonth()) + ' месяцев'  : 'цель не будет достигнута');
console.log( 'бюджет на день', Math.ceil(appData.budgetDay));

console.clear();
for ( let key in appData ) {
	console.log( 'Наша программа включает в себя данные: ' + key );
}

