const readlineSync = require("readline-sync");

let n= new Number(readlineSync.question("Donne un nombre: "));
var sum=0;
var i=0;

for (i=0; i<n; i++){
    let n= new Number(readlineSync.question("Donne un autre nombre: "));
    sum+=n;
}
console.log(sum);