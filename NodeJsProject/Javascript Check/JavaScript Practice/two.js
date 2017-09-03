function inheritance() {
    function Shape()
    {
        this.shape = "Shape";
        this.toString = function () {
            return "Drawing shape -> "+this.shape;
        }
    }

    function Circle()
    {
        this.shape = "Circle";
    }

    function Triangle() {
        this.shape = "Triangle";
    }
    Circle.prototype = new Shape();
    Triangle.prototype = new Shape();

    Circle.prototype.constructor = Circle;
    Triangle.prototype.constructor = Triangle;

    console.log(new Circle().toString());
    console.log(new Triangle().toString());

}
function inheritance2() {
    function extend(Parent,Child) {
        var Temp = function () {};

        Temp.prototype = new Parent();
        Child.prototype = new Temp();
        Child.prototype.constructor = Child;
    }

    function Animal() {
        this.name = "Animal";
        this.toString = function () {
            return "Animal of type -> "+this.name;
        }
    }

    function Dog() {
        this.name = "Dog";
    }
    function Sachin() {
        this.name = "Sachin";
    }

    extend(Animal,Dog);
    extend(Animal,Sachin);

    var check = new Dog();
    console.log(check.toString());

    var check2 = new Sachin();
    console.log(check2.toString());
}

// var obj={name:"Mohit"};
// var check=Shape.toString.bind(obj,"Mohit");
// console.log(check);


function setterAndGetter() {
    var emp = {
        name: "",
        age: "",
        get getEmp()
        {
            return "Employee Name: " + this.name + " Age: " + this.age;
        },
        set setEmp(value)
        {
            var info = value.split(',');
            this.name = info[0] || "";
            this.age = info[1] || "";
        },


    }
    emp.setEmp="mohit,24";
    console.log(emp.getEmp);

    var obj = emp;
    obj.setEmp = "s,2";
    console.log(obj.getEmp);
}


inheritance2();