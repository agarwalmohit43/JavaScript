function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative

        console.log('maxsum -> '+ maxSum)
        console.log('partialsum -> '+ partialSum)
        console.log('\n')
    }

    return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) );