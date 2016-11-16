// Declare variables
var mysql = require('mysql');
var fs = require('fs');
var inFile = 'Project2Data.csv';

// Read the config file and send to the callback
fs.readFile('../config/config.json', handleFile);

// Write the callback function
function handleFile(err, dt)
{
    if (err) throw err;
    //Parse config/config.json file
    var obj = JSON.parse(dt);
    //Add port and user attributes (required for the connection)
    var con_data = obj["development"];
    con_data["port"] = 3306;
    con_data["user"] = con_data["username"];
	var connection = con_data;
	//Create a connection
	var conn = mysql.createConnection(connection);
	//Connect
	conn.connect(function(err) {
		if (err) {
			console.log(err);
			throw err;
		}
		//Read the csv with the data to be inserted in the database
		fs.readFile(inFile, "utf8", function(error, data) {
			data = data.split("\r");
			
			for (var row = 1; row < data.length; row++) {
				var colArr = data[row].split(",");
				console.log(colArr[1]);
				var query = "INSERT INTO ZipStats VALUES ('"+colArr[0]+"', "+colArr[3]+", "+colArr[4]+", "+colArr[8]+", "+colArr[9]+", "+colArr[14]+", "+colArr[15]+", "+colArr[28]+", "+colArr[27]+", "+colArr[29]+", "+colArr[1]+", '"+colArr[2]+"')";
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
	});
}