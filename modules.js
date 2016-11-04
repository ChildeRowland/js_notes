"use strict";

console.log(System);

// import default, can only have one variable with default
import text from './modules-external.js';
// import a list of variables
import { keyword, test, sumNum as num } from './modules-external.js'; // final version, leave out file extension
// import all the exports from a file as an object
import * as allVariables from './modules-external.js';

console.log(keyword);
test();
