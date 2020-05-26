class User {
    constructor(name) {
        this.name = name;
    }

    sayHi(){
        console.log(this.name);
    }
}

//creating object of class
let user = new User('Mohit');
user.sayHi();
console.log('Type of class: ' + (typeof User));

let User2 = class {
    sayHi(){
        console.log('Tee');
    }
}
new User2().sayHi();

let User3 = class MyClass {
    sayHi(){
        console.log(MyClass);
    }
}

new User3().sayHi();
// console.log(MyClass) //error, MyClass definition is available inside the class only

//dynamic Class
let User4 =function makeClass(phrase) {
    return class  {
        sayHi(){
            console.log(phrase);
        }
    }
}

let testUser = User4('Test');
new testUser().sayHi() // return passed class then initiating class and calling sayHi().

/**
 * obj instanceof Class
 * internally refers
 * objA.isPrototypeOf(objB) => Class.prototype.isPrototypeOf(obj)
 * */

console.log(user instanceof User);
console.log(testUser instanceof Object)

//also works with constructor function
function test(){

}
console.log((new test()) instanceof Object)

class Animal {
    static [Symbol.hasInstance](obj) {
        if(obj.canEat === true) return true
    }
}

let obj = {canEat : true}
console.log(obj instanceof Animal) // rue: Animal[Symbol.hasInstance](obj) is called

// extended typeof and an alternative for instanceof

let Obj = Object.prototype.toString;
console.log(Obj.call(1))
console.log(Obj.call({}))
console.log(Obj.call(Array))
console.log(Obj.call([1]))
console.log(Obj.call(null))

//cutomise toString tag
let user2 = {
    [Symbol.toStringTag]: "User"
};
console.log(({}.toString.call(user2)) === '[object User]' ); //[object User]

// toStringTag for the environment-specific object and class:
// console.log( window[Symbol.toStringTag]); // window
// console.log( XMLHttpRequest.prototype[Symbol.toStringTag] ); // XMLHttpRequest
// console.log( {}.toString.call(window) ); // [object Window]
// console.log( {}.toString.call(new XMLHttpRequest()) ); // [object XMLHttpRequest]

