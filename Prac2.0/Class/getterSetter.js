class User {
    constructor(name) {
        this.name = name;
    }

    get name() {
        return this._name;
    }

    set name(v) {
        if(v.length < 4) return console.log('Name too short')
        else this._name = v;
    }
}

let testUser = new User('Mohit');
console.log(testUser.name);
testUser.name = 'ILU';
testUser.name = 'Prachi'
console.log(testUser.name);

console.log(Object.getPrototypeOf(testUser)) // User {}
console.log(Object.getOwnPropertyNames(testUser)) // [ '_name' ]

