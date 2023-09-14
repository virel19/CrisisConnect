const express = require('express');

const router = express.Router();

router.get('/', require('./getCounties'));

module.exports = router;
