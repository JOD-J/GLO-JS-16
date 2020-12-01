
// Кнопку "Рассчитать" через id
let calculateElem = document.getElementById('start');
// Кнопки “+” (плюс) через Tag, каждую в своей переменной
let plus1Elem = document.getElementsByTagName('button')[0];
let plus2Elem = document.getElementsByTagName('button')[1];
// Чекбокс по id через querySelector
let checkboxElem = document.querySelector('#deposit-check');
// Поля для ввода возможных доходов (additional_income-item) при помощи querySelectorAll
let addIncomeAllElem = document.querySelectorAll('additional_income-item');
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
let expensesTitleElem = document.querySelector('.expenses-title');
let expensesAmountElem = document.querySelector('.expenses-amount');
let additionalExpensesItemElem = document.querySelector('.additional_expenses-item');
let depositAmountElem = document.querySelector('.deposit-amount');
let depositPercentElem = document.querySelector('.deposit-percent');
let targetAmountElem = document.querySelector('.target-amount');
let periodSelectElem = document.querySelector('.period-select');

