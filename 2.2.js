const readlineSync = require("readline-sync");

var minAge= new Number(readlineSync.question("QUel est l'age minimum ? "));
var maxAge= new Number(readlineSync.question("Quel est l'age maximal' ? "));
var currentAge= new Number(readlineSync.question("Quel est l'age actuel ? "));

if ((minAge < currentAge) && (currentAge< maxAge)){

    console.log("L'âge actuel est bien entre le min et le max");
}
else if (minAge > maxAge){
    console.log("ERROR: L'âge minimum est plus grand que l'âge maximum");
}
else{
    console.log("L'âge n'est pas entre le min et le max");
}