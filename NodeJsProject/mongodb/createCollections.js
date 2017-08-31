var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mohit";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    db.createCollection("MohitNodejs",function (err,res) {
        if (err) throw err;

        console.log("Collection Created");
        db.close();
    });

});