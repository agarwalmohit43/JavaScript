function sumArray() {

    let num = [];
    while(true) {
        let value = prompt('Enter number',0);
        if(value === "" || value === null || !isFinite(value)) break;
        num.push(+value)
    }
    let sum = 0;
    for(let n of num) {
        sum += n;
    }

    alert(sum)
}

sumArray();