var express = require('express');
var bookRouter = express.Router();

var router = function (nav) {
    var books = [{
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

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'books',
                nav: nav,
                books: books
            });
        });
    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'book',
                nav: nav,
                book: books[id]
            });
        });
    return bookRouter;
}
module.exports = router;