/**
 \d – is the same as [0-9],
 \w – is the same as [a-zA-Z0-9_],
 \s – is the same as [\t\n\v\f\r ], plus few other rare unicode space characters.
 */

console.log("Mop top".match(/[tm]op/gi)); //[ 'Mop', 'top' ]
console.log("tmop".match(/[tm]op/gi)); //[ 'mop' ]

console.log("Voila".match(/V[oi]la/)) //null
console.log("Voila".match(/[V]oila/g)) //[ 'Voila' ]

console.log("Exception 0xAF".match(/\p{Hex_Digit}\p{Hex_Digit}/gu) ) //[ 'ce', 'AF' ], from unicode chapter
console.log("Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g)) //[ 'xAF' ]
console.log("Exception 0xAF".match(/0x[\d\w][\d\w]/g)) //[ '0xAF' ]


//chinese
console.log(`Hi 你好 12`.match(/[\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]/gu)) //[ 'H', 'i', '你', '好', '1', '2' ]

console.log("alice15@gmail.com".match(/[^\d\sA-Z]/gi)) //[ '@', '.' ]
console.log("alice15@gmail.com".match(/[^\d\sA-Z]/g).join('')) //alice@gmail.com

console.log("1 + 2 - 3 ^ 6".match(/[-()+^]/g)) //[ '+', '-', '^' ]


console.log("JavaScript".match(/Java[^script]/g)); //[ 'JavaS' ]

console.log("Breakfast at 09:00. Dinner at 21-30".match(/\d\d[-:]\d\d/g)) //[ '09:00', '21-30' ]

