async function showAvatar() {

    //fetch the user details from github
    let request = await fetch(`https://api.github.com/users/agarwalmohit43`)
    let githubUser = await request.json();

    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);

    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
    img.remove();

    return githubUser;
}

showAvatar()
    .then(githubUser => setTimeout(() => alert(`Finished showing ${githubUser.name}`), 1000))
