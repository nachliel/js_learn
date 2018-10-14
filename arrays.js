//arrays.js
var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

empty[1]          // undefined
numbers[1]        // 'one'

empty.length      // 0
numbers.length    // 10

// Object literal:
var numbers_object = {
    '0': 'zero',  '1': 'one',   '2': 'two',
    '3': 'three', '4': 'four',  '5': 'five',
    '6': 'six',   '7': 'seven', '8': 'eight',
    '9': 'nine'
};
// The strangest arrays in JS:
var misc = [
    'string', 98.6, true, false, null, undefined,
    ['nested', 'array'], {object: true}, NaN,
    Infinity
];
misc.length    // 10

var myArray = [];
myArray.length             // 0

myArray[1000000] = true;
myArray.length             // 1000001
// myArray contains one property.

numbers.length = 3;
// numbers is ['zero', 'one', 'two']

numbers[numbers.length] = 'shi';
// numbers is ['zero', 'one', 'two', 'shi']

numbers.push('go');
// numbers is ['zero', 'one', 'two', 'shi', 'go']

delete numbers[2];
// numbers is ['zero', 'one', undefined, 'shi', 'go']

numbers.splice(2, 1);
// numbers is ['zero', 'one', 'shi', 'go']

// A common error in JavaScript programs is to use an object when an array is required or an array when an object is required. 
// The rule is simple: when the property names are small sequential integers, you should use an array. Otherwise, use an object.

var is_array = function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
};
// better
var is_array = function (value) {
    return Object.prototype.toString.apply(value) === '[object Array]';
};

var pop = {
    a:5,
    v:3,
    po2:function() {
        return this.a+this.b;
    }
}

//document.writeln(is_array(numbers_object));
//document.writeln(is_array(misc));
/* NO NEED IN NEWER VERSIONS METHOD IS NOT EXIST.
Array.method('reduce', function (f, value) {
    var i;
    for (i = 0; i < this.length; i += 1) {
        value = f(this[i], value);
    }
    return value;
});

*/

var myNumbers = [1,2,3,4,5,6,7,8,9];
// Create an array of numbers.

var data = [4, 8, 15, 16, 23, 42];

// Define two simple functions. One will add two
// numbers. The other will multiply two numbers.

var add = function (a, b) {
    return a + b;
};

var mult = function (a, b) {
    return a * b;
};

let sum2 = myNumbers.reduce(add,0);

document.writeln(sum2);
// Invoke the data's reduce method, passing in the
// add function.

var sum = data.reduce(add, 0);    // sum is 108

// Invoke the reduce method again, this time passing
// in the multiply function.

var product = data.reduce(mult, 1);
    // product is 7418880

    // Give the data array a total function.

data.total = function (  ) {
    return this.reduce(add, 0);
};

total = data.total(  );    // total is 108

//Initial arrayL
Array.dim = function (dimension, initial) {
    var a = [], i;
    for (i = 0; i < dimension; i += 1) {
        a[i] = initial;
    }
    return a;
};

// Make an array containing 10 zeros.

var myArray = Array.dim(10, 0);

// Two Dimentional array:
var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];
matrix[2][1]    // 7

//Building multi dimentional arrays:
for (i = 0; i < n; i += 1) {
    my_array[i] = [];
}

// Note: Array.dim(n, []) will not work here.
// Each element would get a reference to the same
// array, which would be very bad.

Array.matrix = function (m, n, initial) {
    var a, i, j, mat = [];
    for (i = 0; i < m; i += 1) {
        a = [];
        for (j = 0; j < n; j += 1) {
            a[j] = initial;
        }
        mat[i] = a;
    }
    return mat;
};

// Make a 4 * 4 matrix filled with zeros.

var myMatrix = Array.matrix(4, 4, 0);

document.writeln(myMatrix[3][3]);    // 0

// Method to make an identity matrix.

Array.identity = function (n) {
    var i, mat = Array.matrix(n, n, 0);
    for (i = 0; i < n; i += 1) {
        mat[i][i] = 1;
    }
    return mat;
};

myMatrix = Array.identity(4);

document.writeln(myMatrix[3][3]);    // 1