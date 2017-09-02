var arr = [2,4,6];
var arr2 = [1,3,5];

var i=0,j=0;
while ((i<arr.length) && (j<arr2.length))
{
    if(arr[i]>arr2[j])
    {
        //console.log(i);
        arr.splice(i,0,arr2[j]);
        //console.log(arr);
        j++;
        i++;
    }else
    {
      //  console.log("i: "+i+" j: "+j);
        i++;
        continue;

    }
   // console.log("success i: "+i+" j: "+j);
}
console.log(arr);