const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        required: true
    },
    refreshToken: {
        type: String,
        required: true
    }
});

const Token = mongoose.model('Tokens',tokenSchema);
module.exports = Token;