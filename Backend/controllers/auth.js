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
        // const [inputEmail, inputPW] = req.body;
        //이름에 "%Milo%" 들어간 행 출력
        //where: { name: {[sequelize.like]: "%Milo%"} }
        // const email = await User.findAll({ where: { email: 'asdf@gmail.com' } });
        // const pw = await User.findAll({where: {password: hash('asdf'), email: 'asdf@gmail.com' }}); //task : inputPW를 hash
        let conn;
        const query = "SELECT * FROM users WHERE email = 'asdf@gmail.com'";
        conn = await mariaDB.getConnection();
        const row = await conn.query(query);
        return res.json(row);
        // if(email && pw){ //login Success
        //     const userData = await User.findAll({where: {email: email}});
        //     return JSON.stringify(userData);
        // } else {
        //     const err = { success: false, message: "Login ERROR"};
        //     return res.json(err);
        // }

    } catch(err) {
        console.log('로그인 컨트롤러 실패 : ',err);
    }
};