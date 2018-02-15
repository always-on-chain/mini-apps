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
  document.getElementById('frame').innerHTML = 'Frame: ' + (frame + 1);
  return frame;
};

var increaseRolls = function increaseRolls(rolls, frame) {
  if (rolls === 0) {
    rolls++;
  } else {
    rolls = 0;
  }
  document.getElementById('rolls').innerHTML = 'Rolls: ' + (rolls + 1);
  return rolls;
};

var calculateTotal = function calculateTotal(score) {
  var total = 0;
  score.forEach(function (frame) {
    total += frame[0] + frame[1];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwicGlucyIsImluaXRpYWxpemVQaW5zIiwicGluc0xlZnQiLCJzY29yZWJvYXJkIiwia2VlcFNjb3JlIiwidG90YWwiLCJyb2xscyIsImZyYW1lIiwibnVtYmVyT2ZQaW5zIiwibmV3U2NvcmUiLCJjb25zb2xlIiwidGFibGUiLCJzZXRTdGF0ZSIsImNhbGN1bGF0ZVRvdGFsIiwiaW5jcmVhc2VSb2xscyIsImluY3JlYXNlRnJhbWUiLCJrbm9ja1BpbnMiLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwaW5FbGVtZW50cyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGlsZE5vZGVzIiwiaSIsImxlbmd0aCIsIiQiLCJzaG93IiwiaGlkZSIsImlubmVySFRNTCIsInNjb3JlIiwiZm9yRWFjaCIsIlJlYWN0RE9NIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLFlBQU1DLGdCQURLO0FBRVhDLGdCQUFVLEVBRkM7QUFHWEMsa0JBQVlDLFdBSEQ7QUFJWEMsYUFBTyxDQUpJO0FBS1hDLGFBQU8sQ0FMSTtBQU1YQyxhQUFPO0FBTkksS0FBYjtBQUZpQjtBQVVsQjs7Ozs4QkFFU0MsWSxFQUFjO0FBQ3RCLFVBQUlDLFdBQVcsS0FBS1YsS0FBTCxDQUFXSSxVQUExQjtBQUNBTSxlQUFTLEtBQUtWLEtBQUwsQ0FBV1EsS0FBcEIsRUFBMkIsS0FBS1IsS0FBTCxDQUFXTyxLQUF0QyxJQUErQ0UsWUFBL0M7O0FBRUFFLGNBQVFDLEtBQVIsQ0FBY0YsUUFBZDs7QUFFQSxXQUFLRyxRQUFMLENBQWM7QUFDWlQsb0JBQVlNLFFBREE7QUFFWkosZUFBT1EsZUFBZUosUUFBZixDQUZLO0FBR1pQLGtCQUFVQSxTQUFTLEtB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LElBQVAsQ0FIVSxFQUlWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FKVSxFQUtWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FMVSxFQU1WLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FOVSxFQU9WLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FQVSxFQVFWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FSVSxFQVNWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FUVSxFQVVWLENBQUMsSUFBRCxFQUFPLElBQVAsQ0FWVSxDQUFaO0FBWUEsU0FBT0EsS0FBUDtBQUNELENBZEQ7O0FBZ0JBLElBQUk3QixpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVc7QUFDOUIsTUFBSUQsT0FBTyxDQUNULENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFMsRUFFVCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZTLEVBR1QsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FIUyxFQUlULENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FKUyxDQUFYO0FBTUEsU0FBT0EsSUFBUDtBQUNELENBUkQ7O0FBVUFnQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVaLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGluczogaW5pdGlhbGl6ZVBpbnMoKSxcbiAgICAgIHBpbnNMZWZ0OiAxMCxcbiAgICAgIHNjb3JlYm9hcmQ6IGtlZXBTY29yZSgpLFxuICAgICAgdG90YWw6IDAsXG4gICAgICByb2xsczogMCxcbiAgICAgIGZyYW1lOiAwXG4gICAgfVxuICB9XG5cbiAga25vY2tQaW5zKG51bWJlck9mUGlucykge1xuICAgIHZhciBuZXdTY29yZSA9IHRoaXMuc3RhdGUuc2NvcmVib2FyZDtcbiAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVt0aGlzLnN0YXRlLnJvbGxzXSA9IG51bWJlck9mUGlucztcblxuICAgIGNvbnNvbGUudGFibGUobmV3U2NvcmUpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzY29yZWJvYXJkOiBuZXdTY29yZSxcbiAgICAgIHRvdGFsOiBjYWxjdWxhdGVUb3RhbChuZXdTY29yZSksXG4gICAgICBwaW5zTGVmdDogcGluc0xlZnQodGhpcy5zdGF0ZS5waW5zTGVmdCwgbnVtYmVyT2ZQaW5zLCB0aGlzLnN0YXRlLnJvbGxzKSxcbiAgICAgIHJvbGxzOiBpbmNyZWFzZVJvbGxzKHRoaXMuc3RhdGUucm9sbHMsIHRoaXMuc3RhdGUuZnJhbWUpLFxuICAgICAgZnJhbWU6IGluY3JlYXNlRnJhbWUodGhpcy5zdGF0ZS5yb2xscywgdGhpcy5zdGF0ZS5mcmFtZSlcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGlucy1jb250YWluZXJcIj48UGlucyBwaW5zPXt0aGlzLnN0YXRlLnBpbnN9IGtub2NrUGlucz17dGhpcy5rbm9ja1BpbnMuYmluZCh0aGlzKX0gLz48L2Rpdj5cbiAgICAgIC8vIDx0YWJsZT48U2NvcmVCb2FyZCAgc2NvcmVib2FyZD17dGhpcy5zdGF0ZS5zY29yZUJvYXJkfS8+PC90YWJsZT5cbiAgICApO1xuICB9O1xufVxuXG52YXIgcGluc0xlZnQgPSBmdW5jdGlvbihwaW5zTGVmdCwgbnVtYmVyT2ZQaW5zLCByb2xscykge1xuICB2YXIgcGlucztcbiAgdmFyIHBpbkVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnMtY29udGFpbmVyJykuY2hpbGROb2RlcztcblxuICBpZiAocm9sbHMgPT09IDEpIHtcbiAgICBwaW5zID0gMTA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgJCgnIycgKyBpKS5zaG93KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBpbnMgPSBwaW5zTGVmdCAtIG51bWJlck9mUGlucztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBpbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA+IHBpbnMpIHtcbiAgICAgICAgJCgnIycgKyBpKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlucy1sZWZ0JykuaW5uZXJIVE1MID0gJ1BpbnMgbGVmdDogJyArIHBpbnM7XG4gIHJldHVybiBwaW5zO1xufVxuXG52YXIgaW5jcmVhc2VGcmFtZSA9IGZ1bmN0aW9uKHJvbGxzLCBmcmFtZSkge1xuICBpZiAocm9sbHMgPT09IDEpIHtcbiAgICBmcmFtZSsrO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmcmFtZScpLmlubmVySFRNTCA9ICdGcmFtZTogJyArIChmcmFtZSArIDEpO1xuICByZXR1cm4gZnJhbWU7XG59XG5cbnZhciBpbmNyZWFzZVJvbGxzID0gZnVuY3Rpb24ocm9sbHMsIGZyYW1lKSB7XG4gIGlmIChyb2xscyA9PT0gMCkge1xuICAgIHJvbGxzKys7XG4gIH0gZWxzZSB7XG4gICAgcm9sbHMgPSAwO1xuICB9XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb2xscycpLmlubmVySFRNTCA9ICdSb2xsczogJyArIChyb2xscyArIDEpO1xuICByZXR1cm4gcm9sbHM7XG59XG5cbnZhciBjYWxjdWxhdGVUb3RhbCA9IGZ1bmN0aW9uKHNjb3JlKSB7XG4gIHZhciB0b3RhbCA9IDA7XG4gIHNjb3JlLmZvckVhY2goZnVuY3Rpb24oZnJhbWUpIHtcbiAgICB0b3RhbCArPSBmcmFtZVswXSArIGZyYW1lWzFdO1xuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKS5pbm5lckhUTUwgPSAnVG90YWwgU2NvcmU6ICcgKyB0b3RhbDtcbiAgcmV0dXJuIHRvdGFsO1xufVxuXG52YXIga2VlcFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY29yZSA9IFtcbiAgICBbbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbF0sXG4gIF1cbiAgcmV0dXJuIHNjb3JlO1xufVxuXG52YXIgaW5pdGlhbGl6ZVBpbnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBpbnMgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzksIDEwXVxuICBdXG4gIHJldHVybiBwaW5zO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il19