const jwt = require('./jwt');
const auth = require('./auth');
const user = require('./user');
const currentWeather = require('./weather');
const validations = require('./validations');

module.exports = {
    jwt,
    auth,
    user,
    currentWeather,
    validations
};