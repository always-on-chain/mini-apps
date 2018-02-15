class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pins: initializePins(),
      pinsLeft: 10,
      scoreboard: keepScore(),
      total: 0,
      rolls: 0,
      frame: 0
    }
  }

  knockPins(numberOfPins) {
    var newScore = this.state.scoreboard;
    newScore[this.state.frame][this.state.rolls] = numberOfPins;

    console.table(newScore);

    this.setState({
      scoreboard: newScore,
      total: calculateTotal(newScore),
      pinsLeft: pinsLeft(this.state.pinsLeft, numberOfPins, this.state.rolls),
      rolls: increaseRolls(this.state.rolls, this.state.frame),
      frame: increaseFrame(this.state.rolls, this.state.frame)
    })
  }

  render() {
    return (
      <div id="pins-container"><Pins pins={this.state.pins} knockPins={this.knockPins.bind(this)} /></div>
      // <table><ScoreBoard  scoreboard={this.state.scoreBoard}/></table>
    );
  };
}

var pinsLeft = function(pinsLeft, numberOfPins, rolls) {
  var pins;
  var pinElements = document.getElementById('pins-container').childNodes;

  if (rolls === 1) {
    pins = 10;
    for (var i = 0; i < pinElements.length; i++) {
      $('#' + i).show();
    }
  } else {
    pins = pinsLeft - numberOfPins;
    for (var i = 0; i < pinElements.length; i++) {
      if (i > pins) {
        $('#' + i).hide();
      }
    } 
  }
  document.getElementById('pins-left').innerHTML = 'Pins left: ' + pins;
  return pins;
}

var increaseFrame = function(rolls, frame) {
  if (rolls === 1) {
    frame++;
  }
  document.getElementById('frame').innerHTML = 'Frame: ' + frame;
  return frame;
}

var increaseRolls = function(rolls, frame) {
  if (rolls === 0) {
    rolls++;
  } else {
    rolls = 0;
  }
  document.getElementById('rolls').innerHTML = 'Rolls: ' + rolls;
  return rolls;
}

var calculateTotal = function(score) {
  var total = score.reduce(function(a, b) {
    return a + b;
  })
  document.getElementById('total').innerHTML = 'Total Score: ' + total;
  return total;
}

var keepScore = function() {
  var score = [
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
    [null, null],
  ]
  return score;
}

var initializePins = function() {
  var pins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [9, 10]
  ]
  return pins;
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);