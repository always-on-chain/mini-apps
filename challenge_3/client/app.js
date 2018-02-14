class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: initializeBoard()
    };
  }

  render() {
    return (
      <table><Board board={this.state.board} /></table>
    );
  }
}

var initializeBoard = function() {
  var board = [];
  var row = [null, null, null, null, null, null, null];

  for (var i = 0; i < 6; i++) {
    board.push(row)
  }

  return board;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);