import React from 'react';
import ReactDOM from 'react-dom';

class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      alive: '.'
    }
  }

  render() {
    return (
     <div>{this.state.alive}</div>
    )
  }

}

ReactDOM.render(
  <Cell />,
  document.getElementById('root')
);
