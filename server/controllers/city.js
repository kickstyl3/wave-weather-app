const request = require('request');
const apiKey = process.env.weatherApiKey;

const key = `&appid=${apiKey}`;

const getCurrentWeatherByCity = `http://api.openweathermap.org/data/2.5/weather?q=`;
const getCurrentWeatherByLocation = `http://api.openweathermap.org/data/2.5/weather?q=`;

const City = require('../models/City');
const User = require('../models/User');

module.exports = {
    get: {
        currentWeather: async (req, res, next) => {
            try {
                const currentCity = req.body.currentCity;
                // const currentLocation = req.body.location;

                if (currentCity !== undefined) {
                    request(getCurrentWeatherByCity + currentCity + key, function (error, response, body) {
                        res.status(200).send(JSON.parse(body));
                    })
                }
                //  else if (currentLocation !== undefined) {
                //     request(getCurrentWeatherByLocation + location + key, function (error, response, body) {
                //         res.status(200).send(JSON.parse(body));
                //     })
                // }
            } catch (e) {
                console.error(e);
                next();
            }
        },
        myCities: async (req, res, next) => {
            try {
                const _id = req.headers.user;

                const myCities = await User.findById(_id).populate('followedCities').lean();

                res.send(myCities);
            } catch (e) {
                console.error(e);
                next();
            }
        }
    },

    post: async (req, res, next) => {
        const {
            name,
            temperature,
            description,
            details
        } = req.body;

        const _id = req.headers.user;

        const city = {
            name,
            temperature,
            description,
            details
        };

        try {
            const newCity = await City.create(city);

            const updateUser = await User.updateOne({ _id }, { $push: { followedCities: newCity } });

            res.send(newCity);
        } catch (e) {
            console.error(e);
            next();
        }
    },
};