// MATH OBJECT

// helpful values on the Math object
var pi = Math.PI;
var e = Math.E;

// methods on the Math object
// abs(number) returns the absolute value of the argument
var a = -3
Math.abs(a); // 3

// round(number) returns the value of the argument approriately rounded.
var b = 3.5;
Math.round(b); // 4

// ceil(number) returns the value of the arguement rounded up.
Math.ceil(b); // 4

// floor(number) returns the value of the argument rounded down.
Math.floor(b);

// log(number) returns the natural logarithm.
Math.log(e);

// max(number1, number2) returns the highest value argument.
Math.max(64, 1, -1, 65); // 65

// min(number1, number2) returns the lowest value argument.
Math.min(64, 1, -1, 65); // -1

// random() returns a random floating point number between 0.0 and 1.0
Math.random();

// return a random number 1-10 inclusive
Math.ceil(Math.random() * 10);

/*
Math.random() generates a random number in the range of 0-1 (0 - inclusive, 1 - exclusive)
num.toString(radix) converts to string
radix options:
	2  binary
	8  octal
	16 hexadeciaml
	36 hexatrigesimal
str.substring(start, end) return the range, (start - inclusive, end - exclusive)
*/

Math.random().toString(36).substring(0, 5);