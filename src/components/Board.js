require('normalize.css');
require('styles/App.css');

import React from 'react';
import Point from './Point';

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
  startingPos: function(index) {
    return Math.floor(index/8)*8

},
  topPosition: function (index, width) {
    if(index < 3) {
      return 0;
    } else if (index == 3 || index == 7) {
      return width/2;
    } else {
      return width;
    }
  },
  leftPosition: function (index, width) {
    if(index == 0 || index > 5) {
      return 0;
    } else if (index == 1 || index == 5) {
      return width/2;
    } else {
      return width;
    }
  },
  render: function(){
    var points = [];
    var style = {};

    for (var i=0; i < 24; i++){
      if(i<8) {
        style = {
          top: this.topPosition(i - this.startingPos(i), 600) + 87,
          left: this.leftPosition(i - this.startingPos(i), 600) + 385
        };
      }else if (i >= 8 && i< 16) {
        style = {
          top: this.topPosition(i - this.startingPos(i), 400) + 187,
          left: this.leftPosition(i - this.startingPos(i), 400) + 485
        };
      }
      else{
        style = {
          top: this.topPosition(i - this.startingPos(i), 200) + 290,
          left: this.leftPosition(i - this.startingPos(i), 200)+ 590
        };

      }
      points.push(<Point key = {i} style = {style} />);
    }
    return (
      <div>

        <div className="left-line"></div>
        <div className="right-line"></div>
        <div className="top-line"></div>
        <div className="bottom-line"></div>
        <div className="outer">
          <div className="middle">
            <div className="inner">
              {points}
            </div>

          </div>
        </div>
      </div>
    );
  }
});

export default Board;
