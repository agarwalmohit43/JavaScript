let user = {
    name: "John Smith",
    age: 35
};

let jsonObj = JSON.stringify(user);

let objFromJSON = JSON.parse(jsonObj);

console.log(jsonObj);
console.log(objFromJSON);