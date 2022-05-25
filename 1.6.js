const readlineSync = require("readline-sync");

let num1= readlineSync.question("Give me one number.");
let num2= readlineSync.question("Give me another number.");

console.log(`vos nombre sont ${Math.trunc(num1)} et ${Math.trunc(num2)}`);
console.log(`Le reste de la division de vos nombre est ${Math.trunc(num1) % Math.trunc(num2)}`);