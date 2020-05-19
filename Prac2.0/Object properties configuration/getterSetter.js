/**
* get/set are called accessor
* */

let user ={
    name : "Mohit",
    surname : 'Kumar',
    birthDay : new Date(1995, 3, 28),

    get fullName () {
        return `${this.name} ${this.surname}`;
    },

    set fullName(val) {
        [this.name, this.surname] = val.split(' ');
    },

    get lastName(){
        return this._lastName;
    },

    set lastName(v){
        this._lastName = v;
    }
}

console.log(user.fullName);
user.fullName = 'Mohit Prachi Kumar'
console.log(user.fullName);

user.lastName = 'Kumar'
console.log(user.lastName) //Kumar
console.log(user._lastName) //Kumar

// writable and value are not supported for accessor
let desc = Object.getOwnPropertyDescriptor(user, 'fullName');
let desc2 = Object.getOwnPropertyDescriptor(user, 'lastName'); //getter setter
let desc3 = Object.getOwnPropertyDescriptor(user, '_lastName'); //data property
console.log(desc);
console.log(desc2);
console.log(desc3);

//create accessor property
Object.defineProperty(user, 'firstName', {
    get() {
        return this.name
    },

    set(v) {
        if(v.length < 4) return console.log('Name too short');
        console.log('firstName setter : ' + v);
        this.name = v;
    },
    enumerable: true
})
console.log(Object.keys(user).map((item) => (`${item} -> ${typeof item}`)));

user.firstName = 'Prachi';
console.log(user.firstName); // Prachi
user.firstName = 'ILU' //Name too short
console.log(user.firstName) //Prachi

Object.defineProperty(user, 'age', {
    get() {
        return (new Date().getFullYear() - this.birthDay.getFullYear());
    }
})

console.log('Age:' + user.age);