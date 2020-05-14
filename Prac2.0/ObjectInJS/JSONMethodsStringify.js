/**
 * JSON.stringify to convert objects into JSON.
 * JSON.parse to convert JSON back into an object.
 */
let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};
//first parameter is for value
let jsonStudent = JSON.stringify(student);
console.log(jsonStudent + '\n' + typeof jsonStudent + '\n' + typeof student)

//second parameter is for replacer, commonly used when we have circular references
let room = {
    number: 23
};
let meetup = {
    title: "Conference",
    participants: [{name: "John"}, {name: "Alice"}],
    place: room // meetup references room
};
room.occupiedBy = meetup; // room references meetup
console.log( JSON.stringify(meetup, function replacer(key, value) {
    console.log(`${key}: ${value}`);
    return (key == 'occupiedBy') ? undefined : value;
}));


//third parameter is for space and indentation
console.log(JSON.stringify([1,2,3], null, 2))

//toJSON
let rooms = {
    number: 23,
    toJSON() {
        return this.number;
    }
};
let meetups = {
    title: "Conference",
    rooms
};
console.log( JSON.stringify(rooms) );
console.log(JSON.stringify(meetups))