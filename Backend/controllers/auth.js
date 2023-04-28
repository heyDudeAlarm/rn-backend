//회원가입, 로그인, 로그아웃
const pool = require('../database/config');
const bcrypt = require('bcrypt');
const User = require('../models/user');

//회원가입 컨트롤러
module.exports.join = async (req, res, next) => {
    // const [ email, nickname, password ] = req.body;
    try {
        const newUser = await User.findOne({ where: {email}});
        if(newUser){ //중복된 이메일이 있다면?
            return res.redirect('/join?error=exist'); //쿼리스트링으로 에러 표시
        }
        const hash = await bcrypt.hash(password, 12);
        User.create({
            email,
            nickname,
            password: hash,
        });
        
    } catch(err) {
        console.error('MariaDB 연결 실패');
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
        const pw = await User.findAll({where: {password: inputPW }});

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