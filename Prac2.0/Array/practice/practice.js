const arr6 = [1,NaN];
console.log(arr6.indexOf(NaN)); // doesn't return index 0
console.log(arr6.includes(NaN) === true)

let arr5 = [1,2,3,4,5,6,7,8,9,10,1,8];
console.log(arr5.indexOf(5,2));
console.log(arr5.indexOf('k')); // return -1 if not found, includes is preferred over indexOf
console.log(arr5.lastIndexOf(8,10)); // till index 10 last occurrence of 8
console.log(arr5.includes(5)); // return true/false

let str = 'The quick brown fox jumps over the lazy dog.';
console.log(`The \'word\' ${str.includes('work') ? 'is' : 'is not'} present in => ${str}`)

//remove duplicates
let dupArr = [7,2,1,2,5,1];
dupArr = [...dupArr,7];
let removeDup = dupArr.filter((item1, index) => dupArr.indexOf(item1) === index)
console.log(removeDup)

console.log(`Using Set: ${[...new Set(dupArr)]}`);

let removeDup2 = dupArr.reduce((a,b) => {
    if (a.indexOf(b) < 0) a.push(b)
    return a;
}, [])
console.log(removeDup2)

let removeDup3 = dupArr.reduce((a,b) => (a.includes(b)) ? a: [...a, b], [])

console.log(removeDup3)






