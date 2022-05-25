const readlineSync = require("readline-sync");

let n= readlineSync.question("Donne un nombre: ");

/**
 * 
 * @param {Number} n 
 */

let multiRand= (n)=>{
    for(i=0; i<n;i++){
        arr[i]=rand10()
    }
}

/**
 * 
 * @returns {Number} [RandomNumber]
 */

let rand10= () => {
    random = Math.floor(Math.random()*10)+1 
    return random;
}
let average=(arr)=>{
   sum=arr.reduce((a,b)=> a + b)
}
let arr=[];
multiRand(n)