/***
 * using map function
 * @type {({name: string, id: string, age: number}|{name: string, id: string, age: number}|{name: string, id: string, age: number})[]}
 */

let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupByIdMap(users) {
    return users.map((item) => {
        return {[item.id]: item};
    });
}

function groupById(users) {
    return users.reduce((obj, val) => {
        obj[val.id] = val;
        return obj
    } ,{})
}
let usersById = groupById(users);



console.log(usersById )