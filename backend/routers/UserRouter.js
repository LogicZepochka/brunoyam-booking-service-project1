const express = require('express');
const { profileRequestValidator } = require('../validations/user.validator');
const UserController = require('../controllers/UserController');
const UserRouter = express.Router();

UserRouter.get('/get',profileRequestValidator,UserController.GetProfileInfo)

module.exports = UserRouter;