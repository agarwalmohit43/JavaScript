//alert("Hello");

var i=10;
// function check() {
//     window.value=5;
//     var i=5;
//     console.log("Value of global i->"+window.i);
// }

//check();
//console.log(window.value);

/*var a=5;//int
var b='mohit';//string
var c= false;//boolean
var d=null;//null
var e;//undefined*/


/*Objects in javascript*/
function objects() {
    console.log("Objects");
    var person={name:"Mohit",age:24};//by key value pair i.e literal way
    console.log("key-value : "+person.name+" "+person.age);
//console.log(person+"\n");//prints object Object

    var emp = new Object();//using new operator
    emp.name = "Hi";
    emp.id=10;
    console.log("new keyword: "+emp.id+" "+emp.name);

    function emps(id,name,age) // using contructor
    {
        this.id=id;
        this.name=name;
        this.age=age;
    }
    value= new emps(10,"Mohit",4);
    console.log("construct : "+value.name+" "+value.id);

//Defining method in JavaScript Object
    function empss(id,name,salary){
        this.id=id;
        this.name=name;
        this.salary=salary;

        this.changeSalary=changeSalary;
        function changeSalary(otherSalary){
            this.salary=otherSalary;
        }
    }
    e=new empss(103,"Sonoo Jaiswal",30000);
    console.log(e.id+" "+e.name+" "+e.salary);
    e.changeSalary(45000);
    console.log(e.id+" "+e.name+" "+e.salary);

}

function arrays() {
    //Array in javaScript
    var arr1=[1,2,3,5,6];
    for(var elements in arr1)
        console.log(arr1[elements]);

    var arr2=new Array();
    arr2[0]=10;
    arr2[1]=20;
    for(var elements in arr2)
        console.log(arr2[elements]);

    var arr3=new Array(1,2,3,4,5);
    for(var elements in arr3)
        console.log(arr3[elements]);
}

function strings() {
    /*String*/
    var name="Mohit";//string literal
    var last="Agarwal";

    var empName=new String("Mohit");//string object
    console.log(name == empName);
    console.log(name === empName);

    console.log(name.concat(last));
    console.log(name.indexOf('t'));
    console.log(name.charAt(0));
    console.log(name.lastIndexOf('M'));
    console.log(name.toLowerCase());
    console.log(name.toUpperCase());
    console.log(name.trim());
    console.log(name.slice(0,3));//substring
}


function dates() {
    /*Date Object*/
    var date=new Date();
    console.log(date)
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getHours());
    console.log(date.getTime());
}

function numbers() {
    var num1=5;
    var num2=new Number(5);
    var string="mohit";
    console.log(num1+num2);
    console.log(num1+" "+num2);
    console.log(num1==num2);
    console.log(num1===num2);
    console.log(isNaN(string));
    console.log(Math.pow(num2,num1));
}

function setTime() {
    setTimeout(function() {
        console.log("Hi")
    },1000);// after 1 sec function will be executed
    setInterval(function () {
        console.log('hi')
    },1000);
}

var jsonObj1 = {"name":"mohit","title":"Mr."};
console.log(jsonObj1);
console.log(jsonObj1.name);
//console.log(delete jsonObj1.name);//deletes object
console.log(JSON.stringify(jsonObj1));
console.log(JSON.parse(JSON.stringify(jsonObj1)));

var ar1=JSON.parse(JSON.stringify(jsonObj1));
console.log(ar1.name);

for(var x in ar1)
    console.log(ar1[x]);