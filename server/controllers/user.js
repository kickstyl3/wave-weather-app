const User = require('../models/User');

const utils = require('../utils');
const authCookieName = process.env.authCookieName;

module.exports = {
    get: async (req, res, next) => {
        try {
            const { id } = req.params;

            const user = await User.findById(id).populate('followedCities').lean();

            res.send(user);
        } catch (e) {
            console.error(e);
            next();
        }
    },

    post: {
        signup: async (req, res, next) => {
            const { name, email, password } = req.body;
            console.log(req.body);
            console.log(name, email, password);
            const hashedPassword = await utils.auth.hashPassword(password);

            try {
                const newUser = await User.create({
                    name,
                    email,
                    password: hashedPassword
                });

                const user = await User.findOne({ email }).lean();
                const token = utils.jwt.createToken({ id: user._id });

                res.cookie(authCookieName, token).send(user);
            } catch (e) {
                console.error(e);
                next();
            }
        },

        login: async (req, res, next) => {
            const { email, password } = req.body;
            console.log(req.body);

            try {
                const status = await utils.auth.checkPassword(email, password);

                if (!status) {
                    res.status(401).send('Invalid username or password!');
                }

                const user = await User.findOne({ email }).lean();
                const token = utils.jwt.createToken({ id: user._id });

                res.cookie(authCookieName, token).send(user);
            } catch (e) {
                console.error(e);
                next();
            }
        },

        verifyLogin: (req, res, next) => {
            console.log(req.headers);
            const token = req.cookie.authCookieName || '';

            Promise.all([
                utils.jwt.verifyToken(token)
            ])
                .then(([data]) => {

                    User.findById(data.id)
                        .then((user) => {
                            return res.send({
                                status: true,
                                user
                            })
                        });
                })
                .catch(err => {
                    if (['token expired', 'jwt must be provided'].includes(err.message)) {
                        res.status(401).send('UNAUTHORIZED!');
                        return;
                    }

                    res.send({
                        status: false
                    })

                    next();
                })
        },

        logout: async (req, res, next) => {
            try {
                res.clearCookie(authCookieName).send('Logout Successful!');
            } catch (e) {
                console.error(e);
                next();
            }
        }
    }
};