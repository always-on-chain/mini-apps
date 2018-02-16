"use strict";

var Pins = function Pins(props) {
  return props.pins.map(function (row) {
    return row.map(function (pin) {
      return React.createElement(Pin, { pin: pin, knockPins: props.knockPins });
    });
  });
};

var Pin = function Pin(props) {
  return React.createElement(
    "button",
    { id: props.pin, onClick: function onClick() {
        props.knockPins(props.pin);
      } },
    props.pin
  );
};

var Scoreboard = function Scoreboard(props) {
  return props.scoreboard.map(function (row) {
    return React.createElement(
      "tr",
      null,
      row.map(function (cell) {
        return React.createElement(ScoreCell, { scorecell: cell });
      })
    );
  });
};

var ScoreCell = function ScoreCell(props) {
  return React.createElement(
    "td",
    null,
    " ",
    props.scorecell
  );
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BpbnMuanMiXSwibmFtZXMiOlsiUGlucyIsInByb3BzIiwicGlucyIsIm1hcCIsInJvdyIsInBpbiIsImtub2NrUGlucyIsIlBpbiIsIlNjb3JlYm9hcmQiLCJzY29yZWJvYXJkIiwiY2VsbCIsIlNjb3JlQ2VsbCIsInNjb3JlY2VsbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFPLFNBQVBBLElBQU8sQ0FBU0MsS0FBVCxFQUFnQjtBQUN6QixTQUNFQSxNQUFNQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFTQyxHQUFULEVBQWM7QUFDM0IsV0FBT0EsSUFBSUQsR0FBSixDQUFRLFVBQVNFLEdBQVQsRUFBYztBQUMzQixhQUFPLG9CQUFDLEdBQUQsSUFBSyxLQUFLQSxHQUFWLEVBQWUsV0FBV0osTUFBTUssU0FBaEMsR0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQsQ0FERjtBQU9ELENBUkQ7O0FBVUEsSUFBSUMsTUFBTSxTQUFOQSxHQUFNLENBQVNOLEtBQVQsRUFBZ0I7QUFDeEIsU0FDRTtBQUFBO0FBQUEsTUFBUSxJQUFJQSxNQUFNSSxHQUFsQixFQUF1QixTQUFTLG1CQUFVO0FBQUNKLGNBQU1LLFNBQU4sQ0FBZ0JMLE1BQU1JLEdBQXRCO0FBQTJCLE9BQXRFO0FBQXlFSixVQUFNSTtBQUEvRSxHQURGO0FBR0QsQ0FKRDs7QUFNQSxJQUFJRyxhQUFhLFNBQWJBLFVBQWEsQ0FBU1AsS0FBVCxFQUFnQjtBQUMvQixTQUNFQSxNQUFNUSxVQUFOLENBQWlCTixHQUFqQixDQUFxQixVQUFTQyxHQUFULEVBQWM7QUFDakMsV0FBTztBQUFBO0FBQUE7QUFBTUEsVUFBSUQsR0FBSixDQUFRLFVBQVNPLElBQVQsRUFBZTtBQUNsQyxlQUFPLG9CQUFDLFNBQUQsSUFBVyxXQUFXQSxJQUF0QixHQUFQO0FBQ0QsT0FGWTtBQUFOLEtBQVA7QUFHRCxHQUpELENBREY7QUFPRCxDQVJEOztBQVVBLElBQUlDLFlBQVksU0FBWkEsU0FBWSxDQUFTVixLQUFULEVBQWdCO0FBQzlCLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBTUEsVUFBTVc7QUFBWixHQURGO0FBR0QsQ0FKRCIsImZpbGUiOiJwaW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBpbnMgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIHByb3BzLnBpbnMubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgcmV0dXJuIHJvdy5tYXAoZnVuY3Rpb24ocGluKSB7XG4gICAgICAgIHJldHVybiA8UGluIHBpbj17cGlufSBrbm9ja1BpbnM9e3Byb3BzLmtub2NrUGluc30vPlxuICAgICAgfSlcbiAgICB9KVxuICApO1xufVxuXG52YXIgUGluID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGlkPXtwcm9wcy5waW59IG9uQ2xpY2s9e2Z1bmN0aW9uKCl7cHJvcHMua25vY2tQaW5zKHByb3BzLnBpbil9fT57cHJvcHMucGlufTwvYnV0dG9uPlxuICApO1xufVxuXG52YXIgU2NvcmVib2FyZCA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgcHJvcHMuc2NvcmVib2FyZC5tYXAoZnVuY3Rpb24ocm93KSB7XG4gICAgICByZXR1cm4gPHRyPnsocm93Lm1hcChmdW5jdGlvbihjZWxsKSB7XG4gICAgICAgIHJldHVybiA8U2NvcmVDZWxsIHNjb3JlY2VsbD17Y2VsbH0gLz5cbiAgICAgIH0pKX08L3RyPlxuICAgIH0pXG4gIClcbn07XG5cbnZhciBTY29yZUNlbGwgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDx0ZD4ge3Byb3BzLnNjb3JlY2VsbH08L3RkPlxuICApXG59OyJdfQ==