// AJAX - XMLHttpRequests
console.log('ajax');

var http = new XMLHttpRequest();
var url = 'http://jsonplaceholder.typicode.com/posts';
var method = 'GET';

var data = "title=Post%20Title&body=Post%20Body";

http.open(method, url);
http.onreadystatechange = function() {
	if ( http.readyState === XMLHttpRequest.DONE && http.status === 200 ) {
		console.log(JSON.parse(http.responseText));
	} else if ( http.readyState == XMLHttpRequest.DONE && http.status !== 200 ) {
		console.log('Error');
	}
};

http.send();

http.open('POST', url);
http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
http.onreadystatechange = function() {
	if ( http.readyState == XMLHttpRequest.DONE && http.status === 201 ) {
		console.log(http.responseText);
	} else if ( http.readyState == XMLHttpRequest.DONE && htt.status !== 201 ) {
		console.log('Error making a post');
	}
};

http.send(data);
