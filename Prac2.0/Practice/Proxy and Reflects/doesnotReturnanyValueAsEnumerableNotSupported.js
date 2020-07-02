let user = { id: 25};


user = new Proxy(user, {
    ownKeys(target) {
        return ['1']
    },
    getOwnPropertyDescriptor(target, prop) { // called for every property
        return {
            enumerable: true,
            configurable: true
            /* ...other flags, probable "value:..." */
        };
    }
});
console.log(user)
console.log( Object.keys(user) );