var str = "abbbbbbbbcddggaaybbbby";
var arr = str.split('');
 //console.log(arr);

// for(var i=0;i<arr.length-1;i++)
// {
//     var j=i+1;
//     while(j<arr.length)
//     {
//         //console.log(arr[i]+" at pos"+i);
//         //console.log(arr[j]+" at pos"+j);
//         if(arr[i]==arr[j])
//         {
//
//             //console.log("Elements equal");
//             //console.log(arr[i]+" at pos"+i);
//             //console.log(arr[j]+" at pos"+j);
//             //console.log("Before Removing "+arr.toString());
//             arr.splice(j,1);
//            // console.log("After Removing "+arr.toString());
//
//         }else if (arr[j]=="")
//         {
//             break;
//         }else
//         {
//             //console.log("continue"+"\n");
//             j++;
//             continue;
//         }
//
//     }
// }
//
// console.log(arr.toString());

// console.log(arr)


//alternate
let ar = arr.filter((item, pos) => {
    console.log(arr.indexOf(item) + ', ' + pos)
    return arr.indexOf(item) == pos;
})
console.log(ar)