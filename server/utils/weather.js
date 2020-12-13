const weatherApiKey = process.env.weatherApiKey;

const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
const dailyWeatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=34.773856&lon=32.427452`;
const hourlyWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=`;

const currentWeatherApiUrl = `&appid=${weatherApiKey}`;

const units = '&units=metric';
const hours = '&cnt=8';

const dailyWeatherApiOptions = `&exclude=current,minutely,hourly,alerts`;

function getWeatherByCity(city) {
    const cityUrl = weatherUrl + city + currentWeatherApiUrl + units;

    return cityUrl;
}

function getDailyWeather(city) {
    const cityUrl = dailyWeatherUrl + city + dailyWeatherApiUrl;

    return cityUrl
}

function getHourlyWeather(city) {
    const cityUrl = hourlyWeatherUrl + city + currentWeatherApiKey + units + hours;

    return cityUrl;
}

// function getCurrentWeatherByLocation(currentLocation) {

// }

module.exports = {
    getWeatherByCity,
    getDailyWeather,
    getHourlyWeather
    // getCurrentWeatherByLocation
};