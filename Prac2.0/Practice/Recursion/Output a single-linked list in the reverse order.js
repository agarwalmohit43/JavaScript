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

    if (Obj.next)
        opList(Obj.next);

    console.log(Obj.value)
}

function printReverseList(list) {
    let arr = [];
    let tmp = list;

    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        console.log( arr[i] );
    }
}

//not optimum
function opListMohit(Obj) {
    let arr = []
    arr.push(Obj.value)
    if (Obj.next)
        opListMohit(Obj.next);

    // console.log(Obj.value)

    console.log(arr.reverse())
}

// opList(list)
opListMohit(list)
// printReverseList(list)