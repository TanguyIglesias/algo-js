let arr= [1,4,7,-12];

function posNum(value){
    
    if(value<0){
        value=0;
    }
    return value
}

let arrPos= arr.filter(posNum);
if (arrPos==0){
    console.log(0);
}
else{

    let sum= arrPos.reduce(function(a, b){
        return a + b;
    });
    console.log(sum);
}