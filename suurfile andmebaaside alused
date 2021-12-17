// lahendus


var fs = require('fs')

fs.readFile("LE (1).txt", 'utf8', function (err,data) {
const lines = data.split("\n")
const str = data;

var formatted = ""
for (var line of lines) {
    formatted += '('+line.replace(/\t/g,',')+'),\n';

}    
fs.appendFile('LE.txt', formatted, 'utf8', function (err) {
if (err) return console.log(err);
    });
});
