'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      pins: initializePins(),
      pinsLeft: 10,
      scoreboard: keepScore(),
      total: 0,
      rolls: 0,
      frame: 0
    };
    return _this;
  }

  _createClass(App, [{
    key: 'knockPins',
    value: function knockPins(numberOfPins) {
      var newScore = this.state.scoreboard;
      newScore[this.state.frame][this.state.rolls] = numberOfPins;

      console.table(newScore);

      this.setState({
        scoreboard: newScore,
        total: calculateTotal(newScore),
        pinsLeft: pinsLeft(this.state.pinsLeft, numberOfPins, this.state.rolls),
        rolls: increaseRolls(this.state.rolls, this.state.frame),
        frame: increaseFrame(this.state.rolls, this.state.frame)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'pins-container' },
        React.createElement(Pins, { pins: this.state.pins, knockPins: this.knockPins.bind(this) })
      )
      // <table><ScoreBoard  scoreboard={this.state.scoreBoard}/></table>
      ;
    }
  }]);

  return App;
}(React.Component);

var pinsLeft = function pinsLeft(_pinsLeft, numberOfPins, rolls) {
  var pins;
  var pinElements = document.getElementById('pins-container').childNodes;

  if (rolls === 1) {
    pins = 10;
    for (var i = 0; i < pinElements.length; i++) {
      $('#' + i).show();
    }
  } else {
    pins = _pinsLeft - numberOfPins;
    for (var i = 0; i < pinElements.length; i++) {
      if (i > pins) {
        $('#' + i).hide();
      }
    }
  }
  document.getElementById('pins-left').innerHTML = 'Pins left: ' + pins;
  return pins;
};

var increaseFrame = function increaseFrame(rolls, frame) {
  if (rolls === 1) {
    frame++;
  }
  document.getElementById('frame').innerHTML = 'Frame: ' + frame;
  return frame;
};

var increaseRolls = function increaseRolls(rolls, frame) {
  if (rolls === 0) {
    rolls++;
  } else {
    rolls = 0;
  }
  document.getElementById('rolls').innerHTML = 'Rolls: ' + rolls;
  return rolls;
};

var calculateTotal = function calculateTotal(score) {
  var total = score.reduce(function (a, b) {
    return a + b;
  });
  document.getElementById('total').innerHTML = 'Total Score: ' + total;
  return total;
};

var keepScore = function keepScore() {
  var score = [[null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null], [null, null]];
  return score;
};

var initializePins = function initializePins() {
  var pins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10]];
  return pins;
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwicGlucyIsImluaXRpYWxpemVQaW5zIiwicGluc0xlZnQiLCJzY29yZWJvYXJkIiwia2VlcFNjb3JlIiwidG90YWwiLCJyb2xscyIsImZyYW1lIiwibnVtYmVyT2ZQaW5zIiwibmV3U2NvcmUiLCJjb25zb2xlIiwidGFibGUiLCJzZXRTdGF0ZSIsImNhbGN1bGF0ZVRvdGFsIiwiaW5jcmVhc2VSb2xscyIsImluY3JlYXNlRnJhbWUiLCJrbm9ja1BpbnMiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwaW5FbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZE5vZGVzIiwiaSIsImxlbmd0aCIsIiQiLCJzaG93IiwiaGlkZSIsImlubmVySFRNTCIsInNjb3JlIiwicmVkdWNlIiwiYSIsImIiLCJSZWFjdERPTSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDSixlQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsMEdBQ1hBLEtBRFc7O0FBRWpCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNQyxnQkFESztBQUVYQyxnQkFBVSxFQUZDO0FBR1hDLGtCQUFZQyxXQUhEO0FBSVhDLGFBQU8sQ0FKSTtBQUtYQyxhQUFPLENBTEk7QUFNWEMsYUFBTztBQU5JLEtBQWI7QUFGaUI7QUFVbEI7Ozs7OEJBRVNDLFksRUFBYztBQUN0QixVQUFJQyxXQUFXLEtBQUtWLEtBQUwsQ0FBV0ksVUFBMUI7QUFDQU0sZUFBUyxLQUFLVixLQUFMLENBQVdRLEtBQXBCLEVBQTJCLEtBQUtSLEtBQUwsQ0FBV08sS0FBdEMsSUFBK0NFLFlBQS9DOztBQUVBRSxjQUFRQyxLQUFSLENBQWNGLFFBQWQ7O0FBRUEsV0FBS0csUUFBTCxDQUFjO0FBQ1pULG9CQUFZTSxRQURBO0FBRVpKLGVBQU9RLGVBQWVKLFFBQWYsQ0FGSztBQUdaUCxrQkFBVUEs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QVAsQ0FKVSxFQUtWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FMVSxFQU1WLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FOVSxFQU9WLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FQVSxFQVFWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FSVSxFQVNWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FUVSxFQVVWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FWVSxDQUFaO0FBWUEsU0FBT0EsS0FBUDtBQUNELENBZEQ7O0FBZ0JBLElBQUk3QixpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVc7QUFDOUIsTUFBSUQsT0FBTyxDQUNULENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFMsRUFFVCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZTLEVBR1QsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FIUyxFQUlULENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FKUyxDQUFYO0FBTUEsU0FBT0EsSUFBUDtBQUNELENBUkQ7O0FBVUFrQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVkLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGluczogaW5pdGlhbGl6ZVBpbnMoKSxcbiAgICAgIHBpbnNMZWZ0OiAxMCxcbiAgICAgIHNjb3JlYm9hcmQ6IGtlZXBTY29yZSgpLFxuICAgICAgdG90YWw6IDAsXG4gICAgICByb2xsczogMCxcbiAgICAgIGZyYW1lOiAwXG4gICAgfVxuICB9XG5cbiAga25vY2tQaW5zKG51bWJlck9mUGlucykge1xuICAgIHZhciBuZXdTY29yZSA9IHRoaXMuc3RhdGUuc2NvcmVib2FyZDtcbiAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVt0aGlzLnN0YXRlLnJvbGxzXSA9IG51bWJlck9mUGlucztcblxuICAgIGNvbnNvbGUudGFibGUobmV3U2NvcmUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzY29yZWJvYXJkOiBuZXdTY29yZSxcbiAgICAgIHRvdGFsOiBjYWxjdWxhdGVUb3RhbChuZXdTY29yZSksXG4gICAgICBwaW5zTGVmdDogcGluc0xlZnQodGhpcy5zdGF0ZS5waW5zTGVmdCwgbnVtYmVyT2ZQaW5zLCB0aGlzLnN0YXRlLnJvbGxzKSxcbiAgICAgIHJvbGxzOiBpbmNyZWFzZVJvbGxzKHRoaXMuc3RhdGUucm9sbHMsIHRoaXMuc3RhdGUuZnJhbWUpLFxuICAgICAgZnJhbWU6IGluY3JlYXNlRnJhbWUodGhpcy5zdGF0ZS5yb2xscywgdGhpcy5zdGF0ZS5mcmFtZSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGlucy1jb250YWluZXJcIj48UGlucyBwaW5zPXt0aGlzLnN0YXRlLnBpbnN9IGtub2NrUGlucz17dGhpcy5rbm9ja1BpbnMuYmluZCh0aGlzKX0gLz48L2Rpdj5cbiAgICAgIC8vIDx0YWJsZT48U2NvcmVCb2FyZCAgc2NvcmVib2FyZD17dGhpcy5zdGF0ZS5zY29yZUJvYXJkfS8+PC90YWJsZT5cbiAgICApO1xuICB9O1xufVxuXG52YXIgcGluc0xlZnQgPSBmdW5jdGlvbihwaW5zTGVmdCwgbnVtYmVyT2ZQaW5zLCByb2xscykge1xuICB2YXIgcGlucztcbiAgdmFyIHBpbkVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnMtY29udGFpbmVyJykuY2hpbGROb2RlcztcblxuICBpZiAocm9sbHMgPT09IDEpIHtcbiAgICBwaW5zID0gMTA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgJCgnIycgKyBpKS5zaG93KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBpbnMgPSBwaW5zTGVmdCAtIG51bWJlck9mUGlucztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBpbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA+IHBpbnMpIHtcbiAgICAgICAgJCgnIycgKyBpKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlucy1sZWZ0JykuaW5uZXJIVE1MID0gJ1BpbnMgbGVmdDogJyArIHBpbnM7XG4gIHJldHVybiBwaW5zO1xufVxuXG52YXIgaW5jcmVhc2VGcmFtZSA9IGZ1bmN0aW9uKHJvbGxzLCBmcmFtZSkge1xuICBpZiAocm9sbHMgPT09IDEpIHtcbiAgICBmcmFtZSsrO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZScpLmlubmVySFRNTCA9ICdGcmFtZTogJyArIGZyYW1lO1xuICByZXR1cm4gZnJhbWU7XG59XG5cbnZhciBpbmNyZWFzZVJvbGxzID0gZnVuY3Rpb24ocm9sbHMsIGZyYW1lKSB7XG4gIGlmIChyb2xscyA9PT0gMCkge1xuICAgIHJvbGxzKys7XG4gIH0gZWxzZSB7XG4gICAgcm9sbHMgPSAwO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb2xscycpLmlubmVySFRNTCA9ICdSb2xsczogJyArIHJvbGxzO1xuICByZXR1cm4gcm9sbHM7XG59XG5cbnZhciBjYWxjdWxhdGVUb3RhbCA9IGZ1bmN0aW9uKHNjb3JlKSB7XG4gIHZhciB0b3RhbCA9IHNjb3JlLnJlZHVjZShmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIGEgKyBiO1xuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKS5pbm5lckhUTUwgPSAnVG90YWwgU2NvcmU6ICcgKyB0b3RhbDtcbiAgcmV0dXJuIHRvdGFsO1xufVxuXG52YXIga2VlcFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY29yZSA9IFtcbiAgICBbbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbF0sXG4gIF1cbiAgcmV0dXJuIHNjb3JlO1xufVxuXG52YXIgaW5pdGlhbGl6ZVBpbnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBpbnMgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzksIDEwXVxuICBdXG4gIHJldHVybiBwaW5zO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il19