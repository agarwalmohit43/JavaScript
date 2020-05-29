class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        // console.log(resolve);
// resolve with this.num*2 after 1000ms
        setTimeout(() => resolve(this.num * 2), 1000); // (*)
    }
};

async function f() {
    let result = await new Thenable(5);
    return result;
}

f().then(console.log)

class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}
new Waiter()
    .wait()
    .then(console.log);