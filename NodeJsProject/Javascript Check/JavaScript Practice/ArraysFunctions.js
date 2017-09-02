var arr = [10,2,8,1,15,12];
var arr2 = ["Mohit","Yash","Aishs","ilu","apple"];
var arr3 = ["Mohit","25","Letter",10,50];
var arr4 = [];

// console.log(arr.concat(arr2).concat(arr3).toString());//concat
// console.log(arr2.copyWithin(4,0,2));//copyWithin(target,start,end)
// console.log(arr2.every(function (t) { return !isNaN(t); }));// every checks every elements in array pass the test. returns boolean
// console.log(arr2.fill("Yoo",1,4));//replace the character and fill with the value passed from index position to real position.
// console.log(arr3.filter(function (t) { return !isNaN(t); }));//filters out the elements from arrays as per requirements.
// console.log(arr.find(function (t) { return t<5;})) // return first find conditioned matched element from array
// console.log(arr.findIndex(function (t) { return t<5;})) // return first find conditioned matched element index from array
// console.log(arr.indexOf(10));//returns index of present element else return -1;
// console.log(Array.isArray(arr));
// console.log(arr.join(','));//joins each element with separators; return string
// arr.forEach(function (t) { return Math.pow(t,2);  });
// console.log(arr.lastIndexOf(2));
// console.log(arr.map(function (t) { return Math.pow(t,2); })); creates new array according to the condition of callback.
// console.log(arr.pop());
// console.log(arr.push(12));
// console.log(arr.reduce(function (sum,i) { return sum+i; }));//adds all the element of the array
//  console.log(arr3.reduceRight(function (sum,i) { return sum+i; }));//adds all the element of the array from right
// console.log(arr.reverse());//reverse the array elements
// console.log(arr.shift());//removes 1st element of array and return it;
// console.log(arr.unshift(10));add element at first and returns total element in array
// console.log(arr.slice(0,1));// cut the array and return middle elements;
//  console.log(arr.splice(1,0,"d"));//splice(start,end,inserting)
// console.log(arr);
// console.log(arr2.some(function (t) { return !isNaN(t); }))//just opposite of every if any element pass the test
// console.log(arr2.toString());//converts array to string
// console.log(arr.valueOf());// return primitive value of the array
// console.log(arr4.pop());//undefined because array is empty