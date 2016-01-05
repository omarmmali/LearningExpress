var express = require('express');
var sql = require('mssql');

var app = express();

var port = process.env.PORT || 5000;

var nav = [
    {
        Link: '/Books',
        Text: 'Books'
    },
    {
        Link: '/Authors',
        Text: 'Authors'
    }];

var bookRouter = require('./src/routes/bookRoutes')(nav);
var adminRouter = require('./src/routes/adminRoutes')(nav);

app.use(express.static('public'));
app.use(express.static('src/views'));
app.set('views', 'src/views');

app.set('view engine', 'ejs');

app.use('/books', bookRouter);
app.use('/admin',adminRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello from render',
        nav: [
            {
                Link: '/Books',
                Text: 'Books'
            },
            {
                Link: '/Authors',
                Text: 'Authors'
            }]
    });
});

app.get('/books', function (req, res) {
    res.send('Hello, books!');
});

app.listen(port, function (err) {
    console.log('Running server on port: ' + port);
});