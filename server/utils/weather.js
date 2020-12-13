const weatherApiKey = process.env.weatherApiKey;
const weatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;
const hourlyWeatherUrl = `http://api.openweathermap.org/data/2.5/forecast?q=`;
const currentWeatherApiKey = `&appid=${weatherApiKey}`;
const units = '&units=metric';
const hours = '&cnt=8';

function getWeatherByCity(city) {
    const cityUrl = weatherUrl + city + currentWeatherApiKey + units;
    
    return cityUrl;
}

function getHourlyWeather(city) {
    const cityUrl = hourlyWeatherUrl + city + currentWeatherApiKey + units + hours;

    return cityUrl;
}

// function getCurrentWeatherByLocation(currentLocation) {

// }

module.exports = {
    getWeatherByCity,
    getHourlyWeather
    // getCurrentWeatherByLocation
};