class Person {
    constructor(name){
        this.name = name
        this.roll = 25
    }

    

    getName(){
        return this.name
    }
}

class Student extends Person{
    constructor(name,age){
        super(name)
        this.age = age
    }

    getDetails(){
        return `${this.name} ${this.age}`
    }
}

let std = new Student('MP',25);

//std gets every variable as its property even of parent class
//std gets his own method and perent class method as prototype