"use strict";

// Восстановить порядок книг.
// Заменить картинку заднего фона на другую из папки image
// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
// Удалить рекламу со страницы
// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)
// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место

let booksElem = document.querySelector( '.books' );
let bodyElem = document.querySelector( 'body' );
let advElem = document.querySelector( '.adv' );
let bookElem = document.querySelectorAll( '.book' );
let titleElem = document.querySelectorAll('.book h2 a');
let itemsEletm2 = document.querySelectorAll('.book ul li');
let itemsEletm5 = bookElem[5].children[1].children; 
console.log('itemsEletm5: ', itemsEletm5);
let itemsEletm6 = bookElem[2].children[1].children;
console.log('itemsEletm6: ', itemsEletm6);
let itemEletm6 = document.createElement('li');

// Восстановить порядок книг.

// вариант 1 
// booksElem.append(bookElem[1]);
// booksElem.append(bookElem[0]);
// booksElem.append(bookElem[4]);
// booksElem.append(bookElem[3]);
// booksElem.append(bookElem[5]);
// booksElem.append(bookElem[2]);

// вариант 2 
booksElem.insertAdjacentElement( 'afterbegin', bookElem[1] );
bookElem[2].replaceWith( bookElem[4] );
booksElem.insertAdjacentElement( 'beforeend', bookElem[2] );

// Удалить рекламу со страницы
advElem.remove();

// Заменить картинку заднего фона на другую из папки image
bodyElem.style.backgroundImage =  'url(/image/open_book.jpg)';

// Исправить заголовок в книге 3( Получится - "Книга 3. this и Прототипы Объектов")
titleElem[4].textContent = 'Книга 3. this и Прототипы Объектов';


// Восстановить порядок глав во второй и пятой книге (внимательно инспектируйте индексы элементов, поможет dev tools)

// вариант 1
itemsEletm2[5].prepend(itemsEletm2[2]);
itemsEletm2[4].prepend(itemsEletm2[6]);
itemsEletm2[4].prepend(itemsEletm2[8]);
itemsEletm2[4].prepend(itemsEletm2[6]);

// варинт 2 лучше чем первый вариант 
itemsEletm5[1].after(itemsEletm5[9]);
itemsEletm5[2].after(itemsEletm5[4]);
itemsEletm5[3].after(itemsEletm5[5]);
itemsEletm5[8].after(itemsEletm5[6]);

// в шестой книге добавить главу “Глава 8: За пределами ES6” и поставить её в правильное место
itemEletm6.textContent = 'Глава 8: За пределами ES6'; 
console.log('itemEletm6: ', itemEletm6);
itemsEletm6[8].after(itemEletm6);
