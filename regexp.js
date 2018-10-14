//regexp.js
let document = console;
document.writeln = console.log;
var parse_url = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;

var url = "http://www.ora.com:80/goodparts?q#fragment";

var result = parse_url.exec(url);

var names = ['url', 'scheme', 'slash', 'host', 'port',
    'path', 'query', 'hash'];

var blanks = '       ';
var i;

for (i = 0; i < names.length; i += 1) {
    document.writeln(names[i] + ':' +
        blanks.substring(names[i].length), result[i]) || '';
}

// Numbers
var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function (num) {
    document.writeln(parse_number.test(num));
};
///^([a-z0-9]{5,})$/.test('abc1'); false
test('1');                // true
test('-1');                // true
test('+1');                // false
test('number');           // false
test('98.6');             // true
test('132.21.86.100');    // false
test('123.45E-67');       // true
test('123.45D-67');       // false
test('123.45e67');       // false

// Make a regular expression object that matches
// a JavaScript string.

var my_regexp = new RegExp("\"(?:\\\\.|[^\\\\\\\"])*\"", 'g');

function make_a_matcher(  ) {
    return /a/gi;
}

var x = make_a_matcher(  );
var y = make_a_matcher(  );

// Beware: x and y are the same object!

x.lastIndex = 10;

document.writeln(y.lastIndex);    // 10
var nse = /^([^.]+)(?:\.{1,1}([0-9\-A-Za-z]+))?(?:\.{1,1}([0-9\-A-Za-z]+))?$/;
// var nse = new RegExp("(?[A-Za-z]).(?[A-Za-z])", 'g');
// Examples :
document.writeln("New tests:");
var parseekamtzan = 'aaa.';
var mytest = function (text) {
    document.writeln(nse.test(text));
};

textPe = 'NameSpace.NetworkGroup.NetworkName'
mytest(textPe);
var resultz = nse.exec(textPe);
document.writeln(resultz[3]);

var text =
        "This oracle of comfort has so pleased me, " +
        "That when I am in heaven I shall desire " +
        "To see what this child does, " +
        "and praise my Constructor.";

var words = text.toLowerCase(  ).split(/[\s,.]+/);
var count = {};
for (i = 0; i < words.length; i += 1) {
    word = words[i];
    if (count[word]) {
        count[word] += 1;
    } else {
        count[word] = 1;
    }
}