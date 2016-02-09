var jade = require("./index");
var fs = require("fs");

var template = fs.readFileSync("./sample.jade");

console.log(jade.compile(template));
