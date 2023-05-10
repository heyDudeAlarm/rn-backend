//회원가입, 로그인, 로그아웃
const crypto = require('crypto');
const { and } = require('sequelize');
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
        let [inputEmail, inputNickname, inputPW, pwChk] = req.body;
        if(inputPW == pwChk){
            await User.findAll({ where: {inputEmail}})
            .then(row => { //findAll에서 중복된 email이 있다면
                const result = {message: 'user exist', row: row};
                return res.json(result); 
            }).catch(() => { //DB에서 email이 중복되지 않는다면 회원가입
                User.create({
                    email: inputEmail,
                    nickname: inputNickname,
                    password: hash(inputPW),
                }).then(row => {
                    const result = {success: true, message: "new user insert!!", row: row};
                    return res.json(result);
                }).catch(err => {
                    return res.json(err);
                })
            })
        }
        
    } catch(err) {
        console.error('MariaDB 연결 실패');
        const result = { success: false, message: err };
        return res.json(result);
    }
}
module.exports.login = async (req, res, next) => {
    try {
        //이제 이 부분을 React Native의 body를 가져오면 됨
        const [inputEmail, inputPW] = req.body;

        //이름에 "%Milo%" 들어간 행 출력
        //where: { name: {[sequelize.like]: "%Milo%"} }
        const email = await User.findAll({ where: { email: inputEmail } });
        const pw = await User.findAll({where: {password: hash(inputPW), email: inputEmail }}); //task : inputPW를 hash
        
        if(email && pw){ //login Success
            const message = { success: true, message: "Login successful", data: await User.findAll({where: {email: inputEmail}}) };
            return res.json(message);
        } else {
            const err = { success: false, message: "Login ERROR"};
            return res.json(err);
        }

    } catch(err) {
        console.log(err);
    }
};