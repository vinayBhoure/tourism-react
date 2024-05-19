const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    role:{
        type: String,
        default: 'customer'
    },
    bookings: {
        hotel_booking:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'hotels'
        }],
        vehicle_booking:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'vehicles'
        }]
    },
    token:{
        type: String,
        enum : ['customer', 'admin'],
        default: null
    }
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;