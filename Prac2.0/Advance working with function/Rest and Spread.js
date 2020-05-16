console.log('Rest')
let sum = (...x) => x.reduce((prev, next) => prev + next , 0);
console.log("Sum: " + sum(1,2,3,4,5))

let mulitplicationTable = (x, ...y) => y.map(item => console.log(`${x} * ${item} = ${x * item}`));
mulitplicationTable(2, 1,2,3,4,5,6,7,8,9,10)

//When we want to pass array where accepting argument is list of arguments(numeric/string) value then spread comes in picture
console.log('Spread')
let arr = [19,2,48,35,72];
let arr2 = [219,12,348,305,7.2];
console.log(Math.max(...arr));
console.log(Math.max(...arr, 5e2, ...arr2, '1e5')); // mixed usage

console.log('Merged array: ' + [...arr, ...arr2])

//turn string into character of array
console.log([...'Mohit']) //[ 'M', 'o', 'h', 'i', 't' ]
console.log(...'Mohit') //M o h i t
console.log(Array.from('Mohit')) //[ 'M', 'o', 'h', 'i', 't' ] -> converts iterable to array form
console.log(...arr) //19 2 48 35 72

