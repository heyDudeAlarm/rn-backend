const Alarm = require('../models/Alarm');

module.exports.showAlarm = async (req, res) => {
    try {
        const alarmData = await Alarm.findById(1); //1: user_id
        res.json(alarmData);
    } catch (err) {
        res.json(err);
    }
}