const router = require('express').Router();
const city = require('../controllers/city');

router.get('/current-weather', city.get.currentWeather);
router.get('/hourly-weather', city.get.hourlyWeather);
router.get('/my-cities', city.get.myCities);

router.post('/follow-city', city.post);

module.exports = router;