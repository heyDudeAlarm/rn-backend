const connection = require('../database/config');
const Audio = {};

//녹음파일 url, 메세지 저장하기 
Audio.insertData = (data) => {
    return new Promise((resolve, reject) => {
        let sql = 'INSERT INTO audio (send_user, audio_url, audio_msg, audio_date, received_user) VALUES (?, ?, ?, ?, ?)';
        let values = [data.send_user, data.audio_url, data.audio_msg, data.audio_date, data.received_user];
        
        connection.query(sql, values, (error, results) => {
            if (error) {
                console.log('Insert failed', error);
                reject(error);
            } else {
                console.log(results);
                resolve(results);
            }
        });
    });
};

module.exports = Audio;