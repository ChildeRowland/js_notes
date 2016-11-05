// SYMBOLS are primative types that provide unique identifier
// can add meta data to objects
// create a symbol with the keyword Symbol and one arg for debugging
// [object Symbol]
let sym = Symbol('debug');
console.log(typeof sym); // symbol
console.log(sym.toString()) // Symbol(debug)

let obj = {
	type: 'example',
	[sym]: 22
}

console.log(obj); // Object {type: "example", Symbol(debug): 22}
console.log(obj[sym]); // 22

// another creation method
let cym = Symbol.for('id');
let cim = Symbol.for('id');

console.log(cym == cim); // true, id's are the same

// assign the id
function assignId(object) {
	let exSymbol = Symbol.for('id');
	object[exSymbol] = 1122;
}

assignId(obj);
// access the symbol value as they have the same id
console.log(obj[cym]);


// WELL KNOWN SYMBOLS
// Symbol.toStringTag

class Book {

}

Book.prototype[Symbol.toStringTag] = "Book";

let oldMan = new Book();

console.log(oldMan);


// Symbol.toPrimitive
let numbers = [1, 2, 3];

numbers[Symbol.toPrimitive] = function() {
	return 999;
}

console.log(numbers + 1);




