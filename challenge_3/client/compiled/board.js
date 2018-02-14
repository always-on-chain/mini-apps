"use strict";

var Board = function Board(props) {
  return props.board.map(function (row, rowIndex) {
    return React.createElement(
      "tr",
      { id: rowIndex },
      row.map(function (cell, colIndex) {
        return React.createElement(Cell, { cell: cell, id: colIndex });
      })
    );
  });
};

var Cell = function Cell(props) {
  return React.createElement(
    "td",
    { id: props.id },
    props.cell
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2JvYXJkLmpzIl0sIm5hbWVzIjpbIkJvYXJkIiwicHJvcHMiLCJib2FyZCIsIm1hcCIsInJvdyIsInJvd0luZGV4IiwiY2VsbCIsImNvbEluZGV4IiwiQ2VsbCIsImlkIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsU0FBUkEsS0FBUSxDQUFTQyxLQUFULEVBQWdCO0FBQzFCLFNBQ0VBLE1BQU1DLEtBQU4sQ0FBWUMsR0FBWixDQUFnQixVQUFTQyxHQUFULEVBQWNDLFFBQWQsRUFBd0I7QUFDdEMsV0FBUTtBQUFBO0FBQUEsUUFBSSxJQUFJQSxRQUFSO0FBQW1CRCxVQUFJRCxHQUFKLENBQVEsVUFBU0csSUFBVCxFQUFlQyxRQUFmLEVBQXlCO0FBQzFELGVBQVEsb0JBQUMsSUFBRCxJQUFNLE1BQU1ELElBQVosRUFBa0IsSUFBSUMsUUFBdEIsR0FBUjtBQUNELE9BRjBCO0FBQW5CLEtBQVI7QUFHRCxHQUpELENBREY7QUFPRCxDQVJEOztBQVVBLElBQUlDLE9BQU8sU0FBUEEsSUFBTyxDQUFTUCxLQUFULEVBQWdCO0FBQ3pCLFNBQ0U7QUFBQTtBQUFBLE1BQUksSUFBSUEsTUFBTVEsRUFBZDtBQUFtQlIsVUFBTUs7QUFBekIsR0FERjtBQUdELENBSkQiLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQm9hcmQgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIHByb3BzLmJvYXJkLm1hcChmdW5jdGlvbihyb3csIHJvd0luZGV4KSB7XG4gICAgICByZXR1cm4gKDx0ciBpZD17cm93SW5kZXh9Pntyb3cubWFwKGZ1bmN0aW9uKGNlbGwsIGNvbEluZGV4KSB7XG4gICAgICAgIHJldHVybiAoPENlbGwgY2VsbD17Y2VsbH0gaWQ9e2NvbEluZGV4fS8+KVxuICAgICAgfSl9PC90cj4pXG4gICAgfSlcbiAgKTtcbn1cblxudmFyIENlbGwgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx0ZCBpZD17cHJvcHMuaWR9Pntwcm9wcy5jZWxsfTwvdGQ+XG4gICk7XG59XG4iXX0=