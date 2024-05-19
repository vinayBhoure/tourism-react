const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    hotel_id: {
        type: Number,

    },
    brand_id: {
        type: Number,

    },
    brand_name: {
        type: String,

    },
    hotel_name: {
        type: String,

    },
    hotel_formerly_name: {
        type: String,

    },
    hotel_translated_name: {
        type: String,

    },
    addressline1: {
        type: String,

    },
    addressline2: {
        type: String,

    },
    zipcode: {
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
    url: {
        type: String,

    },
    numberrooms: {
        type: Number,

    },
    numberfloors: {
        type: Number,
    },
    photo1: {
        type: String,
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
    city_id: {
        type: Number,

    },
    country_id: {
        type: Number,

    },
    number_of_reviews: {
        type: Number,

    },
    rating_average: {
        type: Number,
    }
})

const hotelModel = mongoose.model('hotels', hotelSchema)
module.exports = hotelModel