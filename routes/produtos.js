var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
	res.render('produtos', { id: req.params.id });
	// fs.readFile(__dirname+ '/../db/produtos.json', 'utf8', function(err, data){
	// 	data = JSON.parse(data);
	// 	res.render('produtos', { dados: data });
	// 	res.end();
	// });
});

module.exports = router;
