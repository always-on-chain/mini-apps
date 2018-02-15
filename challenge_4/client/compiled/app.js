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
      frame: 0,
      strike: false,
      spare: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'knockPins',
    value: function knockPins(numberOfPins) {
      var newScore = this.state.scoreboard;
      newScore[this.state.frame][this.state.rolls] = numberOfPins;
      newScore[this.state.frame][2] = newScore[this.state.frame][0] + newScore[this.state.frame][1];

      console.table(newScore);

      this.setState({
        scoreboard: newScore,
        total: calculateTotal(newScore),
        pinsLeft: pinsLeft(this.state.pinsLeft, numberOfPins, this.state.rolls),
        rolls: increaseRolls(this.state.rolls, this.state.frame),
        frame: increaseFrame(this.state.rolls, this.state.frame, newScore)
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'pins-container' },
        React.createElement(Pins, { pins: this.state.pins, knockPins: this.knockPins.bind(this) })
      );
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

// var updateScoreboard = function(scoreboard, frame) {
//   var newScore = this.state.scoreboard;
//   newScore[this.state.frame][this.state.rolls] = numberOfPins;
//   newScore[this.state.frame][2] = newScore[this.state.frame][0] + newScore[this.state.frame][1];
//   if (newScore[frame][0] === 10) {
//     newScore[frame][3] = 'Strike';
//   } else if (newScore[frame][0] + scoreboard[frame][1] === 10) {
//     newScore[frame][3] = 'Spare';
//   } else {
//     newScore[frame][3] = 'Open'
//   }
//   console.table(newScore)
// }

var checkForStrikeOrSpare = function checkForStrikeOrSpare(scoreboard, frame) {
  if (scoreboard[frame][0] === 10) {
    scoreboard[frame][3] = 'Strike';
  } else if (scoreboard[frame][0] + scoreboard[frame][1] === 10) {
    scoreboard[frame][3] = 'Spare';
  } else {
    scoreboard[frame][3] = 'Open';
  }
};

var increaseFrame = function increaseFrame(rolls, frame, scoreboard) {
  if (frame > 0 && rolls === 1) {
    if (scoreboard[frame - 1][3] === 'Strike') {
      console.log('strike', frame);
      // if (scoreboard[frame][3] === 'Strike') {

      // } else if (scoreboard[frame][3] === 'Spare') {

      // }
      scoreboard[frame - 1][2] += scoreboard[frame][0] + scoreboard[frame][1];
    } else if (scoreboard[frame - 1][3] === 'Spare') {
      console.log('spare', frame);
      scoreboard[frame - 1][2] += scoreboard[frame][0];
    }
  }
  if (rolls === 1) {
    checkForStrikeOrSpare(scoreboard, frame);
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
    total += frame[2];
  });
  document.getElementById('total').innerHTML = 'Total Score: ' + total;
  return total;
};

var keepScore = function keepScore() {
  var score = [[null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null], [null, null, null, null]];
  return score;
};

var initializePins = function initializePins() {
  var pins = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [9, 10]];
  return pins;
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwicGlucyIsImluaXRpYWxpemVQaW5zIiwicGluc0xlZnQiLCJzY29yZWJvYXJkIiwia2VlcFNjb3JlIiwidG90YWwiLCJyb2xscyIsImZyYW1lIiwic3RyaWtlIiwic3BhcmUiLCJudW1iZXJPZlBpbnMiLCJuZXdTY29yZSIsImNvbnNvbGUiLCJ0YWJsZSIsInNldFN0YXRlIiwiY2FsY3VsYXRlVG90YWwiLCJpbmNyZWFzZVJvbGxzIiwiaW5jcmVhc2VGcmFtZSIsImtub2NrUGlucyIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBpbkVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiJCIsInNob3ciLCJoaWRlIiwiaW5uZXJIVE1MIiwiY2hlY2tGb3JTdHJpa2VPclNwYXJlIiwibG9nIiwic2NvcmUiLCJmb3JFYWNoIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTUMsZ0JBREs7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxrQkFBWUMsV0FIRDtBQUlYQyxhQUFPLENBSkk7QUFLWEMsYUFBTyxDQUxJO0FBTVhDLGFBQU8sQ0FOSTtBQU9YQyxjQUFRLEtBUEc7QUFRWEMsYUFBTztBQVJJLEtBQWI7QUFGaUI7QUFZbEI7Ozs7OEJBRVNDLFksRUFBYztBQUN0QixVQUFJQyxXQUFXLEtBQUtaLEtBQUwsQ0FBV0ksVUFBMUI7QUFDQVEsZUFBUyxLQUFLWixLQUFMLENBQVdRLEtBQXBCLEVBQTJCLEtBQUtSLEtBQUwsQ0FBV08sS0FBdEMsSUFBK0NJLFlBQS9DO0FBQ0FDLGVBQVMsS0FBS1osS0FBTCxDQUFXUSxLQUFwQixFQUEy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QUFPLENBQVAsQ0FIUyxFQUlULENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FKUyxDQUFYO0FBTUEsU0FBT0EsSUFBUDtBQUNELENBUkQ7O0FBVUFvQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVkLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGluczogaW5pdGlhbGl6ZVBpbnMoKSxcbiAgICAgIHBpbnNMZWZ0OiAxMCxcbiAgICAgIHNjb3JlYm9hcmQ6IGtlZXBTY29yZSgpLFxuICAgICAgdG90YWw6IDAsXG4gICAgICByb2xsczogMCxcbiAgICAgIGZyYW1lOiAwLFxuICAgICAgc3RyaWtlOiBmYWxzZSxcbiAgICAgIHNwYXJlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGtub2NrUGlucyhudW1iZXJPZlBpbnMpIHtcbiAgICB2YXIgbmV3U2NvcmUgPSB0aGlzLnN0YXRlLnNjb3JlYm9hcmQ7XG4gICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bdGhpcy5zdGF0ZS5yb2xsc10gPSBudW1iZXJPZlBpbnM7XG4gICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bMl0gPSBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVswXSArIG5ld1Njb3JlW3RoaXMuc3RhdGUuZnJhbWVdWzFdO1xuXG4gICAgY29uc29sZS50YWJsZShuZXdTY29yZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjb3JlYm9hcmQ6IG5ld1Njb3JlLFxuICAgICAgdG90YWw6IGNhbGN1bGF0ZVRvdGFsKG5ld1Njb3JlKSxcbiAgICAgIHBpbnNMZWZ0OiBwaW5zTGVmdCh0aGlzLnN0YXRlLnBpbnNMZWZ0LCBudW1iZXJPZlBpbnMsIHRoaXMuc3RhdGUucm9sbHMpLFxuICAgICAgcm9sbHM6IGluY3JlYXNlUm9sbHModGhpcy5zdGF0ZS5yb2xscywgdGhpcy5zdGF0ZS5mcmFtZSksXG4gICAgICBmcmFtZTogaW5jcmVhc2VGcmFtZSh0aGlzLnN0YXRlLnJvbGxzLCB0aGlzLnN0YXRlLmZyYW1lLCBuZXdTY29yZSksXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInBpbnMtY29udGFpbmVyXCI+PFBpbnMgcGlucz17dGhpcy5zdGF0ZS5waW5zfSBrbm9ja1BpbnM9e3RoaXMua25vY2tQaW5zLmJpbmQodGhpcyl9IC8+PC9kaXY+XG4gICAgKTtcbiAgfTtcbn1cblxudmFyIHBpbnNMZWZ0ID0gZnVuY3Rpb24ocGluc0xlZnQsIG51bWJlck9mUGlucywgcm9sbHMpIHtcbiAgdmFyIHBpbnM7XG4gIHZhciBwaW5FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW5zLWNvbnRhaW5lcicpLmNoaWxkTm9kZXM7XG5cbiAgaWYgKHJvbGxzID09PSAxKSB7XG4gICAgcGlucyA9IDEwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGluRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICQoJyMnICsgaSkuc2hvdygpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwaW5zID0gcGluc0xlZnQgLSBudW1iZXJPZlBpbnM7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGkgPiBwaW5zKSB7XG4gICAgICAgICQoJyMnICsgaSkuaGlkZSgpO1xuICAgICAgfVxuICAgIH0gXG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnMtbGVmdCcpLmlubmVySFRNTCA9ICdQaW5zIGxlZnQ6ICcgKyBwaW5zO1xuICByZXR1cm4gcGlucztcbn1cblxuLy8gdmFyIHVwZGF0ZVNjb3JlYm9hcmQgPSBmdW5jdGlvbihzY29yZWJvYXJkLCBmcmFtZSkge1xuLy8gICB2YXIgbmV3U2NvcmUgPSB0aGlzLnN0YXRlLnNjb3JlYm9hcmQ7XG4vLyAgIG5ld1Njb3JlW3RoaXMuc3RhdGUuZnJhbWVdW3RoaXMuc3RhdGUucm9sbHNdID0gbnVtYmVyT2ZQaW5zO1xuLy8gICBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVsyXSA9IG5ld1Njb3JlW3RoaXMuc3RhdGUuZnJhbWVdWzBdICsgbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bMV07XG4vLyAgIGlmIChuZXdTY29yZVtmcmFtZV1bMF0gPT09IDEwKSB7XG4vLyAgICAgbmV3U2NvcmVbZnJhbWVdWzNdID0gJ1N0cmlrZSc7XG4vLyAgIH0gZWxzZSBpZiAobmV3U2NvcmVbZnJhbWVdWzBdICsgc2NvcmVib2FyZFtmcmFtZV1bMV0gPT09IDEwKSB7XG4vLyAgICAgbmV3U2NvcmVbZnJhbWVdWzNdID0gJ1NwYXJlJztcbi8vICAgfSBlbHNlIHtcbi8vICAgICBuZXdTY29yZVtmcmFtZV1bM10gPSAnT3Blbidcbi8vICAgfVxuLy8gICBjb25zb2xlLnRhYmxlKG5ld1Njb3JlKVxuLy8gfVxuXG52YXIgY2hlY2tGb3JTdHJpa2VPclNwYXJlID0gZnVuY3Rpb24oc2NvcmVib2FyZCwgZnJhbWUpIHtcbiAgaWYgKHNjb3JlYm9hcmRbZnJhbWVdWzBdID09PSAxMCkge1xuICAgIHNjb3JlYm9hcmRbZnJhbWVdWzNdID0gJ1N0cmlrZSc7XG4gIH0gZWxzZSBpZiAoc2NvcmVib2FyZFtmcmFtZV1bMF0gKyBzY29yZWJvYXJkW2ZyYW1lXVsxXSA9PT0gMTApIHtcbiAgICBzY29yZWJvYXJkW2ZyYW1lXVszXSA9ICdTcGFyZSc7XG4gIH0gZWxzZSB7XG4gICAgc2NvcmVib2FyZFtmcmFtZV1bM10gPSAnT3BlbidcbiAgfVxufVxuXG52YXIgaW5jcmVhc2VGcmFtZSA9IGZ1bmN0aW9uKHJvbGxzLCBmcmFtZSwgc2NvcmVib2FyZCkge1xuICBpZiAoZnJhbWUgPiAwICYmIHJvbGxzID09PSAxKSB7XG4gICAgaWYgKHNjb3JlYm9hcmRbZnJhbWUgLSAxXVszXSA9PT0gJ1N0cmlrZScpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdzdHJpa2UnLCBmcmFtZSlcbiAgICAgIC8vIGlmIChzY29yZWJvYXJkW2ZyYW1lXVszXSA9PT0gJ1N0cmlrZScpIHtcblxuICAgICAgLy8gfSBlbHNlIGlmIChzY29yZWJvYXJkW2ZyYW1lXVszXSA9PT0gJ1NwYXJlJykge1xuXG4gICAgICAvLyB9XG4gICAgICBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gKz0gc2NvcmVib2FyZFtmcmFtZV1bMF0gKyBzY29yZWJvYXJkW2ZyYW1lXVsxXTtcbiAgICB9IGVsc2UgaWYgKHNjb3JlYm9hcmRbZnJhbWUgLSAxXVszXSA9PT0gJ1NwYXJlJykge1xuICAgICAgY29uc29sZS5sb2coJ3NwYXJlJywgZnJhbWUpXG4gICAgICBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gKz0gc2NvcmVib2FyZFtmcmFtZV1bMF07XG4gICAgfVxuICB9XG4gIGlmIChyb2xscyA9PT0gMSkge1xuICAgIGNoZWNrRm9yU3RyaWtlT3JTcGFyZShzY29yZWJvYXJkLCBmcmFtZSk7XG4gICAgZnJhbWUrKztcbiAgfVxuICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lJykuaW5uZXJIVE1MID0gJ0ZyYW1lOiAnICsgKGZyYW1lICsgMSk7XG4gIHJldHVybiBmcmFtZTtcbn1cblxudmFyIGluY3JlYXNlUm9sbHMgPSBmdW5jdGlvbihyb2xscywgZnJhbWUpIHtcbiAgaWYgKHJvbGxzID09PSAwKSB7XG4gICAgcm9sbHMrKztcbiAgfSBlbHNlIHtcbiAgICByb2xscyA9IDA7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvbGxzJykuaW5uZXJIVE1MID0gJ1JvbGxzOiAnICsgKHJvbGxzICsgMSk7XG4gIHJldHVybiByb2xscztcbn1cblxudmFyIGNhbGN1bGF0ZVRvdGFsID0gZnVuY3Rpb24oc2NvcmUpIHtcbiAgdmFyIHRvdGFsID0gMDtcbiAgc2NvcmUuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgIHRvdGFsICs9IGZyYW1lWzJdO1xuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKS5pbm5lckhUTUwgPSAnVG90YWwgU2NvcmU6ICcgKyB0b3RhbDtcbiAgcmV0dXJuIHRvdGFsO1xufVxuXG52YXIga2VlcFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY29yZSA9IFtcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gIF1cbiAgcmV0dXJuIHNjb3JlO1xufVxuXG52YXIgaW5pdGlhbGl6ZVBpbnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBpbnMgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzksIDEwXVxuICBdXG4gIHJldHVybiBwaW5zO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il19