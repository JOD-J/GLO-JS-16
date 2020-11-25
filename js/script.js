"use strict";


// задание - money - любое число “Доход за месяц”
// создаем переменную let имя переменной money значение 30000 тип данных number
let money = 30000;
// задание - income - строка с дополнительными доходом
// создаем переменную let имя переменной income значение 'Продажа шоколада' тип данных string
let income = 'Продажа шоколада';
// задание - addExpenses - строка с перечислением дополнительных расходов через запятую
// создаем переменную let имя переменной addExpenses значение 'Телефон, Интернет, Комуналка' тип данных string
let addExpenses = 'Телефон, Интернет, Комуналка';
// задание - deposit - любое булево значение,
// создаем переменную let имя переменной deposit значение true тип данных boolean
let deposit = true;
//  задание - mission - любое число
// создаем переменную let имя переменной mission значение 100 тип данных number
let mission = 800000;
//  задание - period - число от 1 до 12 (месяцев)
// создаем переменную let имя переменной period значение 6 тип данных number
let period = 6;


// задание - Вывести в консоль тип данных значений переменных money, income, deposit;
// выводим в консоль money через оператор typeof получаем тип данных 
console.log( typeof money );
// выводим в консоль income через оператор typeof получаем тип данных 
console.log( typeof income );
// выводим в консоль deposit через оператор typeof получаем тип данных 
console.log( typeof deposit );


// задание - Вывести в консоль длину строки addExpenses
// выводим в консоль addExpenses через свойство length узнаем длину переменной 
console.log(addExpenses.length);


// задание - Вывести в консоль “Период равен (period) месяцев” и “Цель заработать (mission) рублей/долларов/гривен/юани”
// выводим в консоль period со строками 'Период равен ' оператором + ' месяцев' происходит конкатенации (сложения) строк
console.log( 'Период равен ' + (period) + ' месяцев' );
// выводим в консоль mission со строками 'Цель зарабатывать ' оператором + 'долларов' происходит конкатенации (сложения) строк
console.log( 'Цель зарабатывать ' + (mission) + ' долларов' );


// задание - Привести строку addExpenses к нижнему регистру и разбить строку на массив, вывести массив в консоль
// выводим в консоль addExpenses через метод toLowerCase Преобразует все буквы в строке к нижнему регистру.
// так же через точку методом split преообразуем тип данных из стринг в масив 
console.log(addExpenses.toLowerCase().split(', '));



// задание - Объявить переменную budgetDay и присвоить дневной бюджет (доход за месяц / 30)
// создаем переменную let имя переменной budgetDay значение money / 30 переменную money оператором / 30 получаем дневной бюджет
let budgetDay = money / 30;

// задание - Вывести в консоль budgetDay
// выводим в консоль budgetDay 
console.log( budgetDay );


// lesson03lesson03lesson03lesson03lesson03lesson03lesson03lesson03lesson03lesson03lesson03lesson03lesson03

// 1) задание - Весь функционал что был ранее оставляем, если что то необходимо удалить, об этом будет написано в задании


// 2) задание - Спрашиваем у пользователя “Ваш месячный доход?” и результат сохраняем в переменную money
// создаем переменную let имя переменной userMoney значение через методм prompt спрашиваем Ваш месячный доход?
money = prompt( 'Ваш месячный доход?' );
// выводим в консоль переменную money проверяем присвоение значение userMoney
console.log( 'money:', money );


// 3) задание - Спросить у пользователя “Перечислите возможные расходы за рассчитываемый период через запятую” сохранить в переменную addExpenses (пример: "Квартплата, проездной, кредит")
// создаем переменную let имя переменной userAddExpenses значение через методм prompt спрашиваем возможные расходы за рассчитываемый период
addExpenses = prompt( 'Перечислите возможные расходы за рассчитываемый период через запятую' );
// выводим в консоль переменную addExpenses проверяем присвоение значение userAddExpenses
console.log( 'addExpenses:', addExpenses );


// 4) задание - Спросить у пользователя “Есть ли у вас депозит в банке?” и сохранить данные в переменной deposit (булево значение true/false)
// создаем переменную let имя переменной userDeposit значение через методм confirm спрашиваем Есть ли у вас депозит в банке?
deposit = confirm( 'Есть ли у вас депозит в банке?' );
// выводим в консоль переменную deposit проверяем присвоение значение userDeposit
console.log( 'deposit:', deposit );


// 5) задание - Спросить у пользователя по 2 раза каждый вопрос и записать ответы в разные переменные 
// “Введите обязательную статью расходов?” (например expenses1, expenses2)
// “Во сколько это обойдется?” (например amount1, amount2)
// в итоге 4 вопроса и 4 разные переменных
// создаем переменную let имя переменной expenses1 значение через методм prompt спрашиваем Введите обязательную статью расходов?
let expenses1 = prompt( 'Введите обязательную статью расходов?' );
// выводим в консоль переменную expenses1 проверяем присвоение значение 
console.log( 'expenses1:', expenses1 );

// создаем переменную let имя переменной expenses2 значение через методм prompt Введите обязательную статью расходов?
let expenses2 = prompt( 'Введите обязательную статью расходов?' );
// выводим в консоль переменную expenses2 проверяем присвоение значение 
console.log( 'expenses2:', expenses2 );

// создаем переменную let имя переменной amount1 значение через методм prompt спрашиваем Во сколько это обойдется?
let amount1 = prompt( 'Во сколько это обойдется?' );
// выводим в консоль переменную amount1 проверяем присвоение значение 
console.log( 'amount1:', amount1 );

// создаем переменную let имя переменной amount2 значение через методм prompt спрашиваем Во сколько это обойдется?
let amount2 = prompt( 'Во сколько это обойдется?' );
// выводим в консоль переменную amount2 проверяем присвоение значение 
console.log( 'amount2:', amount2 );


// 9) задание - Написать конструкцию условий (расчеты приведены в рублях)	
// Если budgetDay больше 1200, то “У вас высокий уровень дохода”
// Если budgetDay больше 600 и меньше 1200, то сообщение “У вас средний уровень дохода”
// Если budgetDay меньше 600 и больше 0 то в консоль вывести сообщение “К сожалению у вас уровень дохода ниже среднего”
// Если отрицательное значение то вывести “Что то пошло не так”
// Учесть варианты 0, 600 и 1200 (к какому уровню не важно)
//  создаем условия if для переменной budgetDay в () у нас выполняеться услвоия если оно истина-true то в консоль выведиться соответствующей текст если услвоие ложь-false то будет выполняться следующий участок кода.

let getStatusIncome = function( budgetDay ){
	if (  budgetDay >= 1200 ){
		console.log( 'У вас высокий уровень дохода' );
	}	else if( budgetDay < 1200, budgetDay >= 600 ){
		console.log( 'У вас средний уровень дохода' );
	}	else if( budgetDay < 600, budgetDay >= 0  ){
		console.log( 'К сожалению у вас уровень дохода ниже среднего' );
	}	else {
		console.log( 'Что то пошло не так' );
	}
};


// lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04lesson04



// 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
// mission = 800000;
// money = '50000';
// amount1 = '3424';
// amount2 = '12321';
let getExpensesMonth = function ( amount1, amount2 ){
	return Number( amount1 ) + Number( amount2 );
};
console.log( getExpensesMonth( amount1, amount2 ) );


// 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
let getAccumulatedMonth = function ( money,  getExpensesMonth ){
	return Number( money ) - Number( getExpensesMonth );
};
console.log( getAccumulatedMonth( money, getExpensesMonth( amount1, amount2) ) );


// 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth( money, getExpensesMonth( amount1, amount2 ) ); 


// 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
let getTargetMonth = function( mission, accumulatedMonth ) {
	return mission / accumulatedMonth;
};
console.log( getTargetMonth(  mission, accumulatedMonth ));


// 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
budgetDay = Math.ceil(accumulatedMonth / 30);
console.log( budgetDay );

// 7) Почистить консоль логи и добавить недостающие, должны остаться:
//  - вызовы функции showTypeOf
//  - Расходы за месяц вызов getExpensesMonth
//  - Вывод возможных расходов в виде массива (addExpenses)
//  - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
//  - Бюджет на день (budgetDay)
//  - вызов функции getStatusIncome

console.clear( );
console.log( 'расходы за месяц', getExpensesMonth( amount1, amount2 ), typeof getExpensesMonth( amount1, amount2 ) );
console.log( 'возможные расходы', addExpenses.split(', '), typeof addExpenses );
console.log( 'цель будет достигнута за ', getTargetMonth( mission, accumulatedMonth ), 'месяцев'  , typeof getTargetMonth( mission, accumulatedMonth ) );
console.log( 'бюджет на день', budgetDay, typeof budgetDay );
getStatusIncome();
