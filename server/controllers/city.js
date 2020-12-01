const City = require('../models/City');
const User = require('../models/User');

module.exports = {
    get: {
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