const { type } = require('jquery');
const mongoose = require('mongoose')

const vehicleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    rentperhr: {
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    current_bookings:[],
    type:{
        type: String,
        required: true
    },
    about:{
        type: String,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }

});

const vehicleModel = mongoose.model('vehicles', vehicleSchema);
module.exports = vehicleModel;