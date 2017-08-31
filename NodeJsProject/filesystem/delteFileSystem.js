/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var fs=require('fs');

fs.unlink('name2.txt',function (err) {
    if(err) throw err;
    console.log('Deleted');
});