var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
// var $nav = $('mainnav');

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// $(document).scroll(function() {
// 	$nav.togglerClass('scrolled', $(this).scrolledTop() > $nav.height());
// });

app.get('/', function(req, res) {
	res.render('landing');
});

app.get('/contact', function(req, res) {
	res.render('contact');
});

app.get('/about', function(req, res) {
	res.render('about');
});

app.listen(3000, function() {
	console.log('Server Running');
});
