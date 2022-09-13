const express = require('express');
const app = express();
const path = require('path');
const progressController = require('./controller.js');

// handle parsing request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve index.html on base route
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

// read: get request to show all pr history(ies)
app.get('/lifts', progressController.getAllLifts, (req, res) => {
  return res.status(200).json(res.locals.allLiftHistory);
});

// get requests to show individual lift columns (mobile)

// app.get('/:lift', progressController.getOneLift, (req, res) => {
  // return res.status(200).json(res.locals.oneLiftHistory);
// });

// create: post request to create new pr record / document
app.post('/', progressController.addPR, (req, res) => {
  return res.status(200).json(res.locals.newPR);
})

// update: patch request to edit date or weight
// '/:id' or '/:date' ?
app.patch('/:date', progressController.editPR, (req, res) => {
  return res.status(200).json(res.locals.editedPR);
})

// delete: delete request to delete pr record / document
app.delete('/:date', progressController.deletePR, (req, res) => {
  return res.status(200).json(res.locals.deletedPR);
})

// wildcard url handler
app.get('*', (req, res) => {
  return res.status(404).send('This is not the page you are looking for...');
})

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }
  };
  const errorObj = Object.assign({}, defaultErr, err);
  // console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000);