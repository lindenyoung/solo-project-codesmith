import React, { Component, useState } from 'react';
import Forms from './Forms.jsx';
import HistoryDisplay from './HistoryDisplay.jsx';
// import LiftHistoryButton from './LiftHistoryButton.jsx';
// import NewPRButton from './NewPRButton.jsx';

// HomePage stateful component
function HomePage() {
  // state = newPR data and lift selection
  // const [newPR, setNewPR] = useState({
  //   date: '',
  //   lift: '',
  //   weight: 0
  // });

  // STATE
  const [lift, setLift] = useState('deadlift');
  const [liftHistory, setLiftHistory] = useState([]);
  // const [dates, setDate] = useState({});
  // do we need a way to keep track of dates / id's for patch / delete? or can we access those values internally as inputs?

  // functions
  // newPR - post request
  // working dynamically rn!
  function handleNewPR(data) {
    data.preventDefault();
    // console.log(data.target);
    fetch('http://localhost:8080', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // date: '01.02.23',
        date: data.target[0].value,
        // lift: 'deadlift',
        lift: data.target[1].value,
        // weight: 330
        weight: data.target[2].value
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

  function changeLift(e) {
    e.preventDefault();
    // console.log('e: ', e);
    // console.log('e target val: ', e.target.value);
    setLift(e.target.value);
    // console.log('new lift state: ', lift);
    // console.log('lift history: ', liftHistory);
  }

  function handleShowHistory(data) {
    data.preventDefault();
    // 'http://localhost:8080/' + data.target
    // setLiftHistory('hello world');
    // console.log('new state: ', liftHistory);
    const localURL = 'http://localhost:8080/';
    const input = data.target[0].value;
    // change lift state to whatever was selected in lift form
    // setLift('show pr history button'); // not working!!??
    console.log('current lift state: ', lift);
    // then send get request to fetch data from db for that specific lift
    fetch(localURL + input)
    .then((res) => res.json())
    .then((data) => {
      console.log(data); // this data is correct - the response array of pr instance objects
      // set liftHistory state to be response data and then iterate over it in PRData
      // setLiftHistory(data);
      setLiftHistory(data);
    })
    .catch((err) => console.log('error'));
  }

  // function addDate(data) {
  //   console.log(data);
  //   setDate(newDates);
  //   console.log('new dates state: ', dates);
  // }

  // editPR - patch request
  // !!TO-DO!! working statically rn - now make it work dynamically!
  // (pass down to forms and pr creator, make url endpoint dynamic based on which pr instance is clicked)
  function handleEditPR(data) {
    fetch('http://localhost:8080/10.31.22', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        weight: 405
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
  function handleDeletePR(e) {
    // console.log(e);
    // make the url dynamic... HOW???
    fetch('http://localhost:8080/10.31.22', {
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
      {/* <button onClick={handleShowHistory}>Test Get Request</button>
      <button onClick={handleNewPR}>Test Post Request</button>
      <button onClick={handleEditPR}>Test Patch Request</button>
      <button onClick={handleDeletePR}>Delete Patch Request</button> */}
      {/* <button onClick={() => setLift('how in the')}>setState test</button> */}
      <Forms lift={lift} liftHistory={liftHistory} changeLift={changeLift} newPR={handleNewPR} showHistory={handleShowHistory} />
      <HistoryDisplay lift={lift} liftHistory={liftHistory} editPR={handleEditPR} deletePR={handleDeletePR} />
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