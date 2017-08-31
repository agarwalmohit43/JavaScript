var MongoClient=require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mohit2";
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected!");
    db.close();
});