var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	fs.readFile(__dirname+ '/../db/produtos.json', 'utf8', function(err, data){
		data = JSON.parse(data);
		res.render('catalogo', { dados: data });
		res.end();
	});
});

module.exports = router;
