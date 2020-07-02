//Quantifiers +, *, ? and {n}

console.log("I'm 12345 years old".match(/\d{5}/g)) //[ '12345' ]
console.log("I'm 12345 years old".match(/\b\d{5}\b/g)) //[ '12345' ]

console.log("I'm not 12, but 1234 years old".match(/\d{3,5}/g)) //[ '1234' ]
console.log("I'm not 12, but 1234 years old as 123468".match(/\d{3,5}/g)) //[ '1234', '12346' ]

console.log( "+7(903)-123-45-67".match(/\d{1,}/g)) //[ '7', '903', '123', '45', '67' ]
console.log( "+7(903)-123-45-67".match(/\d+/g)) //[ '7', '903', '123', '45', '67' ]
console.log( "+7(903)-123-45-67".match(/\d?/g).join('')) //79031234567

console.log("Should I write color or colour or colorr?".match(/colou?r/g)) //[ 'color', 'colour', 'color' ]
console.log("Should I write color or colour?".match(/colou?r/g)) //[ 'color', 'colour' ]

// * vs ? vs +
console.log(`\n * vs ? vs +`)
console.log("100 10 1".match(/\d0*/g)); //[ '100', '10', '1' ]
console.log("100 10 1".match(/\d0+/g)); //[ '100', '10' ]
console.log("100 10 1".match(/\d0?/g)); //[ '10', '0', '10', '1' ]

//find ... elipse
console.log("Hello!... How goes?.....".match(/\.{3,}/g)); //[ '...', '.....' ]

//regex for HTML color
let str = "color:#121212; background-color:#AA00ef bad-colors:f#fddee #fd2 #12345678";
console.log(str.match(/#[a-f0-9]{6}/gi)); //[ '#121212', '#AA00ef', '#123456' ]
console.log(str.match(/#[a-f0-9]{6}\b/gi)); //[ '#121212', '#AA00ef' ]