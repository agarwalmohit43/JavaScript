let target = {};
let proxy = new Proxy(target, {});

proxy.test = 5;

console.log(target.test)
console.log(target)
console.log(proxy.test)

for (let key in proxy) {
    console.log(key)
}

let number = [0,1,2];

number = new Proxy(number, {
    get(target, p, receiver) {
        if(p in target){
            return target[p]
        } else {
            return 0;
        }
    }
});

console.log(number[1])
console.log(number[2,1,2])

let dictionary = {
    'Hello': 'Hola',
    'Bye': 'Adiós',
}

dictionary = new Proxy(dictionary, {
    get(target, p, receiver) {
        if (p in target) {
            return target[p];
        } else {
            return p;
        }
    }
})

console.log( dictionary['Hello'] ); //Hola
console.log( dictionary['Welcome to Proxy']); //Welcome to Proxy


let arrNumber = [7];

arrNumber = new Proxy(arrNumber, {
    set(target, p, value, receiver) {
        if (typeof  value === 'number') {
            target[p] = value
            return true;
        } else {
            return false;
        }
    }
})

arrNumber.push(5);
arrNumber.push(50);
console.log(arrNumber)
// console.log(arrNumber.length)

try {
    arrNumber.push('Mohit')
} catch (e) {
    console.log(e.name)
}
