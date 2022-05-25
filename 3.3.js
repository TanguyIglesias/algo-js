let arr= [1, 2, 3, 4, 5];
let map= arr.map(x=>x);
console.log(map);

let arr2=  [];
arr2.push.apply(arr2, map);
console.log(arr2);
