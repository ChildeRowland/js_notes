/*
Example of assigning a timeout id to a variable
Return a function
call the function to clear the timeout

ex call:
var count = stopWatch.counter(1,10);
count.cancel();
*/

var stopWatch = {
  counter: function (start, end) {

    let timerId;

    function increaseByOne() {
      console.log(start++);

      if (start <= end) {
        timerId = setTimeout(increaseByOne, 1000);
      }
    }

    increaseByOne();

    return {
      cancel: function () {
        clearTimeout(timerId);
        console.log('Cleared');
      }
    }
  }
}