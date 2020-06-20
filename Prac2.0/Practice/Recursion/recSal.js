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



function sumSal(Obj) {

    if(Array.isArray(Obj)) {
        return Obj.reduce((a,b) => a + b.salary,0);
    }else{
        let sum =0;
        for ( let subObj of Object.values(Obj)) {
            sum += sumSal(subObj);
        }
        return sum;
    }

}

console.log(sumSal(company))