var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('client'));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function(req, res) {
  console.log(req)
  res.send('req');
})

app.post('/', function(req, res) {
  // res.setHeader('Content-Type', 'application/json');
  res.send(req.body);
})

// app.set('port', 3000);

app.listen(3000, function() {
  console.log('listening');
});