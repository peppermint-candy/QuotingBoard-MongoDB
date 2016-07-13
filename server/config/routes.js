// here we load the Quote model that we created on the server.js page

var mongoose = require('mongoose');
var Quote = mongoose.model('Quote');
// mongoose.model('Quote',QuoteSchema);
module.exports = function(app) {

// --------------- first page ------------------------------------------
app.get('/', function( req, res) {
	
		res.render('addnew');

	})

// ---------------------display quotes page --------------
app.get('/quotes', function( req, res) {
	Quote.find( {} , function ( err, quotes) {

		if (err) {
			console.log('oh no!!! ')
		}else{
			res.render('quotes', {quote : quotes})
		}

	})
})


// ----------------add my quote ----------------------------------
app.post('/quotes', function( req,res) {
	if (req.body.name && req.body.quote) {
		var quote = new Quote( {name: req.body.name, quote: req.body.quote });
		quote.save(function (err) {
			if(err) {
				console.log('something went wrong!');
			}else{
				console.log('successfuly added a new quote!')
				res.redirect('/quotes')
			}
		})
	}	
})

}