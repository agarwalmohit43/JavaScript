function person(name)
{

    this.name=name,
    this.getInfo = function () {
                return "Name = "+this.name;
            }
    var privateVariable = "Yoo"

};

var person1=new person("Mohit");
console.log(person1.getInfo());

person.prototype.sound = "Howling";
person.prototype.makesound = function () {
    return this.name+" makes sound like "+this.sound;
}

console.log("Make Sound: "+person1.makesound());
console.log(person);

for(var prop in person1)
    console.log(prop+" : "+person1[prop]);

console.log("if Name is property of person1 "+person1.hasOwnProperty("name"));
console.log("get Own Property "+Object.getOwnPropertyNames(person1));
console.log("if sound is property of person1 "+person1.hasOwnProperty("sound"));//false because we added sound as prototype

Array.prototype.inArray=function inArray(x) {
    for(var i=0;i<this.length;i++){
        if(this[i]==x)
            return true;
    }
    return false;
}

var sampleArray = [1,2,3,4,5,6,8];
console.log(sampleArray.inArray(3));
console.log(sampleArray.indexOf(3));

//using getter and setters

var emp = {
    empId: "",
    empName: "",
    get getEmp(){
        return this.empId+" "+this.empName;
    },
    set setEmp(value){
        var val=value.toString().split(", ");
        this.empId = val[0] || "";
        this.empName = val[1] || "";
    }
}
emp.setEmp="11, Mohit";
console.log("Emp Details: "+emp.getEmp);

var Circle = function (radius) {
    this._radius=radius;
}

Circle.prototype = {
    set radius(radius){this._radius=radius;},
    get radius(){ return this._radius},
    get area(){return Math.PI *this._radius*this._radius;}
}

var circle1 = new Circle(10);
circle1.radius=10;
console.log(circle1.radius);
console.log(circle1.area.toFixed(2));

//Inheritance

function Animal() {
    this.name = "Animal";
    this.toString=function (){
        return "My Name is : "+this.name;
    };
}

function Wolf() {
    this.name = "wolf";
}

function junglee() {
    this.name="junglee";
}

Wolf.prototype = new Animal();
junglee.prototype = new Animal();

Wolf.prototype.constructor = Wolf;
junglee.prototype.constructor = junglee;

var check = new Wolf();
var check2 = new junglee();
var check3 = new Animal();

console.log(check.toString());
console.log(check2.toString());
console.log(check3.toString());
console.log(check instanceof Animal);

Animal.prototype.sound = "animal sounds";
Wolf.prototype.sound = "wolf sounds";
console.log("Sound check: "+check.sound);

function extend(Child,Parent) {
    var Temp = function () {};

    Temp.prototype = Parent.prototype;//it should be (new Parent()) instead of (Parent.prototype;)
    Child.prototype = new Temp();
    Child.prototype.constructor = Child;
}

function dog() {
    this.name="Dog";
}

extend(dog,Animal);
var dog1=new dog();
console.log("Dog: "+dog1.toString());//when using new Parent then we can inherit toString from the animal class

/*
class Point{
  constructor(xPos, yPos){
    this.x= xPos;
    this.y = yPos;
  }

  getPos(){
    return "X: "+this.x+" Y: "+this.y;
  }
}

var point = new Point(10,20);
document.write(point.getPos());
* */