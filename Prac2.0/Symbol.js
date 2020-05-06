let id = Symbol.for("symbolDesc") // global Symbol
let roll = Symbol("symbolRol"); // local symbol
let sameSymbol = Symbol.for(("symbolDesc"));

console.log(id.toString());
console.log(id.description);

let user = {
    name : "John",
    [roll] : 43,
};

user[id] = 1;
console.log(user[id]);
console.log(user[roll]);

console.log(id === sameSymbol);

for ( let key in user) {
    console.log(key);
}

console.log(Symbol.for("id"));
console.log(Symbol.keyFor(id));

console.log(Object.getOwnPropertySymbols(user));
console.log(Reflect.ownKeys(user));
console.log(Symbol.toPrimitive);
