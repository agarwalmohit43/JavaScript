function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
}

async function lJson(url) {
    let response = fetch(url);
    if (response.status === 200) {
        return await response.json();;
    }
        throw new Error(response.status);
}



loadJson('no-such-user.json')
    .catch(console.log);