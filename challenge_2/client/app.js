
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
        renderData(data);
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  }
} 

//Controller
var sendData = function() {
  var data = $('#data').val();
  app.send(data);
}
$('#submit').on('click', sendData);

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

var id = 0;

var parseData = function(data) {
  var csv = '';

  for (var prop in data) {
    if (prop !== 'children') {
      if (data[prop] === null) {
        id += 1;
        data[prop] = id;
      }
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
var renderData = function(data) {
  $('#text').append($("<div>" + getHeaders(data) + "</div>"));

  var parsedData = parseData(data).split('\n');
  for (var i = 0; i < parsedData.length; i++) {
    $('#text').append($("<div>" + parsedData[i] + "</div>"));
  }
}