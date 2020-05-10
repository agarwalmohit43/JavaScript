let add = (num1, num2) => num1+num2;

console.log(`1 + 2 = ${add(1,2)}`)

console.log(`Guests:
 * Mohit
 * Prachi`);

console.log("Hello\nWorld")
console.log("Hello\rWorld")
console.log("Hello\'World")
console.log("Hello\"World")
console.log("Hello\tWorld")
console.log("Hello\bWorld")
console.log("Hello\fWorld")
console.log("Hello\vWorld")
console.log("\u{1F60D}");

console.log('It\'s');
console.log("\\n is used for new line")

let string1 = 'Hello World';
console.log(string1.length);
console.log(string1[10]);
console.log(string1.charAt(10));
console.log(string1[string1.length - 1]);

// for..of similar to for..in
for(let char of string1){
    if(char === " ") console.log("\\b");
    else console.log(char);
}

console.log(string1.indexOf("World"));
console.log(string1.indexOf("o",5));

let str = 'As sly as a fox, as strong as an ox';
let targetChar = 'as';
let targetCharPos = [];

for (let i =0 ; i < str.length ; i++) {
    let pos = str.indexOf(targetChar,i);
    i = i + pos;
    targetCharPos.push(pos);
}
console.log(targetCharPos);

let pos = -1;
while ((pos = str.indexOf(targetChar, pos + 1)) != -1) {
    targetCharPos.push(pos);
}
console.log(targetCharPos);

pos = -1;
while (~(pos = str.indexOf(targetChar, pos + 1))) {
    targetCharPos.push(pos);
}
console.log(targetCharPos);

//simple check for presence
if(~(str.indexOf(targetChar))){
    console.log("Found");
}

if((str.indexOf(targetChar)) != -1){
    console.log("Found");
}

console.log(str.includes(targetChar));
console.log(str.includes(targetChar,8));

console.log(str.startsWith("As"));
console.log(str.endsWith("ox"));
console.log(str.endsWith(targetChar));

//substring -> slice, substring, substr

console.log(str.slice(0,10));
console.log(str.slice(-5,str.length-1));
console.log(str.charAt(2) === " ");
console.log(str.indexOf(" "));

let whitespacePos = [];
while(~(pos = str.indexOf(" ", pos + 1))) {
    whitespacePos.push(pos);
}
console.log("White Space POs: " + whitespacePos)

let str2 = "stringify";

console.log(str2.slice(2,5));
console.log(str2.slice(2,15));
console.log(str2.slice(15,2));

console.log(str2.substring(2,15))
console.log("twist " + str2.substring(15,2))
console.log(str2.substring(-2,1))

console.log(str2.substr(2,15))
console.log("twist " + str2.substr(15,2))
console.log(str2.substr(-2,1))


if ( "Z".codePointAt(0) === 90 ) console.log(true)
if ( String.fromCodePoint(90) === 'Z') console.log(true)

//print unicode values
let str3 = '';

for (let i = 30 ; i < 220 ; i++) {
    str3 += String.fromCodePoint(i);
}
console.log(str3)

console.log(str.localeCompare(str)); // 0
console.log(str.localeCompare(str2)); // -1
console.log(str.localeCompare(str3)); // 1
