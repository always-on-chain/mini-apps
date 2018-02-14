var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('client'));
app.use(express.static('node_modules/jquery/dist'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  res.send(req.body);
})

app.listen(3000, function() {
  console.log('listening');
});