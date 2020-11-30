const mongoose = require('mongoose');

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    temperature: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    details: [{
        sunrise: {
            type: String,
            required: true
        },
        sunset: {
            type: String,
            required: true
        },
        feelsLike: {
            type: String,
            required: true
        },
        lowTemp: {
            type: String,
            required: true
        },
        highTemp: {
            type: String,
            required: true
        },
        humidity: {
            type: String,
            required: true
        },
        clouds: {
            type: String,
            required: true
        },
        chanceOfRain: {
            type: String,
            required: true
        },
        wind: {
            type: String,
            required: true
        },
        pressure: {
            type: String,
            required: true
        },
        precipitation: {
            type: String,
            required: true
        },
        visibility: {
            type: String,
            required: true
        }
    }],
    cityFollowers: [{
        type: 'ObjectId',
        required: true,
        ref: 'User'
    }]
})

module.exports = mongoose.model('City', CitySchema);