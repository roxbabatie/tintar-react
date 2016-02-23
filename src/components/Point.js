require('normalize.css');
require('styles/App.css');

import React from 'react';

var Point = React.createClass ({
  render: function(){
    return (
      <div className="point"></div>
    )
  }
});

export default Point;
