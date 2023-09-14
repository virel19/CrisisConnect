const express = require('express');
const { authMiddleware } = require('../../authentication');

const router = express.Router();

router.get('/all', require('./getEvents'));
router.get('/:id', require('./getEventById'));
router.post('/weather', authMiddleware, require('./weather/addWeatherEvent'));
router.post('/health', authMiddleware, require('./covid/addCovidEvent'));
router.post('/security', authMiddleware, require('./security/addSecurityEvent'));
router.post('/wildfire', authMiddleware, require('./wildfire/addWildfireEvent'));

module.exports = router;
