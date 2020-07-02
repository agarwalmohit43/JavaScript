let user = {
    age: 25,
    get name() {
        return this._name;
    },
    set name(val) {
        this._name = val;
    }
}
user.name = 'MP'
console.log('Name: ' + user.name)

let userCopy = Object.defineProperties({},Object.getOwnPropertyDescriptors(user));

console.log(userCopy);




