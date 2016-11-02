'use strict';

// EVENT HANDLERS

// onclick event for single event
var button = document.querySelector('#this-scope');

button.onclick = function() {
	console.log('button clicked');
};

// onmouseover
var p = document.createElement('P');

p.textContent = 'Text added via JS file';

document.body.appendChild(p);

p.onmouseover = function() {
	p.style.color = 'red';
};

// onmouseleave
p.onmouseleave = function() {
	p.style.color = 'black';
};

// addEventListener(eventName, callback, priorityBoolean) is called on the element
var outer = document.querySelector('#outer');
var inner = document.querySelector('#inner');

outer.addEventListener('click', outerListener);
inner.addEventListener('click', innerListener);

function outerListener() {
	console.log('Outer Div Click');
}

function innerListener(event) {
	event.stopPropagation(); // stop event from bubbling up
	console.log('Inner Div Click');
}

/*
Event object properties
bubbles - true or false
target - HTML element object that triggered the event
clientX, clientY - coordinates of the event
*/

// Page Load Options

function init() {
	console.log('initialized');
}

function loaded() {
	console.log('loaded');
}

// onload fires after the entire page loads
// window.onload = loaded;
window.onload = loaded;

// DOMContentLoaded fires after the HTML has been loaded and parsed
// Does not wait for stylesheets, images, or subframes 
document.addEventListener('DOMContentLoaded', init);






