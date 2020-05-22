let animal = {
    eats : true
}

let rabbit = Object.create(animal);
console.log(rabbit.eats)
console.log(Object.getPrototypeOf(rabbit));
console.log(Object.setPrototypeOf(rabbit, {})) // un-setting from animal object to {}
console.log(rabbit.eats) //undefined
let rabbit2 = Object.create(animal,{
    jump : { value: true}
});
console.log(rabbit2.jump)
console.log(rabbit.jump) //undefined, since descriptor works on current Object

// fully identical shallow clone of obj
let clone = Object.create(Object.getPrototypeOf(animal), Object.getOwnPropertyDescriptors(animal));
console.log(clone);

//"very plain” Objects
console.log('"very plain” Objects')
let user = {}

user["__proto__"] = 'Test';
console.log(user["__proto__"]); // there is inherited getter/setter for __proto__

//to overcome this we create very plain object
let user2 = Object.create(null); // now no inheritance from Object
user2["__proto__"] = 'Test';
console.log(user2["__proto__"]); // Test, works!
console.log(user2); //[Object: null prototype] { __proto__: 'Test' }, as no parent so no toString() methods

/**
 * Object.create provides an easy way to shallow-copy an object with all descriptors:
 * let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
 * */

