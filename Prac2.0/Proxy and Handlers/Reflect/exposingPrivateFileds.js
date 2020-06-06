class User {
    #name = "Mohit";

    getName() {
        return this.#name;
    }
}
let user = new User();
console.log(user.getName()) //user

user = new Proxy(user, {
    get(target, p, receiver) {
        let value = Reflect.get(...arguments);
        return typeof value == 'function' ? value.bind(target) : value;
    }
})

console.log(user.getName())//