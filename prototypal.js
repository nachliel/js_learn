//Prototypal.JS
var myMammal = {
    name : 'Herb the Mammal',
    get_name : function (  ) {
        return this.name;
    },
    says : function (  ) {
        return this.saying || '';
    }
};

var myCat = Object.create(myMammal);
myCat.name = 'Henrietta';
myCat.saying = 'meow';
myCat.purr = function (n) {
    var i, s = '';
    for (i = 0; i < n; i += 1) {
        if (s) {
            s += '-';
        }
        s += 'r';
    }
    return s;
};
myCat.get_name = function (  ) {
    return this.says() + ' ' + this.name + ' ' + this.says();
};
var block = function (  ) {

    // Remember the current scope. Make a new scope that
    // includes everything from the current one.
    
        var oldScope = scope;
        scope = Object.create(scope);
    
    // Advance past the left curly brace.
    
        advance('{');
    
    // Parse using the new scope.
    
        parse(scope);
    
    // Advance past the right curly brace and discard the
    // new scope, restoring the old one.
    
        advance('}');
        scope = oldScope;
    };