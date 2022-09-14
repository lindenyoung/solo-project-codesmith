import React, { Component } from 'react';
import PRData from './PRData.jsx';

class HistoryDisplay extends Component {
  render() {
    return (
      // make the "lift" dynamic based on lift history button choice
      <div id="historydisplay-section">
        <h2 id="lift-history-header">"Lift" PR History</h2>
        <PRData />
      </div>

    )
  }
}

export default HistoryDisplay;