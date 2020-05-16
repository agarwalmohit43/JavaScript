// A closure is a function that remembers its outer variables and can access them, every func in js is closures. [[Environment]] property and lexical environments work
function makeCounter(){
    let count = 0;
    return function() {
        return count++;
    };
}

let counter = makeCounter();
console.log(counter.count)
console.log(counter())
console.log(counter())
console.log(counter())

function ask(question, ...handlers) {
    let isYes = false;
    for(let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) handler();
        } else {
            handler(isYes);
        }
    }
}
// for positive answer, both handlers are called
// for negative answer, only the second one
ask("Question?", () => console.log('You said yes'), result => console.log(result),(x) => console.log('You said no'));


function sayHi() {
    console.log("Hi");
// let's count how many times we run
    sayHi.counter++;
}
sayHi.counter = 0; // initial value
sayHi(); // Hi
sayHi(); // Hi
console.log( `Called ${sayHi.counter} times` );


function makeCounterUsingFunctionProperties() {
    function counter() {
        return counter.count++;
    };
    counter.count = 1;
    return counter;
}

let count2 = makeCounterUsingFunctionProperties();
count2.count = 10;
console.log(count2());
console.log(count2());
console.log(count2());

let sayHello = function funcName(who) {
    if (who) console.log(`Hello ${who}`);
    else funcName('Guest');
}

sayHello('Mohit'); // Hello Mohit
sayHello(); //Hello Guest

console.log('new Function()')
let sum = new Function('a', 'b', 'return a + b');
console.log(sum(2,3))

let sayName = new Function('a', 'console.log(`Hello ${a} \'Agarwal\'`)');
sayName('Mohit');
