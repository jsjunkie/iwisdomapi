var express = require('express');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

var app = express();
app.get('/', function(req, res) {
	res.send('This is iWisdom application API');
});

app.get('/wisdom', function (req, res){
	res.send('All wisdom');
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
