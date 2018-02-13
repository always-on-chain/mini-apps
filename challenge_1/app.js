//Model
var gameboard = [
  ['row-1-col-1', 'row-1-col-2', 'row-1-col-3'],
  ['row-2-col-1', 'row-2-col-2', 'row-2-col-3'],
  ['row-3-col-1', 'row-3-col-2', 'row-3-col-3']
]

var playerX= {
  model: 1,
  dom: 'X',
  turn: true,
  winner: false
}
var playerO = {
  model: 2,
  dom: 'O',
  turn: false,
  winner: false
}

var changeModel = function(elementID, dom, model) {
  var element = document.getElementById(elementID);
  for (var i = 0; i < gameboard.length; i++) {
    for (var j = 0; j < gameboard[i].length; j++) {
      if (gameboard[i][j] === elementID) {
        element.innerHTML = dom;
        gameboard[i][j] = model;
      }
    }
  }
}

//Control
var clickHandler = function(id) {
  var element = document.getElementById(id);
  if (playerX.turn) {
    changeModel(element.id, playerX.dom, playerX.model);
    playerX.turn = !playerX.turn;
    playerO.turn = !playerO.turn;
  } else if (playerO.turn) {
    changeModel(element.id, playerO.dom, playerO.model);
    playerO.turn = !playerO.turn;
    playerX.turn = !playerX.turn;
  }
  checkForWinner();
}

//View
var restartBoard = function(name) {
  var rows =  document.getElementsByClassName(name);
  for (var i = 0; i < rows.length; i++) {
    document.getElementsByClassName(name)[i].innerHTML = '';
  }
  for (var spot in gameboard) {
    gameboard[spot] = null;
  }
  gameboard = [
    ['row-1-col-1', 'row-1-col-2', 'row-1-col-3'],
    ['row-2-col-1', 'row-2-col-2', 'row-2-col-3'],
    ['row-3-col-1', 'row-3-col-2', 'row-3-col-3']
  ]
  playerX.winner = false;
  playerO.winner = false;
}

var checkForWinner = function() {
  checkRows();
  checkCols();
  checkDiagonals();
}

var checkCols = function() {
  var col = 0;
  for (var i = 0; i < gameboard.length; i++) {
    for (var j = 0; j < gameboard[i].length; j++) {
      col += gameboard[j][i];
    }
    if (col === 3 && !playerX.winner) {
      playerX.winner = !playerX.winner
      console.log('PLAYER 1 wins!')
    }
    if (col === 6 && !playerO.winner) {
      playerO.winner = !playerO.winner
      console.log('PLAYER 2 wins!')
    }
    col = 0;
  }
}

var checkDiagonals = function() {
  if (gameboard[0][0] + gameboard[1][1] + gameboard[2][2] === 3) {
    console.log('PLAYER 1 wins!')
  }
  if (gameboard[0][0] + gameboard[1][1] + gameboard[2][2] === 6) {
    console.log('PLAYER 2 wins!')
  }
  if (gameboard[0][2] + gameboard[1][1] + gameboard[2][0] === 3) {
    console.log('PLAYER 1 wins!')
  }
  if (gameboard[0][2] + gameboard[1][1] + gameboard[2][0] === 6) {
    console.log('PLAYER 2 wins!')
  }
}

var checkRows = function() {
  var row = 0;
  for (var i = 0; i < gameboard.length; i++) {
    for (var j = 0; j < gameboard[i].length; j++) {
      row += gameboard[i][j];
    }
    if (row === 3 && !playerX.winner) {
      playerX.winner = !playerX.winner
      console.log('PLAYER 1 wins!')
    }
    if (row === 6 && !playerO.winner) {
      playerO.winner = !playerO.winner
      console.log('PLAYER 2 wins!')
    }
    row = 0;
  }
}