const express = require('express');

const tourController = require('../controllers/tourController');

const Router = express.Router();

//Router.param('id', tourController.checkID);
//Router.route('/').post(tourController.checkBody);

Router.route('/')
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.createTour);

Router.route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = Router;
