let number = [];

number = new Proxy(number, {
    set(target, p, value, receiver) {
        if(typeof value === "number") {
            target[p] = value;
            return true;
        } else {
            return false;
        }

    },
    
});

console.log(number.push(1))
console.log(number.push(2))
// console.log(number.push('Test'))//'set' on proxy: trap returned falsish for property '2'
console.log(number)