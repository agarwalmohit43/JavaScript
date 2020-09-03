function foo(age){
    return {
        age,
        display(){
            console.log(this)
        }
    }
}

let f = foo;
let f2 = foo(2) //contains object that is returned
let f3 = new foo(2) //same as f2 but contains prototype too

f2.display() //this is the object returned


function fooCo(){
    // console.log(this);
    let test = 0;//private to function
    this.test2 = 5;
    this.display = function(){
            console.log(this)
    };

    display2 = function (){} //private to function
}

let fo = new fooCo();
let fo1 = new fooCo;
let fo2 = fooCo;
let fo3 = fooCo();

