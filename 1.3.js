const readlineSync = require("readline-sync");

let FirstName= readlineSync.question("What's your firstname ?");

console.log(`Hello ${FirstName}`);