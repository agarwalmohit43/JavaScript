/**
 * %o — It takes an object,
 %s — It takes a string,
 %d — It is used for a decimal or integer These placeholders can be represented in the console.log as below
 */

const user = { "name":"John", "id": 1, "city": "Delhi"};
console.log("Hello %s, your details %o are available in the object form", "John", user);

//add CSS to console messages
console.log('%c The text has blue color, with large font and red background', 'color: blue; font-size: x-large; background: red');

//display data in a tabular format using console object
const users = [{ "name":"John", "id": 1, "city": "Delhi"},
    { "name":"Max", "id": 2, "city": "London"},
    { "name":"Rod", "id": 3, "city": "Paris"}];
console.table(users);


// Shortcut,easiest multi condition checking
if (['first', 1, 'second', 2].indexOf(input) !== -1) {
    //someFunction();
}

//detect primitive or non primitive value type
let myPrimitive = 30;
let myNonPrimitive = {};
function isPrimitive(val) {
    return Object(val) !== val;
}

isPrimitive(myPrimitive);
isPrimitive(myNonPrimitive);