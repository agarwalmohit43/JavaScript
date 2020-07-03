/*
some(), every(), reduce(), map(), flat(), filter(), forEach(), findIndex(), find(), sort()
concat(), fill(), includes(), reverse(), flatMap()
*/

/**
 * some() vs every() => return type (true/false)
 * some()
 * when any element in array satisfy the given condition then it return true else vice versa
 *every()
 * when every element in array satisfy the given condition then it return true else vice versa
 */
console.log([1,2,3,4,5].some((item)=> item >5));
console.log([1,2,3,4,5,6].some((item)=> item >5));

console.log([1,2,3,4,5,6].every((item)=> item >5));
console.log([1,2,3,4,5,6].every((item)=> item >= 1));

/**
 * reduce(), map()
 * reduce() => number, return single value by manipulating array elements
 * map()=> array, return array by mapping each elements in array
 * map() return new array, not in place
 *
 */
let bombardArrayElemetns = [5,5,5,5,1,8,9,8,7,9,8];

console.log([1,2,3,4,5].reduce((prev,curr) => prev+curr,0));
console.log([1,2,3,4,5].map((item) => item * 2));

console.log(bombardArrayElemetns.reduce((prev, curr) =>
    (prev.includes(curr) ? prev: [...prev,curr]),[])) //[ 5, 1, 8, 9, 7 ]



/**
 * flat() return array
 * arr.flat([depth]);
 */
console.log([1,2,[3,4,[5,6]]]); //[ 1, 2, [ 3, 4, [ 5, 6 ] ] ]
console.log([1,2,[3,4,[5,6]]].flat(Infinity));//[ 1, 2, 3, 4, 5, 6 ]


/**
 * filter() => array, filters out array element on the given condition.
 */
console.log([1,2,3,4,5,6].filter((item) => item > 3));
console.log(bombardArrayElemetns.filter((item, index,arr) => {
    if(bombardArrayElemetns.indexOf(item) === index) return item
})); //[ 5, 1, 8, 9, 7 ]

function isPrime(num) {
    for (let i = 2;i <= Math.sqrt(num);i++ ) {
        if ( num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
console.log(bombardArrayElemetns.filter(isPrime)
    .reduce((prev,curr) => (prev.includes(curr)) ? prev: [...prev,curr],[]));


/**
 * forEach() => iterates over each element
 * expects a synchronous callback
 */
[1,2,3,4,5].forEach((item,index,arr) => {
    console.log(`Item-> ${item}, Index-> ${index} of ${arr}`);
})

/**
 * findIndex() => index of the found element
 */
console.log([1,2,3,4,5].findIndex((item) => item > 2)); //2
console.log([1,2,3,4,5].findIndex((item) => item === 1)); //0
console.log([1,2,3,4,5].findIndex((item) => item === 9)); //-1
console.log([1,2,3,4,5].findIndex(isPrime)); //1, since 2 is consider as prime


/**
 * find() => return matching elements
 */
let inventory = [{name: 'banana',quantity: 2},{name: 'apple',quantity: 8},{name: 'orange',quantity: 5}];
console.log(inventory.find((item) => item.name === 'apple')); //{ name: 'apple', quantity: 8 }
console.log(inventory.find(({name}) => name === 'apple')); //{ name: 'apple', quantity: 8 }

/**
 * sort() => array, in place sorting happens
 * we need comparable function
 */
console.log([8,1,5,48,7].sort((a,b) => a-b)); //[ 1, 5, 7, 8, 48 ]
console.log([8,1,5,48,7].sort()); //[ 1, 48, 5, 7, 8 ]

/**
 * concat() => array, concatenates two arrays
 */
console.log([1,2,3,4].concat(['a','b'])); //[ 1, 2, 3, 4, 'a', 'b' ]
console.log([1].concat(['a']).concat([{name: 'banana',quantity: 2}])); //[ 1, 'a', { name: 'banana', quantity: 2 } ]

/**
 * fill() => array, repalces every element with the element passed in fill()
 * in-place
 */
console.log([1,2,3].fill(5));
console.log([1,2].fill({name: 'banana',quantity: 2})); //[ { name: 'banana', quantity: 2 }, { name: 'banana', quantity: 2 } ]

/**
 * includes() => true/false
 * case-sensitive
 */
console.log([1,2,4,8].includes(5)) //false
console.log([1,2,4,8].includes(8)) //true
console.log([1,9,2,4,8].includes(9,2)) //false, after/from index 2 no 9 appears
console.log([1,9,2,4,8].includes(9,1)) //true, after/from index 1 -> 9 appears
console.log([1,2,4,8,"A"].includes('a')) //false
console.log([1,2,4,8,"A"].includes('A')) //true

/**
 * reverse() => array
 * in place
 */
console.log([1,2,3,4].reverse()) //[ 4, 3, 2, 1 ]


/**
 * flatMap() => array
 * It combines flat() and map() in one function.
 */
console.log([[1],[2]].flatMap((item) => item*2)) //[ 2, 4 ]
console.log([[1],[2]].flat().map((item) => item*2)) //[ 2, 4 ]
console.log([[1],[2,[5,4]]].flat().map((item) => item*2)) //[ 2, 4, NaN ]
console.log([[1],[2,[5,4]]].flat(Infinity).map((item) => item*2)) //[ 2, 4, 10, 8 ]



