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
        //요청 바디 : 이메일, 패스워드 
        //
        const inputEmail = req.body.email;
        const inputPW = req.body.password;
        const token = 'qwergjslfdjksdgzxadsgag'; //클라이언트에서 이제 받아오자!
        // const token = req.header('device-token');
        const user = await Auth.searchUser(inputEmail, inputPW);

        if(user == 0){ //로그인 실패
            res.end("fail")
        } else { //로그인 성공
            //1. 세션에 유저 정보 저장
            req.session.user = user[0];
            req.session.save();
            res.json(req.session.user);

            //2. 디바이스 토큰 유저 DB에 저장
            const isSavedToken = await Auth.setDeviceToken(token, req.session.user.user_id);
            console.log(isSavedToken);
        }
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