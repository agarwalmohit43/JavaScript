/**
 * Created by MOHIT AGARWAL on 24-06-2017.
 */
function User() {
    this.name = "";
    this.life = 100;
    this.gaveLife=function gaveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name+" gave 1 life to "+ targetPlayer.name);
    }
}

var Mohit = new User();
var Bucky = new User();

Mohit.name = "Mohit";
Bucky.name = "Bucky";

Mohit.gaveLife(Bucky);
console.log("Mohit Life: "+ Mohit.life);
console.log("Bucky Life: "+ Bucky.life);

//protoype helps u to add function explicit to objects
User.prototype.upperCut = function upperCut(targetPlayer) {
    targetPlayer.life -= 5;
    console.log(this.name+" uppercutted "+ targetPlayer.name);
}

Mohit.upperCut(Bucky);
console.log("Mohit Life: "+ Mohit.life);
console.log("Bucky Life: "+ Bucky.life);

//protoype helps u to add property explicit to objects
User.prototype.magic = 50;
console.log("Mohit Magic: "+ Mohit.magic);
console.log("Bucky Magic: "+ Bucky.magic);