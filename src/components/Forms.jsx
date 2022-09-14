import React, { Component } from 'react';

// change to functional syntax
class Forms extends Component {
  render() {
    return (
      <div id="forms-section-test">
          <div id="lift-form-container">
            <div id="form-header">Choose lift to display here!</div>
            <form id="liftHistoryForm">
              <label>Lift: </label>
              <input type="text" /><br/>
              <div id="submit-button">
                <input id="submit" type="submit" value="Show PR History" />
              </div>
            </form>
          </div>
          <div id="newpr-form-container">
            <div id="form-header">Enter a new PR here!</div>
            <form id="newPR-form-test">
              <label>Date: </label>
              <input type="text"/><br/>
              <label>Lift: </label>
              <input type="text"/><br/>
              <label>Weight: </label>
              <input type="text"/><br/>
              <div id="submit-button">
                <input id="submit" type="submit" value="Submit new PR!"/>
              </div>
            </form>
          </div>
        </div>
    )
  }
}

export default Forms;