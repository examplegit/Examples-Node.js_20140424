var MyObject = require('./myobject');

var myObj = new MyObject();
myObj.touch();
myObj.touch();
myObj.touch();

console.log(myObj.count);
