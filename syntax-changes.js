// Syntax Changes

// The let keyword sets block level variables
// Hosting is disabled when using let. It must be declared before use.
let name = "Taco"
var age = 56;

if (true) {
	let name = "Bean";
	let type = "food-person"
	age = 66;
	console.log(name, type, age); // Bean food-person 66
}
console.log(name, age); // Taco 66


// The const keyword sets a constant that will throw error if try to change value
const NUM = 1122; // can't change

const OBJ = {
	num1: 1122
}

OBJ.num1 = 1123; // valid, because the original object isn't changed being rewritten.
OBJ.num2 = 1124; // valid

const ARR = ['lobsta', 'roll'];
ARR.shift(); 
ARR.unshift('tuna'); // same as the OBJ constant, the ARR isn't being rewritten

console.log(NUM)
console.log(OBJ);
console.log(ARR);


// arrow and lambda syntax functions
var singleLineFunc = () => NUM; // single line, with implied return statement
var singleArgFunc = a => a + 5; // single line, single argument, and implied return
// multi-line function with multiple arguments
var multiFunc = (obj, num) => {
	obj.num3 = num;
	return obj;
}

setTimeout(() => console.log(`Hello ${name}`), 1000); //anonymous arrow function

console.log(singleLineFunc());
console.log(singleArgFunc(NUM));
console.log(multiFunc(OBJ, NUM));


// arrow functions and keyword this
function fn1() {
	console.log(this);
}

var fn2 = () => console.log(this);

window.onload = () => {
	var button = document.getElementById('this-scope')
	button.addEventListener('click', fn1); // ES5, this points to the button
	button.addEventListener('click', fn2); // ES6, this points to the window
}


// Default argument values
// Can set any or all, can use variables or other arguments.
let myNum = 5;
function isEqual(number, compare = number) {
	console.log(`number = ${number} and compare = ${compare}`);
	return number === compare;
}

console.log(isEqual(myNum)); // Returns true. Number is equal to myNum and compare is equal to the number argument


//OBJECT LITERAL EXTENTIONS

let seeds = 'doesn\'t';

var fruitObj = {
	type: 'apple',
	seeds, // looks for other variable declaration and assignment
	fruitFunc() {
		console.log(`This ${this.type} ${this.seeds} have seeds`);
	}
};

fruitObj.fruitFunc();


// REST OPERATOR
// ... converts list into an array

function totalVal(...numList) {
	console.log(numList); // argument is now an array
	let result = 0;
	for (let i = 0; i < numList.length; i++) {
		result += numList[i];
	}
	console.log(result);
};

totalVal(1, 5, 10, 15);


// SPREAD OPERATOR
// ... converts an array into a list

console.log(Math.max(...[1,2,3,4,5]));


// FOR-OF LOOP
// quickly loop through an array with the index

function totalVal(...numList) {
	let result = 0;
	for ( let number of numList ) {
		result += number;
	}
	console.log(result);
}

totalVal(1, 5, 10, 15);


// TEMPLATE LITERALS
// preserves syntax and allows for variable injection

let multiLineString = `
	Hello, ${name}...
	bye \${name} // escape the variable
`;

console.log(multiLineString);


// DESTRUCTURING ARRAYS
// used to assign array values to variables
// original object remains untouched

let numbers = [ 1, 2, 3 ];

let [ a, , c, d, e = 'default' ] = numbers;

console.log(3); // 3
console.log(d); // undefined
console.log(e); // default

// swap values with destructing

a = 10;
b = 20;

[ a, b ] = [ b, a ];
console.log(a, b);


// DESTRUCTURING OBJECTS

var breakfast = {
	protein: 'eggs',
	grain: 'toast',
	alert: function() { 
		console.log('ring bell') 
	}
}

// destructure the object and give the function an alias
var { protein, grain, alert: noise } = breakfast;

noise();


