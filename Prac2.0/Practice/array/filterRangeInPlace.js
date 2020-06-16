function filterRangeInPlace(arr,start, end) {

    for (let i = 0; i< arr.length ; i++) {

        let val = arr[i];
        
        if(val < start || val > end) {
            arr.splice(i,1)
            i--;
        }
    }
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);

console.log(arr)