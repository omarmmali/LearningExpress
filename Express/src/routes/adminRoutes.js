var express = require('express');
var mongodb = require('mongodb').MongoClient;
var adminRouter = express.Router();

var books = [
    {
        title: 'John Dies at The End',
        genre: 'Comedy-Thriller',
        author: 'David Wong',
        read: true
    },
    {
        title: 'This Book Is Filled With Spiders Seriously Dude Don\'t touch it',
        genre: 'Comedy-Thriller',
        author: 'David Wong',
        read: false
    }
          ];

var router = function (nav) {
    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';
            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });
        });
    return adminRouter;
};

module.exports = router;