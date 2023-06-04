const express = require('express');
const router = express.Router();
const alarm = require('../controllers/alarm');
//localhost:8082/alarm/{..}
router.get("/", alarm.showAlarm);

module.exports = router;