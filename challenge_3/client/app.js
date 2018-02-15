class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initializeBoard(),
    };
  }

  onCellClick(row, col) {
    // var newBoard = this.state.board;
    
    // newBoard[this.state.board.length - 1][col] = 'X';
    var newBoard = this.state.board;
    row = newBoard.length - 1;
    if (newBoard[row][col] === 'X') {
      row = row - 1;
      newBoard[row][col] = 'X';
    } else {
      newBoard[row][col] = 'X';
    }

    console.log(newBoard)
    this.setState({
      board: newBoard,
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