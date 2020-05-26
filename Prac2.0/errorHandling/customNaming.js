class MyError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
    }
}
class ValidationError extends MyError { }
class PropertyRequiredError extends ValidationError {
    constructor(property) {
        super("No property: " + property);
        this.property = property;
    }
}
// name is correct
let testError = new PropertyRequiredError("field")
console.log( testError.name ); // PropertyRequiredError, due to constructor naming
console.log( testError.message ); // No property: field
console.log( testError.property ); // field