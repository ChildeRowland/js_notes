'use strict';

var arr = [1, 2, 3];
var newArr;

// Arrays use zero indexing
console.log(arr[0]); // 1

// method on the array prototype to return the length
console.log(arr.length); // 2

// reassign values by index;
arr[1] = 22;

// can also add new values by index
arr[3] = 4;


// METHODS 

// forEach()
arr.forEach(function(element) {
	console.log(element);
});

// push() add element to the end of an array
arr.push(5);

// pop() removes last element and returns the value
arr.pop(); // 5;

// unshift() adds element to the front of an array
arr.unshift(0);

// shift() removes element from the front of an array
arr.shift();

// indexOf() pass a value, return the index of the element
arr.indexOf(22); // 1

// slice(index1, index2) returns an array starting with index1 and ending index2 exclusive.
// leaves the original array intact
arr.slice(2, 4); // [3, 4]

// splice(index, length) returns a new array starting with the index counting up to the length 
// splice changes the original array
arr.splice(2, 2); // [3, 4]

// filter() takes a function and checks for truthiness, returning an array that meets the criteria.
arr = [1, 2, 3, 4];
arr.filter(function(element) {
	return element > 2;
}); // [3, 4]

// map() takes a function with an argument and returns a new array
arr.map(function(element) {
	return element * 2;
}); // [2, 4, 6, 8]

// reverse() reverses the original array;
arr.reverse();

// concat(array) called on an array, with an array as an object.
// Adds the second array at the end of the first
var newArr = [ 11, 22, 33, 44 ];
arr.concat(newArr); // [4, 3, 2, 1, 11, 22, 33, 44]

// join() returns a string with the value passed after each element of the array.
arr.join('-'); // 4-3-2-1

// reduce() reduce an array to a single value
console.log(arr.reduce(function(total, value) {
	return total + value;
})); // 10

console.log(arr);



