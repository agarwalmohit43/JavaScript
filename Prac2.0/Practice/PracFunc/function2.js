
function Person(firstName,lastName){
    this.firstName = firstName || 'Mohit';
    this.lastName = lastName || 'Kumar'

    this.getFullName = function() {
        console.log(this.firstName,this.lastName)
    }
}

Person.prototype.getFirstName = function(){

    console.log(this.firstName)
}

// let person = new Person()
// person.getFullName()
// person.getFirstName()

function Student(firstName,lastName,age){
     Person.call(this,firstName,lastName);
     this.firstName = firstName || 'StudentName'
    this.age = age || 25;
}

Student.prototype = Person.prototype
Student.prototype.constructor = Student

let std = new Student();
// std.firstName = 'test'


