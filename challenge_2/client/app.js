
//Model
var app = {
  server: 'http://localhost:3000',
  send: function(input) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: input,
      contentType: 'application/json',
      success: function(data) {
        $('#text').append($("<div>"+getHeaders(data)+"</div>"));

        var parsedData = parseData(data).split('\n');
        for (var i = 0; i < parsedData.length; i++) {
          $('#text').append($("<div>"+parsedData[i]+"</div>"));
        }
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  }
} 

//Control
var sendData = function() {
  var data = $('#data').val();
  app.send(data);
}
  //Handlers
$('#submit').on('click', function() {
  sendData();
});

var getHeaders = function(data) {
  var headers = '';
  for (var prop in data) {
    if (prop !== 'children') {
      headers +=  prop + ',';
    }
  }
  headers = headers.slice(0, -1);
  return headers;
}

var parseData = function(data) {
  var csv = '';

  for (var prop in data) {
    if (prop !== 'children') {
      csv += data[prop] + ',';
    }
  }
  csv = csv.slice(0, -1);
  csv += '\n';

  if (data.children.length > 0) {
    for (var i = 0; i < data.children.length; i++) {
      csv += parseData(data.children[i]);
    }
  }
  return csv;
}

//View
// var renderData = function(data) {


// }