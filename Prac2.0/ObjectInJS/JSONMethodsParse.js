let number = "[1,2,3]";
console.log(typeof number)

// first argument is value
number = JSON.parse(number);
console.log(typeof number)
console.log(number[1]); // 2

let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
userData = JSON.parse(userData);
console.log(userData.friends[1]); // 1

//second argument is reviver
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
meetup = JSON.parse(str);
console.log(meetup.date); //string form of date
// console.log(meetup.date.getTime()); //string form of date, so throws error when used with getTime()

meetup2 = JSON.parse(str, (key, value) => {
    if(key === 'date') return new Date(value)
    return value;
})
console.log(meetup2.date.getTime()); // time in ms
console.log(meetup2.date.toString()); // time in full timestamp