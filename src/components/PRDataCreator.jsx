import React, { Component } from 'react';

const PRDataCreator = props => {

  return (
    // data comes from fetch request response (in props)
    <div id="pr-data-instance">
      <div>Date: </div>
      <div>Weight: </div>
      <div id="pr-data-buttons">
        {/* onClick={editHandler} */}
        <button onClick={props.editPR}>Edit test</button>
        <button onClick={props.deletePR}>Delete test</button>
      </div>
    </div>
  )
}

// class PRDataCreator extends Component {
//   render() {
//     return (
//       // data comes from fetch request response (in props)
//       <div id="pr-data-instance">
//         <div>Date: </div>
//         <div>Weight: </div>
//         <div id="pr-data-buttons">
//           {/* onClick={editHandler} */}
//           <button>Edit</button>
//           <button>Delete</button>
//         </div>
//       </div>
//     )
//   }
// }

export default PRDataCreator;