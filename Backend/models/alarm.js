const connection = require('../database/config');
const Alarm = {}; //모델 생성

Alarm.findById = (userId) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM alarms WHERE user_id = ${userId}`)
            .then(row => {
                resolve(row[0])
            }).catch(err => {
                reject(err)
            })
    });
};

module.exports = Alarm;