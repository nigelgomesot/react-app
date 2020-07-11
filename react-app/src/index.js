import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// class Square extends React.Component {
//   render() {
//     return (
//       <button
//         className="square"
//         onClick={() => this.props.onClick()}
//       >
//         {this.props.value}
//       </button>
//     );
//   }
// }

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render_old1() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }

  render_old2() {
    let squareIndex = 0;
    return(
      <div>
        {[0,1,2].map(i => {
          return <div className="board-row">
            {
              [0,1,2].map(j => {
                return this.renderSquare(squareIndex++)
              })
            }
          </div>
        })}
      </div>
    );
  }

  render() {
    const boardSize = 3;
    const squares = [];

    for (let i = 0; i < boardSize; i++) {
      const row = [];

      for (let j = 0; j < boardSize; j++) {
        row.push(this.renderSquare(i * boardSize + j));
      }
      squares.push(<div className="board-row">{row}</div>);
    }

    return (
      <div>{squares}</div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [{
        squares: Array(9).fill(null),
        squareIndex: null,
      }],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares,
        squareIndex: i,
      }]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const history = this.state.history;
    const currentStepNumber = this.state.stepNumber;
    const current = history[currentStepNumber];
    const winner = calculateWinner(current.squares);
    let status;

    const moves = history.map((step, move) => {
      const isCurrentMove = currentStepNumber === move;
      const desc = move ?
        `Go to move #${move}` :
        `Go to game start`;
        const squareLocation = getSquareLocation(step.squareIndex);

        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>
              <HistoryButtonText desc={desc} isCurrentMove={isCurrentMove}/>
            </button>&nbsp;
            <span>row: {squareLocation[0]}</span>,&nbsp;
            <span>col: {squareLocation[1]}</span>
          </li>
        );
    });

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      const nextPlayer = this.state.xIsNext ? 'X' : 'O';
      status = `Next Player: ${nextPlayer}`;
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);


function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function getSquareLocation(squareIndex) {
  const locations = [
    [1,1],
    [1,2],
    [1,3],
    [2,1],
    [2,2],
    [2,3],
    [3,1],
    [3,2],
    [3,3],
  ]

  return locations[squareIndex] || [null, null];
}

function HistoryButtonText(props) {
  if (props.isCurrentMove) {
    return <b>{props.desc}</b>
  } else {
    return props.desc;
  }
}
