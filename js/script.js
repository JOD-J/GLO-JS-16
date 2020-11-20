"use strict";
// - money - любое число “Доход за месяц”,
let money = 30;
// - income - строка с дополнительными доходом
let income = 'Продажа шоколада';
//  - addExpenses - строка с перечислением дополнительных расходов через запятую
let addExpenses = 'Телефон, Интернет, Комуналка';
// - deposit - любое булево значение,
let deposit = true;
//   - mission - любое число
let mission = 100;
//  - period - число от 1 до 12 (месяцев)
let period = 6;

// - Вывести в консоль тип данных значений переменных money, income, deposit;
console.log( typeof money );
console.log( typeof income );
console.log( typeof deposit );

// - Вывести в консоль длину строки addExpenses
console.log(addExpenses.length);

//   - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
console.log( 'Период равен ' + (period) + ' месяцев' );
console.log( 'Цель зарабатывать ' + (mission) + ' долларов' );

//    - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));


//  - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
let budgetDay = 30

// - Вывести в консоль budgetDay
console.log( budgetDay );