let animal = {
    eats: true
}

function Rabbit(name) {
    this.name = name;
}

// Rabbit.prototype = animal; //horizontal call to animal

// Rabbit.prototype.eats = true; // default Rabbit.prototype is reserved
//     or

Rabbit.prototype = {
    eats: true,
    constructor : Rabbit
}
let rabbit = new Rabbit('Bhukkad'); //vertical call to animal, inheritance
console.log(rabbit.eats)
console.log(rabbit.name)
console.log(Rabbit.prototype.constructor === Rabbit)

let rabbit2 = new rabbit.constructor('Test');
console.log(rabbit2.eats)
console.log(rabbit2.name)

let arr = [1,2,3];
console.log(arr.__proto__ === Array.prototype )