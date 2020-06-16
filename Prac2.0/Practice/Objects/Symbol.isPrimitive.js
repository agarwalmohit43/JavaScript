let user = {
    name : 'MP',

    [Symbol.toPrimitive](hint) {
       return (hint === 'string') ? this.name : 500;
    }
}

console.log(user) // 
console.log(+user) //500
console.log(user + 500) //1000
