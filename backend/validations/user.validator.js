const { query,body } = require("express-validator");

const profileRequestValidator = [
    query('id')
        .exists()
        .isString(),
    query('loadRooms')
        .optional()
        .isBoolean()
]



module.exports = {profileRequestValidator}