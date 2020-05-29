let arr = ['Apple', 5, {name : 'Mohit'}, () => {console.log('insideFunc')} ];

console.log(arr);
for ( let val of arr) {
    if(typeof val === "string" || typeof val === "number") {
        console.log(val)
    } else if (typeof val === "object") {
        console.log(val.name)
    } else {
        val();
    }
}

let fruit = ['Apple'];

// push(val), unshift(val) -> can enter multiple value at one time
console.log(fruit.push('Orange')); // enters value from the back, can enter multiple value at one time
console.log(fruit.unshift('Pineapple')) // enters value from the front
console.log(fruit) // prints the array
console.log(fruit.toString())
console.log(fruit.pop()); // remove the element from the last
console.log(fruit.shift()) // remove the element from the starting
console.log(fruit)

let arr2 = [1,2,3,4];
console.log(`${arr2}`); // 1,2,3,4
console.log(arr2); // [ 1, 2, 3, 4 ]

let testArr = ['Apple'];
testArr[999] = 'Orange';
console.log(testArr)

/**
* for ..in vs for ..of
* for ..in return index
* for ..of return value
* best practice for array use for ..of
* */
console.log("for ..in")
for (let key in arr ) {
    console.log(key);
}
console.log("for ..of")
for(let key of arr) {
    console.log(key);
}

//truncate the array
let arr2_1 = [1,2,3,4,5];

console.log(arr2_1)
console.log(arr2_1.length);

arr2_1.length = 2;
console.log(arr2_1)

arr2_1.length = 5; //once truncate occurs after increasing the size it doesn't bring back the elements
console.log(arr2_1)

let arr3 = new Array(2)
arr3[3] = 'Apple'; //accessing the index more than length still work :)
console.log(arr3)

console.log("Splice in array");
let arr4 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr4.length);
console.log(arr4.splice(2,3)); //starting from 2 remove 3 elements
console.log(arr4.length);
console.log(arr4);

// starting from index 2 remove 3 elements and add number 3 at the index
console.log(arr4.splice(2,3,3))
console.log(arr4);
console.log(arr4.splice(2)) //remove all elements from index 2
console.log(arr4.length);
console.log(arr4);

//insert at particular index
// from index 2 add number .. without removal since deleteCount is 0
console.log(arr4.splice(2,0,3,4,5,6))
console.log(arr4)
console.log(arr4.splice(-1, 0 , 10))
console.log("arr4 val: " + arr4)

//slice
console.log("Slice in array")
let arr5 = [1,2,3,4,5,6,7,8,9,10];

console.log(arr5.slice(2,5));
console.log(arr5)
console.log(arr5.slice(9));
console.log(arr5.slice()); // copy of array

console.log("concat")
console.log(arr5.concat([11,12]));
console.log(arr5)
console.log(arr5.concat(arr4))

let sampleObj = {
    name: 'Mohit',
    0 : "something",
    1 : "else",

    length : 3,
    [Symbol.isConcatSpreadable]:true, // if true allows the object elements to be added

}
console.log(arr5.concat(sampleObj));

console.log("forEach is an callback function on array elements");
arr5.forEach((item, index, arr) => {
    console.log(`${item} is at ${index} in array: ${arr}`)
});

let testArrs = ["Bilbo", "Gandalf", "Nazgul"];
testArrs.forEach(console.log);

console.log(arr5.indexOf(5,2));
console.log(arr5.indexOf('k')); // return -1 if not found, includes is preferred over indexOf 
console.log(arr5.lastIndexOf(8,10)); // till index 10 last occurrence of 8
console.log(arr5.includes(5)); // return true/false

const arr6 = [1,NaN];
console.log(arr6.indexOf(NaN) === 0); // doesn't return index 0
console.log(arr6.includes(NaN) === true)