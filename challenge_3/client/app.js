class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initializeBoard(),
      playerX: true,
      playerO: false,
    };
  }

  onCellClick(row, col) {
    var newBoard = this.state.board;
    row = newBoard.length - 1;

    for (var i = row; i >= 0; i--) {
      if (newBoard[i][col] === null) {
        if (this.state.playerX) {
          newBoard[i][col] = 'X';
          break;
        } else if (this.state.playerO) {
          newBoard[i][col] = 'O';
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