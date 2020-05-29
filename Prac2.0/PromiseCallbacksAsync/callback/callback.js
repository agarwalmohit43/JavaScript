function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script)
    document.head.append(script);
}

loadScript('test.js', function (script) {
    console.log(`Script ${script.src} is loaded successfully`); //Script test.js is loaded successfully
});

//Callback in callback
loadScript('script.js', function(script) {
    loadScript('script2.js', function(script) {
        loadScript('script3.js', function(script) {
// ...continue after all scripts are loaded
        });
    })
});