function sayHi() {
    console.log(this.name);
}
let user = { name: "John" };
let admin = { name: "Admin" };
// use call to pass different objects as "this"
sayHi.call( user ); // John
sayHi.call( admin ); // Admin

function speakName(phrase) {
    console.log(phrase + ' ' + this.name );
}
speakName.call(user, 'Hello');
speakName.call(admin, 'Hello')

let worker = {
    someMethod() {
        return 10;
    },
    slow(x) {
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if(cache.has(x)) return cache.get(x);

        let result = func.call(this, x);
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow);
worker.slow(2)
worker.slow(5)