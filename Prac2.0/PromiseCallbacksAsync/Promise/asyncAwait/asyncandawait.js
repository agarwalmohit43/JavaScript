const fetch = require("node-fetch");

//async before function means a function always returns a promise
async function f() {
    return 1
}
f().then(console.log)

//await makes JavaScript wait until that promise settles and returns its result
//await only works inside an async function

async function f1() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('awaitExample'), 2000)
    })
    let result = await promise;
    return result;
}

f1().then(console.log)
