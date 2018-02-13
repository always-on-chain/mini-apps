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
  winner: false,
  score: 0
};

var playerO = {
  model: 2,
  dom: 'O',
  turn: false,
  winner: false,
  score: 0
};

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
  gameboard = [
    ['row-1-col-1', 'row-1-col-2', 'row-1-col-3'],
    ['row-2-col-1', 'row-2-col-2', 'row-2-col-3'],
    ['row-3-col-1', 'row-3-col-2', 'row-3-col-3']
  ]
  playerX.winner = false;
  playerO.winner = false;
  playerX.turn = true;
  playerO.turn = false;
  playerX.score = 0;
  playerO.score = 0;
  document.getElementById("player-x-score").innerHTML = "Player X Score : 0";
  document.getElementById("player-o-score").innerHTML = "Player O Score : 0";
}

var checkForWinner = function() {
  checkRows();
  checkCols();
  checkDiagonals();
  document.getElementById("player-x-score").innerHTML = "Player X Score : " + playerX.score;
  document.getElementById("player-o-score").innerHTML = "Player O Score : " + playerO.score;
}

var checkCols = function() {
  var col = 0;
  for (var i = 0; i < gameboard.length; i++) {
    for (var j = 0; j < gameboard[i].length; j++) {
      col += gameboard[j][i];
    }
    if (col === 3 && !playerX.winner) {
      playerX.winner = !playerX.winner;
      playerX.score = playerX.score + 1;
      console.log('PLAYER 1 wins!');
      setTimeout(function() {
        restartBoard('spots');
      }, 1000);
    }
    if (col === 6 && !playerO.winner) {
      playerO.winner = !playerO.winner;
      playerO.score = playerO.score + 1;
      console.log('PLAYER 2 wins!');
      setTimeout(function() {
        restartBoard('spots')
      }, 1000);
    }
    col = 0;
  }
}

var checkDiagonals = function() {
  if (gameboard[0][0] + gameboard[1][1] + gameboard[2][2] === 3 && !playerX.winner) {
    playerX.winner = !playerX.winner;
    playerX.score = playerX.score + 1;
    console.log('PLAYER 1 wins!');
    setTimeout(function() {
      restartBoard('spots')
    }, 1000);
  }
  if (gameboard[0][0] + gameboard[1][1] + gameboard[2][2] === 6 && !playerO.winner) {
    playerO.winner = !playerO.winner;
    playerO.score = playerO.score + 1;
    console.log('PLAYER 2 wins!');
    setTimeout(function() {
      restartBoard('spots')
    }, 1000);
  }
  if (gameboard[0][2] + gameboard[1][1] + gameboard[2][0] === 3 && !playerX.winner) {
    playerX.winner = !playerX.winner;
    playerX.score = playerX.score + 1;
    console.log('PLAYER 1 wins!');
    setTimeout(function() {
      restartBoard('spots')
    }, 1000);
  }
  if (gameboard[0][2] + gameboard[1][1] + gameboard[2][0] === 6 && !playerO.winner) {
    playerO.winner = !playerO.winner;
    playerO.score = playerO.score + 1;
    console.log('PLAYER 2 wins!');
    setTimeout(function() {
      restartBoard('spots')
    }, 1000);
  }
}

var checkRows = function() {
  var row = 0;
  for (var i = 0; i < gameboard.length; i++) {
    for (var j = 0; j < gameboard[i].length; j++) {
      row += gameboard[i][j];
    }
    if (row === 3 && !playerX.winner) {
      playerX.winner = !playerX.winner;
      playerX.score = playerX.score + 1;
      console.log('PLAYER 1 wins!');
      setTimeout(function() {
        restartBoard('spots')
      }, 1000);
    }
    if (row === 6 && !playerO.winner) {
      playerO.winner = !playerO.winner;
      playerO.score = playerO.score + 1;
      console.log('PLAYER 2 wins!');
      setTimeout(function() {
        restartBoard('spots')
      }, 1000);
    }
    row = 0;
  }
}