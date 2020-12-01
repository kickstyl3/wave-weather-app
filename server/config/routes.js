const user = require('../routes/user');
const city = require('../routes/city');

module.exports = (app) => {
    app.use('/api/user', user);

    app.use('/api/city', city);

    app.use('*', (req, res, next) => res.send('<h1> Something went wrong. Try again.</h1>'));
};