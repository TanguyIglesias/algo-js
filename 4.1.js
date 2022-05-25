const readlineSync = require("readline-sync");

/** 
 * [calcSurface description]
 * @param  {[Number]} a [Length]
 * @param  {[Nummber]} b [width]
 * @return {[Number]}[SurfaceRectangle]
 */
////////////////////////////////////

let calcSurface = (a, b)=> {
    return a * b;
};

let length=new Number(readlineSync.question("Give me a length of a rectangle: "));
let width=new Number(readlineSync.question("Give me a width of a rectangle: "));

console.log(`La surface du rectangle est de ${calcSurface(length, width)}m²`);