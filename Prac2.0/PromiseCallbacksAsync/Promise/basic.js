let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('Done'), 1000);
})


let promise2 = new Promise(function (resolve, reject) {
    setTimeout(() => reject(new Error('Whooo')), 1000);
})

// promise.then(console.log) //Done, shortcut for result part of promise

// promise2.catch(console.log) //Error: Whooo, shortcut for reject part of promise.
// promise2.then(null, console.log) //Error: Whooo, shortcut for reject part of promise.

promise.then(
    function (result) {
        console.log(result)
    },
    function (error) {
        console.log(error)
    }
)

promise2.then(
    function (result) {
        console.log(result)
    },
    function (error) {
        console.log(error)
    }
)

//finally
new Promise((resolve, reject) => {
    setTimeout(() => resolve("result"), 2000)
})
    .finally(() => console.log("PromiseCallbacksAsync ready"))
    .then(result => console.log(result));

new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('error occurred')), 1000);
})
    .finally(() => console.log("PromiseCallbacksAsync ready"))
    .catch(err => console.log(err));