const express = require('express');
const viewsController = require('.././controllers/viewsController');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/me', authController.protect, viewsController.getAccount);

router.use(authController.isLoggedIn);

router.get('/', viewsController.getOverview);

router.get('/tour/:slug', viewsController.getTour);

router.get('/login', viewsController.getLoginForm);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);
module.exports = router;
