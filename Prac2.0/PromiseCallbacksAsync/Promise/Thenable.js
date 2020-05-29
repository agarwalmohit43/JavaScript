class Thenable {
    constructor(num) {
        this.num = num;
    }
    then(resolve, reject) {
        console.log(resolve) //[Function (anonymous)]
        console.log(reject)  //[Function (anonymous)]
        setTimeout(() => resolve(this.num * 2), 1000);
    }
}

new Promise(resolve => resolve(1))
    .then(result => {
    return new Thenable(result)
}).then(console.log) //2