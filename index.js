var express = require('express');
var app = express();
var database = require('./firebase.js')

var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});

database.init();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');        

app.get('/add', function(req, res) {
    res.render('add');
    database.writeData();
});

app.get('/', function(req, res) {
    database.fetchData(function(data) {
        console.log(data)
        res.render('list', {tasks: data});
    });
});

app.listen(3000);