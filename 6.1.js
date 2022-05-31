class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let cat= new Cat ("Skitty", 9);

let cat2 = new Cat ("Pixel",6);

console.log(`Mon premier chat s'appelle ${cat.name} et il a ${cat.age} ans`);

console.log(`Mon deuxième chat s'appelle ${cat2.name} et il a ${cat2.age} ans`);