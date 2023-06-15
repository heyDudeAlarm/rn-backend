const crypto = require('crypto');
const conn = require('../database/config');
const Auth = {};

Auth.hash = (password) => {
    //createHash: 사용할 알고리즘(sha256, sha516)
    //update : 해싱할 데이터
    //digest : 인코딩 타입
    return crypto.createHash("sha256").update(password).digest('base64').toString();
}

Auth.searchUser = (email, pw) => {
    return new Promise((resolve, reject) => {
        let sql = `SELECT * FROM users WHERE email ='${email}' AND password ='${Auth.hash(pw)}'`;
        conn.query(sql, (err, row) => {
            if(err){
                reject(err);
            } else {
                resolve(row);
            }
        })
    })
}

module.exports = Auth;