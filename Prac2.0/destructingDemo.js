/**
 * destructing in array
 */


let user = {};
[user.firstName, user.lastName] = "Mohit Kumar".split(' ');
console.log(user.firstName + ', ' + user.lastName);

let arr = [['Mohit', 'Kumar'], ['Prachi', 'Pawar']];
let [firstName, lastName] = arr;
console.log(firstName + ', ' + lastName); //Mohit,Kumar, Prachi,Pawar
console.log(firstName) //[ 'Mohit', 'Kumar' ]

let [one, two, three] = new Set([1,2,3]);
console.log(three)

for (let [key, value] of Object.entries(user)) {
    console.log(`${key}  ${value}`)
}

let userMap = new Map(Object.entries(user));

for (let [key, value] of userMap) {
    console.log(`${key}  ${value}`)
}

// ...rest
let [first, second, ...rest] = ['My', 'name' ,'is', 'Mohit'];
console.log(`${first} ${second} ${rest}`); //My name is,Mohit
console.log(rest[1]) // Mohit

let [defaultName = 'Mohit', secondName = 'defaultCheck'] = ['MohitKumar'];
console.log(defaultName + ', ' + secondName)


/**
 * destructing in Object
 */
console.log("\ndestructing in Object")

let options = {
    title: "Menu",
    width: 100,
    height: 200,
    tel : 'test1',
    tel2 : 'test2',
};
let {title, width, height: h, length: l = 25, ...restKey} = options;
console.log(title) // Menu => variable name and key name should be same, order can be different
console.log(h) // :h changes the nae for that key-variable
console.log(l) // default variable -> 25
console.log(restKey.tel); //test1


/**
 * nested destructing
 */

console.log("\nnested destructing")

let nestedOptions = {
        size: {
            width: 100,
            height: 200
        },
    items: ["Cake", "Donut"],
    extra: true
};

let {
    size: { // put size here
        widths,
        height
    },
    items: [item1, item2], // assign items here
    titleq = "Menu" // not present in the object (default value is used)
} = nestedOptions;

console.log(item1)


/**
* smartFunctionParameter
 *  */

console.log("\nsmartFunctionParameter");

let optionForShowMenu = {
    title: "My menu",
    items: ["Item1", "Item2"]
};


function showMenu(title = "Untitled", width = 200, height = 100, items = [item1, item2]) {
    console.log(title)
    console.log(items[1])
}

showMenu(optionForShowMenu);