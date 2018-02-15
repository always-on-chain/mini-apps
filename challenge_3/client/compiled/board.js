"use strict";

var Board = function Board(props) {
  return props.board.map(function (row, rowIndex) {
    return React.createElement(
      "tr",
      { "row-id": rowIndex },
      row.map(function (cell, colIndex) {
        return React.createElement(Cell, { board: props.board, cell: cell, colID: colIndex, rowID: rowIndex, clickedCell: props.clickedCell });
      })
    );
  });
};

var Cell = function Cell(props) {
  return React.createElement(
    "td",
    { "col-id": props.colID, onClick: function onClick() {
        props.clickedCell(props.rowID, props.colID);
      } },
    " ",
    props.board[props.rowID][props.colID],
    " "
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwicHJvcHMiLCJib2FyZCIsIm1hcCIsInJvdyIsInJvd0luZGV4IiwiY2VsbCIsImNvbEluZGV4IiwiY2xpY2tlZENlbGwiLCJDZWxsIiwiY29sSUQiLCJyb3dJRCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFRLFNBQVJBLEtBQVEsQ0FBU0MsS0FBVCxFQUFnQjtBQUMxQixTQUNFQSxNQUFNQyxLQUFOLENBQVlDLEdBQVosQ0FBZ0IsVUFBU0MsR0FBVCxFQUFjQyxRQUFkLEVBQXdCO0FBQ3RDLFdBQVE7QUFBQTtBQUFBLFFBQUksVUFBUUEsUUFBWjtBQUF1QkQsVUFBSUQsR0FBSixDQUFRLFVBQVNHLElBQVQsRUFBZUMsUUFBZixFQUF5QjtBQUM5RCxlQUFRLG9CQUFDLElBQUQsSUFBTSxPQUFPTixNQUFNQyxLQUFuQixFQUEwQixNQUFNSSxJQUFoQyxFQUFzQyxPQUFPQyxRQUE3QyxFQUF1RCxPQUFPRixRQUE5RCxFQUF3RSxhQUFhSixNQUFNTyxXQUEzRixHQUFSO0FBQ0QsT0FGOEI7QUFBdkIsS0FBUjtBQUdELEdBSkQsQ0FERjtBQU9ELENBUkQ7O0FBVUEsSUFBSUMsT0FBTyxTQUFQQSxJQUFPLENBQVNSLEtBQVQsRUFBZ0I7QUFDekIsU0FDRTtBQUFBO0FBQUEsTUFBSSxVQUFRQSxNQUFNUyxLQUFsQixFQUF5QixTQUFTLG1CQUFVO0FBQUNULGNBQU1PLFdBQU4sQ0FBa0JQLE1BQU1VLEtBQXhCLEVBQStCVixNQUFNUyxLQUFyQztBQUE0QyxPQUF6RjtBQUFBO0FBQTZGVCxVQUFNQyxLQUFOLENBQVlELE1BQU1VLEtBQWxCLEVBQXlCVixNQUFNUyxLQUEvQixDQUE3RjtBQUFBO0FBQUEsR0FERjtBQUdELENBSkQiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQm9hcmQgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIHByb3BzLmJvYXJkLm1hcChmdW5jdGlvbihyb3csIHJvd0luZGV4KSB7XG4gICAgICByZXR1cm4gKDx0ciByb3ctaWQ9e3Jvd0luZGV4fT57cm93Lm1hcChmdW5jdGlvbihjZWxsLCBjb2xJbmRleCkge1xuICAgICAgICByZXR1cm4gKDxDZWxsIGJvYXJkPXtwcm9wcy5ib2FyZH0gY2VsbD17Y2VsbH0gY29sSUQ9e2NvbEluZGV4fSByb3dJRD17cm93SW5kZXh9IGNsaWNrZWRDZWxsPXtwcm9wcy5jbGlja2VkQ2VsbH0vPilcbiAgICAgIH0pfTwvdHI+KVxuICAgIH0pXG4gICk7XG59XG5cbnZhciBDZWxsID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8dGQgY29sLWlkPXtwcm9wcy5jb2xJRH0gb25DbGljaz17ZnVuY3Rpb24oKXtwcm9wcy5jbGlja2VkQ2VsbChwcm9wcy5yb3dJRCwgcHJvcHMuY29sSUQpfX0+IHtwcm9wcy5ib2FyZFtwcm9wcy5yb3dJRF1bcHJvcHMuY29sSURdfSA8L3RkPlxuICApO1xufSJdfQ==