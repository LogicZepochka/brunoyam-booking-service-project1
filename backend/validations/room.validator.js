const { query,body } = require("express-validator");

const roomRegisterValidator = [
    body('title')
        .exists()
        .isString()
        .isLength({max: 64}),
    body('address')
        .exists()
        .isString()
        .isLength({max: 128}),
    body('images')
        .optional()
        .isArray({min: 0, max: 8}),
    body('images.*')
        .isString()
        .isURL(),
    body('square')
        .exists()
        .isNumeric()
        .custom(value => {
            if(value <= 0) throw new Error("Square must be more that 0m2");
            return true;
        }),
    body('type')
        .exists()
        .isString()
        .custom(value => {
            if(!String(value).match(/(HOTEL|APART|OFFICE|ROOM)/))
                throw new Error("Wrong type name");
            return true;
        }),
    body('description')
        .exists()
        .isString()
        .isLength({min: 20, max: 512}),
    body('costPerMonth')
        .exists()
        .isNumeric({min: 0})
]

const roomSearchFilter = [
    query('chunk')
        .optional()
        .isNumeric(),
    query('query')
        .optional()
        .isString(),
    query('type')
        .optional()
        .isString()
        .custom(value => {
            if(!String(value).match(/(HOTEL|APART|OFFICE|ROOM)/))
                throw new Error("Wrong type name");
            return true;
        }),
    query('minPrice')
        .optional()
        .isNumeric()
        .custom(value => {
            if(value <= 0) throw new Error("minPrice must be more that 0");
            return true;
        }),
    query('maxPrice')
        .optional()
        .isNumeric()
        .custom(value => {
            if(value <= 0) throw new Error("maxPrice must be more that 0");
            return true;
        }),
]



module.exports = { roomRegisterValidator, roomSearchFilter }