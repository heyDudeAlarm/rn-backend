const express = require('express');
const router = express.Router();
const alarm = require('../controllers/alarm');

router.get("/alarms", alarm); //8082/alarms/alarms..?

module.exports = router;