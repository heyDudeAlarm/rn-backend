//컨트롤러 연결
const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
const { join, login } = require('../controllers/auth');
//db 데이터 출력해보기
const db = require('../models/index');

router.post('/join', join);

//DB 데이터 다루기
router.get('/users', (req, res) => {
    const users = db.User.findAll({});
    console.log(users);
});

module.exports = router;