let str = 'We will, we will rock you';

let result = str.match(/We/gi);

// g flag returns all matched values
// i flag case insensitive.

console.log(result) //[ 'We', 'we' ]

let matches = "JavaScript".match(/HTML/) || [];
if(!matches.length) console.log('Not found')

//Replacement
let replaceResult = str.replace(/We/i, 'I');
let replaceResult2 = str.replace(/We/gi, 'I');
console.log(replaceResult)
console.log(replaceResult2)

let regexp = /rOck/i;
console.log(regexp.test(str)); //true, it matched in str.

//for special character use \ backslash
console.log('[ / ^ $ . | ? * + ( )'.match(/\//g)) //[ '/' ]
console.log('[ / ^ $ . | ? * + ( )'.match(/\^/g)) //[ '^' ]
