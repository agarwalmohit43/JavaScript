let animal = {
    eats: true,
    sleep(){
        this.isSleeping = true;
    }
}

let rabit = {
    jump : true
}

rabit.__proto__ = animal;

console.log(rabit.eats); //true,  inherited from parent animal
console.log('Rabit Sleeping: ' + rabit.isSleeping); //undefined
rabit.sleep();
console.log('Rabit Sleeping: ' + rabit.isSleeping); //true

let user = {
    get name() {
        return this._name;
    },

    set name(v) {
      this._name = v;
    },

    get Access() {
        return this.access;
    }
}

let admin = {
    age : 50,
    access : 'Admin',
    isAdmin : true,
    __proto__ : user
}

let guest = {
    age : 20,
    access : 'Guest',
    __proto__ : user
}

let security = {
    age : 40,
    access : 'Security',
    __proto__ : user
}
console.log(admin.age); //50

admin.name = 'Admins'
console.log(admin.name) // Admin Name
console.log(admin.Access); //Admin

console.log(guest.Access); //Guest

console.log(security.Access); //Security

let person = {
    __proto__: guest,
    name : 'PersonGuest'
}

let person2 = {
    __proto__: admin,
    name : 'PersonAdmin'
}

console.log(person.name); //PersonGuest
console.log(person2.isAdmin); //true

//for..in loop iterates over both parent and child properties
//Object.keys(obj) iterates over child property

console.log('Admin Properties: ' + Object.keys(admin));
console.log('User Properties: ' + Object.keys(user));

let keysArr = [];
for (let key in admin) {
    keysArr.push(key)
    let isOwn = admin.hasOwnProperty(key); // inheriting hasOwnProperty() => Object -> user -> admin
    if(isOwn) console.log('Own Property -> ' + key);
    else console.log('Inherited Property: ' + key);
}

console.log('List of all properties for both parent and child: ' + keysArr);


//workaround
admin.prototype = user; // setting
admin.prototype.isUser = true; //setting property in user
console.log('User Properties: ' + Object.keys(user));