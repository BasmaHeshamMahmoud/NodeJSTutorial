// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// const names = require("./4-names");
const { john, peter } = require("./4-names");
const sayHi = require("./5-utilies");
const data = require("./6-alternative.flavor");
console.log(data.singlePerson.name);
require("./7-mind-grenade");
sayHi("susan");
sayHi(john);
sayHi(peter);
