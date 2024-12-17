const { body } = require("express-validator");
const User = require("../models/User");

const regValidation = [
    body("email")
        .exists()
        .withMessage("Email Is Required")
        .isEmail()
        .withMessage("Provide valid email")
        .custom(async value => {
            let user = await User.findOne({email: value});
            if(user) {
                throw new Error("Email already in use")
            }
        }),
    body("password")
        .exists()
        .withMessage("Password is Required")
        .isString()
        .withMessage("Password must be String")
        .isLength({min: 8, max: 32})
        .withMessage("Password length must be between 8 and 32")
        .custom(value => {
            if(!value.match(/^(?![a-zA-Z]+$)[a-zA-Z0-9]{8,}$/gm)) {
                throw new Error("Password must contain onle latin symbols and numbers")
            }
            return true;
        }),
    body("name")
        .exists()
        .withMessage("Name Is Required")
        .isString()
        .withMessage("Name must be String"),
    body("phone")
        .exists()
        .withMessage("Phone is Required")
        .isString()
        .withMessage("Phone must be String")
        .isLength({min: 12, max: 12})
        .withMessage("Phone has invalid length")
        .custom(value => {
            if(!value.match(/^\+7\d{10}$/g)) {
                throw new Error("Provide valid PhoneNumber")
            }
            return true;
        }),
]

module.exports = regValidation;