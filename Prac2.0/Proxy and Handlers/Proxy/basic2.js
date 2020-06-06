let user = {
    name: "John",
    age: 30,
    _password: "***",

    checkPassword(value) {
// object method must be able to read _password
        return value === this._password;
    }
};

user = new Proxy(user, {
    get(target, prop) {
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        }
        let value = target[prop];
        return (typeof value === 'function') ? value.bind(target) : value; // (*)
    },set(target, prop, val) { // to intercept property writing
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            target[prop] = val;
            return true;
        }
    },
    deleteProperty(target, prop) { // to intercept property deletion
        if (prop.startsWith('_')) {
            throw new Error("Access denied");
        } else {
            delete target[prop];
            return true;
        }
    },
    ownKeys(target) {
        return Object.keys(target).filter((item) => !item.startsWith('_'));
    },

    getOwnPropertyDescriptor(target, p) {
        return {
            enumerable : true,
            configurable: true
        }
    }
})
console.log(Object.keys(user)); //[ 'name', 'age' ], "ownKeys" filters out _password
console.log(Object.values(user));

// "get" doesn't allow to read _password
try {
    console.log(user._password); // Error: Access denied
} catch(e) {
    console.log(e.message);
}

// "set" doesn't allow to write _password
try {
    user._password = "test"; // Error: Access denied
} catch(e) {
    console.log(e.message);
}

// "deleteProperty" doesn't allow to delete _password
try {
    delete user._password; // Error: Access denied
} catch(e) {
    console.log(e.message);
}

// "ownKeys" filters out _password
console.log(Object.keys(user)) // [ 'name', 'age', 'checkPassword' ]

let guessPass = user.checkPassword("***");
console.log(guessPass) //true


// in operator
let range = {
    start: 1,
    end: 10
}

range = new Proxy(range, {
    has(target, p) {
        return p>= target.start && p <= target.end
    }
})

console.log(5 in range)//true
console.log(50 in range)//false

// apply

function delay(f, ms) {
    return new Proxy(f, {
        apply(target, thisArg, argArray) {
            return setTimeout(() => target.apply(thisArg,argArray) , ms)
        }
    })
}
function sayHi(user) {
    console.log(`Hello, ${user}!`);
}
sayHi = delay(sayHi, 3000);
console.log(sayHi.length); // 1 (*) proxy forwards "get length" operation to the target
sayHi("John"); // Hello, John!, after 3 seconds
console.log(sayHi.length);