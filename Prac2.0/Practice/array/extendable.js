function Calculator() {

    this.methods = {
        "+" : (a,b) => +a + +b,
        "-" : (a,b) => +a - +b
    }

    this. calculate = function (str) {
     let arr = str.split(' ');
     let a = +arr[0];
     let op = arr[1];
     let b = +arr[2];

        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }

     return this.methods[op](a,b);

    }

    this.addMethod=function(op, f) {
        this.methods[op] = f;
    }
}



let calc = new Calculator;
console.log(calc.calculate("3 + 7"))

let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
console.log( result );