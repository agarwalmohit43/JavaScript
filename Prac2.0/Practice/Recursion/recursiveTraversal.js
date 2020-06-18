let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
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
    }
};

function sumOfSalaries(department) {
    if(Array.isArray(department)){
        return department.reduce((prev, curr) => prev + curr.salary,0);
    }else {
        let sum = 0;
        for (let subDep of Object.values(department)) {
            sum += sumOfSalaries(subDep)
        }

        return sum;
    }
}

console.log(sumOfSalaries(company))