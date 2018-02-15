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
            this.checkWinner(i, col);
            // this.checkRows(i);
            // this.checkCols(col);
            break;
          } else if (this.state.playerO) {
            newBoard[i][col] = 'O';
            this.checkWinner(i, col);
            // this.checkRows(i);
            // this.checkCols(col);
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
    key: 'checkWinner',
    value: function checkWinner(row, col) {
      this.checkRows(row);
      this.checkCols(col);
      // this.checkDiagonals(row, col);
    }

    // checkDiagonals(row, col) {
    //   var countX = 0;
    //   var countO = 0;

    //   for (var i = 0; )
    // }

  }, {
    key: 'checkRows',
    value: function checkRows(row) {
      var countX = 0;
      var countO = 0;

      for (var i = 0; i <= 6; i++) {
        if (this.state.board[row][i] === 'X') {
          countX++;
          countO = 0;
          if (countX === 4) {
            console.log('PlayerX wins');
            countX = 0;
          }
        } else if (this.state.board[row][i] === 'O') {
          countO++;
          countX = 0;
          if (countO === 4) {
            console.log('PlayerO wins');
            countO = 0;
          }
        } else {
          countO = 0;
          countX = 0;
        }
      }
    }
  }, {
    key: 'checkCols',
    value: function checkCols(col) {
      var countX = 0;
      var countO = 0;

      for (var i = 0; i <= 5; i++) {
        if (this.state.board[i][col] === 'X') {
          countX++;
          if (countX === 4) {
            console.log('PlayerX wins');
            countX = 0;
          }
        } else if (this.state.board[i][col] === 'O') {
          countO++;
          if (countO === 4) {
            console.log('PlayerO wins');
            countO = 0;
          }
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9hcmQiLCJpbml0aWFsaXplQm9hcmQiLCJwbGF5ZXJYIiwicGxheWVyTyIsInJvdyIsImNvbCIsIm5ld0JvYXJkIiwibGVuZ3RoIiwiaSIsImNoZWNrV2lubmVyIiwic2V0U3RhdGUiLCJjaGVja1Jvd3MiLCJjaGVja0NvbHMiLCJjb3VudFgiLCJjb3VudE8iLCJjb25zb2xlIiwibG9nIiwib25DZWxsQ2xpY2siLCJiaW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwdXNoIiwiUmVhY3RET00iLCJyZW5kZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLEc7OztBQUNKLGVBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSwwR0FDWEEsS0FEVzs7QUFFakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGFBQU9DLGlCQURJO0FBRVhDLGVBQVMsSUFGRTtBQUdYQyxlQUFTO0FBSEUsS0FBYjtBQUZpQjtBQU9sQjs7OztnQ0FFV0MsRyxFQUFLQyxHLEVBQUs7QUFDcEIsVUFBSUMsV0FBVyxLQUFLUCxLQUFMLENBQVdDLEtBQTFCO0FBQ0FJLFlBQU1FLFNBQVNDLE1BQVQsR0FBa0IsQ0FBeEI7O0FBR0EsV0FBSyxJQUFJQyxJQUFJSixHQUFiLEVBQWtCSSxLQUFLLENBQXZCLEVBQTBCQSxHQUExQixFQUErQjtBQUM3QixZQUFJRixTQUFTRSxDQUFULEVBQVlILEdBQVosTUFBcUIsSUFBekIsRUFBK0I7QUFDN0IsY0FBSSxLQUFLTixLQUFMLENBQVdHLE9BQWYsRUFBd0I7QUFDdEJJLHFCQUFTRSxDQUFULEVBQVlILEdBQVosSUFBbUIsR0FBbkI7QUFDQSxpQkFBS0ksV0FBTCxDQUFpQkQsQ0FBakIsRUFBb0JILEdBQXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsV0FORCxNQU1PLElBQUksS0FBS04sS0FBTCxDQUFXSSxPQUFmLEVBQXdC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TixDQUFXakIsR0FBWDtBQUNEOztBQUVELFNBQU9KLEtBQVA7QUFDRCxDQVZEOztBQVlBc0IsU0FBU0MsTUFBVCxDQUNFLG9CQUFDLEdBQUQsT0FERixFQUVFQyxTQUFTQyxjQUFULENBQXdCLE1BQXhCLENBRkYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGJvYXJkOiBpbml0aWFsaXplQm9hcmQoKSxcbiAgICAgIHBsYXllclg6IHRydWUsXG4gICAgICBwbGF5ZXJPOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgb25DZWxsQ2xpY2socm93LCBjb2wpIHtcbiAgICB2YXIgbmV3Qm9hcmQgPSB0aGlzLnN0YXRlLmJvYXJkO1xuICAgIHJvdyA9IG5ld0JvYXJkLmxlbmd0aCAtIDE7XG4gICAgXG5cbiAgICBmb3IgKHZhciBpID0gcm93OyBpID49IDA7IGktLSkge1xuICAgICAgaWYgKG5ld0JvYXJkW2ldW2NvbF0gPT09IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGxheWVyWCkge1xuICAgICAgICAgIG5ld0JvYXJkW2ldW2NvbF0gPSAnWCc7XG4gICAgICAgICAgdGhpcy5jaGVja1dpbm5lcihpLCBjb2wpXG4gICAgICAgICAgLy8gdGhpcy5jaGVja1Jvd3MoaSk7XG4gICAgICAgICAgLy8gdGhpcy5jaGVja0NvbHMoY29sKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLnBsYXllck8pIHtcbiAgICAgICAgICBuZXdCb2FyZFtpXVtjb2xdID0gJ08nO1xuICAgICAgICAgIHRoaXMuY2hlY2tXaW5uZXIoaSwgY29sKTtcbiAgICAgICAgICAvLyB0aGlzLmNoZWNrUm93cyhpKTtcbiAgICAgICAgICAvLyB0aGlzLmNoZWNrQ29scyhjb2wpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBib2FyZDogbmV3Qm9hcmQsXG4gICAgICBwbGF5ZXJYOiAhdGhpcy5zdGF0ZS5wbGF5ZXJYLFxuICAgICAgcGxheWVyTzogIXRoaXMuc3RhdGUucGxheWVyTyxcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tXaW5uZXIocm93LCBjb2wpIHtcbiAgICB0aGlzLmNoZWNrUm93cyhyb3cpO1xuICAgIHRoaXMuY2hlY2tDb2xzKGNvbCk7XG4gICAgLy8gdGhpcy5jaGVja0RpYWdvbmFscyhyb3csIGNvbCk7XG4gIH1cblxuICAvLyBjaGVja0RpYWdvbmFscyhyb3csIGNvbCkge1xuICAvLyAgIHZhciBjb3VudFggPSAwO1xuICAvLyAgIHZhciBjb3VudE8gPSAwO1xuXG4gIC8vICAgZm9yICh2YXIgaSA9IDA7IClcbiAgLy8gfVxuXG4gIGNoZWNrUm93cyhyb3cpIHtcbiAgICB2YXIgY291bnRYID0gMDtcbiAgICB2YXIgY291bnRPID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDY7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtpXSA9PT0gJ1gnKSB7XG4gICAgICAgIGNvdW50WCsrO1xuICAgICAgICBjb3VudE8gPSAwO1xuICAgICAgICBpZiAoY291bnRYID09PSA0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllclggd2lucycpXG4gICAgICAgICAgY291bnRYID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmJvYXJkW3Jvd11baV0gPT09ICdPJykge1xuICAgICAgICBjb3VudE8rKztcbiAgICAgICAgY291bnRYID0gMDtcbiAgICAgICAgaWYgKGNvdW50TyA9PT0gNCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXJPIHdpbnMnKTtcbiAgICAgICAgICBjb3VudE8gPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb3VudE8gPSAwO1xuICAgICAgICBjb3VudFggPSAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNoZWNrQ29scyhjb2wpIHtcbiAgICB2YXIgY291bnRYID0gMDtcbiAgICB2YXIgY291bnRPID0gMDtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDU7IGkrKykge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuYm9hcmRbaV1bY29sXSA9PT0gJ1gnKSB7XG4gICAgICAgIGNvdW50WCsrO1xuICAgICAgICBpZiAoY291bnRYID09PSA0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllclggd2lucycpXG4gICAgICAgICAgY291bnRYID0gMDtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmJvYXJkW2ldW2NvbF0gPT09ICdPJykge1xuICAgICAgICBjb3VudE8rKztcbiAgICAgICAgaWYgKGNvdW50TyA9PT0gNCkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXJPIHdpbnMnKTtcbiAgICAgICAgICBjb3VudE8gPSAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8dGFibGU+PEJvYXJkIGJvYXJkPXt0aGlzLnN0YXRlLmJvYXJkfSBjbGlja2VkQ2VsbD17dGhpcy5vbkNlbGxDbGljay5iaW5kKHRoaXMpfS8+PC90YWJsZT5cbiAgICApO1xuICB9XG59XG5cbnZhciBpbml0aWFsaXplQm9hcmQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJvYXJkID0gW107XG4gIHZhciByb3c7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICByb3cgPSBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbF07XG4gICAgYm9hcmQucHVzaChyb3cpO1xuICB9XG5cbiAgcmV0dXJuIGJvYXJkO1xufVxuXG5SZWFjdERPTS5yZW5kZXIoXG4gIDxBcHAgLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jylcbik7Il19