const readlineSync = require("readline-sync");


function askTvSerie(){
    let name= readlineSync.question("Quel est le nom de ta série préférée? : ");
    let ProdYear= readlineSync.question("Quel est l'année de production de ta série préférée? : ");
    let Cast= readlineSync.question("Quel est le cast de ta série préférée? : ");
    let arrCast=[];
    arrCast.push(Cast);
    for (i=1;Cast !== "ok";i++){
        Cast= readlineSync.question("Qui d'autre? (écrivez 'ok' pour arrêter) : ");
        arrCast[i]=Cast;
    }
    arrCast.pop();
     return {
        name: name,
        ProdYear: ProdYear,
        Cast: arrCast
    }
    
}
 console.log(askTvSerie())