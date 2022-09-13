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

// read: get request to show pr history(ies)
app.get('/lifts', progressController.getLifts, (req, res) => {
  return res.status(200).json(res.locals.liftHistory);
})

// get request to show individual lift columns (mobile)

// create: post request to create new pr record / document
app.post('/', progressController.addPR, (req, res) => {
  return res.status(200).json(res.locals.newPR);
})

// update: patch request to edit date or weight
app.patch('/', progressController.editPR, (req, res) => {
  return res.status(200).send('success');
})

// delete: delete request to delete pr record / document
app.delete('/', progressController.deletePR, (req, res) => {
  return res.status(200).send('success');
})

// wildcard url handler
app.get('*', (req, res) => {
  return res.status(404).send('This is not the page you are looking for...');
})

// global error handler


app.listen(3000);