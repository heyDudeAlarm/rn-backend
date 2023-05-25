//회원가입, 로그인, 로그아웃
const crypto = require('crypto');
// const { sequelize } = require('sequelize');
// const User = require('../models/user');
const mariaDB = require('../database/config');

const hash = (password) => {
    //createHash: 사용할 알고리즘(sha256, sha516)
    //update : 해싱할 데이터
    //digest : 인코딩 타입
    return crypto.createHash("sha256").update(password).digest('base64').toString();
}
//회원가입 컨트롤러
// module.exports.join = async (req, res, next) => {
//     try {
//         let [inputEmail, inputNickname, inputPW, pwChk] = req.body;
//         if(inputPW == pwChk){
//             await User.findAll({ where: {inputEmail}})
//             .then(row => { //findAll에서 중복된 email이 있다면
//                 const result = {message: 'user exist', row: row};
//                 return res.json(result); 
//             }).catch(() => { //DB에서 email이 중복되지 않는다면 회원가입
//                 User.create({
//                     email: inputEmail,
//                     nickname: inputNickname,
//                     password: hash(inputPW),
//                 }).then(row => {
//                     const result = {success: true, message: "new user insert!!", row: row};
//                     return res.json(result);
//                 }).catch(err => {
//                     return res.json(err);
//                 })
//             })
//         }
        
//     } catch(err) {
//         console.error('MariaDB 연결 실패');
//         const result = { success: false, message: err };
//         console.log(err)
//         return res.json(result);
//     }
// }
//auth 컨트롤러에서 구현한 함수를 객체로 맵핑함
module.exports.login = async (req, res, next) => {
    try {
        //이제 이 부분을 React Native의 body를 가져오면 됨
        const [inputEmail, inputPW] = req.body;

        const query = `SELECT * FROM users WHERE email = ${inputEmail}`;
        let conn = await mariaDB.getConnection();
        await conn.query(query)
            .then(row => {
                let hashPW = hash(inputPW); //비번 asdf
                if(row[0].password == hashPW){
                    return res.json(row[0]);
                }
            }).catch(() => {
                return res.json({fail: 'i dont...know ㅠㅠ'});
            })
    } catch(err) {
        console.log(`로그인 컨트롤러 에러 : ${err}`);
    }
};