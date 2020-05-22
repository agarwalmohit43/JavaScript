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

let animal = new Animal('My animal');
animal.run(5) // My animal runs with the speed 5
animal.stop() // My animal is still now

class Rabbit extends Animal{
    hide() {
        console.log(`${this.name} hides`);
    }

}

new Rabbit("Rabbit").run(5);
new Rabbit("Rabbit").hide();

function f(phrase) {
    return class  {
        sayHi(){
            console.log(phrase);
        }
    }
}

class Test extends f('hello') {}
new Test().sayHi();
