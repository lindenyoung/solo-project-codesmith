import React, { Component, useState } from 'react';
import PRData from './PRData.jsx';

const HistoryDisplay = props => {

  return (
    // make the "lift" dynamic based on lift history button choice
    // {this.props.whateverINameTheLiftSelection}
    <div id="history-display-section">
      {/* <button onClick={props.editPR}>drilling PATCH test</button> */}
      {/* {props.lift} below line was dynamic, but was changing with every letter typed */}
      <h2 id="lift-history-header">PR Progress</h2>
      <PRData liftHistory={props.liftHistory} editPR={props.editPR} deletePR={props.deletePR}/>
    </div>
  )
}

// class HistoryDisplay extends Component {
//   render() {
//     return (
//       // make the "lift" dynamic based on lift history button choice
//       // {this.props.whateverINameTheLiftSelection}
//       <div id="history-display-section">
//         <h2 id="lift-history-header">"Lift" PR History</h2>
//         <PRData />
//       </div>

//     )
//   }
// }

export default HistoryDisplay;