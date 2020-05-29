let promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve(1) , 1000)
}).then(function (result) {
    console.log(result); // 1
    return result * 2;
}).then(function (result) {
    console.log(result) // 2
    return result * 2
}).then(function (result) {
    console.log(result) // 4
    return result * 2
})

let promise2 = promise.then(function (result) {
    console.log(result) // 8
    return new Error('Whoo Error occurred') // returns this error to promise2
})

promise2.then(function (result) {
    console.log(result) // Error: Whoo Error occurred
    return new Promise(function (resolve, reject) {
        setTimeout(() => resolve(1),2000)
    })
}).then(function (result) {
    console.log(result) // 1, after two second result is processed
})