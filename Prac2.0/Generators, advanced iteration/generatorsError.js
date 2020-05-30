function* gen() {
    try{
        let result = yield "2 + 2 = ?"
        console.log(result)
    } catch (e) {
        console.log(`${e.name} : ${e.message}`)
    }
}

let generator = gen();
console.log(generator.next().value);

generator.throw(new Error('The answer is not found in my database'))

/*
function* generate() {
let result = yield "2 + 2 = ?"; // Error in this line
}
let generator = generate();
let question = generator.next().value;
try {
generator.throw(new Error("The answer is not found in my database"));
} catch(e) {
alert(e); // shows the error
}
* */