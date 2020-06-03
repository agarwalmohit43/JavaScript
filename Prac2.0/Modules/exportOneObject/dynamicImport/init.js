async function load() {
    let say = await import('./sayHi.js')

    say.hi();
    say.sayBye('Mohit');
    let userdetails = say.default;
    new userdetails('Mohit is being displayed from class').display()
}

load()