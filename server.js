var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.send('This is iWisdom application API');
});

app.get('/wisdom', function (req, res){
	res.send('All wisdom');
});

app.listen('3400', function(){
	console.log('Listening to port: 3400');
});
