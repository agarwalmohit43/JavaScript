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
