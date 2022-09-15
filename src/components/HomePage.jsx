import React, { Component } from 'react';
import { useState } from 'react';

// import React, { Component, useState } from 'react';

// import LiftHistoryButton from './LiftHistoryButton.jsx';
// import NewPRButton from './NewPRButton.jsx';
import Forms from './Forms.jsx';
import HistoryDisplay from './HistoryDisplay.jsx';

function HomePage() {
  // state = newPR data and lift selection
  // const [newPR, setNewPR] = useState({
  //   date: '',
  //   lift: '',
  //   weight: 0
  // });
  const [lift, setLift] = useState('deadlift');
  const [liftHistory, setLiftHistory] = useState('');
  // do we need a way to keep track of dates / id's for patch / delete? or can we access those values internally as inputs?

  // functions
  // newPR - post request
  // !!TO-DO!! working statically rn - now make dynamic!
  // pass down to Forms, make it dynamic so what is sent is from the form data
  function handleNewPR(data) {
    fetch('http://localhost:8080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        date: '01.01.23',
        // date: data.target[0].value,
        lift: 'deadlift',
        // lift: data.target[1].value,
        weight: 330
        // weight: data.target[2].value
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('post req response data: ', data);
      })
      .catch((err) => console.log('error'));
  }

  // showHistory - get request, sets state
  // !!TO-DO!! working statically rn - it is receiving the correct data from db, but is not setting state
  // this is the trickiest function b/c it changes state lift history based on the state lift selection
  // figure out how to change state and have it update
  function handleShowHistory() {
    // 'http://localhost:8080/' + data.target
    // setLiftHistory('hello world');
    // console.log('new state: ', liftHistory);

    // change lift state to whatever was selected in lift form
    // then send get request to fetch data for that specific lift from db
    fetch('http://localhost:8080/' + lift)
    .then((res) => res.json())
    .then((data) => {
      // set liftHistory state
      console.log(data);
      // setTimeout(() => {
      //   setLiftHistory(data)
      //   console.log('in timeout');
      //   console.log(liftHistory);
      // }, 250);
      // setLiftHistory(...data);
      // console.log('setting lift history');
      // console.log('ta da: ', liftHistory);
    })
    .catch((err) => console.log('error'));
  }

  // editPR - patch request
  // !!TO-DO!! working statically rn - now make it work dynamically!
  // (pass down to forms and pr creator, make url endpoint dynamic based on which pr instance is clicked)
  function handleEditPR(data) {
    fetch('http://localhost:8080/12.19.22', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        weight: 200
      })
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('patch req response data: ', data);
      })
      .catch((err) => console.log('error'));
  }

  // deletePR - delete request
  // !!TO-DO!! working statically - make dynamic now!
  // (pass down to forms and pr creator, make url endpoint dynamic based on which pr instance is clicked)
  function handleDeletePR(data) {
    // 8080/data.something
    fetch('http://localhost:8080/12.19.22', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('delete req response data: ', data);
      })
      .catch((err) => console.log('error'));
  }

  return (
    <div id="homepage-section">
      {/* <div id="buttons-section">
        <LiftHistoryButton />
        <NewPRButton />
      </div> */}
      <button onClick={handleShowHistory}>Test Get Request</button>
      <button onClick={handleNewPR}>Test Post Request</button>
      <button onClick={handleEditPR}>Test Patch Request</button>
      <button onClick={handleDeletePR}>Delete Patch Request</button>
      <Forms />
      <HistoryDisplay />
    </div>

  )
}

// class HomePage extends Component {
//   render() {
//     return (
//       <div id="homepage-section">
//         {/* <div id="buttons-section">
//           <LiftHistoryButton />
//           <NewPRButton />
//         </div> */}

//         <Forms />
//         <HistoryDisplay />
//       </div>

//     )
//   }
// }

export default HomePage;