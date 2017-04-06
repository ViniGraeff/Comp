var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/:categoria/:id', function(req, res, next) {
	// res.render('produtos', { id: req.params.id });
	function getItensCategory(data){
		var itensCategoria=[];
		for(var i=0; i<data.produtos.length; i++){
			for(var x=0; x<data.produtos[i].length; x++){
				if(data.produtos[i][x].tipo==req.params.categoria){
					itensCategoria.push(data.produtos[i][x]);
				}
			}
		}
		return itensCategoria;
	}

	function getProd(itens){
		var prod=[];
		for(var i=0; i<itens.length; i++){
			if(itens[i].codigo==req.params.id){
				prod.push(itens[i]);
			}
		}
		return prod;
	}

	fs.readFile(__dirname+ '/../db/produtos.json', 'utf8', function(err, data){
		data = JSON.parse(data);
		var itens = getItensCategory(data);
		var produto = getProd(itens);
		console.log(produto);
		res.render('pagina-produto', { prod: produto });
	});
	
});

module.exports = router;