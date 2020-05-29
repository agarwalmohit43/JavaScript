const fetch = require("node-fetch");

async function f() {
    try {
        let result = await fetch(`google.com/ss`);
        return result;
    } catch (e) {
        // console.log(e.name)
        return e.name;
    }
}
f().then(response => setTimeout(() => console.log(response), 2000));

//append catch to catch the error
async function f1() {
    let result = await fetch(`google.com/ss`);
}
f1().catch(err => console.log(err.name)) //TypeError