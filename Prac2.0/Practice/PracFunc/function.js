function counter() {
    let counter = 0;
     this.increment = function(){
        console.log(this)
        return counter++;
    }
}

let f =new counter();




function createCounter(){
    let counter  = 0;
    
    return myfunction = function(){
        //console.log(this) //window
        counter = counter + 1;
        return counter}
    
    
}

let increment =new createCounter();
