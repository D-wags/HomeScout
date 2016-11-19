// this is the zipstats_controller.js file

var models  = require('../models');
var express = require('express');
var router  = express.Router();


router.get('/', function(req, res) {
// TODO:
// =====
// use the zipStats model to find all the available data for each zip code
	models.zipstats.findAll()
	// connect that to this .then
	.then(function(zstats) {
		res.render('index', {
			zipstats: zstats
		})
	})
});

router.get('/getzips', function(req, res) {
	var dt = req.query;
	var rentMin = parseFloat(dt.rent.min);
	var rentMax = parseFloat(dt.rent.max);
	var homeMin = parseFloat(dt.homevalue.min);
	var homeMax = parseFloat(dt.homevalue.max);
	var familyMin = parseFloat(dt.family.min);
	var familyMax = parseFloat(dt.family.max);
	var busMin = parseFloat(dt.bus.min);
	var busMax = parseFloat(dt.bus.max);
	var walkMin = parseFloat(dt.walk.min);
	var walkMax = parseFloat(dt.walk.max);
	var hipMin = parseFloat(dt.hip.min);
	var hipMax = parseFloat(dt.hip.max);

	models.zipstats.findAll({
		where: {
			median_rent: {
				gte: rentMin,
				lte: rentMax
			},
			median_home_value: {
				gte: homeMin,
				lte: homeMax
			},
			percent_family_homes: {
				gte: familyMin,
				lte: familyMax
			},
			percent_home_close_to_bus_route: {
				gte: busMin,
				lte: busMax
			},
			walk_score: {
				gte: walkMin,
				lte: walkMax
			},
			hip_score: {
				gte: hipMin,
				lte: hipMax
			}
		}
	})
	// connect that to this .then
	.then(function(data) {
		var zips = [];
		data.forEach(function(d){
			zips.push(d.zip);
		});
		res.setHeader('Content-Type', 'application/json');
    	res.send(JSON.stringify({ zips: zips }));
	});
});

module.exports = router;



