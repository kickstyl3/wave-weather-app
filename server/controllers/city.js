const request = require('request');

const City = require('../models/City');
const User = require('../models/User');
const weather = require('../utils/weather');

//GeoCoding API
const geocodingApiKey = process.env.geocodingApiKey;
const geocodingApiUrl = `https://api.geoapify.com/v1/geocode/search?text=`;
const geocodingApiKeyUrl = `&apiKey=${geocodingApiKey}`;

module.exports = {
    get: {
        currentWeather: async (req, res, next) => {
            try {
                const currentCity = req.headers['current-city'];

                if (currentCity !== undefined) {
                    request(weather.getWeatherByCity(currentCity), function (error, response, body) {
                        res.status(200).send(JSON.parse(body));
                    })
                }
            } catch (e) {
                console.error(e);
                next();
            }
        },
        hourlyWeather: async (req, res, next) => {
            try {
                const currentCity = req.headers['current-city'];

                if (currentCity !== undefined) {
                    request(weather.getHourlyWeather(currentCity), function (error, response, body) {
                        res.status(200).send(JSON.parse(body));
                    })
                }
            } catch (e) {
                console.error(e);
                next();
            }
        },
        dailyWeather: async (req, res, next) => {
            try {
                const currentCity = req.headers['current-city'];

                console.log(req.params);
                let lon = '';
                let lat = '';

                if (currentCity !== undefined) {
                    request(geocodingApiUrl + currentCity + geocodingApiKeyUrl, function (error, response, body) {
                        lon = JSON.parse(body).features[0].properties.lon;
                        lat = JSON.parse(body).features[0].properties.lat;
                    })

                    setTimeout(() => {
                        request(weather.getDailyWeather(lon, lat), function (error, response, body) {
                            res.status(200).send(JSON.parse(body));
                        })
                    }, 1000)
                }
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