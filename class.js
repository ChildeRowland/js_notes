'use strict';

// CONSTRUCTOR FUCTION
function Dog(name) {
	this.name = name;
	this.woof = function() {
		console.log('woof');
	};
};
// add methods to the prototype
Dog.prototype.bark = function() {
	console.log('bark');
};

let amber = new Dog('amber');
amber.woof();
amber.bark();


// ES6 CLASS SYNTAX
class Cat {
	constructor(name) {
		this.name = name;
	}
	// on the prototype?
	purr() {
		console.log('purr');
	}
}
// on the prototype
Cat.prototype.meow = function() {
	console.log(`${this.name} says meow`);
};

let abbey = new Cat('abbey');
abbey.purr();
abbey.meow();


class Tabby extends Cat {
	constructor(name, longhair) {
		super(name);
		this.longhair = longhair;
	}
	// overwrite the parent class methods
	purr() {
		console.log('purr');
	}
	// but can still access with super key word
	purr2() {
		super.purr();
	}
}

let princess = new Tabby('princess', true);
princess.meow();


// use static for accessing methods with instantiating an object
class Helper {
	static errorMessage() {
		console.log('static error message');
	}
}

Helper.errorMessage();


// export classes
// export { Helper, Dog, Cat }


// setters and getters
class Book {
	constructor(title) {
		this._title = title;
	}
	// use a getter to control how the data is returned, 
	// instead of just returning the raw data.
	get title() {
		return this._title.toUpperCase();
	}
	// use a setter to control how the data is changes
	set title(newValue) {
		if (typeof newValue === 'string') {
			this._title = newValue;
		} else {
			console.log('!Not an appropriate title!');
		}
	}
}

let oldMan = new Book('Old Man and the Sea');

oldMan.title = false;

console.log(oldMan.title);


// SUBCLASSES, extenting objects
class ConvertableArray extends Array {
	convert() {
		let returnArray = [];
		this.forEach(value => returnArray.push(value.toFixed(2)));
		return returnArray;
	}
}

let numberArray = new ConvertableArray();

numberArray.push(1);
numberArray.push(2);
numberArray.push(3);

let decimalArray = numberArray.convert();

console.log(decimalArray);


