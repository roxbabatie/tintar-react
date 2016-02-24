require('normalize.css');
require('styles/App.css');

import React from 'react';

var Point = React.createClass ({
  onClick: function() {
    this.props.onClick(this.props.index)
  },
  render: function(){
    return (
      <div className="point" style={this.props.style} onClick={this.onClick}></div>
    )
  }
});

export default Point;
