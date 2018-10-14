// Define a function that sets a DOM node's color
// to yellow and then fades it to white.

var fade = function (node) {
    var level = 1;
    var step = function (  ) {
        var hex = level.toString(16);
        node.style.backgroundColor = '#FFFF' + hex + hex;
        if (level < 15) {
            level += 1;
            setTimeout(step, 100);
        }
    };
    setTimeout(step, 100);
};

fade(document.body);

var myObject = (function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function (  ) {
            return value;
        },
        incrementx2: function (inc) {
            this.increment(inc);
            increment(inc);
        }
    };
}());

myObject.increment(4);
document.writeln(myObject.getValue());
myObject.incrementx2(2);
document.writeln(myObject.getValue());

function createCounter(value) {
    return function () {
      console.log(value++);
    };
  }
  
  const counter = createCounter(10); // starts at 
  counter(); // 10
  counter(); // 11
  counter(); // 12