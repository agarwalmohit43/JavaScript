window.onload = function () {
    function constConcept() {
        const pi = 3.14; // a variable which has read-only characteristics
        function calcAreaOfCircle(r) {
            const pi = 10; // if we just write pi then change the value it will result in  error, with const ur making local const
            console.log("Area of circle: " + pi * r * r);
        }

        console.log(pi);
        calcAreaOfCircle(5);
    }

    function letCheck() {
        var x = 10;

        if (x > 5) {
            let x = 5;//let allows the variable scope to block wise
            console.log("Inside: " + x);
        }
        console.log("Outside: " + x);
    }

    function defaultParameter() {

        function sum(x = 10, y = 15) // initialising with default values
        {
            console.log("Addition of x and y:" + (x + y));
        }

        sum();
    }

    function spread() {

        // to use spread apply (...) dots in front of array
        var arr = [1, 2, 3];
        var arr2 = [...arr, 4, 5, 6];
        console.log(arr2);

        function addSumofInterger(a, b, c, d, e, f) {
            console.log(a + b + c + d + e + f);
        }

        addSumofInterger(...arr2);
    }

    function templateString() {
        //string enhancement
        var str = `Hello,
        Mohit`;

        function display(name, age) {
            console.log(`My Name is ${name}, Age: ${age} and Height: ${5.11}`)
        }

        console.log(str);

        display("Mohit", 22);
    }

    function objectLitteralEnhacement() {

        let name = "Mohit";
        let age = 22;

        var person = {
            name, age, display(name) {
                console.log(name);
            }
        };

        console.log(person.name);
        console.log(person.age)
        console.log(person.display("Check"));
    }

    function newStringMethods() {
        var str="goodbye";
        var str2="goodbye hello";

        console.log(str.repeat(5));
        console.log(str.startsWith("good"));
        console.log(str.startsWith("bye",str.length-3));//or index i.e 4
        console.log(str.endsWith("bye"));
        console.log(str.endsWith("good",str.length-3));
        console.log(str2.includes("hello"));
    }

    function arrowFunction() {
        // var check = function (name) {
        //     console.log(`${name} says Hello`);
        // }

        //in arraow function can be written as below

        var check = name =>{console.log(`${name} says Hello`);} // when no parameter to function use()
        check("Mohit");
        
        var check2={
            name:"Mohit",
            chop(x){
                window.setInterval( ()=> {//without arrow function this.name wouldn't work
                    if(x>0){
                        console.log(this.name+" chopped "+x+" times");
                        x--;
                    }
                },1000);
            }
        }
        check2.chop(5);
    }

    function collection() {
        var check=new Set();

        check.add("Mohit");
        console.log(check);

        var arr= [1,2,3,4,5,2,1,5];//to remove duplicate elements convert it to set
        var remove = new Set(arr);
        console.log(remove);

        var arr= [...remove];
        console.log(arr);


    }

    function classess() {

        class Person{


            constructor(name,age){
                this.name=name;
                this.age=age;
            }

            displayDetails(){
                console.log(`Name: ${this.name} Age: ${this.age}`);
            }
        }

        class Programmer extends Person{

            constructor(name,age,language){
                super(name,age);
                this.language = language;
            }

            displayDetailsProgrammer(){
                console.log(`Name: ${this.name} Age: ${this.age}, Language: ${this.language}`);
            }
        }

        var person1= new Person("Mohit",22);
        var person2= new Programmer("Agarwal",22,"Java");

        person1.displayDetails();
        person2.displayDetailsProgrammer();


    }
    classess()
}


