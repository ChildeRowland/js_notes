// JavaScript Basics
// VARIABLE DECLARATIONS 

var num1 = 5;
typeof num1; // number

var num2 = 6.5;
typeof num2; // number, JS uses decimals, but doesn't understand floats

var text = 'string of characters';
typeof text; // string

var bool = true || false;
typeof bool; // boolean

var arr = [1, 'text', true];
typeof arr; // object
typeof arr[0]; // number, zero indexing of the array

var obj = {
	// key value pairs
	name: 'Taco' // object field
};
typeof obj; // object

var notSet = null;
typeof notSet; // object
typeof undefined; // undefined

console.log(null == undefined); // Returns true, as the value of null and undefined are equal.
console.log(null === undefined); // Returns false, as the types are different.

var notNum = NaN;
typeof notNum; // number, although mostly uses to return errors in math equations.

// variable behavior
var CaseVar, caseVar; // JS is case sensitive, these are 2 different variables.

// JS is dynamically typed.
// Variables can have different types and values depending on when the declaration happens.
// *Best Practice, don't change types.
var dynamicVar = 1122;
console.log(dynamicVar);

dynamicVar = 2211;
console.log(dynamicVar);


// JavaScript will host variable declarations
// *Best Practice, declare variables when or before they are initialized
hostVal = 'variable declared and initialized' // initialization happens when value is assigned.
console.log(hostVal);
var hostVal; // declaration is hosted


/*
Without 'use strict';
	variables can be declared without the var keyword
	code can run without semicolons, when broken up by line
*/


// FUNCTIONS

// declaration
function sumFn (a, b) {
	console.log('calculating ' + a + '+' + b + '...'); // print something
	return a + b; // return value
}

var diffFn = function (a, b) {
	return a - b;
}

var addFn = sumFn; // assign function to another variable;
var difference = diffFn(2,1); // the value of a function with return statement is assignable

typeof sumFn; // function

addFn(1,2); // execute the function
console.log(difference); 


// CONTROL STRUCTURES

//if statements
var condition1 = false;
var condition2 = true;
if (condition1) {
	condition1;
} else if (condition2) {
	condition2;
} else {
	null;
}

// false, 0, null, and undefined will evaluate as false in an if statement

// switch and case
var luckyNumber = Math.ceil(Math.random() * 10);

switch(luckyNumber) {
	case 7:
		console.log('lucky number');
		break; // stops the code from falling through
	case 3:
		console.log('ducky dumber');
		break;
	default:
		console.log('neither lucky or ducky');
		break;
}

// for loop
for (var i = 0; i < 5; i++) {
	// loops until i isn't smaller than 5;
	if (i == 4) {
		console.log('breaking loop early');
		break;
	}

	for (var j = 0; j < 2; j++) {
		// loop each parent loop, until j isn't smaller than 2;
		if ( i == j) {
			continue; // skips to the end of current iteration of the inner loop
			console.log(i, j); // won't log
		}
		console.log(i, j); // logs i and j, but not when equal

		if ( i > j ) {
			break; // breaks out of the inner loop
			console.log(i, j); // won't log
		}
	}
}

// loop through an array
var numArr = [1, 2, 3];
for (var i = 0; i < numArr.length; i++) {
	console.log(numArr[i]);
}

// while loop
var num = 5;
while (num < 7) {
	console.log(num);
	num ++;
}

// do while loop
// perform the loop at least once before checking the condition
var condition = false;
do {
	console.log('Taco')
} while (condition);


// OPERATORS
var a = 5;
var b = 10;

a++; // incremental after expression is evalated
--a; // decrements before the expression is evalated
a += b; // add reassignment

a += true; // true will be coerced to the number 1, then added to a
a += null; // null will be coerced to the number 0, then added to a
a -= '1'; // the string will be coerced to the number 1, then subtracted from a
a + undefined; // NaN

// floating point math
a = 1.3;
b = 2.2;
// round to two decimal places
console.log((a * b).toFixed(2));

a = 10;
b = 3;

a / b; // 3.333333335
a % b; // 1, the remainder after division

var str = 'some text';
str += ' more text'; // string concatenation

str - ' less text'; // NaN

/* 
comparing values and types
== check if values are equal
=== check values and types 
!= check values are not equal
!== check the values ad types are not equal

>, <, >=, <= can't check for type, just value

*/

NaN != NaN; // true, built in rule that NaN does not equal NaN
0 == null; // false, null can't be compared...
null == undefined; // true, ...except to undefined
// undefined always returns false with ==, except when compared to null.

// boolean operators
if ( 1 == 1 && 2 == 2 ) {
	// both side of the operator must be true
} else {
	// either one or both sides is false
}

if ( 1 == 1 || 2 == 2 || 3 == 3 ) {
	// one of the statements must be true;
} else {
	// all the statements are false
}

// ternary operator
a = 5;
b = 5;
a == b ? 'Equal' : 'Not Equal'; // Equal

// precedence
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence


// PRIMATIVE vs REFERNECES TYPES
var num1 = 5;
// creates a copy of the number
var num2 = num1;

var arr1 = ['blue', 'green', true];
// points to the same object
var arr2 = arr1;


// Scope
var scope = 'global scope';

function local() {
	// looks up the the scope and has access to the variable
	console.log(scope);
	scope = 'local scope';
	// variable is redefined within the scope of the function
	console.log(scope);
}

local();







