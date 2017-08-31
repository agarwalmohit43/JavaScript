/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var fs=require('fs');

fs.rename('name.txt','mohit.txt',function (err) {
    if(err)throw err;
    console.log('Saved');
});