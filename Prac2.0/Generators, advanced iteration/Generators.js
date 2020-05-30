function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();
console.log(JSON.stringify(generator.next())) //{"value":1,"done":false}
console.log(JSON.stringify(generator.next())) //{"value":2,"done":false}
console.log(JSON.stringify(generator.next())) //{"value":3,"done":true}, reached end of function


//for..of, as it is iterable. It returns only value return using yield, no return statement is entertained
console.log(`for..of`)
for (let key of generator)  {
    console.log(JSON.stringify(key)) // 1 2
}

console.log([...generateSequence()]) //[1, 2]

//using iterable function
let range = {
    from: 1,
    to: 5,
    *[Symbol.iterator]() { // a shorthand for [Symbol.iterator]: function*()
        for(let value = this.from; value <= this.to; value++) {
            yield value;
        }
    }
};

console.log([...range]) //[ 1, 2, 3, 4, 5 ]