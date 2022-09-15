import React, { Component } from 'react';
import PRDataCreator from './PRDataCreator.jsx';

const PRData = props => {
   // create empty array
  // iterate over however many pr's there are for selected lift
  // for each, push a new instance of PRDataCreator to array
  // render the array below where PRData is currently
  return(
    // data comes from fetch request;
    <div id="pr-data-display">
      {/* <button onClick={props.editPR}>drilling PATCH test</button> */}
    {/* instead of invoking this instance here, invoke above return and instead invoke the array here */}
    <PRDataCreator editPR={props.editPR} deletePR={props.deletePR}/>
  </div>
  )
}

// class PRData extends Component {
//   render() {
//     // create empty array
//     // iterate over however many pr's there are for selected lift
//     // for each, push a new instance of PRDataCreator to array
//     // render the array below where PRData is currently
//     return (
//       // data comes from fetch request;
//       <div id="pr-data-display">
//         {/* instead of invoking this instance here, invoke above return and instead invoke the array here */}
//         <PRDataCreator />
//       </div>
//     )
//   }
// }

export default PRData;