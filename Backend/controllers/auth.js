//회원가입, 로그인, 로그아웃
const mariaDB = require('../database/config');
const Auth = require('../models/Auth');

//회원가입 컨트롤러
module.exports.join = async (req, res, next) => {
    try {
        let conn = await mariaDB.getConnection();
        const email = req.body.email;
        const password = req.body.password;
        const nickname = req.body.nickname;

        let sql = `INSERT INTO users(email, nickname, password) VALUES(
            '${email}', '${nickname}', '${Auth.hash(password)}'
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

        const user = await Auth.searchUser(inputEmail,inputPW);
        res.json(user[0])
    } catch(err) {
        throw err;
        console.log(`로그인 컨트롤러 에러 : ${err}`);
    }
};