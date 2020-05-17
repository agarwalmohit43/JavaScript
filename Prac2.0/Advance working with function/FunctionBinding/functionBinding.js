let user = {
    firstName : 'Mohit',
    sayHi(){
        console.log(`Hello ${this.firstName}`)
    }
}
/* //bind all function in user object
for (let key in user) {
    if (typeof user[key] == 'function') {
        user[key] = user[key].bind(user);
    }
}
*/

let bindUser = user.sayHi.bind(user); // bindUser uses the pre-bound value

setTimeout(bindUser, 2000) //Hello Mohit, with func.bind we can restore this to bindUser too
setTimeout(user.sayHi, 2000) //Hello undefined, since this has been lost
setTimeout(() => user.sayHi(), 2000) // this is restored, but below code replaces value for sayHi()

user = {
    sayHi() { console.log("Another user in setTimeout!"); }
};




let userName = {
    firstName: 'Prachi'
}

function func(phrase) {
    console.log(`${phrase}, ${this.firstName}`)
}

let popUserName = func.bind(userName);
popUserName('Hello')