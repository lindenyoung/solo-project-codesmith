import React, { Component } from 'react';

class PRDataCreator extends Component {

  // do these go here or above a few layers and passed down as props?
  // editHandler function logic here
  // deleteHandler function logic here

  render() {
    return (
      // data comes from fetch request response (in props)
      <div id="pr-data-instance">
        <div>Date: </div>
        <div>Weight: </div>
        <div id="pr-data-buttons">
          <button>Edit</button>
          <button>Delete</button>
        </div>
      </div>
    )
  }
}

export default PRDataCreator;