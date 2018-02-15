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

// var Scoreboard = function(props) {

// }
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3BpbnMuanMiXSwibmFtZXMiOlsiUGlucyIsInByb3BzIiwicGlucyIsIm1hcCIsInJvdyIsInBpbiIsImtub2NrUGlucyIsIlBpbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxPQUFPLFNBQVBBLElBQU8sQ0FBU0MsS0FBVCxFQUFnQjtBQUN6QixTQUNFQSxNQUFNQyxJQUFOLENBQVdDLEdBQVgsQ0FBZSxVQUFTQyxHQUFULEVBQWM7QUFDM0IsV0FBT0EsSUFBSUQsR0FBSixDQUFRLFVBQVNFLEdBQVQsRUFBYztBQUMzQixhQUFPLG9CQUFDLEdBQUQsSUFBSyxLQUFLQSxHQUFWLEVBQWUsV0FBV0osTUFBTUssU0FBaEMsR0FBUDtBQUNELEtBRk0sQ0FBUDtBQUdELEdBSkQsQ0FERjtBQU9ELENBUkQ7O0FBVUEsSUFBSUMsTUFBTSxTQUFOQSxHQUFNLENBQVNOLEtBQVQsRUFBZ0I7QUFDeEIsU0FDRTtBQUFBO0FBQUEsTUFBUSxJQUFJQSxNQUFNSSxHQUFsQixFQUF1QixTQUFTLG1CQUFVO0FBQUNKLGNBQU1LLFNBQU4sQ0FBZ0JMLE1BQU1JLEdBQXRCO0FBQTJCLE9BQXRFO0FBQXlFSixVQUFNSTtBQUEvRSxHQURGO0FBR0QsQ0FKRDs7QUFNQTs7QUFFQSIsImZpbGUiOiJwaW5zLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIFBpbnMgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIHByb3BzLnBpbnMubWFwKGZ1bmN0aW9uKHJvdykge1xuICAgICAgcmV0dXJuIHJvdy5tYXAoZnVuY3Rpb24ocGluKSB7XG4gICAgICAgIHJldHVybiA8UGluIHBpbj17cGlufSBrbm9ja1BpbnM9e3Byb3BzLmtub2NrUGluc30vPlxuICAgICAgfSlcbiAgICB9KVxuICApO1xufVxuXG52YXIgUGluID0gZnVuY3Rpb24ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uIGlkPXtwcm9wcy5waW59IG9uQ2xpY2s9e2Z1bmN0aW9uKCl7cHJvcHMua25vY2tQaW5zKHByb3BzLnBpbil9fT57cHJvcHMucGlufTwvYnV0dG9uPlxuICApO1xufVxuXG4vLyB2YXIgU2NvcmVib2FyZCA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gIFxuLy8gfSJdfQ==