class ReadError extends Error {
    constructor(message, cause) {
        super(message);
        this.cause = cause;
        this.name = 'ReadError';
    }
}
class ValidationError extends Error { /*...*/ }
class PropertyRequiredError extends ValidationError { /* ... */ }

function validateUser(user) {
    if (!user.age) {
        throw new PropertyRequiredError("age");
    }
    if (!user.name) {
        throw new PropertyRequiredError("name");
    }
}

function readUser(json) {
    let user;
    try {
        user = JSON.parse(json);
    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new ReadError("Syntax Error", err);
        } else {
            throw err;
        }
    }

    try {
        validateUser(user);
    } catch (err) {
        if (err instanceof ValidationError) {
            throw new ReadError("Validation Error", err);
        } else {
            throw err;
        }
    }
}


try {
    readUser('{bad json}');
} catch (e) {
    if (e instanceof ReadError) {
        // console.log(e);
// Original error: SyntaxError: Unexpected token b in JSON at position 1
        console.log("Original error: " + e.cause);
        console.log(e.message)
        console.log(e.name)
        console.log(e.cause)
    } else {
        throw e;
    }
}