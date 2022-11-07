var MongoClient = require('mongodb').MongoClient;

let password = 'Farman123';
let link = `mongodb+srv://farman:${password}@websitecluster.obzznjm.mongodb.net/mcqs_Database?retryWrites=true&w=majority`;


function getAllDocuments(databaseName, collectionName, obj) {
    let myPromise = new Promise(function (Resolve, Reject) {
        MongoClient.connect(link, function (err, db) {
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

const myPromise = getAllDocuments('mcqs_Database', 'mcqs_Collection', { subject: 'Maths' });
myPromise.then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
})
