var express = require('express');
var router = express.Router();
var fs = require('fs');
var file = require('./../controller/file');


router.get('/:id', function(req, res, next) {
	console.log(req.params.id);
	res.send('ok');
	// fs.readFile(__dirname+ '/../db/produtos.json', 'utf8', function(err, data){
	// 	data = JSON.parse(data);
	// 	var id = req.params.id;
	// 	var cat = 0;
	// 	var prod = 0;
	// 	for(var i=0; i<data.produtos.length; i++){
	// 		for(var x=0; x<data.produtos[i].length; x++){
	// 			if(data.produtos[i][x].codigo==req.params.id){
	// 				cat = i;
	// 				prod = x;
	// 			}
	// 		}
	// 	}
	// 	var item = data.produtos[cat][prod];
	// 	item.carrinho = 0;

	// 	console.log(prod);
	// 	data.produtos[cat].splice(prod, 1);

	// 	data.produtos[cat].push(item);
	// 	var dataJson = JSON.stringify(data);
	// 	file.write(dataJson, res);
	// 	console.log(item);

	// });
});	

module.exports = router;