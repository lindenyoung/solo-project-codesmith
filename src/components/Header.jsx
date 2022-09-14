import React, { Component } from 'react';

// change to functional syntax
class Header extends Component {
  render() {
    return (
      <div id="header-section">
        <h1><span id="progress-header">PRogress</span><span id="brogress-header">Brogress</span></h1>
      </div>
    )
  }
}

export default Header;