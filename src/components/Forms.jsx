import React, { Component } from 'react';

// change to functional syntax
class Forms extends Component {
  render() {
    return (
      <div id="forms-section-test">
          <div id="lift-form-container">
            <div id="form-header">Select lift to see PR history!</div>
            <form id="liftHistoryForm">
              <label>Lift: </label>
              {/* <input type="text" /><br/> */}
              <select id="select-lift-menu">
                <option value="0">-</option>
                <option value="1">bench-press</option>
                <option value="2">overhead-press</option>
                <option value="3">squat</option>
                <option value="4">deadlift</option>
              </select>
              <div id="submit-button">
                <input id="submit" type="submit" value="Show PR History" />
              </div>
            </form>
          </div>
          <div id="newpr-form-container">
            <div id="form-header">Enter a new PR here!</div>
            <form id="newPR-form-test">
              <label htmlFor="date">Date: </label>
              <input type="text" name="date" placeholder="9.15.22"/><br/>
              <label>Lift: </label>
              <input type="text" name="lift" placeholder="bench-press"/><br/>
              <label>Weight: </label>
              <input type="text" name="weight" placeholder="225"/><br/>
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