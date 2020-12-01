const User = require('../models/User');

const bcrypt = require('bcrypt');

const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}

const checkPassword = async (username, password) => {
    const user = await User.findOne({ username });

    const status = await bcrypt.compare(password, user.password);

    return status;
}

module.exports = {
    hashPassword,
    checkPassword
};