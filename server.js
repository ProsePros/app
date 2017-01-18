//Imported modules
//============================================================
//npm server package
var express = require('express');
//npm package used for 
var bodyParser = require('body-parser');
//npm package to handle file pathways
var path = require('path');
//module to establish mysql connection with Jaws DB
var connection = require('./config/connection.js');
//npm module 'dot-env'; deal with sensitive info
require('dotenv').config();
var methodOverride = require('method-override');

var axios = require("axios");




//Run express app
//================================================
var app = express();
var PORT = process.env.PORT || 3000;
//App listener
app.listen(PORT, function(){
	console.log('Listening on port: ' + PORT);
});


// Serve static files
app.use(express.static(__dirname + 'public/build'));



//Express middleware for parsing info for http POST requests
//================================================
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// establish connection to mysql/jawsdb
connection.connect(function(err){
	if (err){
		console.error(err.stack);
	}
	console.log('connected as ID ' + connection.threadId);
});


//Get route for the profile page
//================================================
var mongojs = require('mongojs');

//in databaseUrl: remove angled brackets
var databaseUrl = 'mongodb://pro:prose@ds117819.mlab.com:17819/heroku_54q3r8f2';
var collections = ['sentences'];
var db = mongojs(databaseUrl, collections);

db.on('error', function(err){
	console.log('Database error: ', err);
});

app.get('/all', function(req, res){
	db.sentences.find({}, function(err, found){
		if (err) console.log(err);
		else {
			res.json(found);
			console.log(found.length);
		}
	});
})


// app.get('/', function(req, res){
// 	res.send('./index.html');
// });

app.get('/', function(req,res) {
	res.sendFile(path.resolve(__dirname, 'public/build/index.html'));
});

// app.get('/css/:name', function(req, res) {
// 		var fileName = req.params.name;
// 		var options = {
// 			root: __dirname + './../public/css/',
// 			dotfiles: 'deny',
// 			headers: {
// 			    'x-timestamp': Date.now(),
// 			    'x-sent': true
// 			}
// 		};

app.post('/addsentence/', function(req, res){
	var userinput = req.params.body;
	console.log(userinput);
	res.json('good job, sonnnnnn!');
	// db.sentences.insert({
	// 	"user_id": "contributor2",
	// 	"original": userinput,
	// 	"revised": []
	// });

	res.redirect('/all');
});

app.get('/randomsentence', function(req, res){
	var databaseSize = null;
	db.sentences.find({}, function(err, found){
		if (err) console.log(err);
		else {
			// res.json(found);
			// console.log(found.length);
			var databaseSize = found.length;
			var random = Math.floor(Math.random() * databaseSize);
			console.log(random);
			res.json(found[random]);
		}
	});
});

    
//External routing files
//================================================
// require('./api/api-routes.js')(app);
// require('./api/admin-routes.js')(app);
// require('./api/login-register-routes.js')(app);
// require('./api/static-file-routes.js')(app);

