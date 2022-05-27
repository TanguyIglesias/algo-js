

// function rand10(){
//     let random=Math.floor(Math.random()*10)+1;
//     return random;
// }
// let multiRand= (NbrClient)=>{
//     for(i=0; i<NbrClient;i++){
//         TpsClient[i]=rand10()
//     }
// }
function sum(arr){
    let sum=arr.reduce((a,b)=> a + b);
    return sum;
}
function min(TpsClient){
    let min = TpsClient[0];
    for(let i = 1; i < TpsClient.length; i++){
        if(TpsClient[i] < min){
            min = TpsClient[i];
        }
    }
    return min;
}

function max(TpsClient){
    let max = TpsClient[0];
    for(let i = 1; i < TpsClient.length; i++){
        if(TpsClient[i] > max){
            max = TpsClient[i];
        }
    }
    return max;
}
function tps(NbrCaisse){
    if (NbrCaisse==1){
        return sum(TpsClient);
    }
    if(NbrCaisse==2 && TpsClient[0]>(sum(TpsClient)-TpsClient[0])){
        return TpsClient[0];
    }
    if(NbrCaisse==2 && TpsClient[0]<(sum(TpsClient)-TpsClient[0])){
        return (min(TpsClient)) + (max(TpsClient));
    }
    if(NbrCaisse>2){
        return 'error';
    }
}

let NbrClient=5;
let TpsClient=[2,3,10];
let NbrCaisse=2;
let TpsAttente=0;

// multiRand(NbrClient);
TpsAttente=tps(NbrCaisse);

console.log(TpsClient);
console.log(TpsAttente);