const readlineSync = require("readline-sync");

let favNumber= new Number(readlineSync.question("Quel est ton nombre préféré ?"));

while(favNumber != 42){
    console.log("Are you sure? Try again");
     favNumber= readlineSync.question("Quel est ton nombre préféré ?");
}
console.log("Bon choix");