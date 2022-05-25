let arr= [1, 2, 3, 4, 5];

let sum= arr.reduce(function(previousValue , currentValue){
    return previousValue + currentValue;
});

console.log(sum/arr.length);

let arr2= [100, 101, 102];

let sum2= arr2.reduce(function(previousValue , currentValue){
    return previousValue + currentValue;
});

console.log(sum2/arr2.length);