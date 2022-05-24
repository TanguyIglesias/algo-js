const readlineSync = require("readline-sync");

var favNumber= new Number(readlineSync.question("Quel est ton nombre préféré ?"));

while(favNumber != 42){
    console.log("Are you sure? Try again");
    var favNumber= readlineSync.question("Quel est ton nombre préféré ?");
}
console.log("Bien joué");