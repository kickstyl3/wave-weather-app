const router = require('express').Router();
const city = require('../controllers/city');

router.get('/current-weather',  city.get.currentWeather);

router.get('/hourly-forecast', city.get.hourlyForecast);

router.get('/daily-forecast', city.get.dailyForecast);

router.get('/details/:id',  city.get.details);

router.get('/my-cities', city.get.myCities);

router.post('/follow-city', city.post);

module.exports = router;