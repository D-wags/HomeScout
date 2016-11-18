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
	//Check if there is a port otherwise provide a default port
	if( !con_data.hasOwnProperty("port") || con_data["port"]!= null ) {
		con_data["port"] = 3306;
	}
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
				var query = "INSERT INTO zipstats (zip,percent_below_pov,median_income,percent_unemployment,percent_family_homes,median_rent,median_home_value,percent_housing_growth,percent_change_property_value,percent_change_median_rent,percent_home_close_to_bus_route,annual_number_crimes,google_fiber,walk_score,hip_score) VALUES ('"+colArr[0]+"', "+colArr[3]+", "+colArr[4]+", "+colArr[8]+", "+colArr[9]+", "+colArr[14]+", "+colArr[15]+", "+colArr[17]+", "+colArr[28]+", "+colArr[27]+", "+colArr[29]+", "+colArr[1]+", "+colArr[2]+", "+colArr[32]+", "+colArr[33]+")";
				console.log(query);
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