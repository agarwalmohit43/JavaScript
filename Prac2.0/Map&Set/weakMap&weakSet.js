let john = {name: 'Mohit'};
let arr = [john];
// john = null;
// console.log(arr);

let map = new Map();
map.set(john, john.name);
john = null;
console.log(map)

let pete = {name: 'Pete'}
let weakMap = new WeakMap();
weakMap.set(pete, pete.name);
console.log(weakMap.get(pete));
pete = null;
console.log(weakMap.get(pete))