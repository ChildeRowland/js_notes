'use strict';

// new Date(year, month, day);
// requires valid format
var today = new Date(); // current date with no arguments, the month arg is zero indexed
var day1 = new Date('2016/05/24'); // date as string, month is not zero indexed
console.log(today.toString());

var day2 = new Date();
day2.getDate(); // return the day of the month;
day2.getDay(); // return the day of the week;

