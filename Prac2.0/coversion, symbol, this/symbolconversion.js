'use strict'
/**
* Priority when it comes to conversion
 * [Symbol.toPrimitive](hint) -> must return primitive, otherwise there will be an error.
 * toString()-> handles string/valueOF()-> handles Number, this both can return object but it will be ignored
 *  toString() -> consider as 'catch-all'
*/
let user = {
    name : "Mohit",
    money : 1000,
    [Symbol.toPrimitive](hint){
        console.log((`hint: ${hint}`));
        return hint == "string" ? `{name: "${this.name}"}` : this.money;
    },

    toString() {
        return `{name: "${this.name}"}`;
    },

    valueOf(){
        return this.money;
    }
}

console.log(user);// works with alert();
console.log(+user);

let mathTest = {
    toString() {
        return "10";
    }
}

console.log("multiplicationTest: ");
console.log(mathTest * 2);
console.log(mathTest + 2);
console.log(+mathTest + 2)
