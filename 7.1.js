const readlineSync = require("readline-sync");

let guessNumber = readlineSync.question("Guess a number between 1 and 100: ");
let randomNumber = Math.floor(Math.random() * 100) + 1;
while(guessNumber != randomNumber) {
    if(guessNumber > randomNumber) {
        guessNumber = readlineSync.question("Too high. Guess again: ");
    } else {
        guessNumber = readlineSync.question("Too low. Guess again: ");
    }
}
console.log(randomNumber);