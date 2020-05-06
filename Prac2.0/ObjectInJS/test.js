let user;
user = {
    name: "Mohit",
    age: 25,
    isAvailable: true,
    "Multi Word" : true,
    Test : true,
    2:2, // check order for the object
    1:1,
};
console.log(user.isAvailable);

//set
user.phone = true;
user["Two Words"] = true;

//delete
delete user.isAvailable;

//get
console.log(user.name);
console.log(user.phone);
console.log(user.isAvailable); //undefined as the property has been deleted
console.log(user["Multi Word"]);
console.log(typeof user["Two Words"]);
console.log(user["Test"]);

/**
 * return object as value
 */

let details = (name,age) => {
    return{
        name:name,
        age: age,
        dummy:true
    }
};
let person = details("John",25);
console.log(person.name + ", " + person.age + ", " + person.dummy);

let obj = {};
obj.__proto__ = 5; // assign a number
console.log(obj.__proto__);

//access property which is not present result undefined
console.log(user.noSuchProperty === undefined);

// 'in' to check key presence returns boolean

console.log('age' in user);

//for in iterates all the key
for(let key in user){
    console.log("Key: " + key + ", Value: " + user[key]);
}


/**
 * object referencing
 */
console.log("object referencing \n");

let obj1 = {};
let obj2 = obj1;

console.log(obj1 == obj2);
console.log(obj1 === obj2);

obj2.test = 5;

console.log(obj1.test);
console.log(obj1 == obj2);
console.log(obj1 === obj2);

/**
 * const object
 */
console.log("const object");

const personDetails = {name:"Pete",};

personDetails.age = 25;
console.log(personDetails.age);
personDetails.name = "Mohit";
console.log(personDetails.name);

/**
 * Object cloning/ replicating
 */
console.log("\nObject cloning/ replicating");

let newObject = {};
Object.assign(newObject,user);

for (let key in newObject) {
    console.log("Key: " + key + ", Value: " + newObject[key]);
}

let newObject2 = {name:"Prachi"};
Object.assign(newObject2,user);

for (let key in newObject2) {
    console.log("Key: " + key + ", Value: " + newObject2[key]);
}

//cloning to empty object
console.log("\nCloning to empty object")
let clone = Object.assign({},user);
console.log(clone.name);


//nested object
console.log("\nnested object");
let nestedObject = {
    name : "Test",
    size : {
        height : 2,
        width : 3,
    }
};

console.log(nestedObject.size.height);

//cloning nestedObject = deep cloning
console.log("\ncloning nestedObject = deep cloning");
let clonningAPI = require('clone');
let clone2 = clonningAPI(nestedObject);

console.log(clone2.size.height);
console.log(clone2.size.height);

clone2.size.height = 5;
console.log(nestedObject.size.height);
console.log(clone2.size.height);
