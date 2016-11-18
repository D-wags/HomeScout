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

//Garett's post route
// router.post('/api/data', function(req, res){
// 	var rentMin = (req.body.rentMin);
// 	var rentMax = (req.body.rentMax)
// 	var homeMin = (req.body.homeMin)
// 	var homeMax = (req.body.homeMax)
// 	var familyMin = (req.body.familyMin)
// 	var familyMax = (req.body.familyMax)
// 	var busMin = (req.body.busMin)
// 	var busMax = (req.body.busMax)

// 	console.log(rentMin);
// 	console.log(rentMax);
// 	console.log(homeMax);
// 	console.log(familyMax);
// 	console.log(busMin);
// });

module.exports = router;



