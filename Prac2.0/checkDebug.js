function hello(name) {
    let phrase = `Hello, ${name}!`;

    say(phrase);
}

function say(phrase) {
    alert(`** ${phrase} **`);
    let test = () => {
        console.log("inside test func()")};
}

hello("Mohit");