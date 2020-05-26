class ValidationError extends Error {
    constructor(message) {
        super(message); // (1)
        this.name = "ValidationError"; //overwriting error name || 'Error'
    }
}

function test() {
    throw new ValidationError("Whoops!");
}

try {
    test();
} catch(err) {
    console.log(err.message); // Whoops!
    console.log(err.name); // ValidationError
    console.log(err.stack); // a list of nested calls with line numbers for each
}

//usage
function readUser(json) {
    let user = JSON.parse(json);
    if (!user.age) {
        throw new ValidationError("No field: age");
    }
    if (!user.name) {
        throw new ValidationError("No field: name");
    }
    return user;
}

// Working example with try..catch
try {
    let user = readUser('{ "age": 25 }');
} catch (err) {
    if (err instanceof ValidationError) {
        console.log("Invalid data: " + err.message); // Invalid data: No field: name
    } else if (err instanceof SyntaxError) { // { "age" 5: 25 }, executes in syntactically errors
        console.log("JSON Syntax Error: " + err.message);
    } else {
        throw err; // unknown error, rethrow it (**)
    }
}