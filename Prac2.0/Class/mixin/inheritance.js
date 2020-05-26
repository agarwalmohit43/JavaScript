let sayMixin = {
    say(phrase) {
        console.log(phrase);
    }
};
let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.create to set the prototype here)
    sayHi() {
// call parent method
        super.say(`Hello ${this.name}`); // (*)
    },
    sayBye() {
        super.say(`Bye ${this.name}`); // (*)
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}
// copy the methods
Object.assign(User.prototype, sayHiMixin);
// now User can say hi
new User("Dude").sayHi();

