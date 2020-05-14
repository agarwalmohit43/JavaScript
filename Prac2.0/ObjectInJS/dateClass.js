let date = new Date();
console.log(date.toDateString())
console.log(date.toString())
console.log(date.getFullYear())
console.log(date.getTimezoneOffset())
console.log(date.getUTCFullYear())
console.log(date.getDay())
console.log(date.getUTCDay())

//increase date by 1 for tomorrow date
date.tomorrow = date.getDate() + 1;
console.log(date.tomorrow)

//game to run loop for 1 lakh iteration

let startDate = new Date();
for (let i =0; i < 100000 ; i++) {
    let doSomething = i* i * i;
}
let endDate = new Date();
console.log(`Total seconds it took to run loop ${endDate - startDate}`)

console.log(new Date(Date.now()).toString())
