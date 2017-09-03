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

function objects() {
    /*Objects in javascript*/
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

    console.log(arr1.splice(0,2,"Mohit"));//removes element from 0 to total number of elements 1 splice(0,1)
    for(var elements in arr1)
        console.log(arr1[elements]);

    console.log(arr3.slice(1,3));//removes element from 0 to total number of elements 1 slice(0,3)
    for(var elements in arr3)
        console.log(arr3[elements]);

    console.log(arr3.toString());
    console.log(arr3.indexOf(5));
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

    var string = "Mohit";
    var str = new String("Mohit");
    console.log(string == str);
    console.log(string === str);
    console.log(typeof string +" <-> "+ typeof str);
}

function dates() {
    /*Date Object*/
    var date=new Date();
    console.log(date)
    console.log(date.getDate());
    console.log(date.getDay());
    console.log(date.getHours());
    console.log(date.getTime());

    console.log(new Date(1504246205086));

    var date1 = 1504246205086;
    var date2= 1504247388421;

    if(date1 == date2)
        console.log("Equal");
    else if(date1 > date2)
        console.log("Date 1 is greater");
    else if(date1 < date2)
        console.log("Date 2 is greater");


    Date.prototype.nextDate = function () {
        var currentDate = this.getDate();
        return new Date(this.setDate(currentDate+1));
    }
    console.log("Date prototype");
    var pdate=new Date();
    console.log(pdate);
    console.log(pdate.nextDate());
    console.log(pdate);

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

function json() {
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

    console.log("JSON Data Printing");
    var data=JSON.parse(JSON.stringify(jsonObj1));
    var value;
    for(var key in data)
    {
        value=data[key];
        console.log(key,value);
    }

    console.log("Nested");

    var data2='[{"FirstName":"MOHIT","LastName":"AGARWAL","ContactNumber":"8981871984","Country":"INDIA","Email":"agarwalmohit43@gmail.com","Subject":"Resume","Message":"PFB"},'
       + '{"FirstName":"RAMIT","LastName":"AGARWAL","ContactNumber":"9612345875","Country":"INDIA","Email":"ramitag@gmail.com","Subject":"Response","Message":"HI"},'
        +'{"FirstName":"sasda","LastName":"ssdasd","ContactNumber":"4654654654","Country":"INDIA","Email":"agarwalmohit43@gmail.com","Subject":"acasda","Message":"acasda"}]';

    //console.log(data2[0]);
    // for(var index in data2)
    // {
    //     console.log(data2[index].FirstName+" "+data2[index].LastName);
    // }
    data2=JSON.parse(data2);
    data2.forEach(function (t,x) {
        console.log(t.FirstName + " " + t.LastName);
    })

    // var keys=Object.keys(data2);
    // console.log(keys);
    // for(var e in keys)
    //     console.log(data2[e].FirstName+" "+data2.LastName);
}

function checkies() {
    Date.prototype.nextDate = function () {
        var currentDate = this.getDate();
        return new Date(this.setDate(currentDate+1));
    }
    console.log("Date prototype");
    var pdate=new Date();
    console.log(pdate);
    console.log(pdate.nextDate());
    
    //check if argument contains certain number
    
    function isTwoPassed() {
        var args = Array.prototype.slice.call(arguments);
        return args.indexOf(2) != -1;
    }

    console.log(isTwoPassed(1,2,3,4));
    console.log(isTwoPassed(1,3,4));


    function getMax(arr) {
        return Math.max.apply(null,arr);
    }

    console.log(getMax([1,2,3,4,5]));


    function addBase(base){
        return function(num){
            return base + num;
        }
    }

    var addTen = addBase(10);
    console.log(addTen);
    addTen(2);
}

function checkies2() {
    var check = 10;
    console.log(parseInt('foo'));
    var arr = ['foo',5,5,'baz',10,'8'];

    var sum = 0;

    for(var i=0;i<arr.length;i++)
    {
        if(!isNaN(arr[i]))
        {
            sum+=arr[i];
        }else
        {
            var number=parseInt(arr[i]);
            if(isNaN(number))
                continue;
            else
                sum+=number;
        }
    }
    console.log(sum);
    //console.log(arr.map(function(i){ return parseInt(i);}).filter(function(x) { return !isNaN(x) }));
    console.log(arr.map(function(i){ return parseInt(i);}).filter(function(x) { return !isNaN(x) }).reduce(function(sum,i) { return sum + i} ));
}

function interviews() {
    var arr = [10,8,1,2];
arr.sort(function (a,b) {
    console.log("Numbers are:"+a+" "+b);
    return a>b;
})
console.log(arr);

var arr2 = [{"name":"abc","age":"50"},{"name":"def","age":"20"},{"name":"ghi","age":"40"},{"name":"jkl","age":"35"},{"name":"mno","age":"15"}];


arr2.sort(function (a,b) {
        return a.age < b.age;
});
console.log(arr2);

var arr = ["Mohit",1,2,3,4,5];
console.log(arr.map(function (t) { return parseInt(t); }).filter(function (t) { return !isNaN(t); }));
console.log(arr.map(function (t) { return parseInt(t); }).filter(function (t) { return !isNaN(t); }).reduce(function (sum,i) { return sum+i;  }));
console.log(arr.filter(function (t) { return !isNaN(t); }).reduce(function (sum,i) { return sum+i;  }));

function add(a,b){ return a+b};
function asda(a,b,callback) {
   return callback(a,b);
}

console.log(asda(5,4,add));

var arr = ['foo',5,5,'baz',10,'8'];

var sum = 0;

for(var i=0;i<arr.length;i++)
{
    if(!isNaN(arr[i]))
    {

        sum+=parseInt(arr[i]);
    }else
    {
        var number=parseInt(arr[i]);
        console.log(number);
        if(isNaN(number))
            continue;
        else
        {
            sum+=number;
        }
    }
}
console.log(sum);
}
//
// var add = function (baseNumber) {
//
//    var addInner = function (inner)
//    {
//         return baseNumber + inner;
//    }
//     return addInner;
// }
//
// var number = add(10);
// console.log(number(1));
//
// for(var i = 0; i < 10; i++) {
//     setTimeout(function() {
//         console.log(i);
//     }, 10);
// }
//
// for(var i = 0; i < 10; i++) {
//     setTimeout((function(i) {
//         console.log(i);
//     }).bind(null,i), 10);
// }
//
// for(var i = 0; i < 10; i++) {
//     setTimeout(console.log.bind(i), 10);
// }

function callApplyBind() {
    var obj ={num:2};

    var addTo = function (x,y,z) {
        //console.log(x+" "+y+" "+z);
        return this.num + x+y+z;
    }

    console.log(addTo.call(obj,'M',5,5)); // functionName.call(object, functionArguments)

    var arr = [1,2,3];
    console.log(addTo.apply(obj,arr)); // functionName.apply(object, array)

    var bound = addTo.bind(obj); // functionName.bind(Object)
    console.log(bound(1,2,3));



    var abc = function () {
        this.name="Mohit";
        this.talk = function () {
            return this.name;
        }
    }

    var p =new abc();
    console.log(p.talk());

}

// var emp = {
//     name: 'Mohit',
//     salary: 50000,
//     bonusSalary : function (x) {
//         this.salary += x;
//         console.log(this.name+" got bonus of Rs."+x+" total balance: "+this.salary);
//     }
// }
//
// var emp2 ={name: "Kumar",salary: 20000};
// var giveBonus = emp.bonusSalary.bind(emp2,5000);
// giveBonus();

function promises() {
    
    function first() {
        var makePromise = new Promise(function (resolve,reject) {
            // if room cleared
            var Cleaned = true;
            if(Cleaned)
            {
                resolve('Cleaned the Room');
            }else{
                reject('Not Cleaned');
            }
        })

        makePromise.then(function (fromResolve) {
            console.log("Done "+fromResolve);
        }).catch(function (fromReject) {
            console.log("Not Done "+fromReject);
        })
    }
    
   function second() {
       var cleanRoom = function () {
           return new Promise(function (resolve,reject) {
               var Cleaned = true;
               if(Cleaned)
               {
                   resolve('Cleaned the Room');
               }else{
                   reject('Not Cleaned');
               }
           });
       };

       var garbageThrown = function (message) {
           return new Promise(function (resolve,reject) {
               resolve(message+" Grabage Thrown!");
           });
       };

       cleanRoom().then(function (result) {
           return garbageThrown(result);
       }).then(function (result) {
           console.log("Finished: " +result);
       }).catch(function (result) {
           console.log("Error: "+result);
       })

       // Promise.race([cleanRoom(),garbageThrown()]).then(function (result) { //race if any is finished and all for all to finish
       //     console.log("Finished "+result);
       // }).catch(function (result) {
       //     console.log("Error : " +result);
       // });
   }

   // first();
    second();
}
promises();
