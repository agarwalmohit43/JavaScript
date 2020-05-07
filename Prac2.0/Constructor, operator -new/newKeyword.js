/**
 * to create multiple object, it can be achieved by Constructor Function and new operator
 */

function User(name) {
    if (!new.target) {
        console.log(new.target);
        return  new User(name);
    }
    this.name = name,
    this.age = 25;
    this.isAdmin = false;
    this.sayHi = function () {
        return (`Name: ${this.name}`);
    }
}
/*
let test = User("Mi");// if called without new, new.target returns undefined.
console.log(test.name);
*/

let user = new User("Mohit");
// console.log(user);
console.log(user.name);
console.log(user.sayHi());


