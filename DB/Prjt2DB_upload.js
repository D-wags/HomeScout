var mysql = require('mysql');
var fs = require('fs');

var inFile = 'Project2Data.csv';

var conn = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'hippo666',
	database: 'zip_code_stats'
});


conn.connect(function(err) {
	if (err) {
		console.log(err);
		throw err;
	}

});

fs.readFile(inFile, "utf8", function(error, data){
		
		data = data.split("\r");
		
		for (var row = 1; row < data.length; row++) {
			var colArr = data[row].split(",");
			console.log(colArr[1]);
			var query = "INSERT INTO zip_stats VALUES ('"+colArr[0]+"', "+colArr[3]+", "+colArr[4]+", "+colArr[8]+", "+colArr[14]+", "+colArr[15]+", "+colArr[17]+", "+colArr[27]+", "+colArr[28]+", "+colArr[27]+", "+colArr[29]+", "+colArr[1]+", '"+colArr[2]+"')";
				conn.query(query, function(err,res) {
					if (err) {
						console.log(err);
						throw err;
					}
					else {
						console.log("SUCCESS!");
					}
				});
		}
		

});