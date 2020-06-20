function counter() {
    let count = 0;

    return function() {
        return count++;
    }
}
let counters = counter();
let counters2 = counter();
console.log(counters())
console.log(counters())
console.log(counters2())
console.log(counters())

