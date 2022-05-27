const readlineSync = require("readline-sync");

let num1= readlineSync.question("Give me one decimal number.");
let num2= readlineSync.question("Give me another decimal number.");

console.log(`le produit de vos 2 nombre est de ${Math.trunc(num1) * num2}`);