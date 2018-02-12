/* 
1. Need to create user interface w/o css
  - Use hr to make rows
  - Need to figure out how to make columns
2. Make gameboard in js by creating an array of arrays
  - 
*/

var gameboard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

var playerX= {
  piece: 'X',
  turn: true,
}

var playerO = {
  piece: 'O',
  turn: false,
}

var checkSpot = function() {
  for (var i = 0; i < gameboard.length; i++) {
    var row = gameboard[i]
    for (var j = 0; j < row.length; j++) {
      if (row[j] === null) {
        if (playerX.turn) {
          row[j] = playerX.piece;
          playerX.turn = !playerX.turn;
          playerO.turn = !playerO.turn;
        } else if (playerO.turn) {
          row[j] = playerO.piece;
          playerO.turn = !playerO.turn;
          playerX.turn = !playerX.turn;
        }
      }
    }
  }
}

var clickHandler = function(id) {
  if (playerX.turn) {
    document.getElementById(id).innerHTML = 'X';
    playerX.turn = !playerX.turn;
    playerO.turn = !playerO.turn;
  } else if (playerO.turn) {
    document.getElementById(id).innerHTML = 'O';
    playerO.turn = !playerO.turn;
    playerX.turn = !playerX.turn;
  }
}

var restartBoard = function(name) {
  var dom =  document.getElementsByClassName(name);
  for (var i = 0; i < dom.length; i++) {
    document.getElementsByClassName(name)[i].innerHTML = '';
  }
}




