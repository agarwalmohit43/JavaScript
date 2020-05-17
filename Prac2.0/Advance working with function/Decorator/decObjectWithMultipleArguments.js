/**
* func.call(context, ...args); // pass an array as list with spread syntax
* func.apply(context, args); // is same as using apply
 **/


function cachingDecorator(func, hash) {
    let cache = new Map();

    return function () {
        let key = hash(arguments);
        if(cache.has(key)) return cache.get(key);

        // let result = func.call(this, ...arguments)
        let result = func.apply(this, arguments);
        cache.set(key, result);
        console.log(cache)
        return result;
    };
}

function hash(args) {
    return [].join.call(args);
}

let worker = {
    slow(...args) {
        // let maxOfTwo = args.reduce((prev,next) => Math.max(prev, next), 0) // find max using arr.reduce
        // let maxOfTwo = Math.max(...args) // find max using spread operator
        let maxOfTwo = Math.max.apply(null, args) // find max using func.apply, as apply works on arr elements
        console.log(`${args} => ${maxOfTwo}`)
        return maxOfTwo;
    }
}

worker.slow = cachingDecorator(worker.slow, hash);
worker.slow(10, 3, 5, 8) // Called with 10, 3, 5, 8
worker.slow(10, 3, 5, 8) // return 10 as value
worker.slow(3, 7) // Called with 3,7
worker.slow(3, 7) // no output
worker.slow(7, 3) // Called with 7,3