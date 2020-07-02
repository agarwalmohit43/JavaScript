function printNumbersUsingTimeout(from, to) {
   let current = from;
   setTimeout(function go() {
        if (current < to) {
            console.log(current);
            current++;
            setTimeout(go,1000);
        }
   },1000)
}

function printNumbersUsingTimeinterval(from,to) {
        let current = from;
       let timerId =  setInterval(function() {
            if(current === to) {
                clearInterval(timerId);
            }else {
                console.log(current);
                current++;
            }
        },1000)
}

// printNumbersUsingTimeout(5,10)
printNumbersUsingTimeinterval(5,10)