export let admin = {
    name : 'Mohit'
}

let user = {

}

function display() {
    console.log(`User: ${user.name}`)
}

class userDetails {
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log(this.name)
    }
}
let sayHi = (name) => console.log(`Hi ${name}`);
let sayBye = function (name) {
    console.log(`Bye ${name}`);
}

function defaultFunctionCheck() {
    console.log(`defaultFunctionCheck called`)
}

export {userDetails, user, display, sayHi as Hi, sayBye, defaultFunctionCheck as default};