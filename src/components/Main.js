require('normalize.css');
require('styles/App.css');
import React, { Component } from 'react';

import Board from './Board';
import Point from './Point';
import Piece from './Piece';

export class App extends Component{
  render() {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
}


export default App;
