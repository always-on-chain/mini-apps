var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('client'));
app.use(bodyParser.json());

app.post('/', function(req, res) {
  // res.writeHead('Content-Type', 'application/json');
  // console.log(_.escape(req.body));
  res.send(req.body);
})

// app.set('port', 3000);

app.listen(3000, function() {
  console.log('listening');
});

