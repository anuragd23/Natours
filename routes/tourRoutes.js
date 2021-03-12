const express = require('express');

const tourController = require('../controllers/tourController');

const Router = express.Router();

//Router.param('id', tourController.checkID);
//Router.route('/').post(tourController.checkBody);

Router.route('/top-5-cheap').get(
  tourController.aliasTopTours,
  tourController.getAllTours
);

Router.route('/tour-stats').get(tourController.getTourStats);

Router.route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
