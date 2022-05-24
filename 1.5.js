const readlineSync = require("readline-sync");

let num1= readlineSync.question("Give me one decimal number.");
let num2= readlineSync.question("Give me another decimal number.");

console.log(Math.trunc(num1) * num2);