const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const passwordResetSchema = new Schema({
    target_user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "Users"
    },
    key: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    },
    ip: {
        type: String,
        required: true,
    },
    expiredIn: {
        type: Number,
        default: (new Date()).getTime()+300000
    },
    finished: {
        type: Boolean,
        default: false
    }
});

const PasswordReset = mongoose.model('PasswordResets',passwordResetSchema);
module.exports = PasswordReset;