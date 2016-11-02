'use strict';

function fn(message) {
	message = message || 'Hi from: '
	console.log(message, this);
}

var obj = {
	objfn: fn
};

var person = {
	name: 'Taco'
};

// this refers to the object left of the dot
obj.objfn();

// use bind() to bind it to another object
obj.objfn.bind(this)();

// arguments can be passed after the object
obj.objfn.bind(person, 'Salut au: ')();

// call() works similarly to bind, but is immediately called
obj.objfn.call(this);

// apply() takes an array of arguments and is immediately called
obj.objfn.apply(person, ['bonjour au: ']);