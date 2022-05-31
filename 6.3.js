class Animal {
    sayHello() {
        return `${this.constructor.greeting}! I'm ${this.name}!`;
    }
}

class Chien extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    static get greeting() {
        return 'Woof';
    }
}

class Chat extends Animal {
    constructor(name) {
        super();
        this.name = name;
    }
    static get greeting() {
        return 'Meow';
    }
}

let dog = new Chien('Fido');
let cat = new Chat('Fluffy');

console.log(dog.sayHello());
console.log(cat.sayHello());
