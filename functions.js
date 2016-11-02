
// CLOSURES

function calculator(input) {
	// nested function has access to it's environment and variables
	return function() {
		return input * 2;
	};
}

// the environment is stored the calc variable
var calc = calculator(10);
console.log(calc());


// IIFEs

// creates local scope
(function calc(input) {
	var num = input;
	console.log('local scope number: ' + num);
})(10);


// ARGUMENTS, and METHODS on the function object

function message(message, input) {
	console.log(arguments); // array like object of the functions arguments 
}

console.log(message.name); // string of the function's name, can only be accessed outside the function
console.log(message.length); // number of arguments a function takes
message('Hilly', 1122, null);


// BUILT-IN METHODS

// setTimeout() waits a number of milliseconds before running a function
var timer = setTimeout(function() {
	console.log("Wait two seconds before running");
}, 2000);

// setInterval() reruns the function at a duration
var interval = setInterval(function() {
	console.log('Ping');
}, 500);

setTimeout(function() {
	// clearInterval takes an interval as an argument
	clearInterval(interval);
	// clearTimeout() take a timer as an argument
	clearTimeout(timer);
}, 2500);

// parseInt(number, base) takes a string and returns an integer by the optional base argument.
var a = '1122';
var b = 'FBB123';
parseInt(a); // 1122
parseInt(b, 16) // 16494883

// toString() is on the Object prototype that returns a string
var a = 15;
a.toString(); // '15'
Object.prototype.toString.call([]); // "[object Array]"

// toFixed() is called on an integer and rounds to a argument passed decimal place
var a = 10.5;
a.toFixed(); // 11
a.toFixed(2); // 10.50


// STRING FUNCTIONS, strings can be used like an array of characters

var str = 'Some text';
console.log(str.split(' '));
str.length; // 9
str.charAt(2); // m, as zero indexing is still in effect
str.concat('.'); // Some text. as if combining 2 arrays
str.toUpperCase(); 
str.toLowerCase();
str.split(' '); // ["Some", "text"];
str.trim(); // removes the white space at the end of the string








