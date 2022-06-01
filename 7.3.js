// Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.

function divisors(num){
    for(let i=1; i<=num; i++){
        if(num%i==0){
            console.log(i);
        }
    }
}
console.log(divisors(10));