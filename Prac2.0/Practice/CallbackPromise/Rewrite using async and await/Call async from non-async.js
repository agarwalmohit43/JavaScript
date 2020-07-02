async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return 10;
}

// ...what to write here?
// we need to call async wait() and wait to get 10
// remember, we can't use "await"

//1st way
/*(async function f() {
    let result = await wait();
    console.log(result)

})()*/

//2nd way
function fCallWait() {
    wait().then(console.log)
}

fCallWait();