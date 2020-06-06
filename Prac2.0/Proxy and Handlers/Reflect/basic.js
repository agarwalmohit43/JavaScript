let testUser = {};

Reflect.set(testUser, 'name','Mohit')

console.log(testUser)

let user = {
    _name: "Guest",
    get name() {
        return this._name;
    },
    set name(value) {
        this._name = value;
    }

}
user = new Proxy(user, {
    get(target, p, receiver) {
        console.log(`GET ${p}`)
        // return Reflect.get(target,p,receiver);
       return  Reflect.get(...arguments); //alternative code for above line
    },

    set(target, p, value, receiver) {
        console.log(`SET ${p} = ${value}`)
        // return Reflect.set(target, p , value, receiver)
        return Reflect.set(...arguments)
    }
})

user.name = 'Mohit';
// console.log(user.name)

let admin = {
    __proto__: user,
    _name: "Admin"
};

console.log(admin.name)