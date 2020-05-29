function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', step1);

function step1(error, script) {
    if(error) {
        //handle error
        handleError(error);
    } else {
        // code something
        console.log(script.src)
        loadScript('https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js', step2)
    }
}

function step2(error, script) {
    if(error) {
        //handle error
        handleError(error);
    } else {
        // code something
        console.log(script.src)
    }
}

function handleError(error){
    console.log(error.stack)
}