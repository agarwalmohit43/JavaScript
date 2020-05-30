let range = {
    from: 1,
    to: 5,

   async *[Symbol.asyncIterator]() {
        for (let i = this.from; i <= this.to;i++) {
            await new Promise(resolve => setTimeout(resolve,1000))
            yield i;
        }
    }
};

(async () => {
    for await (let val of range) {
        console.log(val)
    }
})()