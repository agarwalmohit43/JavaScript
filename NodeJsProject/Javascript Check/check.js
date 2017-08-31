/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var a=5;
var b=5;
var c='5';
var d=null;
var e;
console.log(a+b);
console.log(a+c);
console.log(d);
console.log(e);


if(a===c)// checks data type and value both
{
    console.log('equal');
}else{
    console.log('Not equal');
}

if(a==c) // irrespective of data types only value check
{
    console.log('equal');
}else{
    console.log('Not equal');
}

var count=0;
var value=100;
while(value>1)
{
    count++;
    value/=2;
    console.log(value);
}
console.log("100 is divided by 2 till "+count+"times");

for(var i=0;i<10;i++){
    console.log(i);
}

var person=new Object();
person.name='Mohit';
person.age=22;
person.address='Pune';
for(var outperson in person){
    console.log(outperson);
    // person.forEach(function (data,index) {
    //     console.log(data.name);
    // });

}