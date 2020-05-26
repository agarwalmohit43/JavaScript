let sayMixin = {
    sayHi() {
        console.log(`Hello ${this.name}`)
    },
    sayBye() {
        console.log(`Bye ${this.name}`)
    }
}

class User {
    constructor(name) {
        this.name = name;
    }
}

Object.assign(User.prototype, sayMixin);

//There’s no inheritance, but a simple method copying
new User('Mohit').sayHi();
new User('Mohit').sayBye();

