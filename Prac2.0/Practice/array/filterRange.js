function filterRange(arr,start,end) {
    return arr.filter((item) => item >= start && item <= end);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr );