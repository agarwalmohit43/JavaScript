fetch('https://api.github.com/users/agarwalmohit43')
    .then(response => response.json())
    .then(githubUser => new Promise(function(resolve, reject) { // (*)
        let img = document.createElement('img');
        img.src = githubUser.avatar_url;
        img.className = "promise-avatar-example";
        document.body.append(img);
        setTimeout(() => {
            img.remove();
            resolve(githubUser); // (**)
        }, 3000);
    }))
    // triggers after 3 seconds
    .then(githubUser => setTimeout(() => alert(`Finished showing ${githubUser.name}`), 1000))
    .catch(error => console.log(error.message))
