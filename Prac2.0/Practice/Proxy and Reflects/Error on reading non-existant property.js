let user = {
    name: "John"
};

function wrap(target) {
    return new Proxy(target, {
        get(target, p, receiver) {
            if (p in target) {
                return Reflect.get(...arguments)
            } else {
                throw new ReferenceError(`Property doesn't exist: "${p}"`)
            }
        }
    });
}
/*
user = new Proxy(user, {
    get(target, p, receiver) {
        if (p in target) {
            return Reflect.get(...arguments)
        } else {
            throw new ReferenceError(`Property doesn't exist: "${p}"`)
        }
    }
});*/

user = wrap(user);

console.log(user.name); // John
try {
    console.log(user.age); // ReferenceError: Property doesn't exist "age"
} catch (e) {
    console.log(e.message)

}