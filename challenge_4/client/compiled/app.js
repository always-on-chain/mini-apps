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
        total: calculateTotal(newScore, this.state.frame),
        pinsLeft: pinsLeft(this.state.pinsLeft, numberOfPins, this.state.rolls, this.state.frame),
        rolls: increaseRolls(this.state.rolls, this.state.frame),
        frame: increaseFrame(this.state.rolls, this.state.frame, newScore, numberOfPins)
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

var pinsLeft = function pinsLeft(_pinsLeft, numberOfPins, rolls, frame) {
  var pins;
  var pinElements = document.getElementById('pins-container').childNodes;

  if (frame < 9) {
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
  }
  document.getElementById('pins-left').innerHTML = 'Pins left: ' + pins;
  return pins;
};

var checkForStrikeOrSpare = function checkForStrikeOrSpare(scoreboard, frame) {
  if (scoreboard[frame][0] === 10) {
    scoreboard[frame][3] = 'Strike';
  } else if (scoreboard[frame][0] + scoreboard[frame][1] === 10) {
    scoreboard[frame][3] = 'Spare';
  } else {
    scoreboard[frame][3] = 'Open';
  }
};

var increaseFrame = function increaseFrame(rolls, frame, scoreboard, numberOfPins) {
  if (frame > 0 && frame < 9 && rolls === 1) {
    if (scoreboard[frame - 1][3] === 'Strike') {
      if (scoreboard[frame][0] === 10) {
        scoreboard[frame - 1][2] += scoreboard[frame - 1][2] + scoreboard[frame][2];
      } else {
        scoreboard[frame - 1][2] += scoreboard[frame][0] + scoreboard[frame][1];
      }
    } else if (scoreboard[frame - 1][3] === 'Spare') {
      scoreboard[frame - 1][2] += scoreboard[frame][0];
    }
  }

  if (frame === 9) {
    if (scoreboard[frame - 1][3] === 'Strike' && scoreboard[frame - 1][2] < 30) {
      scoreboard[frame - 1][2] += 20;
    }
    if (scoreboard[frame][0] === 10 && scoreboard[frame][1] === 10) {
      scoreboard[frame][2] += numberOfPins;
    }
  }

  if (rolls === 1) {
    if (frame < 9) {
      checkForStrikeOrSpare(scoreboard, frame);
      frame++;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwicGlucyIsImluaXRpYWxpemVQaW5zIiwicGluc0xlZnQiLCJzY29yZWJvYXJkIiwia2VlcFNjb3JlIiwidG90YWwiLCJyb2xscyIsImZyYW1lIiwic3RyaWtlIiwic3BhcmUiLCJudW1iZXJPZlBpbnMiLCJuZXdTY29yZSIsImNvbnNvbGUiLCJ0YWJsZSIsInNldFN0YXRlIiwiY2FsY3VsYXRlVG90YWwiLCJpbmNyZWFzZVJvbGxzIiwiaW5jcmVhc2VGcmFtZSIsImtub2NrUGlucyIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBpbkVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiJCIsInNob3ciLCJoaWRlIiwiaW5uZXJIVE1MIiwiY2hlY2tGb3JTdHJpa2VPclNwYXJlIiwic2NvcmUiLCJmb3JFYWNoIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTUMsZ0JBREs7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxrQkFBWUMsV0FIRDtBQUlYQyxhQUFPLENBSkk7QUFLWEMsYUFBTyxDQUxJO0FBTVhDLGFBQU8sQ0FOSTtBQU9YQyxjQUFRLEtBUEc7QUFRWEMsYUFBTztBQVJJLEtBQWI7QUFGaUI7QUFZbEI7Ozs7OEJBRVNDLFksRUFBYztBQUN0QixVQUFJQyxXQUFXLEtBQUtaLEtBQUwsQ0FBV0ksVUFBMUI7QUFDQVEsZUFBUyxLQUFLWixLQUFMLENBQVdRLEtBQXBCLEVBQTJCLEtBQUtSLEtBQUwsQ0FBV08sS0FBdEMsSUFBK0NJLFlBQS9DO0FBQ0FDLGVBQVMsS0FBS1osS0FBTCxDQUFXUSxLQUFwQixFQUEyQixDQUEz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RUFBbUIsSUFBbkIsQ0FKVSxFQUtWLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBTFUsRUFNVixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQU5VLEVBT1YsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FQVSxFQVFWLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLElBQW5CLENBUlUsRUFTVixDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixJQUFuQixDQVRVLEVBVVYsQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsQ0FWVSxDQUFaO0FBWUEsU0FBT0EsS0FBUDtBQUNELENBZEQ7O0FBZ0JBLElBQUloQyxpQkFBaUIsU0FBakJBLGNBQWlCLEdBQVc7QUFDOUIsTUFBSUQsT0FBTyxDQUNULENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRFMsRUFFVCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUZTLEVBR1QsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FIUyxFQUlULENBQUMsQ0FBRCxFQUFJLEVBQUosQ0FKUyxDQUFYO0FBTUEsU0FBT0EsSUFBUDtBQUNELENBUkQ7O0FBVUFtQyxTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUViLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGluczogaW5pdGlhbGl6ZVBpbnMoKSxcbiAgICAgIHBpbnNMZWZ0OiAxMCxcbiAgICAgIHNjb3JlYm9hcmQ6IGtlZXBTY29yZSgpLFxuICAgICAgdG90YWw6IDAsXG4gICAgICByb2xsczogMCxcbiAgICAgIGZyYW1lOiAwLFxuICAgICAgc3RyaWtlOiBmYWxzZSxcbiAgICAgIHNwYXJlOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGtub2NrUGlucyhudW1iZXJPZlBpbnMpIHtcbiAgICB2YXIgbmV3U2NvcmUgPSB0aGlzLnN0YXRlLnNjb3JlYm9hcmQ7XG4gICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bdGhpcy5zdGF0ZS5yb2xsc10gPSBudW1iZXJPZlBpbnM7XG4gICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bMl0gPSBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVswXSArIG5ld1Njb3JlW3RoaXMuc3RhdGUuZnJhbWVdWzFdO1xuXG4gICAgY29uc29sZS50YWJsZShuZXdTY29yZSk7XG5cbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNjb3JlYm9hcmQ6IG5ld1Njb3JlLFxuICAgICAgdG90YWw6IGNhbGN1bGF0ZVRvdGFsKG5ld1Njb3JlLCB0aGlzLnN0YXRlLmZyYW1lKSxcbiAgICAgIHBpbnNMZWZ0OiBwaW5zTGVmdCh0aGlzLnN0YXRlLnBpbnNMZWZ0LCBudW1iZXJPZlBpbnMsIHRoaXMuc3RhdGUucm9sbHMsIHRoaXMuc3RhdGUuZnJhbWUpLFxuICAgICAgcm9sbHM6IGluY3JlYXNlUm9sbHModGhpcy5zdGF0ZS5yb2xscywgdGhpcy5zdGF0ZS5mcmFtZSksXG4gICAgICBmcmFtZTogaW5jcmVhc2VGcmFtZSh0aGlzLnN0YXRlLnJvbGxzLCB0aGlzLnN0YXRlLmZyYW1lLCBuZXdTY29yZSwgbnVtYmVyT2ZQaW5zKSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGlucy1jb250YWluZXJcIj48UGlucyBwaW5zPXt0aGlzLnN0YXRlLnBpbnN9IGtub2NrUGlucz17dGhpcy5rbm9ja1BpbnMuYmluZCh0aGlzKX0gLz48L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG52YXIgcGluc0xlZnQgPSBmdW5jdGlvbihwaW5zTGVmdCwgbnVtYmVyT2ZQaW5zLCByb2xscywgZnJhbWUpIHtcbiAgdmFyIHBpbnM7XG4gIHZhciBwaW5FbGVtZW50cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwaW5zLWNvbnRhaW5lcicpLmNoaWxkTm9kZXM7XG5cbiAgaWYgKGZyYW1lIDwgOSkge1xuICAgIGlmIChyb2xscyA9PT0gMSkge1xuICAgICAgcGlucyA9IDEwO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAkKCcjJyArIGkpLnNob3coKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcGlucyA9IHBpbnNMZWZ0IC0gbnVtYmVyT2ZQaW5zO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoaSA+IHBpbnMpIHtcbiAgICAgICAgICAkKCcjJyArIGkpLmhpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSBcbiAgICB9XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnMtbGVmdCcpLmlubmVySFRNTCA9ICdQaW5zIGxlZnQ6ICcgKyBwaW5zO1xuICByZXR1cm4gcGlucztcbn1cblxudmFyIGNoZWNrRm9yU3RyaWtlT3JTcGFyZSA9IGZ1bmN0aW9uKHNjb3JlYm9hcmQsIGZyYW1lKSB7XG4gIGlmIChzY29yZWJvYXJkW2ZyYW1lXVswXSA9PT0gMTApIHtcbiAgICBzY29yZWJvYXJkW2ZyYW1lXVszXSA9ICdTdHJpa2UnO1xuICB9IGVsc2UgaWYgKHNjb3JlYm9hcmRbZnJhbWVdWzBdICsgc2NvcmVib2FyZFtmcmFtZV1bMV0gPT09IDEwKSB7XG4gICAgc2NvcmVib2FyZFtmcmFtZV1bM10gPSAnU3BhcmUnO1xuICB9IGVsc2Uge1xuICAgIHNjb3JlYm9hcmRbZnJhbWVdWzNdID0gJ09wZW4nXG4gIH1cbn1cblxudmFyIGluY3JlYXNlRnJhbWUgPSBmdW5jdGlvbihyb2xscywgZnJhbWUsIHNjb3JlYm9hcmQsIG51bWJlck9mUGlucykge1xuICBpZiAoZnJhbWUgPiAwICYmIGZyYW1lIDwgOSAmJiByb2xscyA9PT0gMSkge1xuICAgIGlmIChzY29yZWJvYXJkW2ZyYW1lIC0gMV1bM10gPT09ICdTdHJpa2UnKSB7XG4gICAgICBpZiAoc2NvcmVib2FyZFtmcmFtZV1bMF0gPT09IDEwKSB7XG4gICAgICAgIHNjb3JlYm9hcmRbZnJhbWUgLSAxXVsyXSArPSBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gKyBzY29yZWJvYXJkW2ZyYW1lXVsyXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjb3JlYm9hcmRbZnJhbWUgLSAxXVsyXSArPSBzY29yZWJvYXJkW2ZyYW1lXVswXSArIHNjb3JlYm9hcmRbZnJhbWVdWzFdO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc2NvcmVib2FyZFtmcmFtZSAtIDFdWzNdID09PSAnU3BhcmUnKSB7XG4gICAgICBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gKz0gc2NvcmVib2FyZFtmcmFtZV1bMF07XG4gICAgfVxuICB9XG4gIFxuICBpZiAoZnJhbWUgPT09IDkpIHtcbiAgICBpZiAoc2NvcmVib2FyZFtmcmFtZSAtIDFdWzNdID09PSAnU3RyaWtlJyAmJiBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gPCAzMCkge1xuICAgICAgc2NvcmVib2FyZFtmcmFtZSAtIDFdWzJdICs9IDIwO1xuICAgIH1cbiAgICBpZiAoc2NvcmVib2FyZFtmcmFtZV1bMF0gPT09IDEwICYmIHNjb3JlYm9hcmRbZnJhbWVdWzFdID09PSAxMCkge1xuICAgICAgc2NvcmVib2FyZFtmcmFtZV1bMl0gKz0gbnVtYmVyT2ZQaW5zO1xuICAgIH1cbiAgfVxuXG4gIGlmIChyb2xscyA9PT0gMSkge1xuICAgIGlmIChmcmFtZSA8IDkpIHtcbiAgICAgIGNoZWNrRm9yU3RyaWtlT3JTcGFyZShzY29yZWJvYXJkLCBmcmFtZSk7XG4gICAgICBmcmFtZSsrO1xuICAgIH1cbiAgfVxuICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lJykuaW5uZXJIVE1MID0gJ0ZyYW1lOiAnICsgKGZyYW1lICsgMSk7XG4gIHJldHVybiBmcmFtZTtcbn1cblxuXG52YXIgaW5jcmVhc2VSb2xscyA9IGZ1bmN0aW9uKHJvbGxzLCBmcmFtZSkge1xuICBpZiAocm9sbHMgPT09IDApIHtcbiAgICByb2xscysrO1xuICB9IGVsc2Uge1xuICAgIHJvbGxzID0gMDtcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9sbHMnKS5pbm5lckhUTUwgPSAnUm9sbHM6ICcgKyAocm9sbHMgKyAxKTtcbiAgcmV0dXJuIHJvbGxzO1xufVxuXG52YXIgY2FsY3VsYXRlVG90YWwgPSBmdW5jdGlvbihzY29yZSkge1xuICB2YXIgdG90YWwgPSAwO1xuICBzY29yZS5mb3JFYWNoKGZ1bmN0aW9uKGZyYW1lKSB7XG4gICAgdG90YWwgKz0gZnJhbWVbMl07XG4gIH0pXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b3RhbCcpLmlubmVySFRNTCA9ICdUb3RhbCBTY29yZTogJyArIHRvdGFsO1xuICByZXR1cm4gdG90YWw7XG59XG5cbnZhciBrZWVwU2NvcmUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHNjb3JlID0gW1xuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgXVxuICByZXR1cm4gc2NvcmU7XG59XG5cbnZhciBpbml0aWFsaXplUGlucyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgcGlucyA9IFtcbiAgICBbMCwgMSwgMl0sXG4gICAgWzMsIDQsIDVdLFxuICAgIFs2LCA3LCA4XSxcbiAgICBbOSwgMTBdXG4gIF1cbiAgcmV0dXJuIHBpbnM7XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXX0=