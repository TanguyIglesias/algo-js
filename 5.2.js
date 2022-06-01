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

function randomizeCast(tvSerie){
    let name2= readlineSync.question("Quel est le nom de ta deuxième série préférée? : ");
    let ProdYear2= readlineSync.question("Quel est l'année de production de ta seconde série préférée? : ");
    let Cast2= readlineSync.question("Quel est le cast de ton autre série préférée? : ");
    let arrCast2=[];
    
    arrCast2.push(Cast2);
    for (i=1;Cast2 !== "ok";i++){
        Cast2= readlineSync.question("Qui d'autre? (écrivez 'ok' pour arrêter) : ");
        arrCast2[i]=Cast2;
    }
    
    arrCast2.pop();
    arrCast2.push(...tvSerie.Cast);

    let randomArrCast= [];
    randomArrCast.push(arrCast2);
    randomArrCast= randomArrCast[0].sort(function(){return 0.5-Math.random()});
    
     return {
        name: name2,
        ProdYear: ProdYear2,
        Cast: randomArrCast 
    }
}

tvSerie=askTvSerie();
randomCast=randomizeCast(tvSerie);
console.log(randomCast);


