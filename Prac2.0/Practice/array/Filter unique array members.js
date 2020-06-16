let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

let uniqueArr = strings.reduce((prev, curr) => (prev.includes(curr)) ? prev : [...prev, curr],[]);
let uniqArrayFil = strings.filter((item,index) => strings.indexOf(item) === index)

console.log(uniqueArr)
console.log(uniqArrayFil)