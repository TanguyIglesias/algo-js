class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    
    }
    get name(){
        return `${this.firstName} ${this.lastName}`;
    }
    set name(value){
        [this.firstName, this.lastName] = value.split(' ');
    }
}

let person = new Person("John", "Doe");
person.firstName = "Pete";
console.log(person.name);
