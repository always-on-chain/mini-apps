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
      if (row[j] === null && playerX.turn) {
        row[j] = playerX.piece;
        playerX.turn = false;
      } else if (row[j] === null && playerO.turn) {
        row[j] = playerO.piece;
        playerO.turn = false;
      }
    }
  }
}

checkSpot();




