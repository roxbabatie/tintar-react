require('normalize.css');
require('styles/App.css');

import React from 'react';

var Board = React.createClass ({
  getInitialState: function() {
    var board = [];
    var whitePieces = [];
    var blackPieces = [];
    return {
      board: board,
      whitePieces: whitePieces,
      blackPieces: blackPieces
    }
  },
  render: function(){

    return (
      <div>
        <div className="left-line"></div>
        <div className="right-line"></div>
        <div className="top-line"></div>
        <div className="bottom-line"></div>
        <div className="outer">
          <div className="middle">
            <div className="inner"></div>
          </div>
        </div>
      </div>
    );
  }
});

export default Board;
