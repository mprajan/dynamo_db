const fs = require('fs')

var data = fs.readFileSync('test.txt');

console.log(data.toString());
console.log("Program Ended");

console.log("--------------------------------------------------");


var callback = function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
  };
  console.log("Program Ended");
  fs.readFile('test.txt', callback);