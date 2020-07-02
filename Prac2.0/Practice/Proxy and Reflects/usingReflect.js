

let user = {
    _name: 'Guest',
    id: 1,
    get name() {
        return this._name;
    }
}

user = new Proxy(user, {
    get(target, p, receiver) {
        return Reflect.get(...arguments);
    }
})

let admin = {
    __proto__ : user,
    _name: 'Admin',
    id:2
}

console.log(admin.name);

