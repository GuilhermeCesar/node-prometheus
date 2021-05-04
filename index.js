var express = require("express");
var  prom = require('prom-client');
const register = prom.register;

var app = express();

const client = require('prom-client');
const counter = new client.Counter({
  name: 'aula_request_total',
  help: 'Contador de request',
});

app.get('/', function(req, rest) {
    counter.inc(); 
  rest.send('Hello World meus amigos')  
  
})

app.get('/metrics',async function(req, res) {

    res.set("Content-Type", register.contentType)
    res.end(await register.metrics())
    
})

app.listen(3000);