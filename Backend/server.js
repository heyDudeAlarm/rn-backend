const express = require('express');
const morgan  = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');

dotenv.config();

const { sequelize } = require('./database/database');
const authRouter = require('./routes/auth');

const app = express();

app.set('port', process.env.port);

// sequelize.sync({ force: false })
//     .then(() => {
//         console.log('데이터베이스 연결 성공');
//     })
//     .catch((err) => {
//         console.error(err);
//     });

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

app.use('/auth', authRouter);//로그인, 회원가입, 로그아웃

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})