const jwt = require('jsonwebtoken');

function createToken(data) {
    return jwt.sign(data, process.env.secretKey, { expiresIn: '1h' });
}

async function verifyToken(token) {
    try {
        const verifiedToken = await jwt.verify(token, process.env.secretKey);

        console.log('You are logged in.')

        return verifiedToken;
    } catch (e) {
        console.log('You are currently viewing this website as a guest.')
    }
}

module.exports = {
    createToken,
    verifyToken
};