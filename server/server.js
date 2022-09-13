const express = require('express');
const app = express();
const path = require('path');

// routes

// serve index.html on base route
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(3000);