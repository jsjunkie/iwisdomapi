var express = require('express');
var mongodb = require('mongodb');
var ObjectID = mongodb.ObjectID;

var app = express();

app.use(function(req, res, next){
	res.header("Access-Control-Allow-Origin", process.env.ALLOW_ORI);
	next();
});
app.get('/', function(req, res) {
	console.log('Request to /');
	res.send('This is iWisdom application API');
});

app.get('/wisdom', function (req, res){
	console.log('Request to /wisdom');
	res.send([
          { key: 1, title: "First", description: "Fer des" },
          { key: 2, title: "Second", description: "Se des" }
        ]);
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
