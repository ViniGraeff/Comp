var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
	res.json({'msg': 'Seja bem-vindo!'});
});

module.exports = router;