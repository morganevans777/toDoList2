var express = require('express');
var app = express();
var database = require('./firebase.js')

var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});

database.init();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');        

app.get('/', function(req, res) {
    res.render('home')
})

app.listen(3000);