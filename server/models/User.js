const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 15
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 30,
    },
    followedCities: [{
        type: 'ObjectId',
        required: true,
        ref: 'City'
    }]
})

module.exports = mongoose.model('User', UserSchema);