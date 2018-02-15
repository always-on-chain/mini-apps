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
      board: initializeBoard()
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onCellClick',
    value: function onCellClick(row, col) {
      // var newBoard = this.state.board;

      // newBoard[this.state.board.length - 1][col] = 'X';
      var newBoard = this.state.board;
      row = newBoard.length - 1;
      if (newBoard[row][col] === 'X') {
        row = row - 1;
        newBoard[row][col] = 'X';
      } else {
        newBoard[row][col] = 'X';
      }

      console.log(newBoard);
      this.setState({
        board: newBoard
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        null,
        React.createElement(Board, { board: this.state.board, clickedCell: this.onCellClick.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component);

var initializeBoard = function initializeBoard() {
  var board = [];
  var row;

  for (var i = 0; i < 6; i++) {
    row = [null, null, null, null, null, null, null];
    board.push(row);
  }

  return board;
};

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9hcmQiLCJpbml0aWFsaXplQm9hcmQiLCJyb3ciLCJjb2wiLCJuZXdCb2FyZCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJzZXRTdGF0ZSIsIm9uQ2VsbENsaWNrIiwiYmluZCIsIlJlYWN0IiwiQ29tcG9uZW50IiwiaSIsInB1c2giLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBT0M7QUFESSxLQUFiO0FBRmlCO0FBS2xCOzs7O2dDQUVXQyxHLEVBQUtDLEcsRUFBSztBQUNwQjs7QUFFQTtBQUNBLFVBQUlDLFdBQVcsS0FBS0wsS0FBTCxDQUFXQyxLQUExQjtBQUNBRSxZQUFNRSxTQUFTQyxNQUFULEdBQWtCLENBQXhCO0FBQ0EsVUFBSUQsU0FBU0YsR0FBVCxFQUFjQyxHQUFkLE1BQXVCLEdBQTNCLEVBQWdDO0FBQzlCRCxjQUFNQSxNQUFNLENBQVo7QUFDQUUsaUJBQVNGLEdBQVQsRUFBY0MsR0FBZCxJQUFxQixHQUFyQjtBQUNELE9BSEQsTUFHTztBQUNMQyxpQkFBU0YsR0FBVCxFQUFjQyxHQUFkLElBQXFCLEdBQXJCO0FBQ0Q7O0FBRURHLGNBQVFDLEdBQVIsQ0FBWUgsUUFBWjtBQUNBLFdBQUtJLFFBQUwsQ0FBYztBQUNaUixlQUFPSTtBQURLLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBTyw0QkFBQyxLQUFELElBQU8sT0FBTyxLQUFLTCxLQUFMLENBQVdDLEtBQXpCLEVBQWdDLGFBQWEsS0FBS1MsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0M7QUFBUCxPQURGO0FBR0Q7Ozs7RUEvQmVDLE1BQU1DLFM7O0FBa0N4QixJQUFJWCxrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQVc7QUFDL0IsTUFBSUQsUUFBUSxFQUFaO0FBQ0EsTUFBSUUsR0FBSjs7QUFFQSxPQUFLLElBQUlXLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJYLFVBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FBTjtBQUNBRixVQUFNYyxJQUFOLENBQVdaLEdBQVg7QUFDRDs7QUFFRCxTQUFPRixLQUFQO0FBQ0QsQ0FWRDs7QUFZQWUsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBpbml0aWFsaXplQm9hcmQoKSxcbiAgICB9O1xuICB9XG5cbiAgb25DZWxsQ2xpY2socm93LCBjb2wpIHtcbiAgICAvLyB2YXIgbmV3Qm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIFxuICAgIC8vIG5ld0JvYXJkW3RoaXMuc3RhdGUuYm9hcmQubGVuZ3RoIC0gMV1bY29sXSA9ICdYJztcbiAgICB2YXIgbmV3Qm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIHJvdyA9IG5ld0JvYXJkLmxlbmd0aCAtIDE7XG4gICAgaWYgKG5ld0JvYXJkW3Jvd11bY29sXSA9PT0gJ1gnKSB7XG4gICAgICByb3cgPSByb3cgLSAxO1xuICAgICAgbmV3Qm9hcmRbcm93XVtjb2xdID0gJ1gnO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdCb2FyZFtyb3ddW2NvbF0gPSAnWCc7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2cobmV3Qm9hcmQpXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBib2FyZDogbmV3Qm9hcmQsXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPjxCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gY2xpY2tlZENlbGw9e3RoaXMub25DZWxsQ2xpY2suYmluZCh0aGlzKX0vPjwvdGFibGU+XG4gICAgKTtcbiAgfVxufVxuXG52YXIgaW5pdGlhbGl6ZUJvYXJkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBib2FyZCA9IFtdO1xuICB2YXIgcm93O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgcm93ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgIGJvYXJkLnB1c2gocm93KTtcbiAgfVxuXG4gIHJldHVybiBib2FyZDtcbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdfQ==