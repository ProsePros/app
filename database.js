var mysql = require('mysql');

var connection = mysql.createConnection({

	host: "qbct6vwi8q648mrn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
	port: 3306,
	user: "e9kw16zbnupxu3m6",
	password: "gg6yh5zznk1rjtav",
	database: "kuor33rdv62eggtu",

});

connection.connect(function(err){

	if (err) {
		throw err;
	}

	console.log("Connected as ID " + connection.threadId);
})

var query = 'SHOW DATABASES'

connection.query(query, function(err, res) {
           
        console.log(res);           
})

