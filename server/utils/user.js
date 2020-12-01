const bcrypt = require('bcrypt');
const User = require('../models/User');

const saveUser = async (req, res, next) => {
    const {
        username,
        password
    } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    try {
        const user = new User({
            username,
            password: hashedPassword
        });

        const userObject = await user.save();

        const token = generateToken({
            userID: userObject._id,
            username: userObject.username
        });

        res.cookie('aid', token);

        res.redirect('/');

        next();
    } catch (e) {
        console.error(e);
    }
}

const verifyUser = async (req, res, next) => {
    const {
        username,
        password
    } = req.body;

    try {
        const user = await User.findOne({ username });

        const status = await bcrypt.compare(password, user.password);

        if (status) {
            const token = generateToken({
                userID: user._id,
                username: user.username
            });

            res.cookie('aid', token);
        }

        res.redirect('/');

        next();
    } catch (e) {
        console.error(e);
    }
}

const getUserStatus = async (req, res, next) => {
    const token = req.cookies['aid'];

    if (!token) {
        req.isLoggedIn = false;
    }

    try {
        const userId = await jwt.verify(token, process.env.privateKey);

        const currUser = await User.findById(userId.userID);

        req.username = currUser.username;

        req.isLoggedIn = true;
    } catch (e) {
        req.isLoggedIn = false;
    }

    next();
}

module.exports = {
    saveUser,
    verifyUser,
    getUserStatus
};