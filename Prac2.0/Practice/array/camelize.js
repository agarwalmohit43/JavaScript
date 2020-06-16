function camelize(str) {

    let splited = str.split('-');
    console.log(splited)
    return splited.reduce((prev,curr) => prev + (curr[0].toUpperCase() + curr.slice(1)));
}

// console.log(camelize("background-color") === 'backgroundColor');
// console.log(camelize("list-style-image") === 'listStyleImage');
// console.log(camelize("-webkit-transition") === 'WebkitTransition');

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
