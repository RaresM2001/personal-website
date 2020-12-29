const express = require('express');
const router = express.Router();
const handler = require('../handlers/mailgun');

router.post('/', handler.sendMail);

module.exports = router;