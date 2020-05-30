let range = {
    from: 1,
    to : 5,

    [Symbol.asyncIterator](){
        return {
            current : this.from,
            last: this.to,

            async next() {
                await new Promise(((resolve, reject) => setTimeout(resolve, 1000)))

                if (this.current <= this.last) {
                    return { done: false, value: this.current++ };
                } else {
                    return { done: true };
                }
            }
        }

}
};

(async () => {
    for await (let value of range) { // (4)
        console.log(value); // 1,2,3,4,5
    }
})()