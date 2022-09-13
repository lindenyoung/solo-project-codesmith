// linden CODESMITH

const mongoose = require('mongoose');

// mongo uri
const MONGO_URI = 'mongodb+srv://linden:CODESMITH@cluster0.mo0ftyk.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {
   // options for the connect method to parse the URI
   useNewUrlParser: true,
   useUnifiedTopology: true,
   // sets the name of the DB that our collections are part of
   dbName: 'PRogress'
})
  .then(() => console.log('connected to MongoDB'))
  .catch(err => console.log(err));

  const Schema = mongoose.Schema;

  // set schema for lifts collection
  const liftPRSchema = new Schema({
    date: { type: String, required: true },
    lift: { type: String, required: true },
    weight: { type: Number, required: true }
  });

  // create model for lifts collection to export
  const LiftPR = mongoose.model('liftPR', liftPRSchema);

  // export model
  module.exports = {
    LiftPR
  }