function Person(name){
    this.name = name || 'MP';

    this.getDetails = function(){
        return this.name
    }
}

Person.prototype.getName = function(){
    return this.name
}

function Student(name,age){
    Person.call(this,name)
    this.age = age || 25

    this.getAge = function(){
        return this.age
    }
}

// Student.prototype.getTest = function(){return this.age} // it will not work because parent prototype overides child prototypes
// it will return not deifned

Student.prototype = Person.prototype;
Student.prototype.constructor = Student;

let std = new Student('Mohit',26)