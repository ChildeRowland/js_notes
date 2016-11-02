// Syntax Changes

// The let keyword sets block level variables
// Hosting is disabled when using let. It must be declared before use.
let name = "Taco"
var age = 56;

if (true) {
	let name = "Bean";
	let type = "food-person"
	age = 66;
	console.log(name, type, age); // Bean food person 66
}
console.log(name, age); // Taco 66


// The const keyword sets a constant that will throw error if try to change value
const NUM = 1122; // can't change

const OBJ = {
	num1: 1122
}

OBJ.num2 = 1123; // valid, because the original object isn't changed being rewritten.

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

setTimeout(() => console.log(`Hello ${name}`)); //anonymous arrow function

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






