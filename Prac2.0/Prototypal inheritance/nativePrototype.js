let arr = [1,2,3];
console.log('Result:  '+ (arr.__proto__ === Array.prototype ))
console.log(arr.__proto__.__proto__.__proto__); //null, going beyond Object results null

String.prototype.show = function () {
    console.log(this);
};

"Test".show();

if(!String.prototype.repeat) {
    String.prototype.repeat = function (n) {
        return new Array(n+1).join(this)
    }
}
console.log("La".repeat(1))

//Borrowing from prototypes
let test1 = {
    0: "Hello",
    1: "world!",
    length: 2,
};
test1.__proto__ = Array.prototype // copies all method of Array

// test1.join = Array.prototype.join; // borrowing join method from Array
console.log(test1.join(','));

// test1.map = Array.prototype.map; // borrowing map method from Array
console.log(test1.map(item =>  item));



