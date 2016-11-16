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

module.exports = router;
