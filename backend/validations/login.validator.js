const { body } = require("express-validator");

const loginValidation = [
    body("email")
        .exists()
        .withMessage("Email Is Required")
        .isEmail()
        .withMessage("Provide valid email"),
    body("password")
        .exists()
        .withMessage("Password is required")
        .isString()
        .withMessage("Password must be string")
]

module.exports = loginValidation;