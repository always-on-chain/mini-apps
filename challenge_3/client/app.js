class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initializeBoard(),
      playerX: true,
      playerO: false,
      playerXID: 'X',
      playerOID: 'O'
    };
  }

  onCellClick(row, col) {
    var newBoard = this.state.board;
    row = newBoard.length - 1;
    

    for (var i = row; i >= 0; i--) {
      if (newBoard[i][col] === null) {
        if (this.state.playerX) {
          newBoard[i][col] = 'X';
          this.checkWinner(i, col, this.state.playerXID)
          break;
        } else if (this.state.playerO) {
          newBoard[i][col] = 'O';
          this.checkWinner(i, col, this.state.playerOID);
          break;
        }
      }
    }

    this.setState({
      board: newBoard,
      playerX: !this.state.playerX,
      playerO: !this.state.playerO,
    })
  }

  checkWinner(row, col, player) {
    this.checkRows(row);
    this.checkCols(col);
    this.checkDiagonals(row, col, player);
  }

  checkDiagonals(row, col, player) {
    var countX = 0;
    var countO = 0;
    var colLeft = col;
    var colRight = col;

    for (var i = row; i < 6; i++) {
      colLeft--;
      colRight++;
      if (this.state.board[i][colLeft] === player) {
        if (player === 'X') {
          countX++;
          countO = 0;
          console.log(countX)
          if (countX === 4) {
            console.log('Player' + player + 'wins!')
          }
        }
      } else if (this.state.board[i][colRight] === player) {
        if (player === 'O') {
          countO++;
          countX = 0;
          if (colRight === 4) {
            console.log('Player' + player + 'wins!')
          }
        }
       
      }
    }
   
  }

  checkRows(row) {
    var countX = 0;
    var countO = 0;

    for (var i = 0; i <= 6; i++) {
      if (this.state.board[row][i] === 'X') {
        countX++;
        countO = 0;
        if (countX === 4) {
          console.log('PlayerX wins')
          countX = 0;
        }
      } else if (this.state.board[row][i] === 'O') {
        countO++;
        countX = 0;
        if (countO === 4) {
          console.log('PlayerO wins');
          countO = 0;
        }
      } else {
        countO = 0;
        countX = 0;
      }
    }
  }

  checkCols(col) {
    var countX = 0;
    var countO = 0;

    for (var i = 0; i <= 5; i++) {
      if (this.state.board[i][col] === 'X') {
        countX++;
        if (countX === 4) {
          console.log('PlayerX wins')
          countX = 0;
        }
      } else if (this.state.board[i][col] === 'O') {
        countO++;
        if (countO === 4) {
          console.log('PlayerO wins');
          countO = 0;
        }
      }
    }
  }

  render() {
    return (
      <table><Board board={this.state.board} clickedCell={this.onCellClick.bind(this)}/></table>
    );
  }
}

var initializeBoard = function() {
  var board = [];
  var row;

  for (var i = 0; i < 6; i++) {
    row = [null, null, null, null, null, null, null];
    board.push(row);
  }

  return board;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);