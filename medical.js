var express = require('express');
var app = express();
var handlebars = require('express3-handlebars').create({defaultLayout : 'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine','handlebars');
app.set('port', process.env.PORT || 3000);
app.use(express.static(__dirname + '/public'));	

var information =[ "This is the unofficial website of Medical Information System.",
					"Construction is still on the process",
					"Official Website is coming soon shortly",];
app.get('', function(req, res)
{
	var randominfo = information[Math.floor(Math.random()*information.length)];
	res.render('home',{ information: randominfo });
});
app.get('/about', function(req, res)
{
	res.render('about');
});
app.use(function(req, res, next)
{
	res.status(404);
	res.render('error');
});
app.use(function(err, req, res, next)
{
	console.error(err.stack);
	res.status(500);
	res.render('server_error');
});
app.listen(app.get('port'),()=>
{
	console.log('Server started on :'+app.get('port')+' press Ctrl+c to terminate');
});