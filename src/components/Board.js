require('normalize.css');
require('styles/App.css');

import React from 'react';
import Point from './Point';

var Board = React.createClass ({
  getInitialState: function() {
    //var pieces = [];
    var board = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    return {
      board: board,
      red: 0,
      green: 1,
      player: 0,
      //pieces: pieces
    }
  },

  placePiece: function(index) {

      if (this.state.board[index] === -1) {
        console.log("index: ", index);
        console.log("player: ", this.state.player);
        if ((this.state.player == 0) && (this.state.red < 9)) {
          this.state.player = 1;
          this.state.board[index] = 0;
          this.state.red += 1;
        } else if ((this.state.player == 1) && (this.state.green < 9)) {
          this.state.player = 0;
          this.state.board[index] = 1;
          this.state.black += 1;
        }
        this.forceUpdate();

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
      if (this.state.board[i] === 0) {
        style.background = 'red';
      } else if (this.state.board[i] === 1) {
        style.background = 'green';
      } else {
        style.background = 'black';
      }
      points.push(<Point key = {i} style = {style} onClick={this.placePiece} index={i}/>);
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
