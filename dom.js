'use strict';

// properties on the global window object
window.innerWidth; // width of the browser in pixels
window.outerWidth; // width of the complete page in pixels
window.innerHeight; // heigh of the browser in pixels
window.outerHeight; // heigh of the the complete page in pixels

// METHODS
// open(url) a url as a popup

// browser storage, set with key value arguments.
localStorage.setItem('key1', 'value1');
sessionStorage.setItem('key2', 'value2'); // will not persist after browser closed

localStorage.getItem('key1'); // 'value1'


// LOCATION holds the current url and other properties
location.pathname;
// reload(true) the page
// replace() the path


// DOCUMENT
document.title;
document.body;
document.body.children[0].textContent // content of the first tag in the body
document.body.children[0].textContent = 'New Content' // access properties of HTML and change it
document.body.children[0].style.backgoundColor = 'red';

document.getElementsByTagName('button'); // return array of matching elements
document.getElementsByClassName('btn'); // return array of matching elements with argument class
document.getElementById('this-scope'); // return single element matching argument id

// tag name, .class, #id
document.querySelector('button');
document.querySelector('.btn'); // returns the first element as an array
document.querySelectorAll('.btn'); // returns all elements as an array
document.querySelector('#this-scope'); // returns the first element 


var buttons = document.querySelectorAll('.btn');
for (var i = buttons.length - 1; i >= 0; i--) {
	buttons[i].style.color = 'blue';
};


// create an element
var p = document.createElement('P');
p.textContent = 'New paragraph';
p.style.fontSize = '17px';

// find element and asign to a variable
var button = document.querySelector('.btn');

// add the new element
button.appendChild(p);

// parentNode, parentElement

// Dialogs
// alert('message')
// confirm('message')
// prompt('message')


console.log(document.querySelectorAll('#this-scope'));





