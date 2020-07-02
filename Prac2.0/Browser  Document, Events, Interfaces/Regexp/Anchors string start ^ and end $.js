/**
 * The caret ^ and dollar $ characters have special meaning in a regexp. They are called “anchors”.

 The caret ^ matches at the beginning of the text, and the dollar $ – at the end.
 */

console.log(/^Mary/.test("Mary had a little lamb")); //true
console.log(/^Marysad/.test("Mary had a little lamb")); //false
console.log(/lamb$/.test("Mary had a little lamb")); //true

let goodInput = "12:34";
let badInput = "12:345";
console.log(/^\d\d:\d\d$/.test(goodInput)); //true
console.log(/^\d\d:\d\d$/.test(badInput)); //false


console.log(/^$/.test('')); //true
console.log(/^\d\d$/.test('12')); //true
console.log('12'.match(/^\d\d$/)[0]); //12
console.log(/^\p{N}$/u.test('1')); //true
console.log(/^\p{N}\p{N}$/u.test('12')); //true
console.log('12'.match(/^\p{N}\p{N}$/u).toString()); //12


//Multiline mode of anchors ^ $, flag "m"

let str = `1st place: Winnie
2nd place: Piglet
3rd place: Eeyore`;

console.log(/^\d/gm.test(str));
console.log(str.match(/^\d/gm)); //[ '1', '2', '3' ]
console.log(str.match(/^\d/g)); //[ '1' ], Without the flag m only the first digit is matched


let str2 = `Winnie: 1
Piglet: 2
Eeyore: 3`;

console.log(str2.match(/\d$/gm)) //[ '1', '2', '3' ]
console.log(str2.match(/\d$/g)) //[ '3' ]
console.log(str2.match(/\d\n/gm)) //[ '1\n', '2\n' ] , since after this two digits new line is present.




