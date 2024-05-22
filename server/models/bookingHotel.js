const mongoose = require('mongoose');

const bookingHotelSchema = new mongoose.Schema({
    hotel:{
        type: Object,
        required: true
    },
    user_id: {
        type: String,
        required: true
    },
    total_days: {
        type: Number,
        // required: true
    },
    rentperday: {
        type: Number,
        required: true
    },
    total_amount: {
        type: Number,
        // required: true
    },
    transaction_id: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ['booked', 'cancelled'],
        default: 'booked'
    },
 timestamp:{
    type: Date,
    default: Date.now
}
});

module.exports = mongoose.model('bookingHotels', bookingHotelSchema);