const express = require('express');
const morgan  = require('morgan');
const path = require('path');
const session = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
dotenv.config();

const authRouter = require('./routes/auth');
const alarmRouter = require('./routes/alarm');

app.set('port', process.env.port);

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRouter);//로그인, 회원가입, 로그아웃
app.use('/alarm', alarmRouter);

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중');
})