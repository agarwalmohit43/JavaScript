/**
 * it is useful when user have no inputs then default value
 * @type {null}
 */
let fName = null
let lName = null
let nName = null; //'MP'

console.log(fName ?? lName ?? nName ?? 'Anonymous')


/**
 * || returns the first truthy value.
 * ?? returns the first defined value.
 * @type {number}
 */
let height = 0;

console.log(height || 100); // 100
console.log(height ?? 100); // 0
