'use strict'
let user ={
    name : "Mohit",
    roll: 25,
};

function sayHi() {
    console.log( this.name );
}

user.sayHi = sayHi;
user.sayHi();
// sayHi(); in strict mode, this is not global reference is needed
