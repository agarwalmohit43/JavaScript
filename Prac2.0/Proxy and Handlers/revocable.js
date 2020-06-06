let revokes = new WeakMap()

let user = {
    name : 'Mohit'
}

let {proxy, revoke} = Proxy.revocable(user, {});

revokes.set(proxy,revoke)
console.log(proxy.name);


// ..later in our code..
revoke = revokes.get(proxy);
revoke();

try{
    console.log(proxy.name) // proxy has been revoked
} catch (e) {
    console.log(e.name)
}