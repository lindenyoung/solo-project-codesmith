import React, { Component } from 'react';

class PRDataCreator extends Component {

  // do these go here or above a few layers and passed down as props?
  // editHandler function logic here
    // fetch PATCH request to /date

  // deleteHandler function logic here
    // fetch DELETE request to /date

  render() {
    return (
      // data comes from fetch request response (in props)
      <div id="pr-data-instance">
        <div>Date: </div>
        <div>Weight: </div>
        <div id="pr-data-buttons">
          {/* onClick={editHandler} */}
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default PRDataCreator;