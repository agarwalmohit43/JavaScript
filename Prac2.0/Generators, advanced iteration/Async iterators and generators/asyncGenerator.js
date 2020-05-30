async function* generateSeq(start, end) {
    for (let i = start; i <= end; i++) {
        await new Promise(((resolve, reject) => setTimeout(resolve,1000)))
        yield i;
    }
}

(async () => {
    for await (let value of generateSeq(1, 5)) {
        console.log(value)
    }
})()


//result = await generator.next(); // result = {value: ..., done: true/false}