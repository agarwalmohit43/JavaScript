/**
 * The ?. syntax has three forms:

 obj?.prop – returns obj.prop if obj exists, otherwise undefined.
 obj?.[prop] – returns obj[prop] if obj exists, otherwise undefined.
 obj?.method() – calls obj.method() if obj exists, otherwise returns undefined.
 A chain of ?. allows to safely access nested properties.
 * @type {{name: string}}
 */

let user ={
    name: 'MP',
    dis() {
        console.log(this.name);
    }
}

console.log(user?.name); //MP
console.log(user?.street?.address); //undefined, return error proof, undefined if value is not found

try{
    console.log(user.street.address);
}catch (e) {
    console.log(e.name)//TypeError
}

user.dis()