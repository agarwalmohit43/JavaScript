// try{
//     laldal
// } catch (e) {
//     console.log(e.name)
//     console.log(e.message)
//     console.log(e.stack)
// }

let json = '{ "age": 30 }';
try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Incomplete data: no name property defined"); // (*)
    }
} catch (e) {
    if (e.name === "SyntaxError") { // rethrow of error
        console.log( "JSON Error: " + e.message );
    } else {
        throw e; // rethrow (*)
    }
}

//catching error object
function readData() {
    let json = '{ "age": 30 }';
    try {
// ...
        blabla(); // error!
    } catch (e) {
// ...
        if (e.name !== 'SyntaxError') {
            console.log(e)
            throw e; // rethrow (don't know how to deal with it)
        }
    }
}
try {
    readData();
} catch (e) {
    console.log( "External catch got: " + e ); // caught it!
}
try{
     laldal
} finally {
    console.log('Finally executed')
}
