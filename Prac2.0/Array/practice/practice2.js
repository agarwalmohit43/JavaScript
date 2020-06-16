function maxNum(...ar) {
    let highval = ar.reduce((prev, curr) => {
        return Math.max(prev,curr);
    },0);
    return highval;
}

console.log(maxNum(1,4,2))