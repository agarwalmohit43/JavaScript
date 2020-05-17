let timeId = setTimeout(() => console.log('hello setTimeout'), 2000);

let sayHi = () => console.log('sayHi');
setTimeout(sayHi,3000)

console.log(timeId)
clearTimeout(timeId);
console.log(timeId)


console.log('setInterval');
let timerId = setInterval(() => console.log('hello setInterval -> ' + new Date().getSeconds()), 1000);
setTimeout(() => clearInterval(timerId), 5000);

console.log('nested setTimeout are more flexible than setInterval');
let count = 2000;
let timerId1 = setTimeout(function tick() {
    console.log('tick -> ' + new Date().getSeconds());
    timerId1 = setTimeout(tick, count += 2000);
},2000);

let i = 1;
setInterval(function() {
    func(i++, 'setInterval');
}, 1000);
setTimeout(function run() {
    func(i++, 'setTimeout');
    setTimeout(run, 1000);
}, 1000);

function func(x, y) {
    console.log(x + y);
}

setTimeout(() => console.log('World'));
console.log('Hello')