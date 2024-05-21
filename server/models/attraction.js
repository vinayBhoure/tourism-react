const { type } = require('jquery');
const mongoose = require('mongoose');

const AttractionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    images:[{
        type: String,
        required: true
    }],
    description: [],
    booking_policy:{
        cancellation:{
            type: [],
            required: true
        },
        child:{
            type: [],
            required: true
        }
    },
    information:[],
    advantage:[],
    reason:[],
    inclusions:[{
        heading:{
            type: String,
            required: true
        },
        description:[]
    }]

});

module.exports = mongoose.model('attractions', AttractionSchema);