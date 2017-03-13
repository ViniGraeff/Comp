var express = require('express');
var router = express.Router();

var index = require('./routes/index');
router.use(index);

module.exports = router;