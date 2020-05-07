'use strict'
let user ={
    name : "Mohit",
    roll: 25,
    age(){
        console.log("27");
    },
};

function sayHi() {
    console.log( this.name );
}

user.sayHi = sayHi;
user.sayHi();
// sayHi(); in strict mode, this is not global so reference is needed

user.age();

(user.name === 'Mohit') ? user.sayHi() : user.age();

let test = user.sayHi();
test;

function display() {

    for(let key in user) {
        if(typeof user[key] == "function"){
            user[key]();
            console.log(key);
        } else {
            console.log(key + ", " + user[key]);
        }
    }
}
display();

if(user) console.log(true);
else console.log(false);

let ramdomNumber = Math.round((new Date().getMilliseconds())/100);
console.log(ramdomNumber);

// console.log(user);//


