const readlineSync = require("readline-sync");

let FirstName= readlineSync.question("What's your firstname ?");
let name= readlineSync.question("What's your name ?");
let city= readlineSync.question("Where do you live ?");

console.log(`Your name is ${name} ${FirstName} and you live in ${city}.`);