var Pins = function(props) {
  return (
    props.pins.map(function(row) {
      return row.map(function(pin) {
        return <Pin pin={pin} knockPins={props.knockPins}/>
      })
    })
  );
}

var Pin = function(props) {
  return (
    <button id={props.pin} onClick={function(){props.knockPins(props.pin)}}>{props.pin}</button>
  );
}

var Scoreboard = function(props) {
  return (
    props.scoreboard.map(function(row) {
      return <tr>{(row.map(function(cell) {
        return <ScoreCell scorecell={cell} />
      }))}</tr>
    })
  )
};

var ScoreCell = function(props) {
  return (
    <td> {props.scorecell}</td>
  )
};