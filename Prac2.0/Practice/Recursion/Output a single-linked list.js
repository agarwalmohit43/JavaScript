let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function opList(Obj) {
    console.log(Obj.value)
    if (Obj.next)
        opList(Obj.next);
}

console.log(opList(list))