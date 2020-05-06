isEligible(18);

function isEligible(age) {

    if(age>=18){
        console.log("yes");
    }else{
        console.log("No");
    }
}

let sum;

for(let i = 1 ; i < 50;i++){
   if(i%2 === 0){
       sum = function(text="test"){
           console.log(text+i);
       };
   }else{
       sum = function(text="untest"){
           console.log(text);
       };
   }
   // sum();
}


let testJS = () => 1000;

console.log(typeof testJS());
console.log(typeof testJS);
