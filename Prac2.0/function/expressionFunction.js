//1expression at the right side
let sum = (a,b) => a+b;

console.log(sum(3,4));

//2
let welcome = (55>18)? ()  => console.log("Hurray") : ()  => console.log("oops");
welcome();

//3without arguments
let sayHi = () => console.log("Hello Mohit");
sayHi();

//4 or multi-line syntax with { ... }, need return here:
let add = (a,b) => {
  let result = a+b;
  return result;
};
console.log(add(5,2));

//5 with a single argument
let square = n => n **2;
console.log(square(25));

//with no return type
let functionWithNoReturnType = () =>{}
console.log(functionWithNoReturnType());