import React, { Component } from 'react';
// import child components
import Header from './Header.jsx';
import HomePage from './HomePage.jsx';

class App extends Component {
  render () {
    return (
      <div id="app-section">
        <Header />
        <HomePage />
      </div>
    )
  }
}

export default App;