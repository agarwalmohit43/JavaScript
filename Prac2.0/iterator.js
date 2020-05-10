let range = {
    from : 1,
    to : 10
};

range[Symbol.iterator] = function () {
    return {
        current : this.from,
        last : this.to,
        next() {
            if(this.current <= this.last ) return {done: false, value: this.current++ }
            else return {done:true}
        },
    };
};

for (let num of range) {
    console.log(num)
}

for (let key in range) {
    console.log(key)
}


let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike);
arr.map(item => console.log(item));

