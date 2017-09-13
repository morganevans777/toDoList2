var express = require('express');
var app = express();
var database = require('./firebase.js')

var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});

database.init();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');        

app.get('/', function(req, res) {
    database.fetchData(function(data) {
        console.log(data)
        res.render('list', {task: data});
    });
    
});

app.get('/add', function(req, res) {
    res.render('add');
})

app.listen(3000);