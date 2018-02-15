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
      board: initializeBoard(),
      playerX: true,
      playerO: false
    };
    return _this;
  }

  _createClass(App, [{
    key: 'onCellClick',
    value: function onCellClick(row, col) {
      var newBoard = this.state.board;
      row = newBoard.length - 1;

      for (var i = row; i >= 0; i--) {
        if (newBoard[i][col] === null) {
          if (this.state.playerX) {
            newBoard[i][col] = 'X';
            break;
          } else if (this.state.playerO) {
            newBoard[i][col] = 'O';
            break;
          }
        }
      }

      this.setState({
        board: newBoard,
        playerX: !this.state.playerX,
        playerO: !this.state.playerO
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9hcmQiLCJpbml0aWFsaXplQm9hcmQiLCJwbGF5ZXJYIiwicGxheWVyTyIsInJvdyIsImNvbCIsIm5ld0JvYXJkIiwibGVuZ3RoIiwiaSIsInNldFN0YXRlIiwib25DZWxsQ2xpY2siLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwdXNoIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU9DLGlCQURJO0FBRVhDLGVBQVMsSUFGRTtBQUdYQyxlQUFTO0FBSEUsS0FBYjtBQUZpQjtBQU9sQjs7OztnQ0FFV0MsRyxFQUFLQyxHLEVBQUs7QUFDcEIsVUFBSUMsV0FBVyxLQUFLUCxLQUFMLENBQVdDLEtBQTFCO0FBQ0FJLFlBQU1FLFNBQVNDLE1BQVQsR0FBa0IsQ0FBeEI7O0FBRUEsV0FBSyxJQUFJQyxJQUFJSixHQUFiLEVBQWtCSSxLQUFLLENBQXZCLEVBQTBCQSxHQUExQixFQUErQjtBQUM3QixZQUFJRixTQUFTRSxDQUFULEVBQVlILEdBQVosTUFBcUIsSUFBekIsRUFBK0I7QUFDN0IsY0FBSSxLQUFLTixLQUFMLENBQVdHLE9BQWYsRUFBd0I7QUFDdEJJLHFCQUFTRSxDQUFULEVBQVlILEdBQVosSUFBbUIsR0FBbkI7QUFDQTtBQUNELFdBSEQsTUFHTyxJQUFJLEtBQUtOLEtBQUwsQ0FBV0ksT0FBZixFQUF3QjtBQUM3QkcscUJBQVNFLENBQVQsRUFBWUgsR0FBWixJQUFtQixHQUFuQjtBQUNBO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFdBQUtJLFFBQUwsQ0FBYztBQUNaVCxlQUFPTSxRQURLO0FBRVpKLGlCQUFTLENBQUMsS0FBS0gsS0FBTCxDQUFXRyxPQUZUO0FBR1pDLGlCQUFTLENBQUMsS0FBS0osS0FBTCxDQUFXSTtBQUhULE9BQWQ7QUFLRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFBTyw0QkFBQyxLQUFELElBQU8sT0FBTyxLQUFLSixLQUFMLENBQVdDLEtBQXpCLEVBQWdDLGFBQWEsS0FBS1UsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0M7QUFBUCxPQURGO0FBR0Q7Ozs7RUFyQ2VDLE1BQU1DLFM7O0FBd0N4QixJQUFJWixrQkFBa0IsU0FBbEJBLGVBQWtCLEdBQVc7QUFDL0IsTUFBSUQsUUFBUSxFQUFaO0FBQ0EsTUFBSUksR0FBSjs7QUFFQSxPQUFLLElBQUlJLElBQUksQ0FBYixFQUFnQkEsSUFBSSxDQUFwQixFQUF1QkEsR0FBdkIsRUFBNEI7QUFDMUJKLFVBQU0sQ0FBQyxJQUFELEVBQU8sSUFBUCxFQUFhLElBQWIsRUFBbUIsSUFBbkIsRUFBeUIsSUFBekIsRUFBK0IsSUFBL0IsRUFBcUMsSUFBckMsQ0FBTjtBQUNBSixVQUFNYyxJQUFOLENBQVdWLEdBQVg7QUFDRDs7QUFFRCxTQUFPSixLQUFQO0FBQ0QsQ0FWRDs7QUFZQWUsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBpbml0aWFsaXplQm9hcmQoKSxcbiAgICAgIHBsYXllclg6IHRydWUsXG4gICAgICBwbGF5ZXJPOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb25DZWxsQ2xpY2socm93LCBjb2wpIHtcbiAgICB2YXIgbmV3Qm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIHJvdyA9IG5ld0JvYXJkLmxlbmd0aCAtIDE7XG5cbiAgICBmb3IgKHZhciBpID0gcm93OyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKG5ld0JvYXJkW2ldW2NvbF0gPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxheWVyWCkge1xuICAgICAgICAgIG5ld0JvYXJkW2ldW2NvbF0gPSAnWCc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5wbGF5ZXJPKSB7XG4gICAgICAgICAgbmV3Qm9hcmRbaV1bY29sXSA9ICdPJztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgYm9hcmQ6IG5ld0JvYXJkLFxuICAgICAgcGxheWVyWDogIXRoaXMuc3RhdGUucGxheWVyWCxcbiAgICAgIHBsYXllck86ICF0aGlzLnN0YXRlLnBsYXllck8sXG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHRhYmxlPjxCb2FyZCBib2FyZD17dGhpcy5zdGF0ZS5ib2FyZH0gY2xpY2tlZENlbGw9e3RoaXMub25DZWxsQ2xpY2suYmluZCh0aGlzKX0vPjwvdGFibGU+XG4gICAgKTtcbiAgfVxufVxuXG52YXIgaW5pdGlhbGl6ZUJvYXJkID0gZnVuY3Rpb24oKSB7XG4gIHZhciBib2FyZCA9IFtdO1xuICB2YXIgcm93O1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgcm93ID0gW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGxdO1xuICAgIGJvYXJkLnB1c2gocm93KTtcbiAgfVxuXG4gIHJldHVybiBib2FyZDtcbn1cblxuUmVhY3RET00ucmVuZGVyKFxuICA8QXBwIC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpXG4pOyJdfQ==