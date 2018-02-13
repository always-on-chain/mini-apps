
//Model
var app = {
  server: 'http://localhost:3000',
  send: function(data) {
    $.ajax({
      url: app.server,
      type: 'POST',
      data: data,
      success: function(data) {
        console.log('SUCCESS!', data)
      },
      error: function(error) {
        console.log('error', error);
      }
    })
  },
  fetch: function() {
    $.ajax({
      url: app.server,
      type: 'GET',
      data: data,
      success: function(data) {
        console.log(data);
      },
      error: function(error) {
        console.error('Failed to fetch messages', error);
      }
    })
  },
  sendData: function() {
    var data = $('#data').val();
    console.log(data);
    app.send(data);
  },

} 

//Control
// var sendData = function() {
//   var data = $('#data').val();
//   console.log('hi')
//   app.send(data);
// }


$('#submit').on('click', function() {
  app.sendData();
});

//View
// var renderData = function(data) {


// }