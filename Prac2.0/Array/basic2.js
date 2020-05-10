//find value in array when dealing with objects in array

let userLog = [
    { name: 'Mohit', id: 1},
    { name: 'Prachi', id: 2},
    { name: 'MP', id: 3},
];

let requiredUserUsingItem = userLog.find(item => item.id === 1);
let requiredUserUsingItems = userLog.findIndex(index => index.id === 2);
console.log(requiredUserUsingItem.name);
console.log(userLog[requiredUserUsingItems].name)


let requiredUser = userLog.find((item, index, arr) => {
    /* using item arg
    if(item.id === 3){
        return item;
    }*/


    if(index === 2){
        return item;
    }


    // return arr.slice(2);
});
console.log(requiredUser.name);

console.log("filter func")
let userDetailFilter = userLog.filter(item => item.id >= 3);
console.log(userDetailFilter) // [ { name: 'MP', id: 3 } ]

console.log("Map");// applies on each element
let lengths = ["Bilbo", "Gandalf", "Nazgul",5].map(item => (typeof item === 'string') ? item : NaN);
console.log(lengths)

console.log(userLog.map(index => index.id === 2)); // return true false for object that has id === 2


let arr = [1,2,3,14,5];
arr.sort(comapareNumeric) // sort in string form by default
console.log(arr);

function comapareNumeric(a, b) {
    if(a>b) return 1;
    if(a===b) return 0;
    if(a<b) return -1;
}
let arr2 = [1, -2, 15, 2, 0, 8];
console.log(arr2.sort((a,b) =>  a-b ));
console.log(arr2.reverse());

let countries = ['Österreich', 'Andorra', 'Vietnam'];
console.log(countries.sort( (a, b) => a.localeCompare(b)));

let names = 'Bilbo, Gandalf, Nazgul';
let splitedNames = names.split(', ',3); //limit the length on the new array
splitedNames.forEach((item, index, arr) => {
    console.log(`Names: ${item} index at ${index} in arr ${arr}`);
});

splitedNames.join(',');
console.log(splitedNames)


let arr3 = [1,2,3,4,5];
let test = arr3.reduce((prevNumVal, currNumVal, index, arr) => {
    console.log("prevNumber: " + prevNumVal + ", currentNum: " + currNumVal + ", index: "+index);
    return (prevNumVal + currNumVal);
   })

console.log(test) // 15

let result = arr3.reduce((prevNumer,currentNumber) => prevNumer + currentNumber, 0); //0 is the initial value
console.log(result) // 15
let sum = 0;
let testMap = arr3.map(item => {
    sum += item;
    return sum;
});
console.log(testMap) // [ 1, 3, 6, 10, 15 ]
//*reduce returns value at last whereas map return the value one by one so reduce is preferred for sum of array


let voteEligibilty = {
    minAge : 18,
    canVote(people) {
       return people.age >= this.minAge;
    },
}
let people = [
    { age : 18, name: 'A' },
    { age : 5, name: 'B' },
    { age : 58, name: 'C' },
    { age : 4, name: 'D' },
    ];

let peopleAllowedForVoting = people.filter(item => voteEligibilty.canVote(item));
console.log(peopleAllowedForVoting)