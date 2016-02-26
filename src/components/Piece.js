require('normalize.css');
require('styles/App.css');

import React, { Component } from 'react';

class Piece extends Component {

  render() {
    return (
      <div className='pieces' style={this.props.style} ></div>
    )
  }
}

export default Piece;
