var Board = function(props) {
  return (
    props.board.map(function(row, rowIndex) {
      return (<tr id={rowIndex}>{row.map(function(cell, colIndex) {
        return (<Cell cell={cell} id={colIndex}/>)
      })}</tr>)
    })
  );
}

var Cell = function(props) {
  return (
    <td id={props.id}>{props.cell}</td>
  );
}
