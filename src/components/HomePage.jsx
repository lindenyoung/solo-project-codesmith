import React, { Component } from 'react';
import LiftHistoryButton from './LiftHistoryButton.jsx';
import NewPRButton from './NewPRButton.jsx';
import HistoryDisplay from './HistoryDisplay.jsx';

// stateful component?

class HomePage extends Component {
  render() {
    return (
      <div id="homepage-section">
        <div id="buttons-section">
          <LiftHistoryButton />
          <NewPRButton />
        </div>
        <HistoryDisplay />
      </div>

    )
  }
}

export default HomePage;