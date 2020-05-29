//function that accepts a callback into a function that returns a promise
function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

function loadScriptPromisification(src) {
    return new Promise(((resolve, reject) => {
        loadScript(src, (err, script) => {
            if (err) reject(err)
            else resolve(script)
        })
    }))
}

//usage
loadScriptPromisification('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
    .then(script => console.log(script.src))
    .catch(err => console.log(err.name))


function promisify(f) {
    return function (...args) { // return a wrapper-function
        return new Promise((resolve, reject) => {
            function callback(err, result) { // our custom callback for f
                if (err) {
                    return reject(err);
                } else {
                    resolve(result);
                }
            }
            args.push(callback); // append our custom callback to the end of f arguments
            f.call(this, ...args); // call the original function
        });
    };
};

// usage:
let loadScriptPromise = promisify(loadScript);
loadScriptPromise('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
    .then(script => console.log(script.src))
    .catch(err => console.log(err.name))



//if callback has multiple arguments
// promisify(f, true) to get array of results
function promisifyCallback(f, manyArgs = false) {
    return function (...args) {
        return new Promise((resolve, reject) => {
            function callback(err, ...results) { // our custom callback for f
                if (err) {
                    return reject(err);
                } else {
// resolve with all callback results if manyArgs is specified
                    resolve(manyArgs ? results : results[0]);
                }
            }
            args.push(callback);
            f.call(this, ...args);
        });
    };
};
// usage:
let tryPromisifyCallback = promisifyCallback(loadScript, true);
tryPromisifyCallback('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js')
    .then(script => console.log(script))
    .catch(err => console.log(err.name))