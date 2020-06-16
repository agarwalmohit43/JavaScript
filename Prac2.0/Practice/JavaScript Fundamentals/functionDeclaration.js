/**
 * Default parameter
 * two ways: using ||, default value for that param in the func param
 * @param fName
 * @param lName
 *
 */
function showMessage(fName, lName) {
    this.fName = fName || 'default fName'
    this.lName = lName || 'default lName'

    console.log(`Default parameter:\n${this.fName} \n${this.lName}`)
}
showMessage();


/**
 *
 * @param arr -> arr elements
 * @returns {max|number}
 */
function showMax(...arr) {
    return arr.reduce((prev, curr) => Math.max(prev, curr), 0);
}
console.log(showMax(0,5,2,8,5,20))

/**
 * blank function always return undefined
 */

function doNothing() {
}
console.log(doNothing()) //undefined

/**
 * break func
 * @param n: list of primeNumber till n
 */
function showPrime(n) {
    let listOfPrime = [];
     for (let i = 2; i < n; i++){
         if(!isPrime(i)) continue;
         listOfPrime.push(i)
     }
    return listOfPrime;
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if ( n % i === 0) return false;
    }
    return true;
}

console.log(showPrime(10));
