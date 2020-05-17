function cachingDecorator(func) {
    let cache = new Map();

    return function(x) {
        if(cache.has(x)) return cache.get(x);

        let result = func(x);
        cache.set(x, result);
        return result;
    };
}

function slow(x) {
// there can be a heavy CPU-intensive job here
    console.log(`Called with ${x}`);
    return x;
}

slow = cachingDecorator(slow);
slow(1)
slow(5)
slow(1) // already cached