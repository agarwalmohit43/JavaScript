let user = {
    name: "John",
    hi() { console.log(this.name); },
    bye() { console.log("Bye"); }
};

user.hi(); // works, John

// now let's call user.hi or user.bye depending on the name
// (user.name === "John" ? user.hi() : user.bye()); //John
(user.name === "John" ? user['hi']() : user.bye()); //John, both works

// obj['method']() || obj.method()