require('normalize.css');
require('styles/App.css');

import React from 'react';
import Board from './Board';
import Point from './Point';

var AppComponent = React.createClass({

  render: function () {
    return (
      <div className="container">
        <Board />
      </div>
    );
  }
});


export default AppComponent;
