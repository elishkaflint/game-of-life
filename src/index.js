import React from 'react';
import ReactDOM from 'react-dom';
import {tick, rocket} from './game';
import './index.css';

function Square(props) {
  let cellClasses = "square " + ( props.value ? "active" : "inactive" )
  return (
    <button className={cellClasses} onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      rows: this.props.rows,
      columns: this.props.columns,
      squares: this.generateArray(this.props.rows, this.props.columns)
    }
  }

  generateArray(rows, columns) {
    let array = []
    for(var i = 0; i < rows; i++){
      let rows = []
      for(var j = 0; j < columns; j++){
        rows.push(false)
      }
    array.push(rows)
    }
    return array;
  }

  renderBoard() {
    var array = []
    for(var n = 0; n < this.state.rows; n++) {
      array.push(<div className="board-row">{this.renderRow(n)}</div>)
    }
    return array
  }

  renderRow(n) {
    var array = []
    for(var i = 0; i < this.state.columns; i++) {
      array.push(this.renderSquare(n, i))
    }
    return array
  }

  renderSquare(n, i) {
    return (
      <Square
        value={this.state.squares[n][i]}
        onClick={() => this.handleClick(n, i)}
      />
    )
    console.log(this.state.squares)
  }

  handleClick(n, i) {
    var squares = this.state.squares.slice();
    squares[n][i] = !squares[n][i];
    this.setState({
      squares: squares
    });
  }

  handlePlayClick() {
    this.interval = setInterval(() => this.play(), 500);
  }

  handleStopClick() {
    clearInterval(this.interval);
  }

  handleResetClick() {
    this.setState({
      squares: this.generateArray(this.props.rows, this.props.columns)
    });
  }

  play() {
    let squares = this.state.squares.map(row => row.slice())
    let output = tick(squares)
    this.setState({
      squares: output
    })
  }

  render() {
    const title = 'The Game of Life';
    const rules = [
      'The game evolves in turns, commonly known as ticks.',
      'All changes occur at the same time.',
      'Any live cell with 2 or 3 live neighbours survives until next tick.',
      'Any live cell with less than 2 live neighbours dies (underpopulation).',
      'Any live cell with more than 3 live neighbours dies (overpopulation).',
      'Any dead cell with exactly 3 neighbours becomes a live cell (reproduction).'
    ]
    return (
      <div>
          <div className="title">{title}</div>
          <div className="rules">
            <ul>
              <li>{rules[0]}</li>
              <li>{rules[1]}</li>
              <li>{rules[2]}</li>
              <li>{rules[3]}</li>
              <li>{rules[4]}</li>
              <li>{rules[5]}</li>
            </ul>
          </div>
          {this.renderBoard()}
          <div className="buttons">
            <button className='play' onClick={() => this.handlePlayClick()}>
              Play
            </button>
            <button className='stop' onClick={() => this.handleStopClick()}>
              Stop
            </button>
            <button className='reset' onClick={() => this.handleResetClick()}>
              Reset
            </button>
          </div>
      </div>
    );
  }

}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Board rows={50} columns={80}/>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
