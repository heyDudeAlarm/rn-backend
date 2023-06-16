//회원가입, 로그인, 로그아웃
const mariaDB = require('../database/config');
const Auth = require('../models/Auth');

//회원가입 컨트롤러
module.exports.join = async (req, res, next) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const nickname = req.body.nickname;

        const userData = {
            email: email,
            password: password,
            nickname: nickname,
        }
        console.log(userData);
        const result = await Auth.addUser(userData);

        res.json(result);
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

        console.log("???");
        const user = await Auth.searchUser(inputEmail, inputPW);
        console.log(user);
        req.session.user = user[0];
        req.session.save();
        res.json(user);
    } catch(err) {
        console.log(err);
        throw err;
    }
};

module.exports.getToken = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const token = await Auth.getToken(userId);

        res.end(token);
    } catch (error) {
        
    }
}

//auth 컨트롤러에서 구현한 함수를 객체로 맵핑함
module.exports.me = async (req, res, next) => {
    const user = req.session.user;
    console.log(user);
    if(user) {
        res.json(user);
    } else {
        res.status(404).send();
    }
    
};