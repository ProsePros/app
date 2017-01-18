// Dependencies
// =============================================================

var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var app = express();

// Comment out for deployment
// var dotenv = require('dotenv');
// dotenv.load();

// Sets up the Express App
// =============================================================

// Set port
app.set("port", process.env.PORT || 8080);

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));


// Set static
app.use(express.static(__dirname + '/public/'));


// Routes
// =============================================================
require("./app/routes/api-routes.js")(app);
require("./app/routes/auth-routes.js")(app);


// Listener
// =============================================================

app.listen(app.get("port"), function() {console.log("Hollaback on port: "+app.get("port"));});