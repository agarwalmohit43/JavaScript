const fetch = require("node-fetch");

Promise.all([
    new Promise(resolve => setTimeout(() => resolve(3), 3000)),
    new Promise(resolve => setTimeout(() => resolve(2), 1000)),
    new Promise(resolve => setTimeout(() => resolve(1), 1000)),
]).then(console.log)

let githubUserNames = ['iliakan', 'remy', 'jeresig', 'agarwalmohit43'];
let request = githubUserNames.map(name => fetch(`https://api.github.com/users/${name}`))

Promise.all(request)
    .then(response => {
        response.forEach(
            (response, index) => console.log(`${response.url}: ${response.status} : ${index}`)
        )
        return response;
    })
    .then(response => Promise.all(response.map(response => response.json())))
    .then(user => user.forEach(user => console.log(user.name)))

//in rejection, mmediately rejects, completely forgetting about the other ones in the list.
// results are ignored.
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve('new1'), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve('new3'), 3000))
]).then(console.log).catch(console.log);


//we can pass direct value too
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
]).then(console.log);