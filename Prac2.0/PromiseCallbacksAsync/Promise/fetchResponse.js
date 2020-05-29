const fetch = require("node-fetch");

// fetch('user.json').then(function (response) {
//     return response.text()
// }).then(function (result) {
//     console.log(result)
// })

fetch('https://api.github.com/users/agarwalmohit43')
    .then(response => response.json())
    .then(user => {
        console.log(user.login)
        console.log(user.html_url)
    });