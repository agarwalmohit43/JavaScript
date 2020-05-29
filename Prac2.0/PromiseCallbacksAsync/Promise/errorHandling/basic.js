const fetch = require("node-fetch");
fetch('https://no-such-server.blabla')
    .then(response => response.json())
    .then(user => {
        console.log(user.login)
        console.log(user.html_url)
    }).catch(err => {
    console.log('Catch-Block')
    console.log(err.name) //FetchError
});