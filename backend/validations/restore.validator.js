const { query,body } = require("express-validator");

const requrestValidator = [
    query('email')
        .exists()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Provide valid email")
]

const pinValidator = [
    query('pin')
        .exists()
        .withMessage("Pin must exits")
        .isString()
        .isLength({min: 6, max: 6})
]

const passwordValidator = [
    body('password')
        .exists()
        .withMessage("Password Required")
        .isString()
        .isLength({min: 8, max: 32}),
    body('email')
        .exists()
        .withMessage("email must exits")
        .isString()
        .isEmail(),
    body('key')
        .exists()
        .withMessage("Key must exits")
        .isString()
]



module.exports = {requrestValidator, pinValidator, passwordValidator}