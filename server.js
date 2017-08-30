var express = require('express');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;
var database = require('./database');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();

var corsOptions = {
	origin: process.env.ALLOW_ORI,
	optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	console.log('Request to /');
	res.send('This is iWisdom application API');
});

app.get('/wisdom', function (req, res){
	console.log('Request to /wisdom');
	database.getWisdom(db, function(docs){
	  res.send(docs);
	}, function(err) {
	  console.log(err);
	});

});

app.post('/add', function (req, res){
	console.log('Request to /add');
	var title = req.body.title;
	var description = req.body.description;
	var data = {title: title, description: description};

	database.addWisdom(db, data, function(result) {
		res.send(result);
	}, function(err) {
		console.log(err);
	});
});

app.post('/edit', function(req, res) {
	console.log('Request to /edit');
	var title = req.body.title;
	var description = req.body.description;
	var key = req.body.key;
 	var data = { key: ObjectID(key), title: title, description: description };
	
	database.editWisdom(db, data, function(result) {
		res.send(result);		
	}, function(err) {
		console.log(err);
	});
	
});

var db;

mongodb.MongoClient.connect(process.env.MONGODB_URI, function(err, database){
	if (err){
	  console.log(err);
	  process.exit(1);
	}
	db = database;
	console.log("Database connection ready");
	
	app.listen(process.env.PORT, function(){
          console.log('Listening to port:'+process.env.PORT);
	});
});
