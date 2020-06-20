function Counter() {
    let count = 0;

    this.up = function() {
        ++count;
        console.log(count)
        return this;
    };
    this.down = function() {
        --count;
        console.log(count)
        return this;
    };
}

let counter = new Counter();

counter.up().up().down()