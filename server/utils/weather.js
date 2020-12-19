const weatherApiKey = process.env.weatherApiKey;

const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
const weatherByLocationUrl = `api.openweathermap.org/data/2.5/weather?`;
const dailyWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?`;
const hourlyWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=`;

const currentWeatherApiUrl = `&appid=${weatherApiKey}`;

const units = '&units=metric';
const hours = '&cnt=8';

const dailyWeatherApiOptions = `&exclude=current,minutely,hourly,alerts`;

function getWeatherByCity(city) {
    const cityUrl = weatherUrl + city + currentWeatherApiUrl + units;

    return cityUrl;
}

function getWeatherByLocation(lat, lon) {
    const locationUrl = weatherByLocationUrl + `lat=${lat}&lon=${lon}` + currentWeatherApiUrl + units;
    console.log(locationUrl);

    return locationUrl;
}

function getDailyWeather(lon, lat) {
    const cityUrl = dailyWeatherUrl + `lat=${lat}&lon=${lon}` + currentWeatherApiUrl + dailyWeatherApiOptions + units;

    return cityUrl;
}

function getHourlyWeather(city) {
    const cityUrl = hourlyWeatherUrl + city + currentWeatherApiUrl + units + hours;

    return cityUrl;
}

module.exports = {
    getWeatherByCity,
    getWeatherByLocation,
    getDailyWeather,
    getHourlyWeather
};