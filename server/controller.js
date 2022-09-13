// import models from /server/models.js
const LiftPR = require('./models.js');

const progressController = {};

// get lifts
progressController.getLifts = (req, res, next) => {
  console.log('in the getLifts middleware');
  LiftPR.find({/*lift: "bench press"*/})
    .then(data => {
      res.locals.liftHistory = data;
      next();
    })
    .catch(err => {
      next({
        log: 'error in the getLifts middleware',
        message: err
      });
    });
};

// add new PR
progressController.addPR = (req, res, next) => {
  console.log('in the addPR middleware');
  // console.log(req.body);
  res.locals.newPR = req.body;
  LiftPR.create(req.body)
    .then(data => {
      next();
    })
    // *** invoke global error handler instead of just logging!
    .catch(err => {
      next({
        log: 'error in the addPR middleware',
        message: err
      });
    });
};

// edit a PR
progressController.editPR = (req, res, next) => {
  console.log('in the editPR middleware');
  console.log('params: ', req.params);
  console.log('body: ', req.body);
  LiftPR.findOneAndUpdate({date: "yesterday"}, {weight: 100}, {new: true, useFindAndModify: false})
    .then(data => {
      res.locals.editedPR = data;
      next();
    })
    .catch(err => {
      next({
        log: 'error in the editPR middleware',
        message: err
      });
    });
};

// delete a PR
progressController.deletePR = (req, res, next) => {
  console.log('in the deletePR middleware');
  next();
};

module.exports = progressController;