/**
 * Created by mnpw3d on 20/10/2016.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var url = 'mongodb://sarat:sarat123@ds143340.mlab.com:43340/aseproject';
var insertDocument = function(db, callback) {
    db.collection('Lab10').insertOne( {
        "fname" : "Chandra",
        "lname" : "Varma",
        "address":{
            "city":"Kansas City",
            "state":"MO"
        },
        "education" : {
            "university":"UMKC",
            "degree":"Master of Science",
            "major":"Computer Science"
        },
        "mail":"varma.m@gmail.com"
    }, function(err, result) {
        assert.equal(err, null);
        console.log("Inserted details");
        callback();
    });
};
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    insertDocument(db, function() {
        db.close();
    });
});