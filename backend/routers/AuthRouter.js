const express = require('express');
const loginValidation = require('../validations/login.validator');
const AuthController = require('../controllers/AuthController');
const regValidation = require('../validations/register.validator');
const { requrestValidator, pinValidator, passwordValidator } = require('../validations/restore.validator');
const AuthRouter = express.Router();

AuthRouter.post('/login',loginValidation,AuthController.LogIn)
AuthRouter.post('/reg',regValidation,AuthController.Register)

AuthRouter.get('/restore/request',requrestValidator,AuthController.RequestReset)
AuthRouter.get('/restore/pin',pinValidator,AuthController.RequestPin)
AuthRouter.post('/restore/change',passwordValidator,AuthController.RequestChangePassword)

module.exports = AuthRouter;