function average(arr) {
    sum = arr.reduce((a, b) => a + b);
    return sum / arr.length;
}

function calcDisance(A,B){
    return Math.sqrt(Math.pow(A,2)+Math.pow(B,2))
}
let array=[2,4,1,3,5,6,7,8,9,10];
function min(array){
    let min = array[0];
    for(let i = 1; i < array.length; i++){
        if(array[i] < min){
            min = array[i];
        }
    }
    return min;
}
console.log(min(array));