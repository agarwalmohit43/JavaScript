function mul(a, b) {
    return a * b;
}

let doubleValue = mul.bind(null, 2); // default value of a in mul is 2 now

console.log(doubleValue(1));
console.log(doubleValue(2));
console.log(doubleValue(3));
console.log(doubleValue(4));

function partial(func, ...argsBound) {
    return function (...args) {
        return func.call(this, ...argsBound, ...args);
    }
}

let user = {
    firstName : 'Mohit',
    sayHi(time,phrase) {
        console.log(`${phrase} ${this.firstName} ${time}`)
    }
}

user.sayNow = partial(user.sayHi, new Date().getHours() + ':' + new Date().getMinutes() );
user.sayNow('Hello')