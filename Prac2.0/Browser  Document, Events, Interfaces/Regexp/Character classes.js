/**
 * There exist following character classes:

 \d – digits.
 \D – non-digits.
 \s – space symbols, tabs, newlines.
 \S – all but \s.
 \w – Latin letters, digits, underscore '_'.
 \W – all but \w.
 . – any character if with the regexp 's' flag, otherwise any except a newline \n.

 */

let str = "+7(903)-123-45-67";
console.log(str.match(/\d/)); // \d for getting only number
console.log(str.match(/\d/g).join('')); //return array of numbers then join them

console.log("Is there CSS4?".match(/CSS\d/).toString()) //CSS4
console.log("I love HTML5!".match(/\s\w\w\w\w\d/)[0]); // HTML5

//inverse
console.log(str.match(/\D/g)); //[ '+', '(', ')', '-', '-', '-' ]
console.log(str.replace(/\D/g, '')); //79031234567

console.log( "CSS4".match(/CS.4/).toString()); //CSS4, . is any character except new line
console.log( "CS-4".match(/CS.4/).toString()); //CS-4
console.log( "CS 4".match(/CS.4/).toString()); //CS 4, space is also a character
console.log( "CS4".match(/CS.4/)); //null, no match because there's no character for the dot
console.log( "A\nB".match(/A.B/) ); // null (no match), new line in between

//flag /s -> then . matches literally any character
console.log( "A\nB".match(/A.B/s).toString() ); //A\nB, with /s we can treat '.' as any character

let str2 = '1 - 5';
console.log(str2.match(/\d-\d/)); //null, spaces are their in between numbers and -.
console.log(str2.match(/\d - \d/).toString()); //1 - 5
console.log(str2.match(/\d\s-\s\d/).toString()); //1 - 5
console.log(str2.match(/\d\s - \s\d/)); //null, extra spaces manually entered after \s



