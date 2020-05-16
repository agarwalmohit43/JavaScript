let list = { value: 1};
list = { value: 2,next: list};
list = { value: 3,next: list};
list = { value: 4,next: list};
list = { value: 5,next: list};
list = { value: 6,next: list};

console.log(list)

let list1 = {value : 1};
list1.next = {value : 2};
list1.next.next = {value : 3};
list1.next.next.next = {value : 4};
list1.next.next.next.next = null;


console.log(list1)