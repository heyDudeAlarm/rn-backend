//회원가입, 로그인, 로그아웃
const crypto = require('crypto');
const User = require('../models/user');

const hash = (password) => {
    //createHash: 사용할 알고리즘(sha256, sha516)
    //update : 해싱할 데이터
    //digest : 인코딩 타입
    return crypto.createHash("sha256").update(password).digest('base64').toString();
}
//회원가입 컨트롤러
module.exports.join = async (req, res, next) => {
    try {
        let inputEmail = "asdf@gmail.com";
        let inputPW = "1234";
        let inputName = "asdf";
        await User.findAll({ where: {inputEmail}})
            .then(row => {
                const result = {message: 'user exist', row: row};
                return res.json(result); 
            }).catch(() => {
                User.create({
                    email: inputEmail,
                    nickname: inputName,
                    password: hash(inputPW),
                }).then(row => {
                    const result = {success: true, message: "new user insert!!", row: row};
                    return res.json(result);
                }).catch(err => {
                    return res.json(err);
                })
            })
    } catch(err) {
        console.error('MariaDB 연결 실패');
        const result = { success: false, message: err };
        return res.json(result);
    }
}
module.exports.login = async (req, res, next) => {
    try {
        //이제 이 부분을 React Native의 body를 가져오면 됨
        let inputEmail = "asdf@gmail.com";
        let inputPW = "1234";

        //이름에 "%Milo%" 들어간 행 출력
        //where: { name: {[sequelize.like]: "%Milo%"} }
        const email = await User.findAll({ where: { email: inputEmail } });
        const pw = await User.findAll({where: {password: hash(inputPW) }}); //task : inputPW를 hash

        if(email && pw){ //login Success
            const message = { success: true, message: "Login successful" };
            return res.json(message);
        } else {
            const err = { success: false, message: "Login ERROR"};
            return res.json(err);
        }
    } catch(err) {
        console.log(err);
    }
};