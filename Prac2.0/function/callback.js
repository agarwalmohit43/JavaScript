let age;
age = (age, yes, no) => {
    if (age>18) {
        no();
    } else {
        yes();
    }
};

function allowed() {
console.log("Yes");
}

function notAllowed() {
console.log("No");
}

age(18,allowed,notAllowed);