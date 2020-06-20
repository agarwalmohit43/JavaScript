let user ={
    name : 'Mohit',
    testEnu : 'enukeyTest'
}

let desc = Object.getOwnPropertyDescriptor(user, 'name');
console.log(typeof desc);
console.log(JSON.stringify(desc, null , 2));

Object.defineProperty(user, 'age', {value: 25});

console.log('Age: ' + user.age); //{ name: 'Mohit' }

let desc2 = Object.getOwnPropertyDescriptor(user, 'age');
console.log(JSON.stringify(desc2, null, 2));

// change the flag of user.name
Object.defineProperty(user, 'name' , {
    writable: false
});

user.name = 'Pete'; //Mohit, above writable has been made false for property name. Error only in strict mode
console.log(user.name);

Object.defineProperty(user, 'id', {
    value : 1,
    enumerable : true,
    configurable : true
})

user.id = 5;
console.log('id: ' + user.id);

console.log(user); //{ name: 'Mohit', testEnu: 'enukeyTest', id: 1 }
//exclude enuKey from iterator
Object.defineProperty(user, 'testEnu' , {
    enumerable : false
})
console.log(user); //{ name: 'Mohit', id: 1 }

/**
 * “Non-configurable” doesn’t mean “non-writable”
 * Notable exception: a value of non-configurable, but writable property can be changed.
 * The idea of configurable: false is to prevent changes to property flags and its
 * deletion, not changes to its value.
 * */

Object.defineProperty(user, 'name', {
    configurable : false
});

user.name = 'Test';
console.log(user.name) //Mohit

//define multiple properties
Object.defineProperties(user, {
    firstName : {value: 'Prachi', writable : false, enumerable: true},
    lastName : {value: 'Mohit Kumar', writable : false, enumerable: true},
})
console.log(user)

let desc3 = Object.getOwnPropertyDescriptors(user);
console.log(desc3);

// Object.getOwnPropertyDescriptors returns all property descriptors including symbolic ones
// clone object;
let user2 = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(user2)

console.log(Object.isExtensible(user)); //true
Object.preventExtensions(user);
Object.freeze(user);
Object.seal(user);
console.log(Object.isExtensible(user)); // false
console.log(Object.isFrozen(user));
console.log(Object.isSealed(user));



