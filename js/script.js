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
			// присваеваем ключу addExpenses в обьекте appData  значение возможных расходов через , в нижнем регистре.
			appData.addExpenses = addExpenses.toLowerCase().split(', ');
			// присваеваем ключу deposit в обьекте appData булевое значение.
			appData.deposit = confirm( 'Есть ли у вас депозит в банке?' );
	},
	// расходы за месяц (expensesMonth)
	getExpensesMonth: function () {
		for (let i = 0; i < 2; i++){
			let sum;
			appData.expenses[i] = prompt( 'Введите обязательную статью расходов?', 'школа', 'садик' );
			while( !isNumber(sum)){
				sum = prompt( 'Во сколько это обойдется?', 5000, 3000 );
			}
			appData.expensesMonth = Number(appData.expensesMonth) + Number(sum);
		}
		console.log( appData.expenses );
		return appData.expensesMonth;
	},
	// доход за месяц минус расходы за месяц (budgetDay)
	getAccumulatedMonth: function () {
		return appData.budgetDay = appData.budget - Number( appData.expensesMonth );
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

appData.getAccumulatedMonth();

appData.getTargetMonth();

appData.getStatusIncome();





// console.clear( );
console.log( 'расходы за месяц', appData.expensesMonth );
// console.log( 'возможные расходы', appData.addExpenses.split(', '), typeof appData.addExpenses );
// console.log( appData.getTargetMonth( appData.mission, accumulatedMonth ) > 0 ? 'Цель будет достигнута ' + Math.ceil(appData.getTargetMonth(appData.mission, accumulatedMonth)) + ' месяцев'  : 'цель не будет достигнута');
console.log( 'бюджет на день', appData.budgetDay);




