/**
 * Created by MOHIT AGARWAL on 23-06-2017.
 */
var fs=require('fs');
var rs=fs.createReadStream('./mohit.txt');
rs.on('open',function () {
   console.log('Opened');
});