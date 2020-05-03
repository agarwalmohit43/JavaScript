console.log(typeof null);
console.log(typeof undefined);


console.log(Boolean("Test"));
console.log(Boolean(null));
console.log(Boolean(undefined));

console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(1));
console.log(Boolean(''));
console.log(Boolean(' '));
console.log(Boolean(2));


console.log(3%2);
console.log("addition check");
console.log(+"5" + +2);

console.log(4 **(1/2));

// for (a = 1, b = 3, c = a * b; a < 10; a++) {
//     console.log(a + "\t" + b+ "\t" + c);
// }

let a = 0;
let b = "0";
console.log(Boolean(a) == Boolean(b));


for(let i = 0; i< 5; i++ ){
    if(i ==2){
        continue;
    }else if(i == 4){
        console.log(i=4);
        break;
    }else{
        console.log(i)
        }
    }

if (!2) {
    console.log("typeOf !2: " + typeof (!2))
    console.log("!2")
} else {
    console.log("typeOf 2: " + typeof (2))
    console.log("2")
}

let i=5;

for (i = 0; i < 10 ; i++){

}
console.log(i);

if(1) console.log("inLine IF");
else console.log("inLine else");

let name = 'Mohit';
console.log("Concat: " + name);
console.log(`Expression: ${name}`);
