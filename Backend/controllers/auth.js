//회원가입, 로그인, 로그아웃
const pool = require('../database/config');
//회원가입 컨트롤러
exports.join = async (req, res, next) => {
    const [ email, nickname, password ] = req.body;
    try {
        pool.getConnection()
            .then(conn => {
                
            })
    } catch(err) {
        console.error('MariaDB 연결 실패');
    }
}