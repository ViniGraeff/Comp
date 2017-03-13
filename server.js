var express = require('express');
var app = express();
var port = '12000'

var application = require('./app');
app.use(application);

app.listen(port);
console.log('Servidor iniciado na porta '+port+'. Acesse: localhost:'+port)