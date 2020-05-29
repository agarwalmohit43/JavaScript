function loadGithubUser(name) {
    return fetch(`https://api.github.com/users/${name}`)
        .then(response => response.json());
}

function showAvatar(githubUser) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(() => {
            img.remove();
            resolve(githubUser); // (**)
        }, 3000);
    })
}

// Use them:
loadGithubUser('agarwalmohit43')
    .then(showAvatar)
    .then(githubUser => setTimeout(() => alert(`Finished showing ${githubUser.name}`), 1000))
    .catch(err => {
        console.log('Catch-Block')
        console.log(err.name)
    })