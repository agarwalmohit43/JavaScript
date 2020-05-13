let set = new Set();
let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };


set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

console.log(set.size);

console.log("for ..of")
for (let value of set) {
    console.log(value)
}

console.log("\nforEach")
set.forEach((value, valueAgain, set) => {
    console.log(value);
    console.log(valueAgain);
    console.log(set)
    console.log("\n")
});