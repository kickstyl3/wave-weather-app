const weatherApiKey = process.env.weatherApiKey;

const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
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

function getDailyWeather(lon, lat) {
    const cityUrl = dailyWeatherUrl + `lat=${lat}&lon=${lon}` + currentWeatherApiUrl + dailyWeatherApiOptions + units;

    return cityUrl;
}

function getHourlyWeather(city) {
    const cityUrl = hourlyWeatherUrl + city + currentWeatherApiUrl + units + hours;

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