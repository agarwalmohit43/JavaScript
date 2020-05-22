class PowerArray extends Array {
    isEmpty(){
        return this.length === 0;
    }

    //Array, built-in methods will use this as the constructor
    /*
    static get [Symbol.species]() {
        return Array;
    }*/
}
let arr = new PowerArray(1, 2, 5, 10, 50);
let filterArray = arr.filter(item => item < 10)
console.log(arr.isEmpty())
console.log(...(filterArray)) // PowerArray(3) [ 1, 2, 5 ]
console.log(filterArray.isEmpty()) //false

