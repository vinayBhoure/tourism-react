const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    hotel_name: {
        type: String,

    },
    city: {
        type: String,

    },
    state: {
        type: String,

    },
    country: {
        type: String,

    },
    star_rating: {
        type: Number,

    },
    photo1: {
        type: String,
        required: true,
    },
    photo2: {
        type: String,
    },
    photo3: {
        type: String,
    },
    photo4: {
        type: String,
    },
    photo5: {
        type: String,
    },
    overview: {
        type: String,

    },
    number_of_reviews: {
        type: Number,
    },
    rating_average: {
        type: Number,
    },
    rentperday: {
        type: Number,
        required: true,
    },
    current_bookings:[],
    timestamp: {
        type: Date,
        default: Date.now
    }
})

const hotelModel = mongoose.model('hotels', hotelSchema)
module.exports = hotelModel