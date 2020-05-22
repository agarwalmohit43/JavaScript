class Animal {
    static planet = 'Earth'
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with the speed ${this.speed}`)
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} is still now`)
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal{
    hide() {
        console.log(`${this.name} hides`);
    }
}

let rabbits = [
    new Rabbit("White Rabbit", 10),
    new Rabbit("Black Rabbit", 5)
];
rabbits[1].run(10);

rabbits.sort(Rabbit.compare)
console.log(rabbits)

// lets check inheritance on static and regular methods
// inheritance on static method
console.log(Rabbit.__proto__ === Animal);

// inheritance on regular method
console.log(Rabbit.prototype.__proto__ === Animal.prototype);

