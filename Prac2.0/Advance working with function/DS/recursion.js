let recursion = (x, n) => (n === 1) ? x : x * recursion(x, n-1);
console.log(recursion(2, 3));

let add = (a, b) => (b === 1) ? a : a + add(a, b-1);
console.log(add(2,1e1));

let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 600
    }],
    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],
        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    },
};
console.log(company.development.internals[0].name)

let sumOfCompanySalaries = (x) => {
    if(Array.isArray(x)){
       return  x.reduce((prev,next) => prev + next.salary, 0)
    } else {
        let sum = 0;
        for (let subDep of Object.values(x)) {
            sum += sumOfCompanySalaries(subDep);
        }
        return sum;
    }
}

console.log(sumOfCompanySalaries(company));
