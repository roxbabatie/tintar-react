require('normalize.css');
require('styles/App.css');

import React from 'react';
import Point from './Point';

var Board = React.createClass ({
  getInitialState: function() {
    var board = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
    return {
      board: board,
      white: 9,
      black: 9,
      player: 0,
      started: false
    }
  },

  placePiece: function(index) {
      if (this.state.board[index] === -1) {
        if ((this.state.player == 0) && (this.state.white <= 9) && (this.state.white > 0)) {
          this.state.player = 1;
          this.state.board[index] = 0;
          this.state.white -= 1;
        } else if ((this.state.player == 1) && (this.state.black <= 9) && (this.state.black > 0)) {
          this.state.player = 0;
          this.state.board[index] = 1;
          this.state.black -= 1;
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

  resetGame: function() {
    this.setState(this.getInitialState);
    this.setState({started: 'true'});
  },

  startGame: function() {
    this.setState({started: true})
  },

  render: function(){
    if (this.state.started == 0) {
      return(
        <div>
          <div className="start-game">
            <button className="start" onClick={this.startGame}>Start Game</button>
          </div>
        </div>
      );
    };
    var points = [];
    var style = {};
    for (var i=0; i < 24; i++){
      if(i<8) {
        style = {
          top: this.topPosition(i - this.startingPos(i), 600)-2 ,
          left: this.leftPosition(i - this.startingPos(i), 600)-5
        };
      }else if (i >= 8 && i< 16) {
        style = {
          top: this.topPosition(i - this.startingPos(i), 400)+100,
          left: this.leftPosition(i - this.startingPos(i), 400)+96
        };
      }
      else{
        style = {
          top: this.topPosition(i - this.startingPos(i), 200)+203,
          left: this.leftPosition(i - this.startingPos(i), 200)+197
        };
      }
      if (this.state.board[i] === 0) {
        style.background = '#F7EECD';
        style.width= 50;
        style.height= 50;
        style.mozBoxShadow="3px 3px 5px 6px #ccc";
        style.webkitBoxShadow= "3px 3px 5px 6px #ccc" ;
        style.boxShadow = "2px 2px 2px 2px #ccc";
      } else if (this.state.board[i] === 1) {
        style.background = '#1F1D20';
        style.width= 50;
        style.height= 50;
        style.mozBoxShadow="3px 3px 5px 6px #ccc";
        style.webkitBoxShadow= "3px 3px 5px 6px #ccc";
        style.boxShadow = "2px 2px 2px 2px #ccc";
      } else {
        style.background = 'black';
      }
      points.push(<Point style = {style} onClick={this.placePiece} index={i}/>);
    }
    return (
      <div>
        <div className="board">
          <div className="outer">
            <div className="left-line"></div>
            <div className="right-line"></div>
            <div className="top-line"></div>
            <div className="bottom-line"></div>
            <div className="middle">
              <div className="inner">
                {points}
              </div>
            </div>
            </div>
          </div>
        <div>
          <button className="reset-btn" onClick={this.resetGame}>Reset game</button>
        </div>
         <div className="game-status">
           <div className="next-player">
             <div>Next player: {this.state.player === 0 ? 'White ' : 'Black '}</div>
           </div>
            <div className="pieces-left">
              <p>White: {this.state.white}</p>
              <p>Black: {this.state.black}</p>
            </div>
          </div>
    </div>
    );
  }
});

export default Board;
