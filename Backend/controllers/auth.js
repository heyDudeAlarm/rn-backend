//회원가입, 로그인, 로그아웃
const pool = require('../database/config');
const bcrypt = require('bcrypt');
const { User } = require('../models');

//회원가입 컨트롤러
exports.join = async (req, res, next) => {
    const [ email, nickname, password ] = req.body;
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
exports.login = async (req, res, next) => {

};