var Board = function(props) {
  return (
    props.board.map(function(row, rowIndex) {
      return (<tr row-id={rowIndex}>{row.map(function(cell, colIndex) {
        return (<Cell board={props.board} cell={cell} colID={colIndex} rowID={rowIndex} clickedCell={props.clickedCell}/>)
      })}</tr>)
    })
  );
}

var Cell = function(props) {
  return (
    <td col-id={props.colID} onClick={function(){props.clickedCell(props.rowID, props.colID)}}> {props.board[props.rowID][props.colID]}  </td>
  );
}


// var Board = function(props) {
//   return (
//     props.board.map(function(row, rowIndex) {
//       return (<tr row-id={rowIndex}>{row.map(function(cell, colIndex) {
//         return (<Cell cell={cell} colID={colIndex} rowID={rowIndex} clickedCell={props.clickedCell}/>)
//       })}</tr>)
//     })
//   );
// }

// var Cell = function(props) {
//   return (
//     <td col-id={props.colID} row-id={props.rowID} onClick={function(){props.clickedCell(pros.colID, pros.rowID)}}>{props.cell}</td>
//   );
// }


//onClick={function(){props.clickedCell(props.id)}
//row-id={pros.rowID}

//{props.board[props.colId][props.rowID]}