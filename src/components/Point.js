require('normalize.css');
require('styles/App.css');

import React, { Component } from 'react';

class Point extends Component{
  onClick() {
    this.props.onClick(this.props.index)

  }
  render(){
    return (
      <div className="point" style={this.props.style} onClick={this.onClick.bind(this)}></div>
    )
  }
};

export default Point;
