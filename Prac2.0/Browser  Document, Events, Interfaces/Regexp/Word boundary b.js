//Word boundary: \b

console.log("Hello, Java!".match(/\bJava\b/) ) //Java
console.log("Hello, Java!".match(/\bHello\b/) ) //Hello
console.log("Hello, Java!".match(/\bHello\b/) ) //Hello

console.log("1 23 456 78".match(/\b\d\d\b/g)) //[ '23', '78' ]
console.log( "12,34,56,888".match(/\b\d\d\b/g)) //[ '12', '34', '56' ]

//find time
let str ='Breakfast at 09:00 in the room 123:456.';
console.log(str.match(/\b\d\d:\d\d/)[0]); //09:00