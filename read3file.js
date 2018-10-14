const fs = require('fs');

function readFile(file, callback) {
    fs.readFile(file,'utf-8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data);
        callback();
    });
};

readFile('data1', readFile('data2',readFile('data3',console.log('complete read'))));


readFile('data1', );
readFile('data2', );

function read2File(rf,rf, callback) {
    rf();
    rf();
    callback();
};