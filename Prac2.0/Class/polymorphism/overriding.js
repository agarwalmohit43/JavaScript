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

class Rabbit extends Animal{

    constructor(name, earLength) {
        super(name);
        this.speed = 0;
        this.earLength = earLength;
    }

    get earLength(){
        return this._earLength;
    }

    set earLength(v) {
        this._earLength = v;
    }

    hide() {
        console.log(`${this.name} hides`);
    }

    stop() {
        // super.stop();
        setTimeout(() => super.stop(), 1000);
        this.hide();
    }
}

new Rabbit("Rabbit", 15).run(5);
console.log(new Rabbit("Rabbit", 25).earLength)
new Rabbit("Rabbit", 15).stop();

