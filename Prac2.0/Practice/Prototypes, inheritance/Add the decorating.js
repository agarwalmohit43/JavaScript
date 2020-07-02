function f(a, b) {
    console.log( a + b );
}

Function.prototype.defer = function(ms) {
    let f = this;
    return function (...args) {
        setTimeout(() => f.call(this,...args),2000)
    }
}

f.defer(1000)(1, 2);