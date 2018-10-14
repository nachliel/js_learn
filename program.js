var empty_object = {};

var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard",
    a: 5,
    func: function(a,b) {
        return a+b;
    },
    obj: this
};
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
    // nick is 'Curly' because x and stooge
    // are references to the same object

var a = {}, b = {}, c = {};
    // a, b, and c each refer to a
    // different empty object
a = b = c = {};
    // a, b, and c all refer to
    // the same empty object

if (typeof Object.create !== 'function') {
    Object.create = function (o) {
        var F = function () {};
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';
document.writeln(stooge['first-name']);
document.writeln(another_stooge['first-name']);
stooge.profession = 'actor';
document.writeln(stooge.profession);
document.writeln(another_stooge.profession);
another_stooge.profession = 'programmer'
document.writeln(stooge.profession);
document.writeln(another_stooge.profession);
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        document.writeln(typeof another_stooge[name] + ': ' + name + ': ' + another_stooge[name]);
    }
}
delete another_stooge.nickname;

document.writeln(another_stooge.nickname)    // 'Curly'

//Globals:

var MYAPP = {};
MYAPP.stooge = {
    "first-name": "Joe",
    "last-name": "Howard"
};

MYAPP.flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

