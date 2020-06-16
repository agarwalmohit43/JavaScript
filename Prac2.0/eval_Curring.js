eval(console.log('Hello'))

eval("let x = 5; function f() {}");
let x = 5;
eval("x = 10");
console.log(x);

function curry(f) {
    return function (a) {
        return function (b) {
            return f(a,b);
        }
    }
}

function sum(a,b) {
    return a+b
}

let curriedSum = curry(sum);

console.log(curriedSum(5)(10));