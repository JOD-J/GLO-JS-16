"use strict";

class First {
	constructor(heloFirst, heloSecond) {
		this.heloFirst = heloFirst;
		this.heloSecond = heloSecond;
	}
	hello (){
		console.log(this.heloFirst);
	}
}

class Second extends First {
	hello (){
		super.hello();
		console.log(this.heloSecond);
	}
}
const second = new Second('Привет я метод родителя!', 'А я наследуемый метод!');
second.hello();

