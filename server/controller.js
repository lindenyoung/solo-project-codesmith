// import models from /server/models.js

const progressController = {};

// get lifts
progressController.getLifts = (req, res, next) => {
  console.log('in the getLifts middleware');
  next();
}

// add new PR
progressController.addPR = (req, res, next) => {
  console.log('in the addPR middleware');
  next();
}

// edit a PR
progressController.editPR = (req, res, next) => {
  console.log('in the editPR middleware');
  next();
}

// delete a PR
progressController.deletePR = (req, res, next) => {
  console.log('in the deletePR middleware');
  next();
}

module.exports = progressController;