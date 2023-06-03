//회원가입, 로그인, 로그아웃
const crypto = require('crypto');
const mariaDB = require('../database/config');

const hash = (password) => {
    //createHash: 사용할 알고리즘(sha256, sha516)
    //update : 해싱할 데이터
    //digest : 인코딩 타입
    return crypto.createHash("sha256").update(password).digest('base64').toString();
}
//회원가입 컨트롤러
module.exports.join = async (req, res, next) => {
    try {
        let conn = await mariaDB.getConnection();
        const email = req.body.email;
        const password = req.body.password;
        const nickname = req.body.nickname;

        let sql = `INSERT INTO users(email, nickname, password) VALUES(
            '${email}', '${nickname}', '${hash(password)}'
           );`;
        await conn.query(`SELECT * FROM users WHERE email = '${email}'`)
            .then(row => {
                if(row == 0){
                    conn.query(sql)
                        .then(row => {
                            res.end('회원가입 성공');
                    })
                } else {
                    res.json({fail: '계정이 이미 존재함'});
                }
            }).catch(err => {
                console.log(err);
            })
    } catch (error) {
        throw error;
    }
}

//auth 컨트롤러에서 구현한 함수를 객체로 맵핑함
module.exports.login = async (req, res, next) => {
    try {
        //이제 이 부분을 React Native의 body를 가져오면 됨
        const inputEmail = req.body.email;
        const inputPW = req.body.password;
        let conn = await mariaDB.getConnection();
        let sql = `SELECT * FROM users WHERE email = '${inputEmail}' AND password = '${hash(inputPW)}'`;
        await conn.query(sql)
            .then(row => {
                if(row.length == 0) {
                    return res.json({fail: '로그인 정보 없음', type: typeof row[0]})
                } else {
                    return res.json(row[0]);
                }
            }).catch((err) => {
                return res.json({fail: err});
            })
    } catch(err) {
        throw err;
        console.log(`로그인 컨트롤러 에러 : ${err}`);
    }
};