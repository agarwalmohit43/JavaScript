let map = new Map();
map.set(1,'numeric1');
map.set('1','string1');
map.set(2,'deleteCheck');
console.log(map.size);
console.log(map.get(1));
console.log(map.get('1'));
console.log(map.delete(2));
console.log(map.has(1))
console.log(map)

for (let entry of map){
    console.log(entry)
}

//forEach map
console.log("forEach")
map.forEach((val, key, map) => {
    console.log(`Key: ${key}, Value: ${val}`);
})

console.log("creating a map from plain object");
let user = {
    1 : 'test',
    name : "Mohit",
    age : 25,
};

let userMap = new Map(Object.entries(user));
console.log(userMap);

let objFromUserMap = Object.fromEntries(userMap);
console.log(objFromUserMap);
for (let prop in objFromUserMap) {
    console.log(prop)
}