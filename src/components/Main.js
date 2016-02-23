require('normalize.css');
require('styles/App.css');

import React from 'react';


var AppComponent = React.createClass({

  render: function () {
    return (
      <div className="container">
        <div className="outer">
          <div className="left-line">
          </div>
          <div className="right-line">
          </div>
          <div className="top-line">
          </div>
          <div className="bottom-line">
          </div>
          <div className="middle">
            <div className="inner">
            </div>
          </div>
        </div>
      </div>
    );
  }
});


export default AppComponent;
