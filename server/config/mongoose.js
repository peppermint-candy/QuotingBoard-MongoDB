var mongoose = require('mongoose');

// require the fs module for loading model files
var fs = require('fs');
var path = require('path');

mongoose.connect('mongodb://localhost/Modular1');

// read all of the filesi n the models_path and require (run) each of the javascript files
var models_path = path.join(__dirname, './../models');

fs.readdirSync(models_path).forEach(function(file) {
	if(file.indexOf('.js') >= 0) {

		// require the file (this runs the model file which registers the schema)
		require(models_path + '/' + file);

	}
});