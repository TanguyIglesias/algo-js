class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHello(){
        return `Hello ${this.firstName} ${this.lastName}!`;
    }
}

let person = new Person("John", "Doe");
console.log(person.sayHello());