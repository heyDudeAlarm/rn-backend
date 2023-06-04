const mariaDB = require('../database/config');
const Alarm = require('../models/alarm');

module.exports.showAlarm = async (req, res) => {
    try {
        const alarmData = await Alarm.findById(1); //1: user_id
        res.json(alarmData);
    } catch (err) {
        res.json(err);
    }
}