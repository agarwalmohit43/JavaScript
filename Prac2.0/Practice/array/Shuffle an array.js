let arr = [1, 2, 3];

function shuffle(arr) {
   return  arr.sort(() => Math.random() - 0.5);
}

shuffle(arr);

console.log(arr)
shuffle(arr);
shuffle(arr);
console.log(arr)
