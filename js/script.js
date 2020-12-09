"use strict";

//  функция конструктор описание сущности 
function DomElement (selector, height, width, bg, fontSize, text) {
	this.selector = selector;	// создание блока в зависемости от условия . #
	this.height = height;		// высота 
	this.width = width;			// ширина
	this.bg = bg;				// задний фон 
	this.fontSize = fontSize;	// размер шрифта
	this.text = text;			// текст внутри блока
}

// обращаясь к DomElement создаем новый обьект через метод prototype на основе DomElement(является прототипом самому себе) через метод createElement создаем верстку при условиях 
DomElement.prototype.createElement = function () {
	let Elem;

	// в условие если в конструкторе парметр selector через метод slice начиная с 0 индекса по 1 равне .
    if (this.selector.slice(0, 1) === '.') { 
		Elem = document.createElement('div');	// создаем на странице тег див 
		Elem.id = this.selector.slice(1);		// в атрибуте присваева id 
		
		// в условие если в конструкторе парметр selector через метод slice начиная с 0 индекса по 1 равне #
    } else if (this.selector.slice(0, 1) === '#') { 
        Elem = document.createElement('p');		// создаем на странице параграф 
        Elem.className = this.selector.slice(1);	// в атрибуте присваева className 
	}
	
    //с помощью cssText задавать стили: 
	if (Elem) {
		// использую особенности современного es6 из 15 урока
		Elem.style.cssText = `
		height : ${this.height}px;
		width : ${this.width}px;
		background-color : ${this.bg};
		font-size : ${this.fontSize}px;
		`;
		Elem.textContent = this.text;	// добавляем етекст
		document.body.append(Elem);		// добавляем элемент на страницу
	}
};

let ElemOne = new DomElement('.div', 300, 300, 'yellow', 50, 'p');	
//  использование конструткора DomElement через оператор new вызов функции через new-порождает новый пустой объект 
let ElemTwo = new DomElement('#div', 300, 300, 'red', 50, 'div');	
//  использование конструткора DomElement через оператор new вызов функции через new-порождает новый пустой объект 

ElemOne.createElement();	// вызов 
ElemTwo.createElement();	// вызов  
