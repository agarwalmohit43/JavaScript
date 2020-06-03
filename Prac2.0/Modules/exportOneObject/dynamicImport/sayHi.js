export function hi() {
    console.log(`Hello`);
}

export function sayBye(name) {
    console.log(`Bye ${name}`)
}

export default class {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name)
    }
}

