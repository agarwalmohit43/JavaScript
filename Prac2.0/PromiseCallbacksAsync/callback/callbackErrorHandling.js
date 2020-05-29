function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(null, script);
    script.onerror = () => callback(new Error(`Script load error for ${src}`));
    document.head.append(script);
}

loadScript('/my/script.js', function(error, script) {
    if (error) {
        console.log('Error occurred')
    } else {
        console.log(`${script.src} is loaded successfully`)
    }
});