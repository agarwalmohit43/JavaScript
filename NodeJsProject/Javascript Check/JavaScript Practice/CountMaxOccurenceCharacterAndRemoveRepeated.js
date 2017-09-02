var str = "abbbbbbbbcddggaaybbbby";
var arr = str.split('');
//console.log(arr);

var chr = 'a';
var flag = 0,counter=0;
for(var i=0;i<arr.length-1;i++)
{
   counter = 0;
    var j=i+1;
    while(j<arr.length)
    {
        if(arr[i]==arr[j])
        {
            arr.splice(j,1);
            counter++;

        }else if (arr[j]=="")
        {
            break;
        }else
        {
            j++;
            continue;
        }
    }
    if(counter > flag)
    {
        flag = counter;
        chr = arr[i];
    }
}

console.log(arr.toString());
console.log("Max Occurence Character: "+chr+" times: "+(flag+1));
