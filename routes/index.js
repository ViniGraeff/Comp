var express = require('express');
var router = express.Router();

app.configure(function(){
	app.set('views', __dirname + '/views');
	// Apenas modifique de ejs para jade.
	app.set('view engine', 'jade');
	app.set('view options', {layout: false});
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

router.get('/', function(req, res){
	res.send('<h1>Seja bem-vindo!</h1>');
});

module.exports = router;