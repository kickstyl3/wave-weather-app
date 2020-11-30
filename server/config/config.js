const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 9999,
        databaseUrl: process.env.databaseUrl,
        authCookieName: process.env.authCookieName,
        weatherApiKey: process.env.weatherApiKey
    },
    production: {}
};

module.exports = config[env];