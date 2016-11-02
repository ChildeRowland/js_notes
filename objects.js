'use strict';

// Literal Object Creation

var person = {
	name: 'Taco',
	age: 1122,
	details: {
		hobbies: [ 'sport', 'cooking' ],
		location: 'Food Truck'
	},
	greet: function() {
		console.log('Hello from ' + this.name);
	}
};

// dot notation
console.log(person.name);
// bracket notation, when the value is dynamically derived
var field = 'age';
console.log(person[field]);

// access nested objects
console.log(person.details.hobbies);

// call a function from an object
person.greet(); // Hello from Taco

// change properties
person.name = 'Bean';

// Object Literal with string properties
var car = {
	'make': 'Ford',
	'model': 'Taurus'
};
// object properties can be strings, and accessed with bracket notation
console.log(car['make'])

// Instantiate Object with new keyword
var dog = new Object();
dog.type = 'dog';
dog.name = 'Amber';
console.log(dog);

// Instantiate Object with create() with it's prototype as an argument
// When null is passed, the object won't have the Object prototype
var cat = Object.create(null);
cat.name = "Stinky";
console.log(cat);

// Adding to the Object prototype
Object.prototype.logger = function() {
	console.log('Function added to the Object\'s prototype');
}

dog.logger();


// CONSTRUCTOR FUNCTIONS
// make a blueprint of an object with it's own prototype

function Person(name, age) {
	this.name = name;
	this.age = age;
}

// add function to the Person Object
Person.prototype.greeter = function() {
	console.log('hello from ' + this.name);
}

var person = new Person('taco');
person.age = 1123;

person.greeter();

// check if variable is instance of an Object
console.log(person instanceof Person);


// ADDING PROPERTIES TO OBJECTS

var account = {
	garbage: 'delete',
	cash: 1200,
	withdraw: function(amount) {
		this.cash -= amount;
		console.log(`Withdrew ${amount}, new value is ${this.cash}`);
	}
}

// name of the object, name of the property as string, and an object
Object.defineProperty(account, 'deposit', {
	value: function(amount) {
		this.cash += amount;
		console.log(`Deposited ${amount}, new value is ${this.cash}`);
	}
});

// properties are set to false by default
Object.defineProperty(account, 'name', {
	value: 'ID000-1',
	writable: true,
	enumerable: false,
});

Object.defineProperty(account, 'info', {
	get: function() {
		console.log(this.name);
	},
	set: function(name) {
		this.name = name;
	}
});

account.deposit(100);
account.withdraw(8);
account.info;

// delete properties on the object
delete account.garbage;

// check for property existence
console.log('garbage' in account); // boolean

// loop through an Object
for (var field in account) {
	console.log(field, account[field]);
}




