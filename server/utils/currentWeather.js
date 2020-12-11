const weatherApiKey = process.env.weatherApiKey;

const apiKey = `&appid=${weatherApiKey}`;

const getCurrentWeatherUrl = `http://api.openweathermap.org/data/2.5/weather?q=`;

function getCurrentWeatherByCity(city) {
    const currentCityUrl = getCurrentWeatherUrl + city + apiKey;
    
    return currentCityUrl;
}

// function getCurrentWeatherByLocation(currentLocation) {

// }

module.exports = {
    getCurrentWeatherByCity
    // getCurrentWeatherByLocation
};