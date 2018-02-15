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
      if (scoreboard[frame][0] === 10) {
        scoreboard[frame - 1][2] += scoreboard[frame - 1][2] + scoreboard[frame][2];
      } else {
        scoreboard[frame - 1][2] += scoreboard[frame][0] + scoreboard[frame][1];
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwicGlucyIsImluaXRpYWxpemVQaW5zIiwicGluc0xlZnQiLCJzY29yZWJvYXJkIiwia2VlcFNjb3JlIiwidG90YWwiLCJyb2xscyIsImZyYW1lIiwic3RyaWtlIiwic3BhcmUiLCJudW1iZXJPZlBpbnMiLCJuZXdTY29yZSIsImNvbnNvbGUiLCJ0YWJsZSIsInNldFN0YXRlIiwiY2FsY3VsYXRlVG90YWwiLCJpbmNyZWFzZVJvbGxzIiwiaW5jcmVhc2VGcmFtZSIsImtub2NrUGlucyIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInBpbkVsZW1lbnRzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoaWxkTm9kZXMiLCJpIiwibGVuZ3RoIiwiJCIsInNob3ciLCJoaWRlIiwiaW5uZXJIVE1MIiwiY2hlY2tGb3JTdHJpa2VPclNwYXJlIiwibG9nIiwic2NvcmUiLCJmb3JFYWNoIiwiUmVhY3RET00iLCJyZW5kZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTUMsZ0JBREs7QUFFWEMsZ0JBQVUsRUFGQztBQUdYQyxrQkFBWUMsV0FIRDtBQUlYQyxhQUFPLENBSkk7QUFLWEMsYUFBTyxDQUxJO0FBTVhDLGFBQU8sQ0FOSTtBQU9YQyxjQUFRLEtBUEc7QUFRWEMsYUFBTztBQVJJLEtBQWI7QUFGaUI7QUFZbEI7Ozs7OEJBRVNDLFksRUFBYztBQUN0QixVQUFJQyxXQUFXLEtBQUtaLEtBQUwsQ0FBV0ksVUFBMUI7QUFDQVEsZUFBUyxLQUFLWixLQUFMLENBQVdRLEtBQXBCLEVBQTJCLEtBQUtSLEtBQUwsQ0FBV08sS0FBdEMsSUFBK0NJLFlBQS9DO0FBQ0FDLGVBQVMsS0FBS1osS0FBTCxDQUFXUSxLQUFwQixFQUEy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RDs7QUFnQkEsSUFBSWpDLGlCQUFpQixTQUFqQkEsY0FBaUIsR0FBVztBQUM5QixNQUFJRCxPQUFPLENBQ1QsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsQ0FEUyxFQUVULENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBRlMsRUFHVCxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxDQUhTLEVBSVQsQ0FBQyxDQUFELEVBQUksRUFBSixDQUpTLENBQVg7QUFNQSxTQUFPQSxJQUFQO0FBQ0QsQ0FSRDs7QUFVQW9DLFNBQVNDLE1BQVQsQ0FDRSxvQkFBQyxHQUFELE9BREYsRUFFRWQsU0FBU0MsY0FBVCxDQUF3QixNQUF4QixDQUZGIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwaW5zOiBpbml0aWFsaXplUGlucygpLFxuICAgICAgcGluc0xlZnQ6IDEwLFxuICAgICAgc2NvcmVib2FyZDoga2VlcFNjb3JlKCksXG4gICAgICB0b3RhbDogMCxcbiAgICAgIHJvbGxzOiAwLFxuICAgICAgZnJhbWU6IDAsXG4gICAgICBzdHJpa2U6IGZhbHNlLFxuICAgICAgc3BhcmU6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAga25vY2tQaW5zKG51bWJlck9mUGlucykge1xuICAgIHZhciBuZXdTY29yZSA9IHRoaXMuc3RhdGUuc2NvcmVib2FyZDtcbiAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVt0aGlzLnN0YXRlLnJvbGxzXSA9IG51bWJlck9mUGlucztcbiAgICBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVsyXSA9IG5ld1Njb3JlW3RoaXMuc3RhdGUuZnJhbWVdWzBdICsgbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bMV07XG5cbiAgICBjb25zb2xlLnRhYmxlKG5ld1Njb3JlKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc2NvcmVib2FyZDogbmV3U2NvcmUsXG4gICAgICB0b3RhbDogY2FsY3VsYXRlVG90YWwobmV3U2NvcmUpLFxuICAgICAgcGluc0xlZnQ6IHBpbnNMZWZ0KHRoaXMuc3RhdGUucGluc0xlZnQsIG51bWJlck9mUGlucywgdGhpcy5zdGF0ZS5yb2xscyksXG4gICAgICByb2xsczogaW5jcmVhc2VSb2xscyh0aGlzLnN0YXRlLnJvbGxzLCB0aGlzLnN0YXRlLmZyYW1lKSxcbiAgICAgIGZyYW1lOiBpbmNyZWFzZUZyYW1lKHRoaXMuc3RhdGUucm9sbHMsIHRoaXMuc3RhdGUuZnJhbWUsIG5ld1Njb3JlKSxcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwicGlucy1jb250YWluZXJcIj48UGlucyBwaW5zPXt0aGlzLnN0YXRlLnBpbnN9IGtub2NrUGlucz17dGhpcy5rbm9ja1BpbnMuYmluZCh0aGlzKX0gLz48L2Rpdj5cbiAgICApO1xuICB9O1xufVxuXG52YXIgcGluc0xlZnQgPSBmdW5jdGlvbihwaW5zTGVmdCwgbnVtYmVyT2ZQaW5zLCByb2xscykge1xuICB2YXIgcGlucztcbiAgdmFyIHBpbkVsZW1lbnRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BpbnMtY29udGFpbmVyJykuY2hpbGROb2RlcztcblxuICBpZiAocm9sbHMgPT09IDEpIHtcbiAgICBwaW5zID0gMTA7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwaW5FbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgJCgnIycgKyBpKS5zaG93KCk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHBpbnMgPSBwaW5zTGVmdCAtIG51bWJlck9mUGlucztcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBpbkVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoaSA+IHBpbnMpIHtcbiAgICAgICAgJCgnIycgKyBpKS5oaWRlKCk7XG4gICAgICB9XG4gICAgfSBcbiAgfVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGlucy1sZWZ0JykuaW5uZXJIVE1MID0gJ1BpbnMgbGVmdDogJyArIHBpbnM7XG4gIHJldHVybiBwaW5zO1xufVxuXG4vLyB2YXIgdXBkYXRlU2NvcmVib2FyZCA9IGZ1bmN0aW9uKHNjb3JlYm9hcmQsIGZyYW1lKSB7XG4vLyAgIHZhciBuZXdTY29yZSA9IHRoaXMuc3RhdGUuc2NvcmVib2FyZDtcbi8vICAgbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bdGhpcy5zdGF0ZS5yb2xsc10gPSBudW1iZXJPZlBpbnM7XG4vLyAgIG5ld1Njb3JlW3RoaXMuc3RhdGUuZnJhbWVdWzJdID0gbmV3U2NvcmVbdGhpcy5zdGF0ZS5mcmFtZV1bMF0gKyBuZXdTY29yZVt0aGlzLnN0YXRlLmZyYW1lXVsxXTtcbi8vICAgaWYgKG5ld1Njb3JlW2ZyYW1lXVswXSA9PT0gMTApIHtcbi8vICAgICBuZXdTY29yZVtmcmFtZV1bM10gPSAnU3RyaWtlJztcbi8vICAgfSBlbHNlIGlmIChuZXdTY29yZVtmcmFtZV1bMF0gKyBzY29yZWJvYXJkW2ZyYW1lXVsxXSA9PT0gMTApIHtcbi8vICAgICBuZXdTY29yZVtmcmFtZV1bM10gPSAnU3BhcmUnO1xuLy8gICB9IGVsc2Uge1xuLy8gICAgIG5ld1Njb3JlW2ZyYW1lXVszXSA9ICdPcGVuJ1xuLy8gICB9XG4vLyAgIGNvbnNvbGUudGFibGUobmV3U2NvcmUpXG4vLyB9XG5cbnZhciBjaGVja0ZvclN0cmlrZU9yU3BhcmUgPSBmdW5jdGlvbihzY29yZWJvYXJkLCBmcmFtZSkge1xuICBpZiAoc2NvcmVib2FyZFtmcmFtZV1bMF0gPT09IDEwKSB7XG4gICAgc2NvcmVib2FyZFtmcmFtZV1bM10gPSAnU3RyaWtlJztcbiAgfSBlbHNlIGlmIChzY29yZWJvYXJkW2ZyYW1lXVswXSArIHNjb3JlYm9hcmRbZnJhbWVdWzFdID09PSAxMCkge1xuICAgIHNjb3JlYm9hcmRbZnJhbWVdWzNdID0gJ1NwYXJlJztcbiAgfSBlbHNlIHtcbiAgICBzY29yZWJvYXJkW2ZyYW1lXVszXSA9ICdPcGVuJ1xuICB9XG59XG5cbnZhciBpbmNyZWFzZUZyYW1lID0gZnVuY3Rpb24ocm9sbHMsIGZyYW1lLCBzY29yZWJvYXJkKSB7XG4gIGlmIChmcmFtZSA+IDAgJiYgcm9sbHMgPT09IDEpIHtcbiAgICBpZiAoc2NvcmVib2FyZFtmcmFtZSAtIDFdWzNdID09PSAnU3RyaWtlJykge1xuICAgICAgY29uc29sZS5sb2coJ3N0cmlrZScsIGZyYW1lKVxuICAgICAgaWYgKHNjb3JlYm9hcmRbZnJhbWVdWzBdID09PSAxMCkge1xuICAgICAgICBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gKz0gc2NvcmVib2FyZFtmcmFtZSAtIDFdWzJdICsgc2NvcmVib2FyZFtmcmFtZV1bMl07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gKz0gc2NvcmVib2FyZFtmcmFtZV1bMF0gKyBzY29yZWJvYXJkW2ZyYW1lXVsxXTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNjb3JlYm9hcmRbZnJhbWUgLSAxXVszXSA9PT0gJ1NwYXJlJykge1xuICAgICAgY29uc29sZS5sb2coJ3NwYXJlJywgZnJhbWUpXG4gICAgICBzY29yZWJvYXJkW2ZyYW1lIC0gMV1bMl0gKz0gc2NvcmVib2FyZFtmcmFtZV1bMF07XG4gICAgfVxuICB9XG4gIGlmIChyb2xscyA9PT0gMSkge1xuICAgIGNoZWNrRm9yU3RyaWtlT3JTcGFyZShzY29yZWJvYXJkLCBmcmFtZSk7XG4gICAgZnJhbWUrKztcbiAgfVxuICBcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZyYW1lJykuaW5uZXJIVE1MID0gJ0ZyYW1lOiAnICsgKGZyYW1lICsgMSk7XG4gIHJldHVybiBmcmFtZTtcbn1cblxudmFyIGluY3JlYXNlUm9sbHMgPSBmdW5jdGlvbihyb2xscywgZnJhbWUpIHtcbiAgaWYgKHJvbGxzID09PSAwKSB7XG4gICAgcm9sbHMrKztcbiAgfSBlbHNlIHtcbiAgICByb2xscyA9IDA7XG4gIH1cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JvbGxzJykuaW5uZXJIVE1MID0gJ1JvbGxzOiAnICsgKHJvbGxzICsgMSk7XG4gIHJldHVybiByb2xscztcbn1cblxudmFyIGNhbGN1bGF0ZVRvdGFsID0gZnVuY3Rpb24oc2NvcmUpIHtcbiAgdmFyIHRvdGFsID0gMDtcbiAgc2NvcmUuZm9yRWFjaChmdW5jdGlvbihmcmFtZSkge1xuICAgIHRvdGFsICs9IGZyYW1lWzJdO1xuICB9KVxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG90YWwnKS5pbm5lckhUTUwgPSAnVG90YWwgU2NvcmU6ICcgKyB0b3RhbDtcbiAgcmV0dXJuIHRvdGFsO1xufVxuXG52YXIga2VlcFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzY29yZSA9IFtcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gICAgW251bGwsIG51bGwsIG51bGwsIG51bGxdLFxuICAgIFtudWxsLCBudWxsLCBudWxsLCBudWxsXSxcbiAgICBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF0sXG4gIF1cbiAgcmV0dXJuIHNjb3JlO1xufVxuXG52YXIgaW5pdGlhbGl6ZVBpbnMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHBpbnMgPSBbXG4gICAgWzAsIDEsIDJdLFxuICAgIFszLCA0LCA1XSxcbiAgICBbNiwgNywgOF0sXG4gICAgWzksIDEwXVxuICBdXG4gIHJldHVybiBwaW5zO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il19