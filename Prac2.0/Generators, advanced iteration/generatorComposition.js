function* generatorSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

function* generatePassCodeUsingGSeq() {
    yield*  generatorSequence(48, 57);
    yield*  generatorSequence(65, 90);
    yield*  generatorSequence(97, 122);
}

let str = '';

for (let code of generatePassCodeUsingGSeq()) {
    str += String.fromCharCode(code);
}

console.log(str)

//“yield” is a two-way road
function* gen() {
    let result = yield "2 + 2 =?"
    console.log(result)

    let result2 = yield "3 + 3 =?"
    console.log(result2)
}
let generator = gen();
console.log(`${generator.next().value}`)
console.log(generator.next(4).value)
console.log(generator.next(9).done)