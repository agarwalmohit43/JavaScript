//https://www.tutorialsteacher.com/javascript/inheritance-in-javascript

function Person(fName, lName) {
    this.firstName = fName || 'dFN';
    this.lastName = lName || 'dLN'
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName;
}

function Student(fName, lName, age, grade) {
    Person.call(this, fName, lName);
    this.age = age || '25';
    this.grade = grade || 'A';
}

Student.prototype.__proto__ = Person.prototype; // Student extends Person
let std = new Student("James","Bond", "XYZ", 10);
console.log(std.getFullName()); // James Bond
console.log(std instanceof Student) // true
console.log(std instanceof Person) // true

console.log(Object.getPrototypeOf(Student));
console.log(Object.getPrototypeOf(Person));
