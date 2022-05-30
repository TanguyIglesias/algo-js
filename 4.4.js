const readlineSync = require("readline-sync");

let n= readlineSync.question("Donne un nombre: ");

/**
 * 
 * @returns {Number} [RandomNumber]
 */

let rand10= () => {
    random = Math.floor(Math.random()*10)+1 
    return random;
}

/**
 * 
 * @param {Number} n 
 */

let multiRand= (n)=>{
    for(i=0; i<n;i++){
        arr[i]=rand10()
    }
}

let average=(arr)=>{
   sum=arr.reduce((a,b)=> a + b,0);
    return sum/arr.length;
}

function min(arr){
    let min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
    }
    return min;
}

function max(arr){
    let max = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
let arr=[];
multiRand(n)
console.log(arr)
console.log(`Le minimum est de ${min(arr)}, le maximum est de ${max(arr)}, la moyenne est de ${average(arr)}`);

