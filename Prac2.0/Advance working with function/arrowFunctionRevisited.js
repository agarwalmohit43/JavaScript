/**
 * Arrow functions do not have "arguments"
 * If we access the arguments object from an arrow function, it takes them from the outer
 *“normal” function.
 * */

function f() {
    let showArg = () => console.log(arguments[0]);
    showArg();
}
f(1); // 1, this example is for above comments section

function deferWrapper(func, ms) {
    return function () {
        setTimeout(() => func.apply(this, arguments), ms) //arguments
    }
}

function sayHi(...who) {
    console.log(`Hello ${who}`)
}

let sayNow = deferWrapper(sayHi, 2000);
sayNow('Mohit', 'test');
sayHi('Prachi');