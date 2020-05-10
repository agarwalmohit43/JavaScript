let num1 = 100000;
let num2 = 1e5;
console.log(num1 === num2);

/**
 * Math function in JS
 * */

let num3 = 3.5;
console.log(Math.floor(num3));
console.log(Math.ceil(num3));
console.log("trunc: " + Math.trunc(num3));
console.log(Math.round(num3));

// if we want to round number to 2 digit.
let num4 = 3.85667821;

console.log((Math.floor(num4 * 100)) /100);
console.log(num4.toFixed(2)); //internally uses Math.round

console.log(2e307);

console.log((0.1 + 0.2).toFixed(1) == 0.3);

console.log((num4.toFixed(5)));

console.log(0.1.toFixed(20));

console.log(Object.is(num1, num3) === false)

console.log(Math.random().toFixed(1)*1e2)

console.log(Math.pow(2,10) === (2 ** 10));