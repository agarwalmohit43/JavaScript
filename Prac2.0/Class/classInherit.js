class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed += speed;
        console.log(`${this.name} runs with the speed ${this.speed}`)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} is still now`)
    }
}

class Rabbit{
    hide() {
        console.log(`${this.name} hides`);
    }

}

Rabbit.prototype.__proto__ = Animal.prototype; // alternative for extend keyword
Animal.prototype.constructor = Animal
// Rabbit.prototype.constructor = Rabbit
let ra= new Rabbit('Test');
ra.run(5)

console.log(Object.getPrototypeOf(ra)) // Rabbit {}
console.log(Object.getPrototypeOf(Rabbit)) // [Function: Animal]
console.log(Object.getPrototypeOf(Rabbit).__proto__) // [Function (anonymous)]

console.log(Object.getPrototypeOf(Animal)) // [Function (anonymous)]
console.log(Object.getPrototypeOf(Animal).__proto__) // {}
console.log(Object.getPrototypeOf(Animal).__proto__.__proto__) // null

