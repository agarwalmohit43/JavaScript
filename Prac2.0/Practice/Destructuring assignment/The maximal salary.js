let salaries = {
    "John": 100,
    "Pete": 300,
    "Jete": 301,
    "Mary": 250,
};

function topPaidPersonWithSalary(obj) {
    let maxSalary = '';
    let topPaidPerson = '';

    for (let [key, value] of Object.entries(salaries)) {
        if (maxSalary < value) {
            maxSalary = value;
            topPaidPerson = key
        }

    }

    return {[topPaidPerson]:maxSalary};
}

console.log(topPaidPersonWithSalary(salaries))