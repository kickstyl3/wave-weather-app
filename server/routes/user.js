const router = require('express').Router();
const user = require('../controllers/user');

router.post('/signup', user.post.signup);

router.post('/login', user.post.login);

router.get('/verify', user.post.verifyLogin);

router.get('/account/:id', user.get);

router.post('/logout', user.post.logout);

module.exports = router;