/* eslint-disable max-len */
'use strict';

//==================================================Todo===================================================
class Todo {
	//==================================================constructor===================================================
	constructor(form, input, todoList, todoCompleted, todoContainer) { // принимаем элементы со страницы
		// создаем свойсвто
		this.form = document.querySelector(form);						// получаем элементы со страницы
		this.input = document.querySelector(input);						// получаем элементы со страницы
		this.todoList = document.querySelector(todoList);				// получаем элементы со страницы не выполненый Todo
		this.todoCompleted = document.querySelector(todoCompleted);		// получаем элементы со страницы выполненый Todo
		this.todoContainer = document.querySelector(todoContainer);		// получаем элементы со страницы контейнер Todo
		this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList'))); 	// создаем колекцию
	}
	//==========================================\\\\\\constructor====================================================


	//==================================================addTodo===================================================
	addTodo(event) {
		event.preventDefault();
		if (this.input.value.trim()) { 								// при условии если инпут не пустой выполняем код
			const newTodo = { 										// создаем дело с 3 параметрами
				value: this.input.value, 							// получение текста
				completed: false, 									// выполнено или нет дело
				key: this.generateKey(), 							// ключ индефекатор
			};
			this.input.value = ''; 									// отчищаем ипут
			this.todoData.set(newTodo.key, newTodo); 				// добовляем в колекцию дело
			this.render(); 											// render перебор
		} else {													// добовление пустого дела
			alert('пустое дело добавить нельзя!');
		}
	}
	//==========================================\\\\\\addTodo====================================================


	//==================================================generateKey===================================================
	generateKey() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	}
	//==========================================\\\\\\generateKey====================================================


	//==================================================render===================================================
	render() {
		this.todoList.textContent = '';					// очистка стандартной верстки
		this.todoCompleted.textContent = '';			// очистка стандартной верстки
		this.todoData.forEach(this.createItem, this); 	// перебор todoData всех элементом функции createItem
		this.addToStorage();
	}
	//==========================================\\\\\\render====================================================


	//==================================================createItem===================================================
	createItem(todo) {
		const li = document.createElement('li'); 				// создаем li
		li.classList.add('todo-item'); 							// присваеваем li класс
		// выводим в верстку
		li.key = todo.key;
		li.insertAdjacentHTML('beforeend', ` 
			<span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>
		`);
		if (todo.completed) {									// false true
			this.todoCompleted.prepend(li);						// выполненый список Todo
		} else {
			this.todoList.prepend(li);							// не выполненый список Todo
		}
	}
	//==========================================\\\\\\createItem====================================================

	//==================================================addToStorage===================================================
	addToStorage() { 																// отправка в LocalStorage
		localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
	}
	//==========================================\\\\\\addToStorage====================================================


	//==================================================handler===================================================
	handler() {
		this.todoContainer.addEventListener('click', event => {
			event.preventDefault(); 										// отмена действие по умолчанию
			const target = event.target;									// target = элементу html
			if (target.matches('.todo-remove')) {							// если клик класс .todo-remove вызов deleteItem
				this.deleteItem(target.parentElement);						//
			} else if (target.matches('.todo-complete')) {					// если клик класс .todo-complete вызов completedItem
				this.completedItem(target.parentElement);					//
			}
		});
	}
	//==========================================\\\\\\handler====================================================


	//==================================================deleteItem===================================================
	deleteItem(element) {
		this.todoData.delete(element.parentElement.key);
		this.render();
	}
	//==========================================\\\\\\deleteItem====================================================


	//==================================================completedItem===================================================
	completedItem(element) {
		this.todoData.forEach(item => {
			if (item.key === element.parentElement.key) {
				item.completed = !item.completed;
			}
		});
		this.render();
	}
	//==========================================\\\\\\completedItem====================================================


	//==================================================init===================================================
	init() {
		this.form.addEventListener('submit', this.addTodo.bind(this));	// на форму навешиваем слушатель submit, вызываем функцию addTodo
		this.render();
		this.handler();
	}
	//==========================================\\\\\\init====================================================
}
//==========================================\\\\\\Todo====================================================
// получаем элементы со страницы передаем  их в Todo
const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');
todo.init();
