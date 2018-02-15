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
      playerO: false,
      playerXID: 'X',
      playerOID: 'O'
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
            this.checkWinner(i, col, this.state.playerXID);
            break;
          } else if (this.state.playerO) {
            newBoard[i][col] = 'O';
            this.checkWinner(i, col, this.state.playerOID);
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
    value: function checkWinner(row, col, player) {
      this.checkRows(row);
      this.checkCols(col);
      this.checkDiagonals(row, col, player);
    }
  }, {
    key: 'checkDiagonals',
    value: function checkDiagonals(row, col, player) {
      var countX = 0;
      var countO = 0;
      var colLeft = col;
      var colRight = col;

      for (var i = row; i < 6; i++) {
        colLeft--;
        colRight++;
        if (this.state.board[i][colLeft] === player) {
          if (player === 'X') {
            countX++;
            countO = 0;
            console.log(countX);
            if (countX === 4) {
              console.log('Player' + player + 'wins!');
            }
          }
        } else if (this.state.board[i][colRight] === player) {
          if (player === 'O') {
            countO++;
            countX = 0;
            if (colRight === 4) {
              console.log('Player' + player + 'wins!');
            }
          }
        }
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qcyJdLCJuYW1lcyI6WyJBcHAiLCJwcm9wcyIsInN0YXRlIiwiYm9hcmQiLCJpbml0aWFsaXplQm9hcmQiLCJwbGF5ZXJYIiwicGxheWVyTyIsInBsYXllclhJRCIsInBsYXllck9JRCIsInJvdyIsImNvbCIsIm5ld0JvYXJkIiwibGVuZ3RoIiwiaSIsImNoZWNrV2lubmVyIiwic2V0U3RhdGUiLCJwbGF5ZXIiLCJjaGVja1Jvd3MiLCJjaGVja0NvbHMiLCJjaGVja0RpYWdvbmFscyIsImNvdW50WCIsImNvdW50TyIsImNvbExlZnQiLCJjb2xSaWdodCIsImNvbnNvbGUiLCJsb2ciLCJvbkNlbGxDbGljayIsImJpbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInB1c2giLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0osZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLDBHQUNYQSxLQURXOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEMsYUFBT0MsaUJBREk7QUFFWEMsZUFBUyxJQUZFO0FBR1hDLGVBQVMsS0FIRTtBQUlYQyxpQkFBVyxHQUpBO0FBS1hDLGlCQUFXO0FBTEEsS0FBYjtBQUZpQjtBQVNsQjs7OztnQ0FFV0MsRyxFQUFLQyxHLEVBQUs7QUFDcEIsVUFBSUMsV0FBVyxLQUFLVCxLQUFMLENBQVdDLEtBQTFCO0FBQ0FNLFlBQU1FLFNBQVNDLE1BQVQsR0FBa0IsQ0FBeEI7O0FBR0EsV0FBSyxJQUFJQyxJQUFJSixHQUFiLEVBQWtCSSxLQUFLLENBQXZCLEVBQTBCQSxHQUExQixFQUErQjtBQUM3QixZQUFJRixTQUFTRSxDQUFULEVBQVlILEdBQVosTUFBcUIsSUFBekIsRUFBK0I7QUFDN0IsY0FBSSxLQUFLUixLQUFMLENBQVdHLE9BQWYsRUFBd0I7QUFDdEJNLHFCQUFTRSxDQUFULEVBQVlILEdBQVosSUFBbUIsR0FBbkI7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VkQ7O0FBWUE0QixTQUFTQyxNQUFULENBQ0Usb0JBQUMsR0FBRCxPQURGLEVBRUVDLFNBQVNDLGNBQVQsQ0FBd0IsTUFBeEIsQ0FGRiIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYm9hcmQ6IGluaXRpYWxpemVCb2FyZCgpLFxuICAgICAgcGxheWVyWDogdHJ1ZSxcbiAgICAgIHBsYXllck86IGZhbHNlLFxuICAgICAgcGxheWVyWElEOiAnWCcsXG4gICAgICBwbGF5ZXJPSUQ6ICdPJ1xuICAgIH07XG4gIH1cblxuICBvbkNlbGxDbGljayhyb3csIGNvbCkge1xuICAgIHZhciBuZXdCb2FyZCA9IHRoaXMuc3RhdGUuYm9hcmQ7XG4gICAgcm93ID0gbmV3Qm9hcmQubGVuZ3RoIC0gMTtcbiAgICBcblxuICAgIGZvciAodmFyIGkgPSByb3c7IGkgPj0gMDsgaS0tKSB7XG4gICAgICBpZiAobmV3Qm9hcmRbaV1bY29sXSA9PT0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5zdGF0ZS5wbGF5ZXJYKSB7XG4gICAgICAgICAgbmV3Qm9hcmRbaV1bY29sXSA9ICdYJztcbiAgICAgICAgICB0aGlzLmNoZWNrV2lubmVyKGksIGNvbCwgdGhpcy5zdGF0ZS5wbGF5ZXJYSUQpXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5wbGF5ZXJPKSB7XG4gICAgICAgICAgbmV3Qm9hcmRbaV1bY29sXSA9ICdPJztcbiAgICAgICAgICB0aGlzLmNoZWNrV2lubmVyKGksIGNvbCwgdGhpcy5zdGF0ZS5wbGF5ZXJPSUQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBib2FyZDogbmV3Qm9hcmQsXG4gICAgICBwbGF5ZXJYOiAhdGhpcy5zdGF0ZS5wbGF5ZXJYLFxuICAgICAgcGxheWVyTzogIXRoaXMuc3RhdGUucGxheWVyTyxcbiAgICB9KVxuICB9XG5cbiAgY2hlY2tXaW5uZXIocm93LCBjb2wsIHBsYXllcikge1xuICAgIHRoaXMuY2hlY2tSb3dzKHJvdyk7XG4gICAgdGhpcy5jaGVja0NvbHMoY29sKTtcbiAgICB0aGlzLmNoZWNrRGlhZ29uYWxzKHJvdywgY29sLCBwbGF5ZXIpO1xuICB9XG5cbiAgY2hlY2tEaWFnb25hbHMocm93LCBjb2wsIHBsYXllcikge1xuICAgIHZhciBjb3VudFggPSAwO1xuICAgIHZhciBjb3VudE8gPSAwO1xuICAgIHZhciBjb2xMZWZ0ID0gY29sO1xuICAgIHZhciBjb2xSaWdodCA9IGNvbDtcblxuICAgIGZvciAodmFyIGkgPSByb3c7IGkgPCA2OyBpKyspIHtcbiAgICAgIGNvbExlZnQtLTtcbiAgICAgIGNvbFJpZ2h0Kys7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5ib2FyZFtpXVtjb2xMZWZ0XSA9PT0gcGxheWVyKSB7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdYJykge1xuICAgICAgICAgIGNvdW50WCsrO1xuICAgICAgICAgIGNvdW50TyA9IDA7XG4gICAgICAgICAgY29uc29sZS5sb2coY291bnRYKVxuICAgICAgICAgIGlmIChjb3VudFggPT09IDQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdQbGF5ZXInICsgcGxheWVyICsgJ3dpbnMhJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5ib2FyZFtpXVtjb2xSaWdodF0gPT09IHBsYXllcikge1xuICAgICAgICBpZiAocGxheWVyID09PSAnTycpIHtcbiAgICAgICAgICBjb3VudE8rKztcbiAgICAgICAgICBjb3VudFggPSAwO1xuICAgICAgICAgIGlmIChjb2xSaWdodCA9PT0gNCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllcicgKyBwbGF5ZXIgKyAnd2lucyEnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgIFxuICB9XG5cbiAgY2hlY2tSb3dzKHJvdykge1xuICAgIHZhciBjb3VudFggPSAwO1xuICAgIHZhciBjb3VudE8gPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNjsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5ib2FyZFtyb3ddW2ldID09PSAnWCcpIHtcbiAgICAgICAgY291bnRYKys7XG4gICAgICAgIGNvdW50TyA9IDA7XG4gICAgICAgIGlmIChjb3VudFggPT09IDQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyWCB3aW5zJylcbiAgICAgICAgICBjb3VudFggPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuYm9hcmRbcm93XVtpXSA9PT0gJ08nKSB7XG4gICAgICAgIGNvdW50TysrO1xuICAgICAgICBjb3VudFggPSAwO1xuICAgICAgICBpZiAoY291bnRPID09PSA0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllck8gd2lucycpO1xuICAgICAgICAgIGNvdW50TyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvdW50TyA9IDA7XG4gICAgICAgIGNvdW50WCA9IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2hlY2tDb2xzKGNvbCkge1xuICAgIHZhciBjb3VudFggPSAwO1xuICAgIHZhciBjb3VudE8gPSAwO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNTsgaSsrKSB7XG4gICAgICBpZiAodGhpcy5zdGF0ZS5ib2FyZFtpXVtjb2xdID09PSAnWCcpIHtcbiAgICAgICAgY291bnRYKys7XG4gICAgICAgIGlmIChjb3VudFggPT09IDQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnUGxheWVyWCB3aW5zJylcbiAgICAgICAgICBjb3VudFggPSAwO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuYm9hcmRbaV1bY29sXSA9PT0gJ08nKSB7XG4gICAgICAgIGNvdW50TysrO1xuICAgICAgICBpZiAoY291bnRPID09PSA0KSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ1BsYXllck8gd2lucycpO1xuICAgICAgICAgIGNvdW50TyA9IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDx0YWJsZT48Qm9hcmQgYm9hcmQ9e3RoaXMuc3RhdGUuYm9hcmR9IGNsaWNrZWRDZWxsPXt0aGlzLm9uQ2VsbENsaWNrLmJpbmQodGhpcyl9Lz48L3RhYmxlPlxuICAgICk7XG4gIH1cbn1cblxudmFyIGluaXRpYWxpemVCb2FyZCA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYm9hcmQgPSBbXTtcbiAgdmFyIHJvdztcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHJvdyA9IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsXTtcbiAgICBib2FyZC5wdXNoKHJvdyk7XG4gIH1cblxuICByZXR1cm4gYm9hcmQ7XG59XG5cblJlYWN0RE9NLnJlbmRlcihcbiAgPEFwcCAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKVxuKTsiXX0=