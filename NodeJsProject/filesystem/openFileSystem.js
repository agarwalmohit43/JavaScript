/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var fs=require('fs');

fs.open('name.txt','w',function (err,file) {
    if(err) throw err;
    console.log('Saved');
});