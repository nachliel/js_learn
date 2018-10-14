// Create a variable called add and store a function
// in it that adds two numbers.

var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw {
            name: 'TypeError',
            message: 'add needs numbers'
        };
    }
    return a + b;
}
// Make a try_it function that calls the new add
// function incorrectly.

var try_it = function (  ) {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}

try_it(  );

// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.
/*
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};
*/
var myObject = (function () {
    var value = 0;

    return {
        increment: function (inc) {
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function (  ) {
            return value;
        }
    };
}());

myObject.increment(  );
document.writeln(myObject.value);    // 1

myObject.increment(2);
document.writeln(myObject.value);    // 3
// Augment myObject with a double method.

myObject.double = function (  ) {
    var that = this;    // Workaround.

    var helper = function (  ) {
        that.value = add(that.value, that.value);
    };

    helper(  );    // Invoke helper as a function.
};

// Invoke double as a method.

myObject.double(  );
document.writeln(myObject.value);     // 6 

// Create a constructor function called Quo.
// It makes an object with a status property.

var Quo = function (string) {
    this.status = string;
};

// Give all instances of Quo a public method
// called get_status.

Quo.prototype.get_status = function (  ) {
    return this.status;
};

// Make an instance of Quo.

var myQuo = new Quo("confused");

document.writeln(myQuo.get_status(  ));  // confused

// Make an array of 2 numbers and add them.

var array = [3, 4];
var sum = add.apply(null, array);    // sum is 7

// Make an object with a status member.

var statusObject = {
    status: 'A-OK'
};

// statusObject does not inherit from Quo.prototype,
// but we can invoke the get_status method on
// statusObject even though statusObject does not have
// a get_status method.

var status = Quo.prototype.get_status.apply(statusObject);
    // status is 'A-OK'

// Make a function that adds a lot of stuff.

// Note that defining the variable sum inside of
// the function does not interfere with the sum
// defined outside of the function. The function
// only sees the inner one.

var sum = function (  ) {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
        
    }
    return sum;
};

document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108

//Augmenting types:
Function.prototype.method = function (name, func) {
    this.prototype[name] = func;
    return this;
};
Number.method('integer', function (  ) {
    return Math[this < 0 ? 'ceil' : 'floor'](this);
});
String.method('trim', function (  ) {
    return this.replace(/^\s+|\s+$/g, '');
});

document.writeln('"' + "   neat   ".trim(  ) + '"');
document.writeln((-10 / 3).integer(  ));  // −3
var a = (4.232).integer();
document.writeln(a);

// Add a method conditionally.

Function.prototype.method = function (name, func) {
    if (!this.prototype[name]) {
        this.prototype[name] = func;
        return this;
    }
};

// Make a factorial function with tail
// recursion. It is tail recursive because
// it returns the result of calling itself.

// JavaScript does not currently optimize this form.

var factorial = function factorial(i, a) {
    a = a || 1;
    if (i < 2) {
        return a;
    }
    return factorial(i - 1, a * i);
};

document.writeln(factorial(4));    // 24

// Create a maker function called quo. It makes an
// object with a get_status method and a private
// status property.

var quo = function (status) {
    return {
        get_status: function (  ) {
            return status;
        }
    };
};

// Make an instance of quo.

var myQuo = quo("amazed");

document.writeln(myQuo.get_status(  ));

//!!! importants
function forEach(array, action) {
    for (let i = 0; i < array.length; i++) {
        action(array[i]);
    }
}

const array = [1, 2, 3, 4, 5];

forEach(array, function (value) {
    console.log(value);
});

function map(array, mapper) {
    const result = new Array(array.length);

    for (let i = 0; i < array.length; i++) {
        result[i] = mapper(array[i]);
    }

    return result;
}

const array = [1, 2, 3, 4, 5];

const double = map(array, function (value) {
    return value * 2;
});

console.log(array); // 1, 2, 3, 4, 5
console.log(double); // 2, 4, 6, 8, 10