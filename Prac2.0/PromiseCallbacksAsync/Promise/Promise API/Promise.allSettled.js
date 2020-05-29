const fetch = require("node-fetch");
let githubUserNames = ['iliakan', 'remy', 'jeresig', 'agarwalmohit43', 'false-user'];
let request = githubUserNames.map(name => fetch(`https://api.github.com/users/${name}`))

//.allSettled, for each promise we get its status and value/error .
Promise.allSettled(request)
    .then(result => result.forEach(
        (result, index) => {

            if (result.status === "fulfilled") {
                console.log(`${githubUserNames[index]}: ${result.value.status}`);
            }
            if (result.status === "rejected") {
                console.log(`${githubUserNames[index]}: ${result.status}`);
            }

        }
    ))