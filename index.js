var express = require('express');
var app = express();
var database = require('./firebase.js')
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json 
app.use(bodyParser.json())



var handlebars = require('express3-handlebars')
    .create({defaultLayout: 'main'});

database.init();

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');        

app.get('/', function(req, res) {
    database.fetchData(function(data) {
        console.log(data, 'get')
       

        res.render('list', {tasks: data,
        numberOfTasks: data.length + 1});
    });
}); 

app.post('/', function(req,res) {
    console.log(req.body);
    database.writeData(req.body);
    res.redirect('/')
});

app.listen(3000);