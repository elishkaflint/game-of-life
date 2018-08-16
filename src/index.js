import React from 'react';
import ReactDOM from 'react-dom';
import {initialGrid, tick} from './game';
import './index.css'

class Grid extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      board: initialGrid()
    }
  }

  render () {
    return (
      <div>
        <div>
          <div>{this.state.board[0]}</div>
          <div>{this.state.board[1]}</div>
          <div>{this.state.board[2]}</div>
          <div>{this.state.board[3]}</div>
          <div>{this.state.board[4]}</div>
        </div>
        <div>
          <button className='play'
            onClick={() => this.setState({
              board: tick(this.state.board)
            })
            }
          >
            Play
          </button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Grid />,
  document.getElementById('root')
)
