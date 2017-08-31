/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var fs=require('fs');

fs.writeFile('name2.txt','Welcome',function (err) {
    if(err) throw err;
    console.log('Saved');
});