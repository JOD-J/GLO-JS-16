"use strict";

class First {
	firsthello (){
		this.helo = console.log('First: Привет я метод родителя!');
	}
}

class Second extends First {
	secondhello (){
		super.firsthello();
		this.helo = console.log('Second: А я наследуемый метод!');
	}
}

const second = new Second();
second.secondhello();

