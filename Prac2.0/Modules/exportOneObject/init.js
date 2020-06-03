import {user, display, userDetails, Hi, sayBye as Bye} from "./main.js";
import userClass from "./exportDefault.js";
user.name = 'Mohit';
display()


//import.meta contains the information about the current module
console.log(import.meta.url)

let user1 = new userDetails('Prachi');
user1.display()

Hi('MOhit')
Bye('Mohit')

new userClass('MPrachi').display() //MPrachi