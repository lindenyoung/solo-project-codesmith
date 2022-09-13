// import models from /server/models.js
const LiftPR = require('./models.js');

const progressController = {};

// get all lift histories (desktop)
progressController.getAllLifts = (req, res, next) => {
  console.log('in the getAllLifts middleware');
  LiftPR.find({/*lift: "bench press"*/})
    .then(data => {
      res.locals.allLiftHistory = data;
      next();
    })
    .catch(err => {
      next({
        log: 'error in the getAllLifts middleware',
        message: err
      });
    });
};

// get one lift history (mobile)
progressController.getOneLift = (req, res, next) => {
  console.log('in the getOneLift middleware');
  // console.log('params lift: ', req.params.lift);
  LiftPR.find({lift: req.params.lift})
    .then(data => {
      res.locals.oneLiftHistory = data;
      next();
    })
    .catch(err => {
      next({
        log: 'error in the getOneLift middleware',
        message: err
      });
    })
}

// add new PR
progressController.addPR = (req, res, next) => {
  console.log('in the addPR middleware');
  // console.log(req.body);
  res.locals.newPR = req.body;
  LiftPR.create(req.body)
    .then(data => {
      next();
    })
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
  // console.log('params: ', req.params);
  // console.log('body: ', req.body);
  // make this dynamic using the patch request params and body
  LiftPR.findOneAndUpdate({date: req.params.date}, req.body, {new: true, useFindAndModify: false})
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
  // make dynamic using req params
  LiftPR.findOneAndDelete({date: req.params.date})
    .then(data => {
      res.locals.deletedPR = data;
      next();
    })
    .catch(err => {
      next({
        log: 'error in the deletePR middleware',
        message: err
      });
    })
};

module.exports = progressController;