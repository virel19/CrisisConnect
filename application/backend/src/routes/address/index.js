const express = require('express');

const router = express.Router();

router.post('/', require('./addAddress'));

module.exports = router;
