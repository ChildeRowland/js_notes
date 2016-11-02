'use strict';

var str = 'abc';

// regex is beteen the hashes, and creates an RegExp Object;
var pattern = /ab/;
pattern.exec(str); // ["ab", index: 0, input: "abc"]
str.match(pattern); // ["ab", index: 0, input: "abc"]
pattern.test(str); // true, as there is a match


console.log(str.match(pattern));