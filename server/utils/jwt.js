const jwt = require('jsonwebtoken');

function createToken(data) {
    return jwt.sign(data, process.env.secretKey, { expiresIn: '1h' });
}

async function verifyToken(token) {
    try {
        const verifiedToken = await jwt.verify(token, process.env.secretKey);

        return verifiedToken;
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    createToken,
    verifyToken
};