function sumAllNumRec(n) {
    if (n === 1 )
        return 1;
    return n + sumAllNumRec(n-1);
}

function sumAllNumFor(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++ ) {
        sum += i;
    }
    return sum
}

function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumAllNumFor(100000)) //Rec won't work with such huge number due to max stack size.
console.log(sumTo(100000)) 
console.log(sumAllNumRec(100))
