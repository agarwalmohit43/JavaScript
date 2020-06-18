function fib(n) {
    return (n <= 1 ) ? n : fib(n-1) + fib(n-2);
}

function fibFor(n) {
    let a = 1;
    let b = 1;
    let c = 0;
    for (let i = 3; i<= n; i++) {
        c = a + b;
        a = b;
        b = c;
    }

    return c;
}

console.log(fib(5))
console.log(fibFor(5))