"use strict";

let isNumber = function(n){
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let start = function(){
	do {
		money = prompt( 'Ваш месячный доход?' );
	} while( !isNumber( money ));
};
start();

let appData = {
	income: {},
	addincome: [],
	expenses: {},
	addExpenses: [],
	deposit: false,
	mission: 50000,
	period: 6,
	expensesAmount: 0,
	budget: money, 
	budgetDay: 0, 
	budgetMonth: 0, 
	expensesMonth: 0, 
	asking: function(){
		let addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
			appData.addExpenses = addExpenses.toLowerCase().split(', ');
			appData.deposit = confirm( 'Есть ли у вас депозит в банке?' );
	}
};



let budgetDay = money / 30;
console.log( budgetDay );





let expenses = [];
let getExpensesMonth = function (){
	for (let i = 0; i < 2; i++){
		let sum;
		expenses[i] = prompt( 'Введите обязательную статью расходов?' );
		while( !isNumber(sum)){
			sum = prompt( 'Во сколько это обойдется?' );
		}
		expensesAmount = Number(expensesAmount) + Number(sum);
	}
	console.log( expenses );
	return expensesAmount;
};

let getAccumulatedMonth = function ( money,  getExpensesMonth ){
	return Number( money ) - Number( getExpensesMonth );
};

let accumulatedMonth = getAccumulatedMonth( money, expensesAmount ); 

let getTargetMonth = function( mission, accumulatedMonth ) {
	return mission / accumulatedMonth;
};
console.log( getTargetMonth(  mission, accumulatedMonth ));

budgetDay = Math.ceil(accumulatedMonth / 30);
console.log( budgetDay );


let getStatusIncome = function() {
	if (budgetDay >= 1200) {
	console.log('У вас высокий уровень дохода') ;
	} else if (budgetDay < 1200, budgetDay >= 600) {
		console.log( 'У вас средний уровень дохода' );
	} else if (budgetDay < 600, budgetDay >= 0) {
		console.log('К сожалению у вас уровень дохода ниже среднего');
	} else {
		console.log('Что то пошло не так');
	} 	
};

console.clear( );
console.log( 'расходы за месяц', expensesAmount, typeof expensesAmount );
console.log( 'возможные расходы', addExpenses.split(', '), typeof addExpenses );
console.log( getTargetMonth( mission, accumulatedMonth ) > 0 ? 'Цель будет достигнута ' + Math.ceil(getTargetMonth(mission, accumulatedMonth)) + ' месяцев'  : 'цель не будет достигнута');
console.log( 'бюджет на день', budgetDay);
getStatusIncome();



