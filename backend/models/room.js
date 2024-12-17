const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    address: {
        type: String,
        required: true
    },
    images: {
        type: Array,
        required: true
    },
    square: {
        type: Number,
        required: true
    },
    constPerMonth: {
        type: Number,
        required: true
    },
    creatorId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: 'Users'
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
},{timestamps: true});


const Room = mongoose.model('Rooms',roomSchema);
module.exports = Room;