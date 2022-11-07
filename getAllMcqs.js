var MongoClient = require('mongodb').MongoClient;

let Password = 'Bojtzzv6zT9pSdfC';
let URL = `mongodb+srv://affan:${Password}@users.mq3loit.mongodb.net/test`

function getAllDocuments(databaseName, collectionName, obj) {
    let myPromise = new Promise(function (Resolve, Reject) {
        MongoClient.connect(URL, function (err, db) {
            if (err) throw err;
            var dbo = db.db(databaseName);
            dbo.collection(collectionName).find(obj).toArray(function (err, result) {
                if (err) throw err;
                db.close();
                Resolve(result); // when successful
                Reject(err);  // when error
            });
        });
    });

    return myPromise;
}