let str = "A ბ ㄱ ' 5.4 $+ €1, ¥9";

console.log(str.match(/\p{L}/gu)) //[ 'A', 'ბ', 'ㄱ' ]
console.log(str.match(/\p{L}/g)) //null, /u is missing for unicode
console.log(str.match(/\p{P}/gu)) //[ "'", '.', ',' ]
console.log(str.match(/\p{Nd}/gu)) //[ '5', '4', '1', '9' ]
console.log(str.match(/\p{M}/gu)) //null
console.log(str.match(/\p{Sc}/gu)) //[ '$', '€', '¥' ]
console.log(str.match(/\p{Sm}/gu)) //[ '+' ]


console.log("number: xAF".match(/x\p{Hex_Digit}\p{Hex_Digit}/u)[0]) //xAF, Hex