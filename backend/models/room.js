const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 5.0
    },
    images: {
        type: Array,
        required: true
    },
    square: {
        type: Number,
        required: true
    },
    costPerMonth: {
        type: Number,
        required: true
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
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
    },
    public: {
        type: Boolean,
        default: false
    }
},{timestamps: true});


const Room = mongoose.model('Rooms',roomSchema);
module.exports = Room;